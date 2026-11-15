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
        <dl className="five">
          <div>
            <dt>The question</dt>
            <dd>
              Why do some extracurricular STEM programs keep going after their grant funding ends, while others stop?
            </dd>
          </div>
          <div>
            <dt>Why it matters</dt>
            <dd>
              When a grant ends, students and communities can lose programs, mentors, and momentum, and funders lose
              their investment.
            </dd>
          </div>
          <div>
            <dt>What I&apos;m doing</dt>
            <dd>
              Three studies of Teaching Through Technology (T3): a comparison of the former National Science Foundation
              funded T3 Alliance sites using Qualitative Comparative Analysis, a history of T3 Alaska and the work that
              grew from it, and a study of the new T3 Action nonprofit.
            </dd>
          </div>
          <div>
            <dt>What I&apos;m seeing so far</dt>
            <dd>
              Programs seem to last when their founding values are built into local partnerships and people. Data
              collection is just starting, so this is a working idea, not a result.
            </dd>
          </div>
          <div>
            <dt>So what</dt>
            <dd>
              Qualitative Comparative Analysis can show more than one recipe for a program that lasts: combinations of
              factors that work together. Those recipes become a dashboard of key things for communities, funders, and
              universities to look for and build when starting programs meant to last.{" "}
              <Link href="/t3-study">You can help test it.</Link>
            </dd>
          </div>
        </dl>
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
