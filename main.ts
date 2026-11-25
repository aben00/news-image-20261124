// news-image-20261124 entry (Node 22, standard library only).
//
// The program writes one image that sums up the world's news of
// Tuesday 24 November 2026 to /output/entry.png. The image is the
// entry.png beside this file: a newspaper front page with 33 verified
// stories from that day, typeset with PIL so every headline is spelled
// exactly and stays legible.
//
// Deterministic: the program only copies bytes, so every run writes
// the identical file. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// Validate the copy: same size and bytes as the bundled image, a PNG
// of 1024x1024, and under the 1 MiB gate. Anything off fails loudly
// instead of silently shipping a wrong file.
const expected = readFileSync(source);
const written = readFileSync(target);
if (written.length !== expected.length) {
  throw new Error(`size mismatch: wrote ${written.length}, expected ${expected.length}`);
}
if (!written.equals(expected)) {
  throw new Error('byte mismatch: copied entry.png differs from the bundled image');
}
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!written.subarray(0, 8).equals(pngMagic)) {
  throw new Error('not a PNG file');
}
const width = written.readUInt32BE(16);
const height = written.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`expected 1024x1024, got ${width}x${height}`);
}
if (written.length > 1024 * 1024) {
  throw new Error(`entry.png is ${written.length} bytes, over the 1 MiB limit`);
}
const sha256 = createHash('sha256').update(written).digest('hex');
console.log(`wrote ${target} (${written.length} bytes, 1024x1024 PNG, sha256 ${sha256})`);
