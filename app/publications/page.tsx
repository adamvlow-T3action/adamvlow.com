import type { Metadata } from "next";

export const metadata: Metadata = { title: "Publications" };

export default function Publications() {
  return (
    <>
      <section className="hero">
        <h1>Publications</h1>
        <p className="lead">Papers and talks from my research appear here as they come out.</p>
      </section>

      <section className="sec">
        <h2>Talks</h2>
        <ul className="pubs">
          <li>
            <b>Why some extracurricular STEM programs keep going after their grant funding ends.</b>
            <span>
              Interdisciplinary PhD cohort end-of-semester presentations, University of Alaska Fairbanks. Thursday, December
              10, 2026, 3:15 PM Alaska time, on Zoom.
            </span>
            <span>
              Traces how the values set in T3&apos;s early years built lasting local capacity, from NSF-funded sites to a
              makerspace, start-ups, and a nonprofit.
            </span>
          </li>
        </ul>
      </section>

      <section className="sec">
        <h2>Papers</h2>
        <p className="prose muted">No papers yet. The first paper, a history of T3, is in progress.</p>
      </section>
    </>
  );
}
