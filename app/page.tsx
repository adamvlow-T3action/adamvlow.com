import Link from "next/link";

import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Adam V. Low</h1>
        <p className="lead">
          Education innovator and researcher. I study why some community science and technology programs keep going after their grant
          funding ends, and what they leave behind for the places they serve.
        </p>
        <p className="roles">
          PhD student, Interdisciplinary Studies, University of Alaska Fairbanks
          <br />
          Board President, T3 Action
        </p>
        <p className="ctas">
          <Link className="btn" href="/t3-study">
            Take part in the T3 study
          </Link>
          <Link className="btn btn-quiet" href="/publications">
            See my publications
          </Link>
        </p>
      </section>

      <section className="sec">
        <h2>My research</h2>
        <div className="prose">
          <p>
            My case is Teaching Through Technology (T3), a program I helped lead. T3 started in Alaska on National Science
            Foundation grants and grew into a network of Upward Bound programs across many states. When the grants ended,
            several sites kept going in their own ways.
          </p>
          <p>
            Using Qualitative Comparative Analysis, I compare those sites to find which factors, alone or in combination,
            show up where programs lasted. The goal is practical: to help schools, tribes, communities, and funders plan
            programs that last.
          </p>
        </div>
      </section>

      <section className="sec">
        <h2>Contact</h2>
        <p className="prose">
          Email me at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
        </p>
      </section>
    </>
  );
}
