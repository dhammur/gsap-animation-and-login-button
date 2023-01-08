import React, { useState } from "react";
import "./styles.css";
import { Suspense } from "react";
import { delay, motion, MotionConfig, useMotionValue } from "framer-motion";
import { Shapes } from "./Shapes";
import { transition } from "./settings";
import useMeasure from "react-use-measure";
import { gsap } from 'gsap';
import "./gsaps.scss";

const Login = () => {

  const [ref, bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  gsap.fromTo(".box", {
    y: 500, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 0,
    opacity: 1
  });
  gsap.fromTo(".ddd", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 1,
    opacity: 1,
    stagger: .08
  });
  gsap.fromTo(".box2", {
    y: 350, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    // delay: 0.2,
    opacity: 1,
  });
  gsap.fromTo(".Transform", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 0.4,
    opacity: 1
  });
  gsap.fromTo(".Accelerate", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 0.6,
    opacity: 1
  });
  gsap.fromTo(".We", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 1.4,
    opacity: 1
  });
  gsap.fromTo(".Revolutionize", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 1.5,
    opacity: 1
  });
  gsap.fromTo(".User", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 1.6,
    opacity: 1
  });
  gsap.fromTo(".Experience", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 1.7,
    opacity: 1
  });
  gsap.fromTo(".Using", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 1.8,
    opacity: 1
  });
  gsap.fromTo(".GSAP", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 1.9,
    opacity: 1
  });
  gsap.fromTo(".Technology", {
    y: 100, //normal value
    duration: 1,
    opacity: 0
  }, {
    y: 0,
    delay: 2,
    opacity: 1
  });

  return (
    <div className="formContainer">
      <MotionConfig transition={transition}>
        <motion.button
          ref={ref}
          initial={false}
          animate={isHover ? "hover" : "rest"}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.5 },
            press: { scale: 1.4 }
          }}
          onHoverStart={() => {
            resetMousePosition();
            setIsHover(true);
          }}
          onHoverEnd={() => {
            resetMousePosition();
            setIsHover(false);
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2);
            mouseY.set(e.clientY - bounds.y - bounds.height / 2);
          }}
        >
          <motion.div
            className="shapes"
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 1 }
            }}
          >
            <div className="pink blush" />
            <div className="blue blush" />
            <div className="container">
              <Suspense fallback={null}>
                <Shapes
                  isHover={isHover}
                  isPress={isPress}
                  mouseX={mouseX}
                  mouseY={mouseY}
                />
              </Suspense>
            </div>
          </motion.div>
          <motion.div
            variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
            className="label"
          >
            Login
          </motion.div>
        </motion.button>
      </MotionConfig>

      <div className="box">
        <div className="sec1">
          {/* <div className="ddd Design">Design</div> */}
          <div className="ddd Design">T</div>
          <div className="ddd Design">r</div>
          <div className="ddd Design">a</div>
          <div className="ddd Design">n</div>
          <div className="ddd Design">s</div>
          <div className="ddd Design">f</div>
          <div className="ddd Design">o</div>
          <div className="ddd Design">r</div>
          <div className="ddd Design">m</div>
          {/* <div className="ddd Transform">Transform</div> */}
          {/* <div className="ddd Accelerate">Accelerate</div> */}
        </div>
        <div className="sec2">
          <div className="We">We</div>
          <div className="Revolutionize">Revolutionize</div>
          <div className="User">User</div>
          <div className="Experience">Experience</div>
        </div>
        <div className="sec3">
          <div className="Using">Using</div>
          <div className="GSAP">GSAP</div>
          <div className="Technology">Technology</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
