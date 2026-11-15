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
            I study Teaching Through Technology (T3), a hands-on program where students use drones, 3D printing, and
            design to take on projects for their own communities. From 2017 to 2020, a National Science Foundation grant
            funded T3 Alliance sites in Upward Bound programs across 17 states. When the grant ended, several sites kept
            going in their own ways, through universities, schools, and nonprofits.
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
