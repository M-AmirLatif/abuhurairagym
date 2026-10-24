import gymDataJson from "../../../data/gyms/abu-huraira-world-gym.json";
import urTranslations from "../../../data/i18n/ur.json";
import type { GymData } from "@/types/gym";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import LadiesSection from "@/components/LadiesSection";
import Trainers from "@/components/Trainers";
import Membership from "@/components/Membership";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Timings from "@/components/Timings";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileDock from "@/components/MobileDock";

const gymData = gymDataJson as GymData;

export default function UrduPage() {
  const lang = "ur";
  const t = urTranslations;

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gym-dark text-zinc-100 flex flex-col relative selection:bg-gym-gold selection:text-black font-urdu"
    >
      <Header gym={gymData} lang={lang} t={t} />

      <main className="flex-1">
        <Hero gym={gymData} lang={lang} t={t} />
        <TrustBar gym={gymData} lang={lang} t={t} />
        <About gym={gymData} lang={lang} t={t} />
        <Facilities gym={gymData} lang={lang} t={t} />
        <LadiesSection gym={gymData} lang={lang} t={t} />
        <Trainers gym={gymData} lang={lang} t={t} />
        <Membership gym={gymData} lang={lang} t={t} />
        <Gallery gym={gymData} lang={lang} t={t} />
        <Reviews gym={gymData} lang={lang} t={t} />
        <Timings gym={gymData} lang={lang} t={t} />
        <Contact gym={gymData} lang={lang} t={t} />
        <FAQ gym={gymData} lang={lang} t={t} />
      </main>

      <Footer gym={gymData} lang={lang} t={t} />
      <MobileDock gym={gymData} lang={lang} t={t} />
    </div>
  );
}
