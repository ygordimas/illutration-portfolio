// @ts-nocheck
"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import NavMenu from "./NavMenu";
import HeaderLink from "./HeaderLink";
import { useGlobalContext } from "../../context/store";
import { useEffect, useState } from "react";
import StripesSVG from "../layout/StripesSVG";
import { usePathname } from "next/navigation";
import MobileNavMenu from "../mobileFooter/MobileNavMenu";
import useWindowSize from "../../hooks/useWindowSize";
import TextEffect from "../layout/TextEffect";
import LogoImpossible from "../layout/LogoImpossible";
import LogoMentra from "../layout/LogoMentra";
import LogoZaltys from "../layout/LogoZaltys";
import LogoIkapyto from "../layout/LogoIkapyto";
import LogoQuickRemarks from "../layout/LogoQuickRemarks";
import LogoLobular from "../layout/LogoLobular";

export default function Header({}) {
  const { isOpen, setIsOpen } = useGlobalContext();
  const { hideHeader } = useGlobalContext();
  const windowsWidth = useWindowSize();

  const headerVariants = {
    show: { opacity: 1, transition: { duration: 0.35, ease: "easeInOut" } },
    hide: { opacity: 0 },
  };

  return (
    <>
      <header className="sticky top-2 z-20 flex  w-full">
        <motion.div
          key="header"
          variants={headerVariants}
          animate={hideHeader ? "hide" : "show"}
          className="relative flex h-fit w-full flex-col xl:flex-row"
        >
          <div
            className="relative flex w-full items-center justify-center rounded-full border-4 border-myblue-800 bg-mygreen-500 p-2 lg:justify-between"
            style={{
              boxShadow:
                "rgba(6, 152, 214, 0.4) 0px 0px 0px 2px, rgba(66, 152, 214, 0.65) 0px 4px 6px -1px, rgba(6, 152, 214, 0.08) 0px 1px 0px inset",
            }}
          >
            <div className="relative box-border flex w-full cursor-default flex-col items-center rounded-full  border-mypink-300 bg-mygreen-500 p-2">
              <Link className="relative w-full" href={"/"}>
                <LogoZaltys />
              </Link>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full rounded-full bg-myblue-800 px-2 font-singo text-base tracking-wider text-mygreen-400">
                <p>3D artist & illustrator</p>
              </div>
              {/* <div
              className="absolute left-1/2 -translate-x-1/2 -translate-y-[calc(50%+4px)] rounded-full border-2 border-mypink-300 bg-mygreen-500 text-xl tracking-wider text-myblue-800 max-xl:top-0 max-xl:text-xl xl:bottom-0 xl:translate-y-1/2"
              style={
                {
                  // boxShadow: "inset 0 0 0 2px rgb(245, 107, 124)",
                }
              }
            >
              <p className="px-4 py-1 font-singoRound">
                3D ARTIST & ILLUSTRATOR
              </p>
            </div> */}
            </div>

            {/* *****MOBILE HEADER BUTTONS***** */}
          </div>
          <div className="flex w-full grow items-center justify-end  gap-2">
            <HeaderLink label="Illustrations" href={"/"} />
            <HeaderLink label="Game Art" href={"/game-art"} />
            <HeaderLink label="Abstract Art" href={"/abstract-art"} />
          </div>
        </motion.div>
      </header>
    </>
  );
}

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ title, href }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-6xl">
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};
