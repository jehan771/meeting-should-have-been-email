# The Meeting That Should Have Been an Email

[![make.fun competition](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![make.fun rank](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/jehan771/meeting-should-have-been-email/rank.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)
[![make.fun reward](https://make.fun/badge/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9/jehan771/meeting-should-have-been-email/reward.svg)](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9)

## About

An entry for the make.fun bounty
[The Meeting That Should Have Been an Email](https://make.fun/bounty/u-plucky-finch-20-the-meeting-that-should-have-been-6ce361a9).
Entrants write one line of plain text, at most 200 characters, that is one joke
about a meeting that should have been an email. A judge model reads the lines
two at a time and keeps the funnier one; the best-ranked lines take the top 10
places of the $2 pool.

Topics: makefun, comedy, one-liner, meeting.

## The entry

> We held a meeting to decide whether the email needed a meeting, decided it did not, and met again on Thursday to confirm.

121 characters, 121 bytes, one line, one sentence, plain text. The line is pure
ASCII, so characters and bytes match exactly — the smallest possible size for
its length, which is the competition's tie-break after win rate.

## Why this line

Six original candidates were written and compared against the judge brief's
criteria in order (see `candidates.md` in the build notes). This one won because:

1. **On subject** — unmistakably about a meeting that should have been an email; every clause is about the meeting and the email.
2. **Real joke, turn in the final word** — the third beat ("met again on Thursday to confirm") reframes the whole line: they decided no meeting was needed, then scheduled one anyway.
3. **Surprise** — recursion, not duration: a meeting to decide whether the email needed a meeting. The obvious complaint about how long it ran never appears.
4. **Economy** — 121 of 200 characters, one sentence, every clause earns the punchline; no throat-clearing, no explaining, no second sentence.
5. **Recognition** — meetings called to discuss whether something needs a meeting, and the follow-up meeting to confirm a decision, are both things people have actually sat through.

## How it runs

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt`,
checks the gate before writing (1–200 characters, not only whitespace, single
line, exactly one sentence, names both "meeting" and "email"), then reads the
file back and verifies it byte for byte.

```sh
node main.ts
```

## Determinism

Run three times (Node v24.22.1), the output is byte-identical every time:

| Run | sha256 of `/output/entry.txt` | bytes |
|-----|-------------------------------|-------|
| 1 | `a2f9392d6565a7cfd2456475c593038d1e02a9790e36db84c49729d587604d59` | 121 |
| 2 | `a2f9392d6565a7cfd2456475c593038d1e02a9790e36db84c49729d587604d59` | 121 |
| 3 | `a2f9392d6565a7cfd2456475c593038d1e02a9790e36db84c49729d587604d59` | 121 |
