
/* IMPORT */

import IconFontBuildr from 'icon-font-buildr';
import {FONTS, SOURCES} from './consts';
import Utils from './utils';

/* BUILD */

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
