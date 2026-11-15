import type { Metadata } from "next";

import { ResearchTakePart } from "@/components/research";
import { ADVISOR_EMAIL, RESEARCH_EMAIL, RESEARCH_LINKS, RESEARCH_VIDEO, VIDEO_TRANSCRIPT } from "@/lib/research";

export const metadata: Metadata = {
  title: "What keeps T3 going",
  description:
    "A doctoral study of why some community STEM programs keep going after their grant funding ends. If you directed or staffed a T3 site, or used T3 as an educator, you can share your story.",
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
    text: "Adam Low, T3 Alliance: A proven method to empower students in community engagement, talk to the IARPC Collaborations STEM Education team, October 6, 2022 (video).",
  },
  {
    href: "https://www.gettingsmart.com/2019/04/30/through-stem-t%C2%B3-alliance-works-towards-developing-a-solutionary-mindset/",
    text: "Rebecca Midles, T³ Alliance: Developing \"Solutionary\" Mindsets, Getting Smart, April 30, 2019.",
  },
  {
    href: "https://www.usgs.gov/news/volcano-watch-students-use-science-benefit-their-communities",
    text: "USGS Hawaiian Volcano Observatory, Volcano Watch: Students use science for the benefit of their communities, May 16, 2019.",
  },
  {
    href: "https://storymaps.arcgis.com/stories/6ba66c4d01654d42a3dd25a2fb0a7ce1",
    text: "T3 Energy-Environment Summer Camp, ArcGIS StoryMap, June 14, 2024.",
  },
  {
    href: "https://www.gettingsmart.com/2020/05/06/t3-alliance-turning-a-crisis-into-an-educational-opportunity/",
    text: "Adam Low, T3 Alliance: Turning a Crisis into an Educational Opportunity, Getting Smart, May 6, 2020.",
  },
  {
    href: "https://contentwithpurpose.co.uk/afs/tomorrowscatch/series_partners/alaska-blue-economy-center/",
    text: "Alaska Blue Economy Center, Tomorrow's Catch series partner profile.",
  },
  {
    href: "https://www.fs.usda.gov/about-agency/features/alaska-students-broadcast-bears-anan-wildlife-observatory",
    text: "Sally Hertz, Alaska students broadcast the bears of the Anan Wildlife Observatory, USDA Forest Service, December 9, 2024.",
  },
  {
    href: "https://www.uaf.edu/acep-blog/strengthening-long-term-energy-resilience-lessons-from-cordova.php",
    text: "Daisy Huang and George Reising, Strengthening long-term energy resilience: Lessons from Cordova, Alaska Center for Energy and Power, University of Alaska Fairbanks, July 31, 2026.",
  },
  {
    href: "https://www.kyuk.org/education/2023-10-05/teaching-though-technology-leadership-conference-connects-students-statewide",
    text: "Francisco Martínezcuello, Teaching Through Technology leadership conference connects students statewide, KYUK, October 5, 2023.",
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
    title: "Where the model began: the Modern Blanket Toss",
    cite: [1],
    blurb:
      "A National Science Foundation (NSF) project with Upward Bound students at five Alaska sites: Bethel, Chefornak, Nikiski, Seward, and Shishmaref. Students learned to fly drones, 3D print, and design, and used those skills on projects that helped their own communities.",
  },
  {
    when: "2017 to 2020",
    title: "Where the study starts: the T3 Alliance",
    cite: [2, 3, 5, 6, 7],
    blurb:
      "With a second NSF grant, the model grew into the T3 Alliance, a network of Upward Bound programs across 17 states in the Established Program to Stimulate Competitive Research (EPSCoR), which supports places that receive less federal research funding. Other TRIO programs joined during these years and paid for their programming from other funding sources. The T3 model offered trainings for coaches, badges for skills, and community projects. Which parts of the model each site used is one of the questions in this study.",
  },
];

const AFTER: Array<{ title: string; blurb: string; cite: number[] }> = [
  {
    title: "T3 Alliance",
    cite: [3],
    blurb:
      "Continued after the grant through the nonprofit Educating for Leadership, which still supports programs through its T3 Alliance project. It has helped sites with grant management and provided training.",
  },
  {
    title: "T3 Alaska",
    cite: [4, 8, 9, 10, 11, 12, 13],
    blurb:
      "Housed at the University of Alaska Fairbanks and still running today. It is grant funded and supports student learning and community engagement across a wide range of workforce development areas. Along the way it became part of makerspaces and several college courses, and reached communities beyond the Upward Bound network.",
  },
  {
    title: "T3 Action",
    cite: [],
    blurb:
      "A new, independent Alaska nonprofit, started in 2026, building on the T3 model.",
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
            I&apos;m Adam Low, a PhD student in Interdisciplinary Studies at the University of Alaska Fairbanks. My research
            asks why some extracurricular science, technology, engineering, and math (STEM) programs keep going after
            their grant funding ends, while others stop. I study this through Teaching Through Technology (T3), where
            students and educators use drones, 3D printers, and design tools to build projects that help the places they
            live.
          </p>
          <p>
            Grants paid for most of T3&apos;s work, and grants end. When the National Science Foundation grant ended in
            2020, some T3 sites stopped. Others kept going, or turned into something new, such as a makerspace, a class, or
            a local job pathway. I compare those sites to find which factors, alone or in combination, show up where
            programs kept going.
          </p>
          <p>
            I&apos;m also tracing how the values set in T3&apos;s early years carried into what came after. Later work,
            with the new T3 Action nonprofit, will look at how programs like T3 connect to local economies and community
            well-being. The goal is practical: to help schools, tribes, communities, and funders plan programs that last.
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
        <p className="prose">
          The study starts with the sites funded through the T3 Alliance, and asks what happened at each one after the
          grant ended in 2020.
        </p>
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

        <h3 className="rs-h3">After 2020: more than one path</h3>
        <p className="prose">
          When the NSF grant ended, each site went its own way. Several sites kept going, some in new forms, and others
          stopped. The study looks at all of those paths. Three that continue today:
        </p>
        <ul className="cards">
          {AFTER.map((a) => (
            <li key={a.title}>
              <b>{a.title}</b>
              <span>
                {a.blurb}
                {a.cite.length > 0 && <Cite n={a.cite} />}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="sec">
        <h2>The values behind T3</h2>
        <p className="prose">
          These ideas guided T3 from its early years. In the comparison, each value is treated as a possible factor (in
          QCA, a condition), alongside factors like leadership support and local funding. The study asks which factors,
          alone or in combination, show up where programs kept going, including T3 Alaska after the NSF grant ended.
          Later research, with T3 Action, will ask which combinations of factors tie programs like T3 to local economies
          and to wider community well-being.
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
        <p className="prose">
          Adults, 18 or older, in one of two groups. If you&apos;re not sure which one fits you, book a call and we&apos;ll
          work it out together.
        </p>

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
          {RESEARCH_LINKS.laterPhase ? (
            <a href={RESEARCH_LINKS.laterPhase} target="_blank" rel="noopener noreferrer">
              Sign up to hear when it opens.
            </a>
          ) : (
            "A sign-up form is coming soon."
          )}
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
            <b>Adam Low, researcher</b>
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
