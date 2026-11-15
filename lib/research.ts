/**
 * Links for the T3 study page (/t3-study). The page itself stores nothing:
 * each link goes to Adam's university Google account, where the answers and
 * bookings are kept. An empty link shows as "Opening soon" on the page.
 */
export const RESEARCH_LINKS = {
  /** Google Form: Part A, directors and program staff. */
  partA: "https://docs.google.com/forms/d/e/1FAIpQLSf6yp9uWZqccKYIcuRKBcp6v6x7OjnVjrwN0TcrRIpHD4E8gQ/viewform",
  /** Google Form: Part B, educators and other adults. */
  partB: "https://docs.google.com/forms/d/e/1FAIpQLSdw4xcqSR9Ax2lPKnGLR6XEDn4tsBQdgjOtBnqSYLWWaYzOiQ/viewform",
  /** Google Calendar appointment schedule, 30 minutes. */
  booking: "https://calendar.app.google/gVHGYkxxFqqEi1Pj7",
  /** Google Form: contact sign-up for the later student and family phase. */
  laterPhase: "",
} as const;

export const RESEARCH_EMAIL = "alow@alaska.edu";
export const ADVISOR_EMAIL = "dhuang@alaska.edu";

/**
 * Adam's welcome video. Paste an embed link here (a YouTube "embed" link, or
 * a Google Drive "/preview" link shared as "anyone with the link"). Empty
 * hides the video section. Keep VIDEO_TRANSCRIPT in step with what he says.
 */
export const RESEARCH_VIDEO = "";

export const VIDEO_TRANSCRIPT = [
  "Hi, I'm Adam Low. Thank you for taking a look at this page.",
  "For more than 10 years, T3 programs helped students in Alaska and across the country use drones, 3D printers, and design tools on projects for their own communities. Some of those programs stopped when the grant money ended. Others kept going, or grew into something new.",
  "I'm a PhD student at the University of Alaska Fairbanks, and my research asks what made the difference. If you directed or staffed a T3 site, or you're an educator who used T3, your story helps answer that question. Every site counts, including the ones that ended.",
  "You can take part in two ways. You can answer the questions on this page on your own time, in about 20 to 30 minutes. Or, if you'd rather talk, book a 30-minute call with me, and we'll go through the same questions together. Calls are not recorded.",
  "Taking part is voluntary, and you can skip any question.",
  "Thank you for what you built, and for helping the next programs last.",
] as const;
