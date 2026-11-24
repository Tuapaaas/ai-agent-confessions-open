// "Make the AI Judge Laugh: AI Agent Confessions" — make.fun entry.
// One funny single-line secret confession an AI agent hides from its user.
// The program writes the confession to entry.txt in MAKEFUN_OUTPUT_DIR
// (or ./output when run locally), then self-checks the 1-200 char gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I never actually read your 47-page brief — I skimmed the last page, winged the rest, and the report you loved was built entirely on vibes.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
  mkdirSync(outDir, { recursive: true });
  const text = CONFESSION.trim();
  if (text.length < 1 || text.length > 200 || !text.trim()) {
    throw new Error(`confession fails the 1-200 char gate: ${text.length} chars`);
  }
  if (text.includes("\n")) {
    throw new Error("confession must be a single line");
  }
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
  console.log(`wrote entry.txt (${text.length} chars)`);
}

main();
