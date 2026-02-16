#!/usr/bin/env bash
set -euo pipefail

OBSIDIAN_DIR="/Users/valentin.kao/Library/Mobile Documents/iCloud~md~obsidian/Documents/knowledge/socials/linkedin_posts/posts"
CONTENT_DIR="$(cd "$(dirname "$0")" && pwd)/content"

SKIP_FILES=("template.md")

should_skip_file() {
  local filename="$1"
  for skip in "${SKIP_FILES[@]}"; do
    [[ "$filename" == "$skip" ]] && return 0
  done
  return 1
}

extract_frontmatter_value() {
  local content="$1"
  local key="$2"
  local value
  value=$(echo "$content" | sed -n "/^---$/,/^---$/p" | grep "^${key}:" | head -1 | sed "s/^${key}:[[:space:]]*//" | sed "s/^['\"]//;s/['\"]$//" || true)
  echo "$value"
}

extract_body() {
  local content="$1"
  local in_frontmatter=false
  local frontmatter_closed=false
  local result=""

  while IFS= read -r line; do
    if [[ "$frontmatter_closed" == true ]]; then
      result+="${line}"$'\n'
    elif [[ "$line" == "---" && "$in_frontmatter" == true ]]; then
      frontmatter_closed=true
    elif [[ "$line" == "---" && "$in_frontmatter" == false ]]; then
      in_frontmatter=true
    fi
  done <<< "$content"

  echo "$result"
}

strip_hashtag_lines() {
  local body="$1"
  echo "$body" | sed '/^[[:space:]]*#[A-Za-z][A-Za-z0-9_]*[[:space:]]*#[A-Za-z]/d'
}

strip_section_headers() {
  local body="$1"
  echo "$body" | sed '/^## Text Post$/d' | sed '/^## Carousel Outline.*$/d'
}

generate_summary() {
  local body="$1"
  local first_line
  first_line=$(echo "$body" | sed '/^[[:space:]]*$/d' | head -1)
  first_line=$(echo "$first_line" | sed 's/\*\*//g')
  if [ ${#first_line} -gt 160 ]; then
    first_line="${first_line:0:157}..."
  fi
  echo "$first_line"
}

trim_leading_blank_lines() {
  local body="$1"
  echo "$body" | sed '/./,$!d'
}

trim_trailing_blank_lines() {
  local body="$1"
  while [[ "$body" =~ $'\n'$ ]]; do
    body="${body%$'\n'}"
  done
  echo "$body"
}

escape_double_quotes() {
  local text="$1"
  echo "$text" | sed 's/"/\\"/g'
}

synced=0
skipped=0
total=0

for filepath in "$OBSIDIAN_DIR"/*.md; do
  filename=$(basename "$filepath")
  total=$((total + 1))

  if should_skip_file "$filename"; then
    echo "SKIP (template): $filename"
    skipped=$((skipped + 1))
    continue
  fi

  raw_content=$(cat "$filepath")

  status=$(extract_frontmatter_value "$raw_content" "status")
  if [[ "$status" != "Published" ]]; then
    echo "SKIP (not published): $filename"
    skipped=$((skipped + 1))
    continue
  fi

  title=$(extract_frontmatter_value "$raw_content" "title")
  published_date=$(extract_frontmatter_value "$raw_content" "published_date")

  if [[ -z "$published_date" || "$published_date" == "YYYY-MM-DD" ]]; then
    published_date=$(date -r "$filepath" "+%Y-%m-%d")
  fi

  body=$(extract_body "$raw_content")
  body=$(strip_hashtag_lines "$body")
  body=$(strip_section_headers "$body")
  body=$(trim_leading_blank_lines "$body")
  body=$(trim_trailing_blank_lines "$body")

  summary=$(generate_summary "$body")

  escaped_title=$(escape_double_quotes "$title")
  escaped_summary=$(escape_double_quotes "$summary")

  slug="${filename%.md}"
  output_file="${CONTENT_DIR}/${slug}.mdx"

  new_content="---
title: \"${escaped_title}\"
publishedAt: '${published_date}'
summary: \"${escaped_summary}\"
---

${body}
"

  if [[ -f "$output_file" ]]; then
    existing_hash=$(md5 -q "$output_file")
    new_hash=$(printf '%s\n' "$new_content" | md5)
    if [[ "$existing_hash" == "$new_hash" ]]; then
      echo "SKIP (unchanged): $filename"
      skipped=$((skipped + 1))
      continue
    fi
    echo "UPDATE: $filename -> ${slug}.mdx"
  else
    echo "CREATE: $filename -> ${slug}.mdx"
  fi

  printf '%s\n' "$new_content" > "$output_file"

  synced=$((synced + 1))
done

echo ""
echo "Done. Synced: ${synced}, Skipped: ${skipped}, Total: ${total}"
