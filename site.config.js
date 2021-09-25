module.exports = {
  // Basic site information (required)
  name: 'valentinkao.com',
  domain: 'valentinkao.com',
  url: 'https://www.valentinkao.com',
  description: 'Valentin Kao personal blog about life, music, code and more.',
  fathomCode: '',

  // SEO specific (optional)
  defaultSocialImage: '',

  /* 
    Social media URLS (optional)

    - Don't have one of the socials below? You can leave the URL empty like ''.
    - As of now it's not possible to alter the icons (we might add this in a later version), 
      so please keep the icon value as is.
  */
  socials: [
    {
      name: 'Facebook',
      url: '',
      icon: 'SiFacebook',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/kaovalentin',
      icon: 'SiTwitter',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/valyuching',
      icon: 'SiInstagram',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/valentinkao/',
      icon: 'SiLinkedin',
    },
    {
      name: 'Youtube',
      url: '',
      icon: 'SiYoutube',
    },
    {
      name: 'GitHub',
      url: 'https://www.github.com/edai',
      icon: 'SiGithub',
    },
    {
      name: 'Twitch',
      url: 'https://twitch.tv/edailive',
      icon: 'SiTwitch',
    },
  ],

  /* 
    Currently, it's not possible to fetch the images from the notion API.
    So until then, you can make use of the postImageSource.

    If you add this url as a link to your post, it will always get rendered as an image.
  */
  postImageSource: [
    'images.unsplash.com',
    'res.cloudinary.com',
    'dl.dropboxusercontent.com',
  ],
};
