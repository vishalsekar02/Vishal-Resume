"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Rocket, Briefcase, GraduationCap, Award } from "lucide-react";

// --- Data ---
const CONTACT = {
  name: "Vishal Sekar",
  title: "Senior Software Tester / Quality Engineer Analyst",
  location: "Chennai, India",
  phone: "+91 8939448148",
  email: "gv0207@gmail.com",
  links: {
  linkedin: "https://www.linkedin.com/in/vishal-sekar-9b75a9219",
},
};

const SUMMARY = `Detail-oriented Software Test Engineer with 5+ years of experience in Manual, API, and Automation Testing (Eggplant, Postman). Skilled in Agile methodologies, defect lifecycle management, and test automation across Logistics, Telecom, Insurance, Healthcare, and E‑Commerce domains. Proven collaborator with cross-functional teams; leverages Generative AI to enhance testing efficiency and quality.`;

const CORE_PM = [
  "Agile / Scrum",
  "SDLC / STLC / DLC",
  "Test Planning & Estimation",
  "Requirement Analysis & Mapping",
  "Risk & Issue Management",
  "Stakeholder Communication",
  "Collaboration & Conflict Resolution",
];

const TOOLS = [
  "Eggplant Functional & DAI",
  "Postman",
  "Jira",
  "Qtest / TestRail",
  "BrowserStack",
  "Git",
  "JSON",
  "Test Hub AI & APEX",
  "Generative AI",
];

const DOMAINS = [
  "Cargo & Logistics",
  "Telecom",
  "E‑commerce",
  "Healthcare",
  "Utilities",
  "Insurance",
];

const CERTS = [
  "Eggplant Functional – Level 1 Expert",
  "Eggplant Functional – Level 2 Genius",
  "Eggplant AI – Genius",
];

const EDUCATION = [
  {
    school: "Mamallan Institute of Technology, Chennai",
    degree: "B.E – Mechanical Engineering",
    year: "2018",
  },
  {
    school: "Velammal Matric Hr. Sec. School, Chennai",
    degree: "HSC & SSC",
    year: "2014 & 2012",
  },
];

const EXPERIENCE = [
  {
    company: "Infosys",
    roles: [
      { title: "Test Analyst", period: "Jul 2023 – Present" },
      { title: "Test Engineer", period: "May 2022 – Jun 2023" },
    ],
    projects: [
      {
        name: "Verizon (Telecom & E‑Commerce)",
        bullets: [
          "Executed Functional, Regression, and System Testing for a web-based commerce platform.",
          "Performed cross‑browser and device testing to ensure seamless UX.",
          "Partnered with stakeholders for UAT and defect triage; maintained RTM for coverage.",
        ],
      },
      {
        name: "American Electric Power (Utilities)",
        bullets: [
          "Designed and executed manual & automated test cases using Eggplant Functional & DAI.",
          "Collaborated through Git for sharing/reviewing test scripts and knowledge reuse.",
          "Ran regression cycles; tracked and verified defects across multiple environments.",
          "Contributed to automation framework improvements for faster, reliable execution.",
        ],
      },
    ],
  },
  {
    company: "Accolite Digital India Pvt Ltd",
    roles: [
      { title: "Test Engineer", period: "Jan 2021 – May 2022" },
      { title: "Testing Intern", period: "Jul 2020 – Dec 2020" },
    ],
    projects: [
      {
        name: "ONE PULSE (Prudential, Insurance & Healthcare)",
        bullets: [
          "Performed manual and API testing (Postman) across multiple environments.",
          "Managed test cases in Jira & TestRail; executed SIT & UAT on real and virtual devices.",
          "Logged and tracked defects, ensuring timely resolution with development teams.",
          "Participated in Agile ceremonies; collaborated with clients for requirement clarity.",
        ],
      },
      {
        name: "CMA CGM (Logistics & Cargo)",
        bullets: [
          "Executed Functional, Regression, and Smoke testing on booking/reservation systems.",
          "Conducted Usability Testing and provided actionable feedback to UI/UX teams.",
          "Maintained comprehensive manual test suites covering end‑to‑end workflows and reporting.",
        ],
      },
    ],
  },
];

// --- Small helpers ---
const container = "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8";
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function Section({ title, icon, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
      </div>
      <Card className="shadow-sm border border-gray-200">
        <CardContent className="p-6">{children}</CardContent>
      </Card>
    </motion.section>
  );
}

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className={`${container} py-10 sm:py-14`}> 
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{CONTACT.name}</h1>
          <p className="text-base sm:text-lg opacity-90">{CONTACT.title}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
            <span className="inline-flex items-center gap-2"><MapPin size={16}/> {CONTACT.location}</span>
            <span className="inline-flex items-center gap-2"><Phone size={16}/> {CONTACT.phone}</span>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:underline">
              <Mail size={16}/> {CONTACT.email}
            </a>
            {CONTACT.links.linkedin && (
              <a href={CONTACT.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                <Linkedin size={16}/> LinkedIn
              </a>
            )}
            {CONTACT.links.github && (
              <a href={CONTACT.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline">
                <Github size={16}/> GitHub
              </a>
            )}
          </div>
          <div className="pt-2">
            <Button onClick={() => window.print()} className="rounded-2xl shadow"> <Download className="mr-2 h-4 w-4"/> Download / Print</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function Summary() {
  return (
    <Section title="Professional Summary" icon={<Rocket className="h-5 w-5"/>}>
      <p className="text-sm sm:text-base leading-relaxed text-slate-700">{SUMMARY}</p>
    </Section>
  );
}

function Skills() {
  return (
    <Section title="Core Knowledge & Skills" icon={<Briefcase className="h-5 w-5"/>}>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-base font-semibold mb-3">Project Management</h3>
          <div className="flex flex-wrap gap-2">
            {CORE_PM.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs py-1 px-2 rounded-xl">{s}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-3">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs py-1 px-2 rounded-xl">{s}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-base font-semibold mb-3">Domains</h3>
          <div className="flex flex-wrap gap-2">
            {DOMAINS.map((s) => (
              <Badge key={s} variant="secondary" className="text-xs py-1 px-2 rounded-xl">{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section title="Professional Experience" icon={<Briefcase className="h-5 w-5"/>}>
      <Tabs defaultValue={EXPERIENCE[0].company} className="w-full">
        <TabsList className="flex flex-wrap gap-2">
          {EXPERIENCE.map((exp) => (
            <TabsTrigger key={exp.company} value={exp.company} className="rounded-2xl">{exp.company}</TabsTrigger>
          ))}
        </TabsList>
        {EXPERIENCE.map((exp) => (
          <TabsContent key={exp.company} value={exp.company} className="mt-4">
            <div className="mb-2 flex flex-wrap gap-3 text-sm text-slate-600">
              {exp.roles.map((r, idx) => (
                <span key={idx} className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-1">
                  <Badge variant="outline" className="rounded-xl mr-1">{r.title}</Badge>
                  {r.period}
                </span>
              ))}
            </div>
            <Separator className="my-4"/>
            <div className="grid md:grid-cols-2 gap-6">
              {exp.projects.map((p) => (
                <Card key={p.name} className="hover:shadow-md transition-shadow rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-base">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc ml-5 space-y-2 text-sm text-slate-700">
                      {p.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}

function Education() {
  return (
    <Section title="Education" icon={<GraduationCap className="h-5 w-5"/>}>
      <div className="grid md:grid-cols-2 gap-6">
        {EDUCATION.map((e) => (
          <div key={e.school} className="space-y-1">
            <p className="font-medium">{e.degree}</p>
            <p className="text-sm text-slate-600">{e.school}</p>
            <p className="text-xs text-slate-500">{e.year}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section title="Certifications" icon={<Award className="h-5 w-5"/>}>
      <ul className="grid sm:grid-cols-2 gap-2 text-sm">
        {CERTS.map((c) => (
          <li key={c} className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">{c}</li>
        ))}
      </ul>
    </Section>
  );
}

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <Header />
      <main className={`${container} py-8 sm:py-10`}>
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
      </main>
      <footer className="py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {CONTACT.name} • Built with React, Tailwind, shadcn/ui & Framer Motion
      </footer>
    </div>
  );
}
