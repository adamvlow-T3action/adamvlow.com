import type { Metadata } from "next";

import { ResearchTakePart } from "@/components/research";
import { ADVISOR_EMAIL, LATER_PHASE_MAILTO, RESEARCH_EMAIL, RESEARCH_VIDEO, VIDEO_TRANSCRIPT } from "@/lib/research";

export const metadata: Metadata = {
  title: "What keeps T3 going",
  description:
    "A doctoral study of why some community STEM programs keep going after their grant funding ends. If you were a T3 director, staff member, partner, or educator, you can share your site's story.",
};

const SOURCES = [
  {
    href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1348413",
    text: "National Science Foundation award 1348413, The Modern Blanket Toss: Engaging Underserved Students in STEM Fields through Unmanned Aerial Vehicles.",
  },
  {
    href: "https://www.nsf.gov/awardsearch/showAward?AWD_ID=1740991",
    text: "National Science Foundation award 1740991, Teaching Through Technology (T3) Alliance, October 1, 2017 to September 30, 2020.",
  },
  { href: "https://t3alliance.org", text: "T3 Alliance, t3alliance.org." },
  { href: "https://t3.alaska.edu/", text: "T3 Alaska, t3.alaska.edu." },
  {
    href: "https://www.youtube.com/watch?v=Qyo53si4RMo",
    text: "Adam V. Low, T3 Alliance: A proven method to empower students in community engagement, talk to the IARPC Collaborations STEM Education team, October 6, 2022 (video).",
  },
  {
    href: "https://www.gettingsmart.com/2019/04/30/through-stem-t%C2%B3-alliance-works-towards-developing-a-solutionary-mindset/",
    text: "Rebecca Midles, T³ Alliance: Developing \"Solutionary\" Mindsets, Getting Smart, April 30, 2019.",
  },
  {
    href: "https://www.usgs.gov/news/volcano-watch-students-use-science-benefit-their-communities",
    text: "USGS Hawaiian Volcano Observatory, Volcano Watch: Students use science for the benefit of their communities, May 16, 2019.",
  },
];

function Cite({ n }: { n: number[] }) {
  return (
    <sup className="rs-cite">
      {n.map((i, k) => (
        <span key={i}>
          {k > 0 && ", "}
          <a href={`#src-${i}`}>{i}</a>
        </span>
      ))}
    </sup>
  );
}

const HISTORY: Array<{ when: string; title: string; blurb: string; cite: number[] }> = [
  {
    when: "2014 to 2016",
    title: "The Modern Blanket Toss",
    cite: [1],
    blurb:
      "A National Science Foundation (NSF) project with Upward Bound students at five Alaska sites: Bethel, Chefornak, Nikiski, Seward, and Shishmaref. Students learned to fly drones, 3D print, and design, and used those skills on projects that helped their own communities.",
  },
  {
    when: "2017 to 2020",
    title: "T3 Alliance",
    cite: [2, 3, 5, 6, 7],
    blurb:
      "With a second NSF grant, the model grew into the T3 Alliance, a network of Upward Bound programs across 17 states in the Established Program to Stimulate Competitive Research (EPSCoR), which supports places that receive less federal research funding. Other TRIO programs joined during these years and paid for their programming from other funding sources. Sites ran trainings for coaches, badges for skills, and community projects.",
  },
  {
    when: "2020 on",
    title: "T3 Alaska",
    cite: [4],
    blurb:
      "When the NSF grant ended, the work continued in Alaska as a university program, which still runs today. It adapted through COVID and helped start a makerspace, a college course, and new organizations, including Remote Hands.",
  },
  {
    when: "2026",
    title: "T3 Action",
    cite: [],
    blurb:
      "T3 Action, a separate and independent Alaska nonprofit, began building on the T3 model: hands-on technology trainings in communities, led by local trainers.",
  },
];

const VALUES = [
  { title: "Safe places to learn", blurb: "Learners can try, fail, and try again without fear." },
  { title: "Trust in people", blurb: "Students and communities are capable of real, important work." },
  { title: "Self-determination", blurb: "Communities decide what they need and what to build." },
  { title: "Learning together", blurb: "Knowledge is made with communities, not delivered to them." },
  { title: "Mentoring", blurb: "Everyone mentors someone and is mentored by someone." },
  { title: "Doing something to help", blurb: "Projects answer a real need in the learner's own community." },
];

const STEPS = [
  {
    title: "Gather each site's story",
    blurb: "From the people who ran and worked with each site, using the questions on this page, alongside published reports.",
  },
  {
    title: "Describe each site the same way",
    blurb:
      "For example: Did leadership back the program? Were there community partners? Did staff stay? Was there local money when the grant ended?",
  },
  {
    title: "Compare the sites",
    blurb:
      "The method, Qualitative Comparative Analysis (QCA), looks for the combinations of conditions found where programs lasted. It allows for more than one path: what worked in one village may differ from what worked in a city school.",
  },
  {
    title: "Share what I learn",
    blurb:
      "In my dissertation and papers, and in a plain-language summary for the people and communities who took part.",
  },
];

export default function Page() {
  return (
    <>
      <section className="hero">
        <h1>What keeps T3 going</h1>
        <p className="lead">
          Why do some community science, technology, engineering, and math (STEM) programs keep going after their grant
          funding ends, while others stop? If you were part of a T3 program, your site&apos;s story can help answer the
          question.
        </p>
        <p>
          <a className="btn" href="#take-part">
            Take part
          </a>
        </p>
      </section>

      {RESEARCH_VIDEO && (
        <section className="sec" aria-labelledby="video">
          <h2 id="video">A message from Adam</h2>
          <div className="rs-video">
            <iframe
              src={RESEARCH_VIDEO}
              title="Adam Low thanks you and explains how to take part in the study"
              allow="encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <details className="rs-transcript">
            <summary>Read the video transcript</summary>
            {VIDEO_TRANSCRIPT.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </details>
        </section>
      )}

      <section className="sec">
        <h2>What I&apos;m studying</h2>
        <div className="prose">
          <p>
            I&apos;m Adam V. Low, a PhD student in Interdisciplinary Studies at the University of Alaska Fairbanks. For more than
            10 years, Teaching Through Technology (T3) programs ran in rural and island communities. Students used drones, 3D printers, and design tools to
            build projects that helped their own communities.
          </p>
          <p>
            Grants paid for most of that work, and grants end. Some T3 sites stopped when the money stopped. Others kept
            going, or turned into something new: a makerspace, a class, a small business, a local job pathway. My research
            asks what made the difference.
          </p>
          <p>
            I&apos;m also tracing how the values set in T3&apos;s early years carried into what came after. The goal is
            practical: to help schools, tribes, communities, and funders plan programs that last.
          </p>
        </div>
      </section>

      <section className="sec">
        <h2>How the study works</h2>
        <p className="prose">
          The study compares many T3 sites side by side, including the ones that ended. Every site&apos;s story counts.
        </p>
        <ol className="steps">
          {STEPS.map((s) => (
            <li key={s.title}>
              <b>{s.title}</b>
              <span>{s.blurb}</span>
            </li>
          ))}
        </ol>
        <p className="prose">
          The questions are about programs, not about you personally, and they never ask about individual students. I
          don&apos;t use student records.
        </p>
      </section>

      <section className="sec">
        <h2>A short history of T3</h2>
        <p className="prose">T3 started on NSF grants, and T3 Alaska kept the work going after the last grant ended in 2020.</p>
        <ul className="rs-time">
          {HISTORY.map((h) => (
            <li key={h.title}>
              <span className="rs-when">{h.when}</span>
              <b>{h.title}</b>
              <span>
                {h.blurb}
                {h.cite.length > 0 && <Cite n={h.cite} />}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec">
        <h2>The values behind T3</h2>
        <p className="prose">
          These ideas guided T3 from its early years. Part of the study asks whether the values help explain why T3
          Alaska kept going after the NSF grant ended.
        </p>
        <ul className="cards">
          {VALUES.map((v) => (
            <li key={v.title}>
              <b>{v.title}</b>
              <span>{v.blurb}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec" id="take-part">
        <h2>Who I&apos;d like to hear from</h2>
        <p className="prose">Adults, 18 or older, who took part in a T3 program in one of two ways:</p>
        <ul className="cards">
          <li>
            <b>Directors, staff, and partners</b>
            <span>
              Upward Bound and TRIO directors, school and district administrators, site coaches and coordinators, and
              staff of tribes, local governments, businesses, or nonprofits that worked with a T3 site.
            </span>
          </li>
          <li>
            <b>Educators and other adults</b>
            <span>
              Classroom teachers, after-school staff, coaches, and other adults who took T3 trainings or used T3 with
              students but did not lead a site.
            </span>
          </li>
        </ul>

        <h3 className="rs-h3">Before you start</h3>
        <ul className="rs-list">
          <li>Taking part is voluntary. You can skip any question or stop at any time.</li>
          <li>I may name sites in what I write. I name or quote a person only with their permission.</li>
          <li>Please don&apos;t name individual students in your answers.</li>
          <li>Calls are not recorded.</li>
        </ul>

        <ResearchTakePart />

        <p className="prose">
          <b>Former T3 student or family member?</b> Thank you. A later part of the study is for students and families.{" "}
          <a href={LATER_PHASE_MAILTO}>Email me to hear when it opens.</a>
        </p>
      </section>

      <section className="sec">
        <h2>My two roles</h2>
        <p className="prose">
          I helped lead T3, and I&apos;m board president of T3 Action, an Alaska nonprofit that builds on the T3 model.
          This study is my own doctoral research. It is not a T3 Action program, and taking part or not has no effect on
          your relationship with T3 Action or with me. If you&apos;d rather talk to someone else about the study, contact my faculty advisor.
        </p>
        <ul className="cards">
          <li>
            <b>Adam V. Low, researcher</b>
            <span>
              PhD student, University of Alaska Fairbanks · <a href={`mailto:${RESEARCH_EMAIL}`}>{RESEARCH_EMAIL}</a>
            </span>
          </li>
          <li>
            <b>Dr. Daisy Huang, faculty advisor</b>
            <span>
              University of Alaska Fairbanks · <a href={`mailto:${ADVISOR_EMAIL}`}>{ADVISOR_EMAIL}</a>
            </span>
          </li>
        </ul>
      </section>

      <section className="sec" aria-labelledby="sources">
        <h2 id="sources">Sources</h2>
        <ol className="rs-list rs-src">
          {SOURCES.map((src, i) => (
            <li key={src.href} id={`src-${i + 1}`}>
              <a href={src.href} target="_blank" rel="noopener noreferrer">
                {src.text}
              </a>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
