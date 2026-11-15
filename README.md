# adamvlow.com

Adam Low's research site. A static Next.js site: `next build` writes plain files to `out/`, so it runs on any static host.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Welcome and a short research summary |
| `/t3-study` | The T3 study page: background, history, values, and the ways to take part |
| `/publications` | Talks and papers |
| `/cv` | Education and committee, until a full CV is added |

## Changing the T3 study links

`lib/research.ts` holds the Part A and Part B Google Form links, the booking link, and the welcome video. The page stores nothing itself: answers and bookings go to Adam's University of Alaska Fairbanks Google account. To show the video, paste its embed link into `RESEARCH_VIDEO` and keep `VIDEO_TRANSCRIPT` in step with what Adam says.

## Running it

```
bun install
bun run dev      # http://localhost:3000
bun run build    # writes out/
```
