import Link from "next/link";

import { SITE } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome</h1>
        <p className="lead">
          I&apos;m Adam V. Low, a PhD student in Interdisciplinary Studies at the University of Alaska Fairbanks, with a
          home department in Mechanical Engineering.
        </p>
      </section>

      <section className="sec">
        <h2>My research</h2>
        <div className="prose">
          <p>
            I study why some community science, technology, engineering, and math (STEM) programs keep going after their
            grant funding ends, while others stop. My case is Teaching Through Technology (T3), a program I helped lead
            that started in Alaska on National Science Foundation grants and grew into a network across many states.
          </p>
          <p>
            I&apos;m also tracing how the values set in T3&apos;s early years shaped what came after: a makerspace, new
            courses, and new organizations. The goal is practical: to help schools, tribes, communities, and funders plan
            programs that last.
          </p>
        </div>
      </section>

      <section className="sec">
        <h2>Take part in the T3 study</h2>
        <p className="prose">
          If you directed or staffed a T3 site, or you are an educator who used T3, your site&apos;s story can help
          explain why some programs last.
        </p>
        <p>
          <Link className="btn" href="/t3-study">
            Read about the T3 study
          </Link>
        </p>
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
