const imgFindIcon = "https://www.figma.com/api/mcp/asset/148694fc-d011-43b6-8bde-af5b320a44c9";
const imgImage = "https://www.figma.com/api/mcp/asset/6f4908d9-9956-4c65-ab9a-fee301cfac7e";
const imgChevronGreen = "https://www.figma.com/api/mcp/asset/8f296229-b64f-4e5d-9962-78dc5980affd";
const imgChevronDark = "https://www.figma.com/api/mcp/asset/17365f39-87a3-4fc5-8876-f0390958b14b";

export type PartnerType = "Default" | "Faith" | "NGO" | "Government" | "PartnerType5";

type MenuItem = {
  title: string;
  description: string;
};

const MENU_ITEMS: MenuItem[] = [
  { title: "Why Partner with FMNR", description: "Discover the benefits of partnering with FMNR." },
  { title: "Faith-Based Partners", description: "Join faith communities restoring creation." },
  { title: "NGO Partners", description: "Collaborate with civil society on restoration." },
  { title: "Government Partners", description: "Work with governments for systemic change." },
  { title: "Corporate Partners", description: "Align your business with nature-positive goals." },
];

const PARTNER_LABELS: Record<PartnerType, string> = {
  Default: "All Partners",
  Faith: "Faith-Based",
  NGO: "NGO",
  Government: "Government",
  PartnerType5: "Corporate",
};

type MegaMenuProps = {
  partnerType?: PartnerType;
  onClose?: () => void;
};

export default function MegaMenu({ partnerType = "Default", onClose }: MegaMenuProps) {
  const isDefault = partnerType === "Default";

  return (
    <div className="bg-[#fbfcfe] border border-[#ebebeb] w-full flex">
      {/* Left panel */}
      <div className="flex flex-col gap-4 p-10 w-72 shrink-0 border-r border-[#ebebeb]">
        <h3 className="text-[18px] font-bold text-black leading-none" style={{ fontFamily: "'FatFrank', sans-serif" }}>
          Partner with FMNR
        </h3>

        <div className="flex flex-col gap-2">
          {(["Default", "Faith", "NGO", "Government", "PartnerType5"] as PartnerType[]).map((type) => (
            <button
              key={type}
              className={`flex items-center justify-between px-3 py-3 rounded-md text-left transition-colors text-sm
                ${partnerType === type
                  ? "bg-[#d0ffef] border border-[rgba(14,122,62,0.25)]"
                  : "hover:bg-[#f0faf5] border border-transparent"
                }`}
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              <span className="text-[#0e7a3e] font-semibold">{PARTNER_LABELS[type]}</span>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center shadow-sm
                ${partnerType === type ? "bg-[#0e7a3e]" : "bg-[#e8f6ed]"}`}>
                <img
                  alt=""
                  className="w-4 h-4"
                  src={partnerType === type ? imgChevronGreen : imgChevronDark}
                />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right panel: menu items grid */}
      <div className="flex-1 p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 content-start">
        {MENU_ITEMS.map((item, i) => (
          <a
            key={i}
            href="#"
            className="flex items-start gap-3 p-4 rounded-md hover:bg-[#f0faf5] transition-colors group"
          >
            <span className="w-8 h-8 rounded-full bg-[#d0ffef] flex items-center justify-center shrink-0 shadow-sm">
              <img alt="" className="w-4 h-4" src={imgFindIcon} />
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#0e7a3e] font-semibold text-base leading-tight group-hover:underline"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {item.title}
              </span>
              <span className="text-sm text-gray-600 leading-snug" style={{ fontFamily: "'Lato', sans-serif" }}>
                {item.description}
              </span>
            </div>
          </a>
        ))}

        {/* Featured image panel */}
        <div className="md:col-span-2 xl:col-span-1 rounded-md overflow-hidden relative h-48 xl:h-auto xl:row-span-3">
          <img
            alt="Partner with FMNR"
            className="w-full h-full object-cover"
            src={imgImage}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
            <p className="text-white text-sm font-medium" style={{ fontFamily: "'Lato', sans-serif" }}>
              Together we restore the earth
            </p>
          </div>
        </div>
      </div>

      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
          aria-label="Close menu"
        >
          ×
        </button>
      )}
    </div>
  );
}
