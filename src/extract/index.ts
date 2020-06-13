
/* IMPORT */

import 'jsdom-global/register';
import * as _ from 'lodash';
import * as execa from 'execa';
import * as path from 'path';
import Consts from 'shortcuts/dist/consts';

/* VARIABLES */

const RESOURCES_PATH = path.join ( process.cwd (), 'resources' );

/* HELPERS */

const getSymbols = (): string[] => {

  return _.uniq ( Object.values ( Consts.id2symbol ).reduce ( ( acc, symbol ) => {

    return [...acc, ...Array.from ( symbol.toLowerCase () )];

  }, [] ) );

};

const getCodepoints = (): number[] => {

  return getSymbols ().map ( symbol => symbol.charCodeAt ( 0 ) );

};

const getUnicodes = (): string[] => {

  return getCodepoints ().map ( codepoint => `0000${codepoint.toString ( 16 )}`.slice ( -4 ) );

};

/* EXTRACT */

const extract = (): void => {

  const unicodes = getUnicodes ();

  for ( const unicode of unicodes ) {

    const commandOptions = {
      cwd: RESOURCES_PATH,
      shell: true
    };

    execa.command ( `fontforge -lang=ff -c 'Open($1); SelectMore("u${unicode}"); foreach Export("glyphs/${unicode}.svg"); endloop;' base.otf`, commandOptions );

  }

};

/* RUNING */

extract ();
