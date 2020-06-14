
/* IMPORT */

import * as path from 'path';

/* CONSTS */

const RESOURCES = path.join ( process.cwd (), 'resources' ),
      GLYPHS_EXTRACTED = path.join ( RESOURCES, 'glyphs_extracted' ),
      GLYPHS_OVERRIDES = path.join ( RESOURCES, 'glyphs_overrides' ),
      FONTS = path.join ( RESOURCES, 'fonts' ),
      SOURCE_EXTRACTED = path.join ( GLYPHS_EXTRACTED, '[icon].svg' ),
      SOURCE_OVERRIDES = path.join ( GLYPHS_OVERRIDES, '[icon].svg' ),
      SOURCES = [SOURCE_OVERRIDES, SOURCE_EXTRACTED];

/* EXPORT */

export {RESOURCES, GLYPHS_EXTRACTED, GLYPHS_OVERRIDES, FONTS, SOURCE_EXTRACTED, SOURCE_OVERRIDES, SOURCES};
