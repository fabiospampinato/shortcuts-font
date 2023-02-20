
/* IMPORT */

import path from 'node:path';
import process from 'node:process';

/* MAIN */

const RESOURCES = path.join ( process.cwd (), 'resources' );
const GLYPHS_EXTRACTED = path.join ( RESOURCES, 'glyphs_extracted' );
const GLYPHS_OVERRIDES = path.join ( RESOURCES, 'glyphs_overrides' );
const FONTS = path.join ( RESOURCES, 'fonts' );
const SOURCE_EXTRACTED = path.join ( GLYPHS_EXTRACTED, '[icon].svg' );
const SOURCE_OVERRIDES = path.join ( GLYPHS_OVERRIDES, '[icon].svg' );
const SOURCES = [SOURCE_OVERRIDES, SOURCE_EXTRACTED];

/* EXPORT */

export {RESOURCES, GLYPHS_EXTRACTED, GLYPHS_OVERRIDES, FONTS, SOURCE_EXTRACTED, SOURCE_OVERRIDES, SOURCES};
