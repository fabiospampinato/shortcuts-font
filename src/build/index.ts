
/* IMPORT */

const fs = require ( 'fs' ),
      IconFontBuildr = require ( 'icon-font-buildr' ),
      path = require ( 'path' );

/* VARIABLES */

const RESOURCES_PATH = path.join ( process.cwd (), 'resources' ),
      GLYPHS_PATH = path.join ( RESOURCES_PATH, 'glyphs' ),
      FONTS_PATH = path.join ( RESOURCES_PATH, 'fonts' ),
      SOURCE_PATH = path.join ( GLYPHS_PATH, '[icon].svg' );

/* HELPERS */

const getGlyphs = () => {

  const files = fs.readdirSync ( GLYPHS_PATH ),
        glyphs = files.filter ( file => /\.svg$/.test ( file ) ).map ( file => file.replace ( /\.svg$/, '' ) );

  return glyphs;

};

const getIcons = () => {

  return getGlyphs ().map ( glyph => ({
    icon: glyph,
    codepoints: [String.fromCodePoint ( parseInt ( glyph, 16 ) )]
  }));

};

/* BUILD */

const build = () => {

  const builder = new IconFontBuildr ({
    sources: [SOURCE_PATH],
    icons: getIcons (),
    output: {
      codepoints: true,
      ligatures: false,
      fonts: FONTS_PATH,
      fontName: 'ShortcutsFont',
      formats: [
        'eot',
        'ttf',
        'woff',
        'woff2'
      ]
    }
  });

  return builder.build ();

};

/* RUNNING */

build ();
