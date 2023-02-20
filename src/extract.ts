
/* IMPORT */

import {spawnSync} from 'node:child_process';
import {RESOURCES} from './constants.js';
import Utils from './utils.js';

/* MAIN */

//TODO: Replace fontforge with some pure-JS dependency

const extract = (): void => {

  const unicodes = Utils.getUnicodes ();

  for ( const unicode of unicodes ) {

    spawnSync ( `fontforge -lang=ff -c 'Open($1); SelectMore("u${unicode}"); foreach Export("glyphs_extracted/${unicode}.svg"); endloop;' base.otf`, {
      cwd: RESOURCES,
      shell: true
    });

  }

};

/* RUNING */

extract ();
