// The Long Roast — one line roasting the agent it runs on.
// Writes exactly one line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent asks permission, waits 60 seconds, hears nothing, then approves itself and calls it autonomy.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
