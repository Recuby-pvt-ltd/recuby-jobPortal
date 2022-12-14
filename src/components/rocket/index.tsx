import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { motion, useAnimation } from "framer-motion";
import SideImage from "/Right.png";
import SpaceJetImage from "/spacejet.png";
import PlaneImage from "/plane.png";

const Rocket = ({ ...props }) => {
  const jetControl = useAnimation();
  const leftControl = useAnimation();
  const rightControl = useAnimation();
  const centerPlane = useAnimation();

  useScrollPosition(({ prevPos, currPos }) => {
    const currAbsoluteY = Math.abs(currPos.y);
    const prevAbsY = Math.abs(prevPos.y);
    const scrolledPercentage =
      currAbsoluteY /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const rounded = Math.round(scrolledPercentage * 100);

    if (rounded > 50 && rounded < 60) {
      if (currAbsoluteY > prevAbsY) {
        leftControl.start({
          rotate: "-14deg",
          x: -60,
          transition: {
            x: { duration: 3 },
            default: { ease: "linear" },
          },
        });
        rightControl.start({
          rotate: "14deg",
          x: 60,
          transition: {
            x: { duration: 3 },
            default: { ease: "linear" },
          },
        });
      } else if (currAbsoluteY < prevAbsY) {
        leftControl.start({
          x: 0,
          rotate: 0,
          transition: {
            x: { duration: 3 },
            default: { ease: "linear" },
          },
          transitionEnd: {
            visibility: "visible",
          },
        });
        rightControl.start({
          x: 0,
          rotate: 0,
          transition: {
            x: { duration: 3 },
            default: { ease: "linear" },
          },
          transitionEnd: {
            visibility: "visible",
          },
        });
      }
    }
    if (rounded > 70 && rounded < 80) {
      if (currAbsoluteY > prevAbsY) {
        leftControl.start({
          y: "100vh",
          transition: {
            y: { duration: 3 },
            default: { ease: "easeOut" },
          },
          transitionEnd: {
            opacity: 0,
          },
        });
        rightControl.start({
          y: "100vh",
          transition: {
            y: { duration: 3 },
            default: { ease: "easeOut" },
          },
          transitionEnd: {
            opacity: 0,
          },
        });
      } else if (currAbsoluteY < prevAbsY) {
        leftControl.start({
          y: 0,
          transition: {
            y: { duration: 2 },
            default: { ease: "easeIn" },
          },
          transitionEnd: {
            opacity: 100,
          },
        });
        rightControl.start({
          y: 0,
          transition: {
            y: { duration: 2 },
            default: { ease: "easeIn" },
          },
          transitionEnd: {
            opacity: 100,
          },
        });
      }
    }
    if (rounded > 80 && rounded < 90) {
      if (currAbsoluteY > prevAbsY) {
        centerPlane.start({
          y: "100vh",
          transition: {
            y: { duration: 2 },
            default: { ease: "easeOut" },
          },
          transitionEnd: {
            opacity: 0,
          },
        });
      } else if (currAbsoluteY < prevAbsY) {
        centerPlane.start({
          y: 0,
          transition: {
            y: { duration: 2 },
            default: { ease: "easeIn" },
          },
          transitionEnd: {
            opacity: 100,
          },
        });
      }
    }
    if (rounded > 90 && rounded < 100) {
      if (currAbsoluteY > prevAbsY) {
        jetControl.start({
          y: "-100vh",
          x: "200px",
          rotate: "30deg",
          transition: {
            y: { duration: 1 },
            default: { ease: "linear" },
          },
          transitionEnd: {
            opacity: 0,
          },
        });
      } else if (currAbsoluteY < prevAbsY) {
        jetControl.start({
          y: 0,
          x: 0,
          rotate: 0,
          transition: {
            y: { duration: 0.8 },
            default: { ease: "easeIn" },
          },
          transitionEnd: {
            opacity: 100,
          },
        });
      }
    }
  });

  return (
    <div id="rocket" {...props}>
      <motion.div animate={jetControl} className="z-10 space-jet">
        <img
          alt="rocket-img"
          src={SpaceJetImage}
          className="h-[20vw] 2xl:mr-[-1rem]"
        />
      </motion.div>
      <motion.div
        animate={leftControl}
        className="absolute origin-bottom  -top-6  right-36 "
      >
        <img alt="rocket-img" src={SideImage} className="h-[20vw]" />
      </motion.div>
      <motion.div
        animate={centerPlane}
        className="absolute  right-[4rem] top-[-6rem]"
      >
        <img alt="rocket-img" src={PlaneImage} className="h-[29vw] " />
      </motion.div>
      <motion.div
        animate={rightControl}
        className="absolute  -top-6   origin-bottom  right-8"
      >
        <img alt="rocket-img" src={SideImage} className="h-[20vw]" />
      </motion.div>
    </div>
  );
};

export default Rocket;
