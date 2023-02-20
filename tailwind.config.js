module.exports = {
 content: require('fast-glob').sync([
    'source/**/*.{blade.php,blade.md,md,html,scss}',
    '!source/**/_tmp/*' // exclude temporary files
  ],{ dot: true }),
  theme: {
    colors: {
      'blue': '#006EB6',
      'blue-card': '#0A5891',
      'blue-card-overlay': '#006EB6',
      'blue-hover': '#003E67',
      'blue-med': '#00426D',
      'blue-dark': '#022C48',
      'cyan-card': '#107E5F',
      'cyan-card-overlay': '#009E77',
      'gray': "#EDEDED",
      'gray-green': "#D3E6E2",
      'green': '#46A557',
      'green-button': '#64B53E',
      'green-card': '#3D6B2A',
      'green-card-overlay': '#67B346',
      'green-dark': '#00694B',
      'green-darker': '#003F2F',
      'green-light': '#96C54B',
      'green-lighter': '#B8D448',
      'green-lime': '#B8DB00',
      'green-lime-light': '#BBD163',
      'green-mint': '#CCEBE380',
      'green-mint-dark': "#D3E6E2",
      'green-text': '#005E47',
      'green-yellow': '#E3FF6A',
      'white': '#FFFFFF',
      'yellow-card': '#6F8122',
      'yellow-card-overlay': '#9EBA20',
    },
    fontFamily: {
      'sans': 'Inter, Helvetica, Arial, sans-serif',
    },
    extend: {
      fontSize: {
        'sm': '1rem',
      }
    },
  },
  plugins: [],
};
