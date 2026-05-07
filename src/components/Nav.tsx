import { useState } from "react";
import MegaMenu from "./MegaMenu";

const imgVector = "https://www.figma.com/api/mcp/asset/ce102f4b-ff1a-4832-bd86-689ff1f1ce55";
const imgVector1 = "https://www.figma.com/api/mcp/asset/aa4b4268-f49c-40fb-acb7-a84c16460d64";
const imgIconSearch = "https://www.figma.com/api/mcp/asset/842a37f3-f160-4b69-b778-ac30a2901967";
const imgIconChevronDown = "https://www.figma.com/api/mcp/asset/6bd076ec-9c83-44ca-8c3c-c0562befc57d";
const imgIconChevronUp = "https://www.figma.com/api/mcp/asset/04464222-443b-4a32-b696-3dd9dc56e55e";
const imgIconX = "https://www.figma.com/api/mcp/asset/59f00c5b-cd79-4e98-9b70-5a49fd617083";

const NAV_LINKS = [
  { label: "Partner with FMNR", hasMegaMenu: true, partnerType: "Default" as const },
  { label: "Start Adopting FMNR", hasMegaMenu: false },
  { label: "The FMNR Impact", hasMegaMenu: false },
  { label: "Fund FMNR", hasMegaMenu: false },
  { label: "What is FMNR", hasMegaMenu: false },
];

type PartnerType = "Default" | "Faith" | "NGO" | "Government" | "PartnerType5";

export default function Nav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="relative z-50">
      <nav className="bg-white flex items-center justify-between px-6 md:px-10 py-4 md:py-8 w-full shadow-sm">
        {/* Logo */}
        <a href="/" className="relative block h-10 w-36 shrink-0" aria-label="FMNR Home">
          <img alt="" className="absolute inset-0 object-contain w-full h-full pointer-events-none" src={imgVector} />
          <img alt="" className="absolute inset-0 object-contain w-full h-full pointer-events-none" src={imgVector1} />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = activeMenu === link.label;
            return (
              <div key={link.label} className="relative">
                <button
                  onClick={() => link.hasMegaMenu ? toggleMenu(link.label) : undefined}
                  className={`flex items-center gap-2 px-3 py-3 rounded-md text-[18px] font-medium transition-colors whitespace-nowrap
                    ${isActive ? "bg-[#d0ffef] text-[#131313]" : "text-[#131313] hover:bg-gray-100"}`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                  {link.hasMegaMenu && (
                    <span className="w-4 h-4 flex items-center justify-center">
                      <img
                        alt=""
                        className="w-full h-full"
                        src={isActive ? imgIconChevronUp : imgIconChevronDown}
                      />
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Right section: Search + Donate */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-3 w-60 bg-white">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="flex-1 text-base outline-none bg-transparent text-[#1e1e1e] placeholder-[#b3b3b3]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            />
            {searchQuery ? (
              <button onClick={() => setSearchQuery("")} className="w-4 h-4 shrink-0">
                <img alt="Clear" className="w-full h-full" src={imgIconX} />
              </button>
            ) : (
              <span className="w-4 h-4 shrink-0">
                <img alt="" className="w-full h-full" src={imgIconSearch} />
              </span>
            )}
          </div>

          {/* Donate */}
          <button className="flex items-center gap-2 bg-[#00552f] text-white px-4 py-2.5 rounded-md text-[18px] font-semibold hover:bg-[#004424] transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            Donate
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-gray-800 transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mega Menu dropdown */}
      {activeMenu === "Partner with FMNR" && (
        <div className="absolute top-full left-0 right-0 z-40 shadow-lg">
          <MegaMenu partnerType="Default" onClose={() => setActiveMenu(null)} />
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-2 shadow-md">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              className="text-left text-[#131313] text-base py-2 px-3 rounded hover:bg-[#d0ffef] transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <div className="mt-3 flex flex-col gap-3">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-full px-4 py-2 text-base outline-none"
            />
            <button className="bg-[#00552f] text-white px-4 py-2.5 rounded-md text-base font-semibold">
              Donate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
