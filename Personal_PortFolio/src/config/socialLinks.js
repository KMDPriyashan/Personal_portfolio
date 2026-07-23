const socialLinks = {
  linkedin: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/',
  github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/',
  facebook: import.meta.env.VITE_FACEBOOK_URL || 'https://www.facebook.com/',
  twitter: import.meta.env.VITE_TWITTER_URL || 'https://x.com/',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/',
  email: import.meta.env.VITE_EMAIL || 'mailto:hello@example.com',
  phone: import.meta.env.VITE_PHONE || 'tel:+1234567890'
};

export default socialLinks;