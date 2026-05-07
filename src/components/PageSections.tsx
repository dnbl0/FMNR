const imgIcons = "https://www.figma.com/api/mcp/asset/50b0fed2-f480-4071-bb30-2fe90a0c7714";
const imgIcons1 = "https://www.figma.com/api/mcp/asset/cd96f641-3065-4d08-b11a-4234d4c1b9ef";
const imgIcons2 = "https://www.figma.com/api/mcp/asset/a9b95036-4528-4ec6-98ab-aab0192df66a";
const imgIcons3 = "https://www.figma.com/api/mcp/asset/b5434367-38f3-4137-af59-165d551a41df";
const imgIcons4 = "https://www.figma.com/api/mcp/asset/e10cb2ae-63ec-4384-bc50-5409f2bcccef";
const imgIcons5 = "https://www.figma.com/api/mcp/asset/7a05c964-424b-4b09-9116-030bf486692c";
const imgFrame1 = "https://www.figma.com/api/mcp/asset/67943664-7159-491f-838c-58e6c6a451d2";

export type SectionName = "Banner" | "InfoGraphic" | "StartJourney" | "FMNRHub" | "HowItWorks" | "FeaturedBlogs";

// --- Sub-components ---

function Banner() {
  return (
    <section className="relative w-full h-[429px] overflow-hidden flex items-center">
      <img src={imgFrame1} alt="FMNR Banner" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 max-w-3xl px-10 py-8">
        <h1 className="font-bold text-white text-5xl md:text-6xl leading-tight uppercase mb-4"
          style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
          Restoring Land,<br />Restoring Lives
        </h1>
        <p className="text-white/90 text-lg" style={{ fontFamily: "'Lato', sans-serif" }}>
          Farmer Managed Natural Regeneration — a simple, powerful approach to regreening the earth.
        </p>
        <div className="mt-6 flex gap-4 flex-wrap">
          <a href="#" className="bg-[#ff6600] text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-[#e55a00] transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            Learn More
          </a>
          <a href="#" className="border border-white text-white px-6 py-3 rounded-md font-semibold text-base hover:bg-white/10 transition-colors"
            style={{ fontFamily: "'Lato', sans-serif" }}>
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}

const HOW_IT_WORKS_STEPS = [
  { icon: imgIcons, title: "Identify", desc: "Farmers identify stumps and roots with regenerative potential on their land." },
  { icon: imgIcons1, title: "Protect", desc: "Protect the shoots from grazing and cutting, allowing natural regrowth." },
  { icon: imgIcons2, title: "Prune", desc: "Select the strongest shoots and prune others to direct growth." },
  { icon: imgIcons3, title: "Harvest", desc: "Sustainably harvest branches for fuel, fodder, and timber." },
];

function HowItWorks() {
  return (
    <section className="bg-[#f9f9f9] px-10 py-24 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-[48px] font-bold text-[#00552f] uppercase leading-none"
          style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
          How does FMNR work?
        </h2>
        <p className="text-black text-[18px] leading-relaxed max-w-2xl" style={{ fontFamily: "'Lato', sans-serif" }}>
          Explore, learn, and connect on all things Farmer Managed Natural Regeneration through the FMNR Hub.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <div key={i} className="bg-white rounded-lg p-6 flex flex-col gap-4 shadow-sm border border-[rgba(19,19,19,0.1)]">
            <div className="bg-[#d0ffef] rounded-md p-3 w-fit">
              <img src={step.icon} alt={step.title} className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h3 className="text-[#131313] font-bold text-xl uppercase mb-2"
                style={{ fontFamily: "'FatFrank', sans-serif" }}>
                {i + 1}. {step.title}
              </h3>
              <p className="text-[rgba(19,19,19,0.75)] text-[15px] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const INFOGRAPHIC_STATS = [
  { value: "1B+", label: "Trees Regenerated" },
  { value: "50+", label: "Countries Impacted" },
  { value: "5M+", label: "Farmers Trained" },
  { value: "40%", label: "Yield Increase" },
];

function InfoGraphic() {
  return (
    <section className="bg-[#f9f9f9] px-10 py-24 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-[48px] font-bold text-[#00552f] uppercase leading-none"
          style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
          Regreening at Scale
        </h2>
        <p className="text-black text-[18px] leading-relaxed max-w-2xl" style={{ fontFamily: "'Lato', sans-serif" }}>
          Explore, learn, and connect on all things Farmer Managed Natural Regeneration through the FMNR Hub.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {INFOGRAPHIC_STATS.map((stat, i) => (
          <div key={i} className="bg-white rounded-lg p-6 flex flex-col items-center gap-2 shadow-sm border border-[rgba(19,19,19,0.1)] text-center">
            <span className="text-4xl font-bold text-[#00552f]" style={{ fontFamily: "'FatFrank', sans-serif" }}>
              {stat.value}
            </span>
            <span className="text-[rgba(19,19,19,0.75)] text-sm" style={{ fontFamily: "'Lato', sans-serif" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function StartJourney() {
  return (
    <section className="bg-[#f9f9f9] px-10 py-16 flex flex-col gap-6">
      <div className="flex flex-col gap-3 max-w-2xl">
        <h2 className="text-[40px] font-bold text-[#00552f] uppercase leading-none"
          style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
          Start Your FMNR Journey
        </h2>
        <p className="text-black text-[18px] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
          Whether you're a farmer, NGO, faith leader, or funder — there's a place for you in the FMNR movement.
        </p>
      </div>
      <div className="flex gap-4 flex-wrap">
        <a href="#" className="bg-[#00552f] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#004424] transition-colors"
          style={{ fontFamily: "'Lato', sans-serif" }}>
          Get Started
        </a>
        <a href="#" className="border border-[#00552f] text-[#00552f] px-6 py-3 rounded-md font-semibold hover:bg-[#f0faf5] transition-colors"
          style={{ fontFamily: "'Lato', sans-serif" }}>
          Learn More
        </a>
      </div>
    </section>
  );
}

const FMNR_HUB_CARDS = [
  {
    icon: imgIcons4,
    title: "FMNR Overview",
    desc: "Learn more about FMNR, a simple, scalable, and community-driven approach restoring degraded landscapes.",
  },
  {
    icon: imgIcons4,
    title: "Resources Hub",
    desc: "Dive into a curated library of FMNR materials tailored for practitioners, trainers, and researchers.",
  },
  {
    icon: imgIcons4,
    title: "Community Forum",
    desc: "Connect with FMNR practitioners around the world to share experiences and best practices.",
  },
];

function FMNRHub() {
  return (
    <section className="bg-[#2da57f] px-10 py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-[48px] font-bold text-white uppercase" style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
          FMNR Hub
        </h2>
        <p className="text-white/90 text-[16px]" style={{ fontFamily: "'Lato', sans-serif" }}>
          Explore, learn, and connect on all things Farmer Managed Natural Regeneration through the FMNR Hub.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {FMNR_HUB_CARDS.map((card, i) => (
          <div key={i} className="bg-white rounded-lg flex flex-col flex-1 overflow-hidden border border-[rgba(19,19,19,0.1)]">
            <div className="p-6 pb-0">
              <div className="bg-[#d0ffef] rounded-md p-4 w-full flex items-center justify-center h-[106px]">
                <img src={card.icon} alt={card.title} className="h-[85px] w-[92px] object-contain" />
              </div>
            </div>
            <div className="p-6 flex flex-col gap-10 flex-1">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#131313] font-bold text-2xl uppercase leading-tight"
                  style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
                  {card.title}
                </h3>
                <p className="text-[rgba(19,19,19,0.75)] text-[15px] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {card.desc}
                </p>
              </div>
              <a href="#" className="border border-[#ff6600] text-[#ff6600] px-3 py-2 rounded-md text-[18px] font-medium w-fit hover:bg-[#fff5ee] transition-colors"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const BLOG_POSTS = [
  {
    icon: imgIcons5,
    title: "Roots of Resilience",
    excerpt: "How a Malian farming community transformed barren land into a thriving forest using FMNR.",
    tag: "Community",
  },
  {
    icon: imgIcons5,
    title: "Faith in the Fields",
    excerpt: "Faith leaders in Ethiopia are using FMNR to steward creation and feed their communities.",
    tag: "Faith",
  },
  {
    icon: imgIcons5,
    title: "Scaling the Movement",
    excerpt: "What it takes to bring FMNR from individual farms to national policy agendas.",
    tag: "Policy",
  },
];

function FeaturedBlogs() {
  return (
    <section className="bg-[#2da57f] px-10 py-16 flex flex-col gap-10">
      <div className="flex flex-col gap-3">
        <h2 className="text-[48px] font-bold text-white uppercase" style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
          Explore our featured blogs
        </h2>
        <p className="text-white/90 text-[16px]" style={{ fontFamily: "'Lato', sans-serif" }}>
          Discover real-world experiences, reflections, and insights from FMNR champions, practitioners, and communities.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {BLOG_POSTS.map((post, i) => (
          <article key={i} className="bg-white rounded-lg flex-1 overflow-hidden border border-[rgba(19,19,19,0.1)]">
            <div className="bg-[#d0ffef] flex items-center justify-center h-36">
              <img src={post.icon} alt={post.title} className="h-20 object-contain" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <span className="text-xs font-semibold text-[#00552f] uppercase tracking-wider bg-[#d0ffef] px-2 py-1 rounded w-fit"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                {post.tag}
              </span>
              <h3 className="text-[#131313] font-bold text-xl uppercase leading-tight"
                style={{ fontFamily: "'FatFrank', sans-serif", lineHeight: 0.9 }}>
                {post.title}
              </h3>
              <p className="text-[rgba(19,19,19,0.75)] text-[15px] leading-relaxed" style={{ fontFamily: "'Lato', sans-serif" }}>
                {post.excerpt}
              </p>
              <a href="#" className="border border-[#ff6600] text-[#ff6600] px-3 py-2 rounded-md text-base font-medium w-fit hover:bg-[#fff5ee] transition-colors"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                Read more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// --- Main PageSections component ---

type PageSectionsProps = {
  sectionName?: SectionName;
};

export default function PageSections({ sectionName = "Banner" }: PageSectionsProps) {
  switch (sectionName) {
    case "Banner": return <Banner />;
    case "HowItWorks": return <HowItWorks />;
    case "InfoGraphic": return <InfoGraphic />;
    case "StartJourney": return <StartJourney />;
    case "FMNRHub": return <FMNRHub />;
    case "FeaturedBlogs": return <FeaturedBlogs />;
    default: return null;
  }
}
