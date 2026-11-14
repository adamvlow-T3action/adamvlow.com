import type { Metadata } from "next";

import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "CV" };

export default function CV() {
  return (
    <>
      <section className="hero">
        <h1>CV</h1>
        <p className="lead">
          A full CV is coming soon. Until then, email me at <a href={`mailto:${SITE.email}`}>{SITE.email}</a> for a copy.
        </p>
      </section>

      <section className="sec">
        <h2>Education</h2>
        <ul className="pubs">
          <li>
            <b>PhD in Interdisciplinary Studies, in progress</b>
            <span>University of Alaska Fairbanks. Home department: Mechanical Engineering.</span>
          </li>
        </ul>
      </section>

      <section className="sec">
        <h2>Committee</h2>
        <ul className="pubs">
          <li>
            <b>Dr. Daisy Huang, chair</b>
            <span>Associate Professor of Energy, Department of Mechanical Engineering, University of Alaska Fairbanks</span>
          </li>
          <li>
            <b>Gwen Holdmann</b>
          </li>
          <li>
            <b>Diane Hirshberg</b>
          </li>
          <li>
            <b>Haruko Wainwright</b>
          </li>
        </ul>
      </section>
    </>
  );
}
