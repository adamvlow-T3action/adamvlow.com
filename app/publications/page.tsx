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
        <h2>Papers and abstracts</h2>
        <ul className="pubs">
          <li>
            <b>
              <a
                href="https://studio.m-anage.com/agu/agu25/meetingapp.cgi/Paper/1863085"
                target="_blank"
                rel="noopener noreferrer"
              >
                Integrating next-generation environmental monitoring and education activities for developing citizen
                science and improving global environmental literacy.
              </a>
            </b>
            <span>
              Carol A. Eddy-Dilek (lead author), with Adam Low as a co-author. AGU25 annual meeting, abstract U12A-03,
              December 15, 2025.
            </span>
          </li>
        </ul>
        <p className="prose muted">The first paper from my dissertation, a history of T3, is in progress.</p>
      </section>

      <section className="sec">
        <h2>Writing about T3</h2>
        <ul className="pubs">
          <li>
            <b>
              <a href="https://storymaps.arcgis.com/stories/6ba66c4d01654d42a3dd25a2fb0a7ce1" target="_blank" rel="noopener noreferrer">
                T3 Energy-Environment Summer Camp.
              </a>
            </b>
            <span>ArcGIS StoryMap, June 14, 2024. High school students test whether local water in the Arctic is safe.</span>
          </li>
          <li>
            <b>
              <a href="https://www.usgs.gov/news/volcano-watch-students-use-science-benefit-their-communities" target="_blank" rel="noopener noreferrer">
                Volcano Watch: students use science for the benefit of their communities.
              </a>
            </b>
            <span>
              USGS Hawaiian Volcano Observatory, May 16, 2019. Upward Bound students in the T3 program at the University
              of Hawaiʻi at Hilo built air-quality monitors after the 2018 Kīlauea eruption.
            </span>
          </li>
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
