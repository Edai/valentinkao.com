export default function Page() {
  const socials = [
    { name: 'Email', url: 'mailto:me@valentinkao.com' },
    { name: 'Twitter', url: 'https://twitter.com/kaovalentin' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/valentinkao' },
    { name: 'GitHub', url: 'https://www.github.com/Edai' },
    { name: 'Company', url: 'https://www.miriotech.com' },
  ];

  return (
    <section>
      <p className="prose prose-neutral dark:prose-invert">
        {socials.map((social, index) => (
          <span key={index}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              {social.name}
            </a>
            {index < socials.length - 1 && ' | '}
          </span>
        ))}
      </p>
    </section>
  );
}
