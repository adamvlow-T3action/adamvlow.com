import type { Metadata } from "next";

import { SITE } from "@/lib/site";

export const metadata: Metadata = { title: "CV" };

type Entry = { when: string; title: string; where: string; blurb?: string };

const EXPERIENCE: Entry[] = [
  { when: "2026 to present", title: "Board President", where: "T3 Action, Alaska nonprofit" },
  {
    when: "2024 to 2026",
    title: "Director",
    where: "T3 Alaska Program, University of Alaska Fairbanks",
    blurb:
      "Led partnerships across Alaska, the UAF makerspace network, and Upward Bound.",
  },
  {
    when: "2020 to 2024",
    title: "Director of Training (volunteer)",
    where: "T3 Alliance, Educating for Leadership nonprofit",
    blurb:
      "Ran online and in-person trainings in the T3 Alliance curriculum.",
  },
  {
    when: "2019 to 2025",
    title: "Director, Upward Bound",
    where: "University of Alaska Fairbanks",
    blurb:
      "Served 160 students from 10 schools, and moved the summer program online in 2020.",
  },
  {
    when: "2018 to 2019",
    title: "Curriculum Specialist, Teaching Through Technology (T3) Alliance",
    where: "Upward Bound, University of Hawaiʻi at Hilo",
    blurb:
      "Built the T3 Alliance STEM curriculum for Hawaiʻi Island communities.",
  },
  {
    when: "2017 to 2018",
    title: "Classroom Makery Teacher",
    where: "Connections Public Charter School, Hilo, Hawaiʻi",
    blurb:
      "Taught Raspberry Pi, 3D printing, drones, and laser cutting to grades 3 to 12.",
  },
  {
    when: "Summer 2016",
    title: "Instructor",
    where: "Upward Bound, University of Alaska Fairbanks",
    blurb:
      "Wrote curriculum for the NSF Modern Blanket Toss program.",
  },
  {
    when: "2015 to 2019",
    title: "Chief Executive Officer",
    where: "A. Low Educational Services",
    blurb:
      "STEM curriculum and teacher training, delivered in five states, Puerto Rico, Northern Ireland, and online.",
  },
  {
    when: "2012 to 2015",
    title: "Classroom Teacher and Technology Director",
    where: "Kua O Ka Lā Public Charter School, Pāhoa, Hawaiʻi",
    blurb: "Hipuʻu blended online learning program.",
  },
  {
    when: "2003 to 2011",
    title: "Classroom Teacher",
    where: "Cordova School District, Cordova, Alaska",
    blurb:
      "Chemistry, physics, earth science, and math. Science club advisor.",
  },
  {
    when: "2001 to 2003",
    title: "Classroom Teacher",
    where: "Academia Cotopaxi, Quito, Ecuador",
    blurb: "Middle school math and science.",
  },
  {
    when: "1999 to 2001",
    title: "Classroom Teacher and Science Department Head",
    where: "Colegio Granadino, Manizales, Colombia",
    blurb: "Middle school science.",
  },
  { when: "1998", title: "Geologist, digital cartographer", where: "Kennecott Exploration Company, Alaska" },
  {
    when: "1997 to 1998",
    title: "Geologist",
    where: "American Copper & Nickel Company, Anchorage, Alaska",
    blurb: "Field mapping and cartography.",
  },
];

const EDUCATION: Entry[] = [
  { when: "In progress", title: "PhD, Interdisciplinary Studies", where: "University of Alaska Fairbanks" },
  { when: "1999", title: "Master of Arts in Teaching", where: "University of Alaska Anchorage" },
  { when: "1997", title: "Bachelor of Science in Geology, with honors", where: "University of Alaska Fairbanks" },
];

const HONORS: Entry[] = [
  { when: "2010", title: "Outstanding Alaska Science Teacher", where: "Alaska State Science and Engineering Fair" },
  {
    when: "2008",
    title: "Alaska Outstanding Earth Science Teacher",
    where: "National Association of Geoscience Teachers",
  },
];

function List({ items }: { items: Entry[] }) {
  return (
    <ul className="cv">
      {items.map((e) => (
        <li key={`${e.when}-${e.title}-${e.where}`}>
          <span className="cv-when">{e.when}</span>
          <div>
            <b>{e.title}</b>
            <span className="cv-where">{e.where}</span>
            {e.blurb && <p>{e.blurb}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function CV() {
  return (
    <>
      <section className="hero">
        <h1>CV</h1>
        <p className="lead">
          Educator and researcher working to remove barriers for underserved youth.
        </p>
        <p className="prose">
          Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
        </p>
      </section>

      <section className="sec">
        <h2>Education</h2>
        <List items={EDUCATION} />
      </section>

      <section className="sec">
        <h2>Doctoral committee</h2>
        <ul className="pubs">
          <li>
            <b>Dr. Daisy Huang, chair</b>
            <span>Associate Professor of Energy, Department of Mechanical Engineering, University of Alaska Fairbanks</span>
          </li>
          <li>
            <b>Dr. Gwen Holdmann</b>
          </li>
          <li>
            <b>Dr. Diane Hirshberg</b>
          </li>
          <li>
            <b>Dr. Haruko Wainwright</b>
          </li>
        </ul>
      </section>

      <section className="sec">
        <h2>Experience</h2>
        <List items={EXPERIENCE} />
      </section>

      <section className="sec">
        <h2>Honors</h2>
        <List items={HONORS} />
      </section>
    </>
  );
}
