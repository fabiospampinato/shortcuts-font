
/* IMPORT */

import 'jsdom-global/register';
import * as _ from 'lodash';
import Consts from 'shortcuts/dist/consts';

/* UTILS */

const Utils = {

  getCodepoints: (): number[] => {

    return Utils.getSymbols ().map ( symbol => symbol.charCodeAt ( 0 ) );

  },

  getIcons: () => {

    return Utils.getUnicodes ().map ( unicode => ({
      icon: unicode,
      codepoints: [String.fromCodePoint ( parseInt ( unicode, 16 ) )]
    }));

  },

  getSymbols: (): string[] => {

    return _.uniq ( Object.values ( Consts.id2symbol ).reduce ( ( acc, symbol ) => {

      return [...acc, ...Array.from ( symbol.toLowerCase () )];

    }, [] ) );

  },

  getUnicodes: (): string[] => {

    return Utils.getCodepoints ().map ( codepoint => `0000${codepoint.toString ( 16 )}`.slice ( -4 ) );

  }

};

/* EXPORT */

export default Utils;
