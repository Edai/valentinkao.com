import React from 'react';

export function TextComponent({ children, className = '' }) {
  return <p className={`${className}`}>{children}</p>;
}

export default TextComponent;
