"use client";
import oticonLogo from "@/assets/logo-oticon.png";
import signiaLogo from "@/assets/logo-signia.png";
import beltoneLogo from "@/assets/logo-beltone.png";
import starkeyLogo from "@/assets/logo-starkey.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import harvardinnovationlabsLogo from "@/assets/logo-harvard-innovation-labs.png";
import harvarduniversityLogo from "@/assets/logo-harvard-university.png";
import widexLogo from "@/assets/logo-widex.png";
import { motion } from "framer-motion";
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div
          className="flex overflow-hidden"
          style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)" }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={harvardinnovationlabsLogo} alt="Harvard Innovation Labs" className="logo-ticker-image" />
            <Image src={oticonLogo} alt="Oticon" className="logo-ticker-image" />
            <Image src={signiaLogo} alt="Signia" className="logo-ticker-image" />
            <Image src={beltoneLogo} alt="Beltone" className="logo-ticker-image" />
            <Image src={harvarduniversityLogo} alt="Harvard University" className="logo-ticker-image" />
            <Image src={starkeyLogo} alt="celestial logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="ReSound" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image" />
            <Image src={widexLogo} alt="Widex" className="logo-ticker-image" />

            <Image src={harvardinnovationlabsLogo} alt="Harvard logo" className="logo-ticker-image" />
            <Image src={oticonLogo} alt="Oticon" className="logo-ticker-image" />
            <Image src={signiaLogo} alt="Signia" className="logo-ticker-image" />
            <Image src={beltoneLogo} alt="Beltone" className="logo-ticker-image" />
            <Image src={harvarduniversityLogo} alt="Harvard University" className="logo-ticker-image" />
            <Image src={starkeyLogo} alt="celestial logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="ReSound" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex logo" className="logo-ticker-image" />
            <Image src={widexLogo} alt="Widex" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
