
/* IMPORT */

import IconFontBuildr from 'icon-font-buildr';
import {FONTS, SOURCES} from './constants.js';
import Utils from './utils.js';

/* MAIN */

const build = () => {

  const builder = new IconFontBuildr ({
    sources: SOURCES,
    icons: Utils.getIcons (),
    output: {
      codepoints: true,
      ligatures: false,
      fonts: FONTS,
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
