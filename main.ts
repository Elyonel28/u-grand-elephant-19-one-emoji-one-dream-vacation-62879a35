// One Emoji, One Dream Vacation
// make.fun bounty: u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
//
// The whole entry is a single emoji written to /output/entry.txt.
// The pick: Mount Fuji at dawn — one unmistakable place, a postcard
// a stranger can see at a glance, and a trip people actually dream
// of booking. Not the stock island, not a generic beach: one
// particular mountain, one particular country, one particular dawn.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// U+1F5FB MOUNT FUJI — a single code point, a single emoji.
const DREAM_VACATION = "\u{1F5FB}";

// The gate allows 1–8 characters and the judge brief asks for exactly
// one emoji, so the program refuses to write anything that is not
// precisely one grapheme: no words, no second emoji, no trailing
// newline smuggled in.
if ([...DREAM_VACATION].length !== 1) {
  throw new Error("entry must be exactly one emoji");
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, DREAM_VACATION, "utf8");

console.log(`wrote ${[...DREAM_VACATION].length} character to ${outPath}`);
