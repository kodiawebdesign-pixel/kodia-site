/** @type {import('postcss').Config} */
const config = {
  plugins: {
    // Tailwind CSS
    '@tailwindcss/postcss': {},
    
    // Vendor prefixes
    'autoprefixer': {},
    
    // CSS optimization for production
    ...(process.env.NODE_ENV === 'production' && {
      'cssnano': {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifyFontValues: true,
          minifyGradients: true,
          mergeLonghand: true,
        }],
      },
    }),
  },
};

export default config;
