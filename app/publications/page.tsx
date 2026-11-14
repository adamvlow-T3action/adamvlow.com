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
          <li>
            <b>
              <a href="https://www.youtube.com/watch?v=Qyo53si4RMo" target="_blank" rel="noopener noreferrer">
                T3 Alliance: a proven method to empower students in community engagement.
              </a>
            </b>
            <span>STEM Education team, IARPC Collaborations. October 6, 2022. Video.</span>
          </li>
        </ul>
      </section>

      <section className="sec">
        <h2>Papers</h2>
        <p className="prose muted">No papers yet. The first paper, a history of T3, is in progress.</p>
      </section>

      <section className="sec">
        <h2>Writing about T3</h2>
        <ul className="pubs">
          <li>
            <b>
              <a
                href="https://www.gettingsmart.com/2019/04/30/through-stem-t%C2%B3-alliance-works-towards-developing-a-solutionary-mindset/"
                target="_blank"
                rel="noopener noreferrer"
              >
                T³ Alliance: developing &ldquo;solutionary&rdquo; mindsets.
              </a>
            </b>
            <span>Rebecca Midles, Getting Smart, April 30, 2019.</span>
          </li>
        </ul>
      </section>
    </>
  );
}
