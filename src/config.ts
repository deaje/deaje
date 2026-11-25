// Everything personal lives here, so copy changes never require touching templates.
export const SITE = {
  name: 'Dani Ahmad J.',
  handle: 'dani ahmad j.',
  title: 'Dani Ahmad J. · software engineer & notebook keeper',
  description:
    'Personal site and journal of Dani Ahmad J., a senior software engineer in Surabaya. Notes on code that holds up, trusted tools, and the ordinary days in between.',
  author: 'Dani Ahmad J.',
  location: 'Surabaya, Indonesia',
  locale: 'en',
  ogImage: '/og.png',
};

// Leave a value empty ('') to hide that link everywhere.
// Email is intentionally left out until Dani decides to publish one.
export const SOCIAL = {
  github: '', // e.g. 'https://github.com/your-username'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-profile'
  email: '',
};

export const NAV = [
  { href: '/', label: 'home' },
  { href: '/writing', label: 'writing' },
  { href: '/about', label: 'about' },
];

// AI-generated illustrations. Leave '' to use the code-drawn placeholder.
// See docs/illustration-style.md for the prompt that keeps them consistent.
export const ILLUSTRATIONS: Record<string, string> = {
  hero: '', // e.g. '/illustrations/hero.webp'
  about: '',
  writing: '',
  lost: '',
};
