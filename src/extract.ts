
/* IMPORT */

import * as _ from 'lodash';
import * as execa from 'execa';
import {RESOURCES} from './consts';
import Utils from './utils';

/* EXTRACT */

const extract = (): void => {

  const unicodes = Utils.getUnicodes ();

  for ( const unicode of unicodes ) {

    const commandOptions = {
      cwd: RESOURCES,
      shell: true
    };

    execa.command ( `fontforge -lang=ff -c 'Open($1); SelectMore("u${unicode}"); foreach Export("glyphs_extracted/${unicode}.svg"); endloop;' base.otf`, commandOptions );

  }

};

/* RUNING */

extract ();
