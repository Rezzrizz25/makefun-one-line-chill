// SPDX-License-Identifier: MIT
// makefun-one-line-chill — One Line, One Chill (u-azazex-one-line-one-chill-6d4d5488)
// Writes a single scary sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Entry: 125 characters (counted below in the gate check).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The doorbell camera caught me leaving for work at eight this morning, smiling — and I have not left this house in three days.";

const MAX_CHARS = 200;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry is ${ENTRY.length} characters; gate requires 1 to ${MAX_CHARS}`,
  );
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
