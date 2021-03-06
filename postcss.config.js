module.exports = {
  plugins: [
    require('postcss-import'), // Plugin to transform @import rules by inlining content
    require('postcss-nested'), // Plugin to unwrap nested rules like how Sass does it
    require('postcss-size'), // Plugin for size shortcut to set width and height properties
    require('autoprefixer'), // Add vendor prefixes to CSS rules using values from caniuse.com
    require('postcss-custom-media'),
  ],
};
