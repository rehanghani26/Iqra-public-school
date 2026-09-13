"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  X,
  Eye,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  Building,
  Trophy,
  Award,
  Calendar,
  Heart,
  Flag,
  Compass,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  schoolTemplate,
  prayer,
  prayer2,
  aug15,
  aug15_2,
  award,
  award2,
  award3,
  award4,
  award5,
  event,
  event2,
  hostel,
  directorSirMain,
} from "@/asset";

const DEFAULT_GALLERY_ITEMS = [
  {
    id: 1,
    title: "Iqra Public School Main Campus Facade",
    subtitle: "Eidgah Road Campus Building with Modern Classrooms",
    category: "campus",
    tag: "Main Campus",
    img: schoolTemplate,
    featured: true,
    aspect: "featured", // large hero card in Bento
    date: "Campus Life",
    color: "from-[#0b3d2e] to-emerald-700",
    tagColor: "bg-emerald-50 text-[#0b3d2e] border-emerald-200",
  },
  {
    id: 2,
    title: "Daily Morning Assembly & Moral Discipline",
    subtitle: "Daily congregation promoting moral values, prayer & unity",
    category: "values",
    tag: "Morning Assembly",
    img: prayer,
    aspect: "normal",
    date: "Daily Assembly",
    color: "from-emerald-700 to-[#0e523f]",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
  {
    id: 3,
    title: "Annual Prize Distribution Ceremony",
    subtitle: "Recognizing academic excellence, distinctions & subject toppers",
    category: "awards",
    tag: "Academic Honors",
    img: award,
    aspect: "normal",
    date: "Annual Awards",
    color: "from-amber-600 to-emerald-800",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    id: 4,
    title: "Campus Hostel & Boarding Facilities",
    subtitle: "Safe, hygienic, disciplined residential rooms and study spaces",
    category: "campus",
    tag: "Hostel Facility",
    img: hostel,
    featured: true,
    aspect: "panoramic", // wide card
    date: "Residential Care",
    color: "from-[#0b3d2e] to-emerald-600",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
  {
    id: 5,
    title: "Independence Day Celebrations (15th August)",
    subtitle: "Patriotic flag hoisting ceremony and spirited student parade",
    category: "events",
    tag: "National Days",
    img: aug15,
    aspect: "normal",
    date: "15th August",
    color: "from-[#0e523f] to-teal-700",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
  {
    id: 6,
    title: "Annual Science & Cultural Exhibition",
    subtitle: "Innovative working models, science charts and student crafts",
    category: "events",
    tag: "Exhibition & STEM",
    img: event,
    aspect: "normal",
    date: "Annual Expo",
    color: "from-teal-700 to-[#0b3d2e]",
    tagColor: "bg-teal-50 text-teal-800 border-teal-200",
  },
  {
    id: 7,
    title: "Sports & Athletic Trophy Presentation",
    subtitle: "Honoring champions of inter-school district sports and games",
    category: "sports",
    tag: "Sports Honors",
    img: award2,
    aspect: "normal",
    date: "Sports Meet",
    color: "from-amber-600 to-emerald-700",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    id: 8,
    title: "Morning Prayer & Assembly Congregation",
    subtitle: "Character building, national pledge and ethical grounding",
    category: "values",
    tag: "Character & Unity",
    img: prayer2,
    aspect: "normal",
    date: "Campus Culture",
    color: "from-[#0b3d2e] to-teal-700",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
  {
    id: 9,
    title: "Republic Day Parade & Celebrations",
    subtitle: "Tricolor flag hoisting and patriotic recitations by students",
    category: "events",
    tag: "National Pride",
    img: aug15_2,
    aspect: "normal",
    date: "26th January",
    color: "from-emerald-800 to-[#0b3d2e]",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
  {
    id: 10,
    title: "Excellence & Board Toppers Felicitation",
    subtitle: "Outstanding district board results recognized with trophies",
    category: "awards",
    tag: "Merit List",
    img: award3,
    aspect: "normal",
    date: "Board Toppers",
    color: "from-teal-700 to-emerald-800",
    tagColor: "bg-teal-50 text-teal-800 border-teal-200",
  },
  {
    id: 11,
    title: "Student Stage Drama & Cultural Evening",
    subtitle: "Theatrical eloquence, speech competitions and choral recitals",
    category: "events",
    tag: "Stage & Drama",
    img: event2,
    aspect: "panoramic",
    date: "Cultural Gala",
    color: "from-emerald-700 to-[#0b3d2e]",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
  {
    id: 12,
    title: "Junior Academic Achievers Recognition",
    subtitle: "Encouraging foundational scholarship, discipline & creativity",
    category: "awards",
    tag: "Junior Honors",
    img: award4,
    aspect: "normal",
    date: "Primary Wing",
    color: "from-amber-600 to-[#0b3d2e]",
    tagColor: "bg-amber-50 text-amber-800 border-amber-200",
  },
  {
    id: 13,
    title: "Young Achievers & Special Accolades",
    subtitle: "Extracurricular talents, karate, debates and active honors",
    category: "sports",
    tag: "Special Accolades",
    img: award5,
    aspect: "normal",
    date: "Talent Fest",
    color: "from-[#0b3d2e] to-emerald-700",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
  {
    id: 14,
    title: "Director Sir Mentorship & Guidance Desk",
    subtitle: "Visionary leadership and supportive guardian interaction",
    category: "campus",
    tag: "Leadership Desk",
    img: directorSirMain,
    aspect: "normal",
    date: "Executive Desk",
    color: "from-[#0e523f] to-emerald-800",
    tagColor: "bg-[#edf7f2] text-[#0b3d2e] border-[#dceee3]",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Photos", count: 14, icon: Layers },
  { id: "campus", label: "Campus & Hostel", count: 3, icon: Building },
  { id: "values", label: "Assemblies & Prayer", count: 2, icon: Heart },
  { id: "events", label: "Festivals & Events", count: 4, icon: Flag },
  { id: "awards", label: "Awards & Honors", count: 3, icon: Award },
  { id: "sports", label: "Sports & Athletics", count: 2, icon: Trophy },
];

const GallerySection = ({ portalData, limit, isPreview = false, onNavigate }) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const rawItems =
    portalData?.galleryItems && portalData.galleryItems.length > 0
      ? portalData.galleryItems
      : DEFAULT_GALLERY_ITEMS;

  // Filter items according to active category tab
  const filteredItems = rawItems.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "campus") {
      return (
        item.category === "campus" ||
        item.tag?.toLowerCase().includes("campus") ||
        item.tag?.toLowerCase().includes("hostel")
      );
    }
    if (activeTab === "values") {
      return (
        item.category === "values" ||
        item.tag?.toLowerCase().includes("assembly") ||
        item.tag?.toLowerCase().includes("character") ||
        item.tag?.toLowerCase().includes("prayer")
      );
    }
    if (activeTab === "events") {
      return (
        item.category === "events" ||
        item.category === "cultural" ||
        item.tag?.toLowerCase().includes("day") ||
        item.tag?.toLowerCase().includes("exhibition") ||
        item.tag?.toLowerCase().includes("drama")
      );
    }
    if (activeTab === "awards") {
      return (
        item.category === "awards" ||
        item.category === "academics" ||
        item.tag?.toLowerCase().includes("award") ||
        item.tag?.toLowerCase().includes("honor") ||
        item.tag?.toLowerCase().includes("topper")
      );
    }
    if (activeTab === "sports") {
      return (
        item.category === "sports" ||
        item.tag?.toLowerCase().includes("sport") ||
        item.tag?.toLowerCase().includes("accolade")
      );
    }
    return item.category === activeTab;
  });

  const displayItems = isPreview ? rawItems.slice(0, limit || 3) : filteredItems;

  const handleNavigateToGallery = () => {
    if (onNavigate) {
      onNavigate('gallery');
    } else {
      router.push('/gallery');
    }
  };

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % displayItems.length);
    }
  }, [lightboxIndex, displayItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (prev) => (prev - 1 + displayItems.length) % displayItems.length
      );
    }
  }, [lightboxIndex, displayItems.length]);

  // Keyboard controls for lightbox modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section
      id="gallery"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#f4f9f6] via-white to-[#edf7f1] text-slate-900 relative overflow-hidden border-t border-[#dceee3]"
    >
      {/* ── Soft Ambient Foilage & Mint Background Accents ─────────── */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-amber-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* ── HEADER TITLE & CONTROLS ───────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl space-y-3"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-100 via-[#e1f3ea] to-amber-100 border border-emerald-300/80 text-[#0b3d2e] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-xs">
              <Camera size={14} className="text-emerald-700" />
              <span>Campus Life &bull; Visual Archives</span>
            </div>

            {/* Editorial Serif Heading */}
            <h2 className="font-serif font-black text-3xl sm:text-4xl lg:text-5xl text-[#0b3d2e] tracking-tight leading-tight">
              A Vibrant Tapestry of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b3d2e] via-emerald-700 to-amber-600">
                Growth &amp; Achievement
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              Explore authentic glimpses of daily assemblies, science
              exhibitions, national festivals, boarding facilities, and academic
              victories at Iqra Public School, Motihari.
            </p>
          </motion.div>

          {/* Right Action: Category Tabs on Full Page OR "Explore All" Button on Home Preview */}
          {isPreview ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <button
                onClick={handleNavigateToGallery}
                className="inline-flex items-center gap-2.5 bg-[#0b3d2e] hover:bg-[#072c21] text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full hover:scale-105 active:scale-95 transition-all shadow-md shadow-[#0b3d2e]/20 cursor-pointer border border-emerald-500/30 group"
              >
                <span>View Full Gallery ({rawItems.length})</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform text-amber-400" />
              </button>
            </motion.div>
          ) : (
            <div className="flex items-center gap-1.5 flex-wrap bg-white/95 p-1.5 rounded-2xl border-2 border-[#cfe6d8] shadow-sm backdrop-blur-md">
              {CATEGORIES.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isActive
                        ? "bg-gradient-to-r from-[#06261c] via-[#0b3d2e] to-[#0a4233] text-white shadow-md shadow-[#0b3d2e]/30 scale-102"
                        : "text-slate-600 hover:text-[#0b3d2e] hover:bg-emerald-50/70"
                    }`}
                  >
                    <Icon
                      size={14}
                      className={isActive ? "text-amber-300" : "text-emerald-700/70"}
                    />
                    <span>{tab.label}</span>
                    <span
                      className={`text-[10px] font-black px-1.5 py-0.5 rounded-full transition-colors ${
                        isActive
                          ? "bg-amber-400 text-slate-950 font-extrabold shadow-2xs"
                          : "bg-emerald-100/80 text-[#0b3d2e]"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* ── PHOTO GRID (Editorial 3-Card on Preview, Bento Mosaic on Full) ── */}
        <motion.div
          layout
          className={`grid ${
            isPreview
              ? "grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          }`}
        >
          <AnimatePresence>
            {displayItems.map((item, idx) => {
              // Dynamic Bento Layout sizing for full page
              const isLargeHero =
                !isPreview && activeTab === "all" && (idx === 0 || idx === 3);
              const isWidePanoramic = !isPreview && activeTab === "all" && idx === 10;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, delay: idx * 0.03 }}
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className={`group relative rounded-[28px] overflow-hidden bg-white border-2 border-[#dceee3] hover:border-emerald-500 shadow-sm hover:shadow-2xl hover:shadow-[#0b3d2e]/20 cursor-pointer transition-all duration-500 hover:-translate-y-2 flex flex-col justify-end ${
                    isPreview
                      ? "min-h-[360px] sm:min-h-[420px]"
                      : isLargeHero
                        ? "sm:col-span-2 min-h-[380px] sm:min-h-[440px]"
                        : isWidePanoramic
                          ? "sm:col-span-2 min-h-[320px] sm:min-h-[370px]"
                          : "min-h-[300px] sm:min-h-[340px]"
                  }`}
                >
                  {/* Photo Canvas */}
                  <div className="absolute inset-0 overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Gradient Overlay — subtle on top, dark scrim on bottom for crisp text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041912]/95 via-[#06261c]/45 via-45% to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                  </div>

                  {/* Top Bar: Category Tag Badge & Quick Expand Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-xl bg-white/95 text-[#0b3d2e] backdrop-blur-md border border-[#d2e8dc] shadow-sm flex items-center gap-1.5">
                      <Sparkles size={11} className="text-amber-500" />
                      <span>{item.tag}</span>
                    </span>

                    <div className="w-8 h-8 rounded-full bg-white/95 text-[#0b3d2e] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#0b3d2e] group-hover:text-white transition-all">
                      <Maximize2 size={13} />
                    </div>
                  </div>

                  {/* Centered Floating Quick-View Pill on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
                    <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#0b3d2e] font-black text-xs shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-emerald-300/80">
                      <Eye size={14} className="text-emerald-700" />
                      <span>Click to View Photo</span>
                    </div>
                  </div>

                  {/* Bottom Text Card */}
                  <div className="relative z-10 p-5 sm:p-6 text-white space-y-1.5">
                    {item.date && (
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-300 font-bold uppercase tracking-wider">
                        <Calendar size={11} />
                        <span>{item.date}</span>
                      </div>
                    )}

                    <h3
                      className={`font-serif font-black tracking-tight text-white leading-snug group-hover:text-amber-200 transition-colors ${
                        isLargeHero
                          ? "text-xl sm:text-2xl"
                          : "text-base sm:text-lg"
                      }`}
                    >
                      {item.title}
                    </h3>

                    {item.subtitle && (
                      <p className="text-xs text-slate-200 line-clamp-2 font-medium leading-relaxed opacity-90">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ── "SEE MORE" CALL TO ACTION (Home Preview Mode) ─────────────── */}
        {isPreview && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 sm:mt-14 text-center flex flex-col items-center justify-center space-y-3"
          >
            <Link
              href="/gallery"
              prefetch={true}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#06261c] via-[#0b3d2e] to-[#0a4233] hover:from-[#0b3d2e] hover:to-[#072c21] text-white font-bold text-sm sm:text-base px-8 py-4 rounded-full shadow-xl shadow-[#0b3d2e]/25 hover:scale-105 active:scale-95 transition-all border border-emerald-500/40 cursor-pointer group"
            >
              <span>See More in Full Gallery</span>
              <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform text-amber-400" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Explore all {rawItems.length}+ moments covering sports meets, science exhibitions, national festivals &amp; campus life.
            </p>
          </motion.div>
        )}
      </div>

      {/* ── DELUXE LIGHTBOX MODAL (Full Screen with Carousel) ──────────── */}
      <AnimatePresence>
        {lightboxIndex !== null && displayItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 md:p-8"
          >
            {/* Top Toolbar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-between w-full max-w-6xl mx-auto text-white z-20 pb-3"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl bg-emerald-700 text-white shadow-xs">
                  {displayItems[lightboxIndex].tag}
                </span>
                <span className="text-xs font-bold text-slate-300">
                  {lightboxIndex + 1} / {displayItems.length}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={closeLightbox}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                  aria-label="Close Lightbox"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Main Center Image Stage with Left & Right Nav Controls */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative flex-1 flex items-center justify-center w-full max-w-6xl mx-auto my-auto overflow-hidden"
            >
              {/* Previous Button */}
              <button
                onClick={showPrev}
                className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#0b3d2e] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
                aria-label="Previous Photo"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Photo Display */}
              <motion.div
                key={displayItems[lightboxIndex].id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative max-h-[68vh] sm:max-h-[74vh] w-auto max-w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-black/40"
              >
                <img
                  src={displayItems[lightboxIndex].img}
                  alt={displayItems[lightboxIndex].title}
                  className="max-h-[68vh] sm:max-h-[74vh] w-auto max-w-full object-contain mx-auto"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={showNext}
                className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-black/60 hover:bg-[#0b3d2e] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 cursor-pointer shadow-xl"
                aria-label="Next Photo"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Bottom Details & Thumbnail Carousel */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl mx-auto pt-3 border-t border-white/10 z-20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-serif font-black text-lg sm:text-xl text-white">
                    {displayItems[lightboxIndex].title}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">
                    {displayItems[lightboxIndex].subtitle ||
                      "Iqra Public School Campus Life, Motihari"}
                  </p>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-400">
                  <span>Keyboard:</span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">
                    &larr;
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px]">
                    &rarr;
                  </span>
                  <span>ESC to exit</span>
                </div>
              </div>

              {/* Bottom Thumbnail Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {displayItems.map((thumb, tIdx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setLightboxIndex(tIdx)}
                    className={`w-14 h-11 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                      tIdx === lightboxIndex
                        ? "border-emerald-400 scale-105 shadow-md"
                        : "border-white/20 opacity-50 hover:opacity-90"
                    }`}
                  >
                    <img
                      src={thumb.img}
                      alt={thumb.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
