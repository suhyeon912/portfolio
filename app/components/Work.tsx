"use client";

import { useState } from "react";
import { useLang } from "../context/LanguageContext";

interface Metric {
  value: string;
  label: string;
}

interface Project {
  title: string;
  subtitle: string;
  period: string;
  role: string;
  rolePct: string;
  status: "Live" | "Internal" | "Completed";
  url?: string;
  stack: string[];
  overview: string;
  highlights: string[];
  metrics?: Metric[];
  screens?: string[];
  note?: string;
}

const projects: Project[] = [
  {
    title: "Engineering BigData Platform",
    subtitle:
      "Cloud-based Engineering BigData & SW Utilization Platform (Phase 2–3) · KITECH",
    period: "2023.02 – 2023.12",
    role: "Frontend 70% / Backend 30%",
    rolePct: "70",
    status: "Live",
    url: "https://www.bigdata-eng.com",
    stack: ["JavaScript", "eCharts", "realGrid", "Spring Boot", "Java", "SQL", "GitLab"],
    overview:
      "Developed key modules for a government-backed engineering data platform (KITECH) serving 2,500+ registered users. Contributed across the full development lifecycle — from DB schema design and UI development to unit testing and defect resolution — on two major sub-projects: the Notification Service and the Public Dataset module.",
    highlights: [
      "Built 4 Notification Service screens end-to-end (subscription, history, recipient management, alert dashboard)",
      "Developed Admin Dashboard with 6 eCharts trend visualizations",
      "Implemented Public Dataset detail view — realGrid table + eCharts chart two-panel layout",
      "Wrote dashboard aggregation SQL for notification stats",
      "Executed unit test cases for 4+ screens; resolved all critical defects before release",
    ],
    metrics: [
      { value: "501K+", label: "Total Visits" },
      { value: "2,551", label: "Registered Users" },
      { value: "290K+", label: "Notifications Sent" },
      { value: "6.3M+", label: "Bid Announcements" },
    ],
    screens: [
      "Admin Dashboard — KPI cards + 6 eCharts trend charts",
      "Notification Service — Subscription, history, recipient management",
      "Public Dataset Search — Multi-category keyword search, paginated results",
      "Public Dataset Detail — realGrid table (date/region filter, Excel export) + eCharts chart",
    ],
    note: "Source code is confidential (internal company project) · Screenshots available",
  },
  {
    title: "PERFORMAX",
    subtitle: "Enterprise HR & Workforce Management SaaS · TimeSoft",
    period: "2023.12 – Present (1.5+ years)",
    role: "Frontend Lead → Solo Full-Stack Maintainer",
    rolePct: "100",
    status: "Internal",
    stack: ["React", "JavaScript", "TypeScript", "Spring Boot", "Java", "REST API", "Gateway", "GitLab"],
    overview:
      "End-to-end development and ongoing maintenance of a large-scale enterprise SaaS platform covering HR, attendance, workforce analytics, and sales management. After the original team departed, took over full ownership of the entire stack — frontend, backend, API gateway, and config — handling everything from bug triage to production deployment solo.",
    highlights: [
      "Solely developed 10+ screens including Integrated Dashboard, Access Control, Work/Attendance Management, To-Do, Calendar, and 3 Insight analytics modules (Individual Report, Work Performance, Sales Performance)",
      "Built real-time attendance dashboard with donut charts and live employee log (187+ records)",
      "Implemented Usage Status dashboard with monthly activity breakdown (5,800+ actions/month tracked)",
      "Took over full-stack solo maintenance after all other developers left — frontend, backend, gateway, and config",
      "Handles complete issue lifecycle: bug report → fix → staging → production deploy, entirely independently",
      "Platform architecture adopted as base for 2 derived products (놀러오개, AlpetaX)",
    ],
    screens: [
      "Integrated Dashboard — Real-time attendance donut chart + live employee log + sales performance feed",
      "Access Control — Terminal status chart + paginated access history log (187+ entries)",
      "Usage Status — Monthly activity table (attendance, ToDo, schedule, reports) with LIST/CHART toggle",
      "Attendance / Work Management — Dept-level charts, ranking, individual timelines, web/app usage tracking",
      "Task Management — Calendar (daily/weekly/monthly views), To-Do list, daily reports",
      "Sales Management — Activity tracking, consultation logs, performance targets, real-time ranking",
      "Insight Analytics — Individual Report, Work Performance, Sales Performance (multi-period comparison)",
    ],
    note: "Source code is confidential (internal company project) · Screenshots available",
  },
  {
    title: "ASTRON CWS UI Renewal",
    subtitle: "Full UI Redesign · Enterprise Dashboard",
    period: "2024.11 – 2025.02",
    role: "Frontend Developer",
    rolePct: "100",
    status: "Completed",
    stack: ["React", "Tailwind CSS", "TypeScript", "GitLab"],
    overview:
      "Led a complete frontend UI overhaul for ASTRON CWS, modernizing the design system using Tailwind CSS. Delivered a significantly improved user experience through systematic component redesign, improved responsiveness, and cleaner visual hierarchy.",
    highlights: [
      "Migrated the entire UI to Tailwind CSS, replacing legacy stylesheets",
      "Redesigned core dashboard layouts for improved usability and visual clarity",
      "Implemented responsive breakpoints for cross-device compatibility",
      "Reduced styling code volume while increasing visual consistency",
    ],
    note: "Before/After screenshots demonstrate significant visual improvement",
  },
  {
    title: "BMEA Shipbuilding Parts Delivery Platform",
    subtitle: "조선기자재 공동납품 플랫폼 · ML-Powered Logistics Analytics",
    period: "2025.07 – 2025.12",
    role: "Frontend Developer (Feature Development Lead)",
    rolePct: "80",
    status: "Completed",
    stack: ["React", "TypeScript", "Hero UI", "eCharts", "Kakao Map API", "MongoDB", "REST API", "GitLab"],
    overview:
      "Built 5 ML-powered data visualization modules for the Busan Marine Equipment Association's shipbuilding parts joint delivery platform. Taking ownership of all feature development after framework setup — integrated machine learning model APIs to visualize predictions alongside actual data, implemented Kakao Map for geographic analysis, and connected MongoDB-backed REST endpoints across all screens.",
    highlights: [
      "Integrated ML model APIs across all 5 screens to display predicted vs. actual data side-by-side (loading times, arrival times, vehicle demand, warehouse importance, regional classification)",
      "Implemented Kakao Map with dynamic region polygons and supplier pin rendering — clicking a supplier re-centers the map to their location",
      "Built cargo loading time analysis (화물특성 상차시간) — horizontal bar chart comparing actual vs. ML-predicted loading time per supplier",
      "Developed shipyard ETA prediction (조선소 도착 예정시간) — step-by-step timeline view with TMS predicted vs. actual arrival time delta per vehicle stop",
      "Created vehicle demand forecast (납품 예정일별 필요 차량 예측) — weekly calendar grid with FTL/LTL breakdown comparing ML-predicted vs. actual vehicle counts",
      "Built warehouse ABC importance analysis (창고 이용 물량 다차원) — donut chart (A 48% / B 30% / C 22%) + monthly in/out bar chart with current vs. ML-predicted importance",
      "Handled all post-framework work independently: API integration, UI logic, user request handling, and production deployment",
    ],
    screens: [
      "권역분류 최적화 분석 — Kakao Map with shipyard regions + nearby supplier pins, ML-predicted zone classification",
      "화물특성 상차시간 분석 — Horizontal bar chart: actual vs. ML-predicted loading time by supplier & package type",
      "창고 이용 물량 다차원 분석 — ABC importance donut chart + monthly in/out bar chart, current vs. predicted importance",
      "조선소 도착 예정시간 예측 — Step-by-step ETA timeline per vehicle, predicted vs. actual arrival time comparison",
      "납품 예정일별 필요 차량 예측 — Weekly grid: ML-predicted FTL/LTL vehicle count vs. actual by tonnage category",
    ],
    note: "Source code is confidential (internal company project) · Screenshots from user manual available",
  },
];

const statusStyles: Record<Project["status"], string> = {
  Live: "bg-green-900/30 text-green-400 border border-green-800/40",
  Internal: "bg-gray-800/60 text-gray-400 border border-gray-700/40",
  Completed: "bg-blue-900/30 text-blue-400 border border-blue-800/40",
};

export default function Work() {
  const [expanded, setExpanded] = useState<number | null>(0);
  const { t } = useLang();

  return (
    <section id="work" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <div className="reveal flex items-center gap-3 mb-4">
          <span className="font-mono text-sm text-purple-400">03.</span>
          <span className="text-sm uppercase tracking-widest text-gray-500">
            {t.work.label}
          </span>
          <div className="flex-1 h-px bg-[#1e1e36]" />
        </div>

        <div className="reveal mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {t.work.heading} <span className="gradient-text">{t.work.headingHighlight}</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            {t.work.subheading}
          </p>
        </div>

        <div className="reveal space-y-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`bg-[#0f0f1a] border rounded-2xl overflow-hidden transition-all duration-300 ${
                expanded === i
                  ? "border-purple-700/40 shadow-lg shadow-purple-900/10"
                  : "border-[#1e1e36] hover:border-[#2a2a4a]"
              }`}
            >
              {/* Card Header — always visible */}
              <button
                className="w-full text-left p-6 flex flex-col sm:flex-row sm:items-center gap-4"
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {project.title}
                    </h3>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${statusStyles[project.status]}`}
                    >
                      {t.work.statuses[project.status]}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-purple-400 hover:text-purple-300 underline underline-offset-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t.work.visit}
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">
                    {project.subtitle}
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="hidden sm:block text-right">
                    <p className="text-xs text-gray-600 font-mono">
                      {project.period}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {project.role}
                    </p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                      expanded === i
                        ? "border-purple-600 bg-purple-900/30 rotate-180"
                        : "border-[#2a2a4a]"
                    }`}
                  >
                    <svg
                      className="w-3 h-3 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded content */}
              {expanded === i && (
                <div className="px-6 pb-7 border-t border-[#1e1e36] pt-6 space-y-6">
                  {/* Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-lg bg-purple-900/20 text-purple-300 border border-purple-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 bg-[#16162a] rounded-xl text-center border border-[#1e1e36]"
                        >
                          <p className="text-xl font-bold gradient-text">
                            {m.value}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Overview */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
                      {t.work.overview}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.overview}
                    </p>
                  </div>

                  {/* Screens */}
                  {project.screens && (
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                        {t.work.screens}
                      </h4>
                      <ul className="space-y-2">
                        {project.screens.map((s, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-gray-400"
                          >
                            <span className="text-purple-500 mt-0.5 flex-shrink-0">
                              ▸
                            </span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Highlights */}
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                      {t.work.contributions}
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((h, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="text-green-500 mt-0.5 flex-shrink-0">
                            ✓
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Note */}
                  {project.note && (
                    <p className="text-xs text-gray-600 font-mono border-t border-[#1e1e36] pt-4">
                      * {project.note}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Other experiences */}
        <div className="reveal mt-10 p-6 bg-[#0f0f1a] border border-[#1e1e36] rounded-2xl">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">
            {t.work.otherExp}
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "중앙장애인권익옹호기관 (Maintenance)",
              "KFA Web / eCharts",
              "Mammoth Data (Toast Grid)",
              "Construction CALS Crawling (Python)",
              "KITECH Maintenance",
              "GS Certification (PMD / Security)",
              "AlpetaX",
              "HugAndMeong (놀러오개)",
            ].map((item) => (
              <span
                key={item}
                className="text-xs text-gray-500 px-3 py-1.5 bg-[#0a0a14] border border-[#1e1e36] rounded-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
