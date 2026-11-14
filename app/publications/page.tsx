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
            <b>After the grant ends: why some extracurricular STEM programs persist.</b>
            <span>Interdisciplinary PhD student presentations, on Zoom, Thursday, December 10, 2026.</span>
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
