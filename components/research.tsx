"use client";

import { useState } from "react";

import { RESEARCH_LINKS } from "@/lib/research";

/**
 * The 18+ confirmation and the three ways to take part. The links stay
 * disabled until the box is ticked. Nothing is saved here: the box only
 * gates the links, and the forms repeat the confirmation.
 */
export function ResearchTakePart() {
  const [ok, setOk] = useState(false);

  return (
    <div className="rs-take">
      <label className="rs-check">
        <input type="checkbox" checked={ok} onChange={(e) => setOk(e.target.checked)} />
        <span>
          I am 18 or older, and I directed or staffed a T3 site, or I am an educator or other adult who took T3 trainings or used T3 with students.
        </span>
      </label>

      <ul className="rs-ways">
        <Way
          ok={ok}
          href={RESEARCH_LINKS.partA}
          title="Directors and program staff"
          blurb="You directed a T3 site or worked on its program staff. 24 questions about how the site ran and what happened after the grant. About 20 minutes."
          cta="Open Part A"
        />
        <Way
          ok={ok}
          href={RESEARCH_LINKS.partB}
          title="Educators and other adults"
          blurb="Classroom teachers, after-school staff, coaches, and other adults who took T3 trainings or used T3 with students but did not lead a site. 8 questions. About 20 to 30 minutes."
          cta="Open Part B"
        />
        <Way
          ok={ok}
          href={RESEARCH_LINKS.booking}
          title="Not sure, or rather talk?"
          blurb="Book a 30-minute call. We go through the questions that fit you, and I type your answers into the form."
          cta="Book a 30-minute call"
        />
      </ul>
      {!ok && <p className="rs-hint">To open the questions, tick the box above.</p>}
    </div>
  );
}

function Way({ ok, href, title, blurb, cta }: { ok: boolean; href: string; title: string; blurb: string; cta: string }) {
  return (
    <li>
      <b>{title}</b>
      <span>{blurb}</span>
      {href ? (
        <a
          className="btn sm"
          href={ok ? href : undefined}
          aria-disabled={!ok}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!ok) e.preventDefault();
          }}
        >
          {cta}
        </a>
      ) : (
        <span className="rs-soon">Opening soon</span>
      )}
    </li>
  );
}
