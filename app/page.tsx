import Link from "next/link";

import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Adam Low</h1>
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
            I study why some Teaching Through Technology (T3) STEM sites kept going after their National Science
            Foundation funding ended. I look at it three ways: a comparison of the former T3 Alliance sites, a history of
            T3 Alaska and the work that grew from it, and a study of the new T3 Action nonprofit.
          </p>
          <p>
            My working idea is that programs last when their founding values are built into local partnerships and
            people. If that holds, funders should invest in local capacity, not just programs.
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
