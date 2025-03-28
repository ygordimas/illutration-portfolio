"use client";

import React, { forwardRef } from "react";
import { motion, useAnimate } from "framer-motion";
import { useContactModalContext } from "../../../context/ContactModalContext";
import { LiaGrinWink, LiaHandPeace } from "react-icons/lia";
import useWindowSize from "../../../hooks/useWindowSize";
import PrimaryNavButton from "../PrimaryNavButton";

// function ContactButton() {
//   const windowsWidth = useWindowSize();
//   const { setOpenModal } = useContactModalContext();

//   const [winkScope, winkAnimate] = useAnimate();
//   const [handScope, handAnimate] = useAnimate();

//   const handleEnterAnimation = () => {
//     winkAnimate(winkScope.current, winkVariant.animate, winkDuration);
//     handAnimate(
//       handScope.current,
//       handVariant.animate,
//       handVariant.animate.transition,
//     );
//   };

//   const handleExitAnimation = () => {
//     winkAnimate(winkScope.current, winkVariant.initial, winkDuration);
//     handAnimate(handScope.current, handVariant.initial, handDuration.exit);
//   };

//   const winkVariant = {
//     initial: {
//       top: "400%",
//       opacity: 0,
//       scale: 0.2,
//       x: "-20%",
//       y: "-40%",
//     },
//     animate: {
//       top: "0",
//       opacity: 1,
//       scale: 1,
//       x: "-80%",
//       y: "-25%",
//     },
//   };

//   const winkDuration = {
//     duration: 0.2,
//   };

//   const handVariant = {
//     initial: {
//       scale: 0,
//     },
//     animate: {
//       scale: 1,
//       rotate: ["-15deg", "15deg", "-15deg"],
//       transition: {
//         duration: 0.2,
//         delay: 0.1,
//         rotate: {
//           duration: 0.8,
//           repeat: Infinity,
//           ease: [0.22, 1, 0.36, 1],
//         },
//       },
//     },
//   };

//   const handDuration = {
//     enter: {
//       duration: 0.2,
//       delay: 0.1,
//     },
//     exit: {
//       duration: 0.1,
//     },
//   };

//   return (
//     <motion.div
//       key="contact"
//       className="flex"
//       onHoverStart={() => handleEnterAnimation()}
//       onHoverEnd={() => handleExitAnimation()}
//     >
//       <PrimaryNavButton label="Contact" onClick={() => setOpenModal(true)}>
//         <div className="absolute left-[5px] top-0 h-2 w-2 rounded-full">
//           <motion.div
//             ref={winkScope}
//             className="absolute left-0 -translate-x-[80%] -translate-y-[50%] rounded-full bg-yellow-400 text-4xl text-myblue-800"
//             variants={winkVariant}
//             initial="initial"
//           >
//             <LiaGrinWink />
//           </motion.div>
//           <motion.div
//             ref={handScope}
//             variants={handVariant}
//             initial="initial"
//             className="absolute left-0.5 top-0.5 rounded-full bg-yellow-400 text-2xl text-myblue-800"
//           >
//             <LiaHandPeace />
//           </motion.div>
//         </div>
//       </PrimaryNavButton>
//     </motion.div>
//   );
// }

const ContactButton = forwardRef((props, ref) => {
  const windowsWidth = useWindowSize();
  const { setOpenModal } = useContactModalContext();

  const [balloonScope, balloonAnimate] = useAnimate();
  const [winkScope, winkAnimate] = useAnimate();
  const [handScope, handAnimate] = useAnimate();

  const handleEnterAnimation = () => {
    winkAnimate(winkScope.current, winkVariant.animate, winkDuration);
    handAnimate(
      handScope.current,
      handVariant.animate,
      handVariant.animate.transition,
    );
    balloonAnimate(
      balloonScope.current,
      balloonVariant.animate,
      handVariant.animate.transition,
    );
  };

  const handleExitAnimation = () => {
    winkAnimate(winkScope.current, winkVariant.initial, winkDuration);
    handAnimate(handScope.current, handVariant.initial, handDuration.exit);
    balloonAnimate(
      balloonScope.current,
      balloonVariant.initial,
      handDuration.exit,
    );
  };

  const balloonVariant = {
    initial: {
      scaleY: "0%",
      x: "-50%",
      y: "-100%",
    },
    animate: {
      scaleY: "100%",
      x: "-50%",
      y: "-100%",
    },
  };

  const winkVariant = {
    initial: {
      top: "400%",
      opacity: 0,
      scale: 0.2,
      x: "-20%",
      y: "35%",
    },
    animate: {
      top: "0",
      opacity: 1,
      scale: 1,
      x: "-50%",
      y: "35%",
    },
  };

  const winkDuration = {
    duration: 0.1,
  };

  const handVariant = {
    initial: {
      scale: 0,
    },
    animate: {
      scale: 1,
      rotate: ["-15deg", "15deg", "-15deg"],
      transition: {
        duration: 0.2,
        delay: 0.1,
        rotate: {
          duration: 0.8,
          repeat: Infinity,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  };

  const handDuration = {
    enter: {
      duration: 0.2,
      delay: 0.1,
    },
    exit: {
      duration: 0.1,
    },
  };

  return (
    <motion.div
      ref={ref}
      {...props}
      className="flex"
      onHoverStart={() => handleEnterAnimation()}
      onHoverEnd={() => handleExitAnimation()}
      onClick={() => setOpenModal(true)}
    >
      <PrimaryNavButton label="Contact">
        <motion.div
          ref={balloonScope}
          variants={balloonVariant}
          initial="initial"
          className="absolute -top-1/2 left-1/2 h-full w-full origin-bottom rounded-xl bg-yellow-400"
        >
          <motion.div
            ref={winkScope}
            className="absolute left-1/2 top-1/2 -translate-x-[50%] translate-y-[30%] rounded-full bg-yellow-400 text-4xl text-myblue-800"
            variants={winkVariant}
            initial="initial"
          >
            <LiaGrinWink />
          </motion.div>
          <motion.div
            ref={handScope}
            variants={handVariant}
            initial="initial"
            className="absolute left-1/2 top-0.5 rounded-full bg-yellow-400 text-2xl text-myblue-800"
          >
            <LiaHandPeace />
          </motion.div>
          <div
            className="absolute left-0 top-full h-1/2 w-full bg-yellow-400"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 50% 100%)",
            }}
          ></div>
        </motion.div>
      </PrimaryNavButton>
    </motion.div>
  );
});

ContactButton.displayName = "MyContactButton";

export default ContactButton;
