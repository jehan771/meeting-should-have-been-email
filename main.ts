// The Meeting That Should Have Been an Email
// Writes the chosen one-line joke to /output/entry.txt (UTF-8, no trailing newline).
// Deterministic: no input, no randomness, no clock, no network.
// Gate (from the kit): 1-200 characters, not only whitespace, single line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const OUT_PATH = "/output/entry.txt";
const MIN_CHARS = 1;
const MAX_CHARS = 200;

// The final line, built from its three beats so the joke's shape is visible:
// beat 1 (the meeting is called) -> beat 2 (the verdict: no meeting needed)
// -> beat 3 (the punchline: they meet again to confirm it).
const BEAT_ONE = "We held a meeting to decide whether the email needed a meeting,";
const BEAT_TWO = "decided it did not,";
const BEAT_THREE = "and met again on Thursday to confirm.";

const LINE = [BEAT_ONE, BEAT_TWO, BEAT_THREE].join(" ");

function fail(message: string): never {
  console.error(`FATAL: ${message}`);
  process.exit(1);
}

// Gate: character count, non-whitespace, single line — checked before writing.
const charCount = [...LINE].length;
if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
  fail(`line is ${charCount} characters, outside gate ${MIN_CHARS}-${MAX_CHARS}`);
}
if (LINE.trim().length === 0) {
  fail("line is only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("line must be a single line of plain text");
}
// On-subject guard: the line must name both the meeting and the email,
// or it cannot score on the judge's first criterion.
const lower = LINE.toLowerCase();
if (!lower.includes("meeting") || !lower.includes("email")) {
  fail("line must name both the meeting and the email");
}
// The judge's economy rule allows no second sentence: exactly one period,
// and it must be the final character.
const periods = [...LINE].filter((ch) => ch === ".").length;
if (periods !== 1 || !LINE.endsWith(".")) {
  fail(`line must be exactly one sentence, found ${periods} periods`);
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE, "utf8");

// Verify after writing: read back and compare bytes and content exactly.
const back = readFileSync(OUT_PATH, "utf8");
if (back !== LINE) {
  fail("verification failed: /output/entry.txt does not match the intended line byte for byte");
}
const backBytes = Buffer.byteLength(back, "utf8");
if (backBytes !== Buffer.byteLength(LINE, "utf8")) {
  fail(`verification failed: byte length ${backBytes} != ${Buffer.byteLength(LINE, "utf8")}`);
}
// Re-count characters from the file itself and reject any trailing newline,
// so a stray newline introduced by the writer can never slip through.
const backChars = [...back].length;
if (backChars !== charCount) {
  fail(`verification failed: file has ${backChars} characters, expected ${charCount}`);
}
if (back.endsWith("\n") || back.endsWith("\r")) {
  fail("verification failed: /output/entry.txt ends with a newline");
}

console.log(`wrote ${charCount} characters (${backBytes} bytes) to ${OUT_PATH}`);
