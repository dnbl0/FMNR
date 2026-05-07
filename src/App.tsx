import { useState } from "react";
import Nav from "./components/Nav";
import PageSections, { SectionName } from "./components/PageSections";
import MegaMenu, { PartnerType } from "./components/MegaMenu";
import "./index.css";

const PAGE_SECTIONS: SectionName[] = [
  "Banner",
  "HowItWorks",
  "InfoGraphic",
  "StartJourney",
  "FMNRHub",
  "FeaturedBlogs",
];

const PARTNER_TYPES: PartnerType[] = [
  "Default",
  "Faith",
  "NGO",
  "Government",
  "PartnerType5",
];

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionName>("Banner");
  const [activePartner, setActivePartner] = useState<PartnerType>("Default");

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ── Navbar ── */}
      <Nav />

      <main className="max-w-screen-2xl mx-auto">
        {/* ── Section: PageSections showcase ── */}
        <div className="px-4 pt-10 pb-4">
          <h2 className="text-2xl font-bold text-[#00552f] mb-1" style={{ fontFamily: "'FatFrank', sans-serif" }}>
            Page Sections
          </h2>
          <p className="text-gray-500 text-sm mb-4">Select a section variant to preview:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {PAGE_SECTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors
                  ${activeSection === s
                    ? "bg-[#00552f] text-white border-[#00552f]"
                    : "bg-white text-[#131313] border-gray-300 hover:border-[#00552f] hover:text-[#00552f]"
                  }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-xl shadow-sm border border-gray-200">
          <PageSections sectionName={activeSection} />
        </div>

        {/* ── Section: MegaMenu showcase ── */}
        <div className="px-4 pt-12 pb-4">
          <h2 className="text-2xl font-bold text-[#00552f] mb-1" style={{ fontFamily: "'FatFrank', sans-serif" }}>
            Mega Menu
          </h2>
          <p className="text-gray-500 text-sm mb-4">Select a partner type variant to preview:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {PARTNER_TYPES.map((p) => (
              <button
                key={p}
                onClick={() => setActivePartner(p)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors
                  ${activePartner === p
                    ? "bg-[#00552f] text-white border-[#00552f]"
                    : "bg-white text-[#131313] border-gray-300 hover:border-[#00552f] hover:text-[#00552f]"
                  }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full overflow-x-auto rounded-xl shadow-sm border border-gray-200 mb-16">
          <MegaMenu partnerType={activePartner} />
        </div>
      </main>
    </div>
  );
}
