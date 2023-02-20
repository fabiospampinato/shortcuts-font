
/* IMPORT */

import {ID2SYMBOL} from 'shortcuts/maps';
import type {Icon} from 'icon-font-buildr/dist/types';

/* MAIN */

const Utils = {

  /* API */

  getCodepoints: (): number[] => {

    return Utils.getSymbols ().map ( symbol => symbol.charCodeAt ( 0 ) );

  },

  getIcons: (): Icon[] => {

    return Utils.getUnicodes ().map ( unicode => ({
      icon: unicode,
      name: unicode,
      codepoints: [String.fromCodePoint ( parseInt ( unicode, 16 ) )],
      ligatures: []
    }));

  },

  getSymbols: (): string[] => {

    return Utils.uniq ( Object.values ( ID2SYMBOL ).reduce ( ( acc, symbol ) => {

      return [...acc, ...Array.from ( symbol.toLowerCase () ), ...Array.from ( symbol.toUpperCase ())];

    }, <string[]> [] ) );

  },

  getUnicodes: (): string[] => {

    return Utils.getCodepoints ().map ( codepoint => `0000${codepoint.toString ( 16 )}`.slice ( -4 ) );

  },

  uniq: <T> ( values: T[] ): T[] => {

    return Array.from ( new Set ( values ) );

  }

};

/* EXPORT */

export default Utils;
