export type DivisionKey = "construction" | "flooring" | "plumbing";

export type Division = {
  key: DivisionKey;
  index: string;
  name: string;
  shortLine: string;
  headline: string;
  description: string;
  accent: string;
  heroImage: string;
  heroAlt: string;
  capabilities: string[];
  approach: { number: string; title: string; text: string }[];
  projects: { name: string; type: string; location: string; image: string }[];
};

export const divisions: Record<DivisionKey, Division> = {
  construction: {
    key: "construction",
    index: "01",
    name: "Construction",
    shortLine: "Build with intent.",
    headline: "Commercial construction shaped around momentum.",
    description:
      "Focused delivery for commercial environments where planning, coordination and finish have to work as one.",
    accent: "#D85A2A",
    heroImage: "/images/construction-site.jpg",
    heroAlt: "Commercial construction drawings being developed at a worktable",
    capabilities: [
      "Commercial fit-outs",
      "Refurbishment programmes",
      "Project coordination",
      "Finishing and handover",
    ],
    approach: [
      { number: "01", title: "Understand", text: "Clarify the environment, programme and commercial priorities." },
      { number: "02", title: "Coordinate", text: "Connect teams, sequencing and site requirements around one plan." },
      { number: "03", title: "Deliver", text: "Maintain control from first works through final handover." },
    ],
    projects: [
      { name: "Retail environment", type: "Sample commercial fit-out", location: "South Africa", image: "/images/commercial-interior.jpg" },
      { name: "Business precinct", type: "Sample refurbishment", location: "South Africa", image: "/images/commercial-exterior.jpg" },
    ],
  },
  flooring: {
    key: "flooring",
    index: "02",
    name: "Flooring",
    shortLine: "Perform under pressure.",
    headline: "Floors engineered for the pressure of daily business.",
    description:
      "Commercial surfaces considered for traffic, longevity and the character of the space around them.",
    accent: "#A9C93A",
    heroImage: "/images/commercial-interior.jpg",
    heroAlt: "Modern commercial interior with a smooth high-performance floor",
    capabilities: [
      "Commercial floor preparation",
      "Resilient surface systems",
      "Specialist finishes",
      "Phased installations",
    ],
    approach: [
      { number: "01", title: "Assess", text: "Read the space, substrate, traffic and operational demands." },
      { number: "02", title: "Specify", text: "Align surface performance with finish and programme." },
      { number: "03", title: "Install", text: "Work precisely and phase delivery around the live environment." },
    ],
    projects: [
      { name: "Workplace interior", type: "Sample specialist flooring", location: "South Africa", image: "/images/commercial-interior.jpg" },
      { name: "Retail concourse", type: "Sample resilient surface", location: "South Africa", image: "/images/commercial-exterior.jpg" },
    ],
  },
  plumbing: {
    key: "plumbing",
    index: "03",
    name: "Plumbing",
    shortLine: "Keep business flowing.",
    headline: "Commercial plumbing built to keep operations moving.",
    description:
      "Planned installations and upgrades coordinated around the realities of busy commercial sites.",
    accent: "#275DFF",
    heroImage: "/og.png",
    heroAlt: "Monumental modern commercial architecture with precise coloured light",
    capabilities: [
      "Commercial installations",
      "Planned system upgrades",
      "Maintenance coordination",
      "Operational handover",
    ],
    approach: [
      { number: "01", title: "Map", text: "Understand the system, constraints and operational pressure points." },
      { number: "02", title: "Plan", text: "Coordinate access, sequencing and disruption before work begins." },
      { number: "03", title: "Connect", text: "Install, test and hand over with clarity for the teams on site." },
    ],
    projects: [
      { name: "Commercial property", type: "Sample system upgrade", location: "South Africa", image: "/og.png" },
      { name: "Operational workplace", type: "Sample commercial installation", location: "South Africa", image: "/images/commercial-interior.jpg" },
    ],
  },
};

export const divisionList = Object.values(divisions);
