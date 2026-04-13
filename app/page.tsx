"use client";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { SimpleIcon } from "simple-icons";
import {
  siAndroid,
  siBootstrap,
  siCplusplus,
  siCss,
  siDjango,
  siFlask,
  siGit,
  siGithub,
  siHtml5,
  siHuggingface,
  siOpenjdk,
  siJavascript,
  siLaravel,
  siLinux,
  siMongodb,
  siMysql,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOpencv,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siReactrouter,
  siReacttable,
  siShadcnui,
  siTailwindcss,
  siTypescript,
  siUbuntu,
  siVercel,
  siDotnet,
} from "simple-icons";

type SkillLogo = {
  label: string;
  icon: SimpleIcon;
};

const marqueeSkills: SkillLogo[] = [
  { label: "Next.js", icon: siNextdotjs },
  { label: "React", icon: siReact },
  { label: "TypeScript", icon: siTypescript },
  { label: "JavaScript", icon: siJavascript },
  { label: "Python", icon: siPython },
  { label: "Java", icon: siOpenjdk },
  { label: "C/C++", icon: siCplusplus },
  { label: "C# / .NET", icon: siDotnet },
  { label: "PHP", icon: siPhp },
  { label: "Laravel", icon: siLaravel },
  { label: "HTML5", icon: siHtml5 },
  { label: "CSS3", icon: siCss },
  { label: "Bootstrap", icon: siBootstrap },
  { label: "Tailwind CSS", icon: siTailwindcss },
  { label: "ShadCN UI", icon: siShadcnui },
  { label: "React Native", icon: siReact },
  { label: "Node.js", icon: siNodedotjs },
  { label: "OpenCV", icon: siOpencv },
  { label: "PostgreSQL", icon: siPostgresql },
  { label: "MongoDB", icon: siMongodb },
  { label: "MySQL", icon: siMysql },
  { label: "n8n", icon: siN8n },
  { label: "Hugging Face", icon: siHuggingface },
  { label: "Vercel", icon: siVercel },
  { label: "Git", icon: siGit },
  { label: "GitHub", icon: siGithub },
  { label: "Android", icon: siAndroid },
  { label: "Ubuntu", icon: siUbuntu },
  { label: "Linux", icon: siLinux },
  { label: "Django", icon: siDjango },
  { label: "Flask", icon: siFlask },
  { label: "NumPy", icon: siNumpy },
  { label: "React Router", icon: siReactrouter },
  { label: "TanStack Table", icon: siReacttable },
];

const projects = [
  {
    title: "AI-Powered Pitch Generator",
    summary:
      "Web app that crafts investor-ready startup pitches automatically with OpenAI + n8n automations.",
    live: "https://nexium-muhammad-abdullah-final-proj.vercel.app/",
    github: "https://github.com/abdullahkhan1122/Nexium_Muhammad-Abdullah_Final-Project",
    badge: "Next.js · n8n · OpenAI",
    
  },
  {
    title: "Build-iT: Construction Bidding",
    summary: "Platform where clients post tenders and contractors bid with secure, role-based access.",
    github: "https://github.com/abdullahkhan1122/ClickNBuild",
    badge: "Flask · MySQL",

  },
  {
    title: "Flexi: University Portal",
    summary: "Centralized portal for attendance, marks, and records with Django ORM optimizations.",
    github: "https://github.com/abdullahkhan1122/Flexi-Student_Portal",
    badge: "Django · MySQL",
    
  },
  {
    title: "BookFinder Mobile App",
    summary:
      "React Native + Expo app to search books/authors, view rich details and ratings, and mark books as read with local persistence.",
    github: "https://github.com/abdullahkhan1122/BookFinder-Mobile-App",
    badge: "React Native · Expo · Open Library API",
    
  },
  {
    title: "Hospital Management System",
    summary:
      "C++ console system to manage doctors, patients, and appointments. Stores doctor/patient records and books visits by doctor ID.",
    github: "https://github.com/abdullahkhan1122/Hospital_Management_System",
    badge: "C++ · Data Structures",

  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/abdullahkhan1122", icon: "/icons/github.svg" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-abdullah-at2003/", icon: "/icons/linkedin.svg" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sectionElements = navItems.map((item) => document.querySelector(item.href) as HTMLElement);

    const updateActive = () => {
      const scrollPos = window.scrollY + 160; // account for fixed header
      let current = sectionElements[0]?.id ?? "about";
      sectionElements.forEach((section) => {
        if (section && section.offsetTop <= scrollPos) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActive();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen text-slate-900 overflow-hidden bg-white">

      <header className="w-full fixed inset-x-0 top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <nav className="relative mx-auto w-full max-w-6xl px-4 sm:px-8 lg:px-12 py-3">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
            <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start gap-3">
              <span className="text-lg sm:text-xl font-semibold tracking-tight whitespace-nowrap">
                Muhammad Abdullah
              </span>
              <div className="flex items-center gap-2 sm:hidden">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-full border border-slate-300 bg-white shadow-card transition hover:border-teal-500"
                    aria-label={social.label}
                  >
                    <Image src={social.icon} alt={social.label} width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full sm:flex-1 flex justify-center">
              <div className="glass pill px-2 py-1.5 flex items-center gap-1 shadow-card w-full sm:w-auto max-w-xl justify-center">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-sm px-3 py-1.5 pill flex items-center gap-2 transition ${
                        isActive
                          ? "bg-slate-200 text-slate-900 font-semibold shadow-card"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-3 justify-end">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-full border border-slate-300 bg-white shadow-card transition hover:border-teal-500"
                  aria-label={social.label}
                >
                  <Image src={social.icon} alt={social.label} width={18} height={18} />
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 relative z-10 pt-20 sm:pt-24">
        <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-22 sm:pb-24 text-center space-y-8">
          <div className="flex justify-center">
            <div className="h-36 w-36 rounded-full overflow-hidden border-2 border-slate-200 shadow-card">
              <Image src="/profile.png" alt="Profile photo" width={144} height={144} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-slate-900">
            Hi, I&apos;m Muhammad Abdullah
          </h1>
          <p className="text-xl sm:text-2xl text-slate-700 font-semibold">
            Software Engineer | Full-Stack &amp; AI Solutions Developer</p>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
            Software engineer with hands-on experience building full-stack and AI-powered applications. From modern React/Next.js interfaces to Python-based APIs and automated workflows, I focus on delivering fast, reliable, and production-ready systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="pill bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 font-semibold shadow-card transition"
              style={{ color: "#ffffff" }}
            >
              <span className="text-white">View Projects</span>
            </a>
            <a
              href="/resume.pdf"
              className="pill border border-teal-600 text-teal-700 bg-white hover:bg-teal-50 px-6 py-3 font-semibold flex items-center gap-2 transition"
              download
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </a>
          </div>
        </section>

        <section
          id="about"
          className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-8 sm:pb-10 text-center space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">What I Do</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 leading-relaxed">
          I develop production-ready systems including responsive frontends, scalable APIs, database architectures, and automation workflows. I focus on writing clean, maintainable code and delivering reliable, high-performance solutions.
          </p>

          <div className="space-y-6 mt-20 pb-0">
            <h3 className="text-lg font-semibold text-slate-800">Tech I Work With</h3>
            <div className="relative max-w-5xl mx-auto overflow-hidden py-2">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/95 to-transparent pointer-events-none z-10" />
            <div className="flex gap-4 marquee-track">
              {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
                <div
                  key={`${skill.label}-${idx}`}
                  className="flex items-center gap-3 px-6 py-3 border border-slate-200 bg-white chip-shadow pill"
                >
                  <svg
                    width={28}
                    height={28}
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label={skill.label}
                    className="shrink-0"
                  >
                    <path fill={`#${skill.icon.hex}`} d={skill.icon.path} />
                  </svg>
                  <span className="text-sm font-semibold text-slate-900 whitespace-nowrap">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-14 space-y-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center">Projects</h2>

          <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
            {projects.map((project, idx) => {
              const isLastOdd = projects.length % 2 === 1 && idx === projects.length - 1;
              const tags = project.badge.split("·").map((t) => t.trim());
              return (
              <div
                key={project.title}
                className={`rounded-3xl border border-slate-100 bg-white shadow-card px-6 py-7 hover:-translate-y-1 transition transform ${
                  isLastOdd ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Featured</p>
                    <h3 className="text-xl font-bold mt-1 text-slate-900">{project.title}</h3>
                  </div>
                
                </div>

                <p className="text-slate-600 mt-3 leading-relaxed">{project.summary}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={`${project.title}-${tag}`}
                      className="pill bg-slate-50 text-slate-700 text-xs font-semibold px-3 py-1 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={project.github ?? "#"}
                    className="pill border border-teal-600 text-teal-700 bg-white px-4 py-2 text-sm font-semibold hover:bg-teal-50 transition"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  {project.live ? (
                    <a
                      href={project.live}
                      className="pill bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 text-sm font-semibold shadow-card transition"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#ffffff" }}
                    >
                      <span className="text-white">Live Site</span>
                    </a>
                  ) : null}
                </div>
              </div>
              );
            })}
          </div>
        </section>

        <section
          id="contact"
          className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">Let&apos;s Work Together</h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            I&apos;m excited to collaborate on AI-powered products, automation, or full-stack web experiences.
            Tell me about your project and I&apos;ll reply quickly.
          </p>
          <form
            action="https://formsubmit.co/abdullah.khan.aa7@gmail.com"
            method="POST"
            className="grid gap-4 text-left bg-white shadow-card border border-slate-100 rounded-3xl p-6 sm:p-8"
          >
            <input type="hidden" name="_subject" value="New portfolio contact" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Name</label>
                <input
                  required
                  name="name"
                  className="rounded-xl border border-slate-200 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/70"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-xl border border-slate-200 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/70"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Company (optional)</label>
              <input
                name="company"
                className="rounded-xl border border-slate-200 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/70"
                placeholder="Company or team"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Project details</label>
              <textarea
                required
                name="message"
                rows={4}
                className="rounded-xl border border-slate-200 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900/70"
                placeholder="What do you want to build?"
              />
            </div>
            <div className="flex justify-between items-center flex-wrap gap-3">
              <p className="text-sm text-slate-500">Based in Islamabad, Pakistan · Remote friendly</p>
              <button
                type="submit"
              className="pill bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 font-semibold inline-flex items-center gap-2 shadow-card transition"
            >
              <EnvelopeIcon className="h-5 w-5" />
              Send Message
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-500 relative z-10">
        © {new Date().getFullYear()} Muhammad Abdullah. All rights reserved.
      </footer>
    </div>
  );
}
