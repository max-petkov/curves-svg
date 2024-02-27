gsap.registerPlugin(MotionPathPlugin);

const duration = 4;
initYellowShine();
initBlueShine();
initGreenShine();
drawLines();

function drawLines() {
  const yellowLine = document.querySelector(".line--yellow");
  const yellowShines = document.querySelectorAll("[class*='--yellow']:not(.line--yellow)");
  const greenLine = document.querySelector(".line--green");
  const greenShines = document.querySelectorAll("[class*='--green']:not(.line--green)");
  const blueLine = document.querySelector(".line--blue");
  const blueShines = document.querySelectorAll("[class*='--blue']:not(.line--blue)");
  const tl = gsap.timeline();

  gsap.set([yellowLine, greenLine, blueLine], {
    attr: {
      "stroke-dashoffset": (i, el) => el.getTotalLength(),
      "stroke-dasharray": (i, el) => el.getTotalLength(),
    },
  });

  gsap.set([yellowShines, blueShines, greenShines], {
    scale: 0,
  });

  tl.to([yellowLine, greenLine, blueLine], {
    attr: {
      "stroke-dashoffset": (i, el) => 0,
    },
    duration: duration,
    ease: Power2.easeInOut,
    stagger: 0.1,
    delay: 0.1,
  }).to(
    [yellowShines, blueShines, greenShines],
    {
      scale: 1,
      duration: duration,
    },
    "<60%"
  );
}

function initGreenShine() {
  gsap.to(".end--green", {
    motionPath: {
      path: ".line--green",
      align: ".line--green",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });

  gsap.to(".shine--green", {
    motionPath: {
      path: ".line--green",
      align: ".line--green",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0.6,
      end: 1.6,
    },
    repeat: -1,
    transformOrigin: "50% 50%",
    duration: 20,
    ease: "linear"
  });

  gsap.to(".shine--green-2", {
    motionPath: {
      path: ".line--green",
      align: ".line--green",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0.3,
      end: 1.3,
    },
    repeat: -1,
    delay: 0.5,
    transformOrigin: "50% 50%",
    duration: 20,
    ease: "linear"
  });
}

function initBlueShine() {
  gsap.to(".end--blue", {
    motionPath: {
      path: ".line--blue",
      align: ".line--blue",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });

  gsap.to(".shine--blue", {
    motionPath: {
      path: ".line--blue",
      align: ".line--blue",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0.7,
      end: 1.7,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });

  gsap.to(".shine--blue-2", {
    motionPath: {
      path: ".line--blue",
      align: ".line--blue",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0.25,
      end: 1.25,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });
}

function initYellowShine() {
  gsap.to(".end--yellow", {
    motionPath: {
      path: ".line--yellow",
      align: ".line--yellow",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });

  gsap.to(".shine--yellow", {
    motionPath: {
      path: ".line--yellow",
      align: ".line--yellow",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0.7,
      end: 1.7,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });

  gsap.to(".shine--yellow-2", {
    motionPath: {
      path: ".line--yellow",
      align: ".line--yellow",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0.4,
      end: 1.4,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });

  gsap.to(".shine--yellow-3", {
    motionPath: {
      path: ".line--yellow",
      align: ".line--yellow",
      alignOrigin: [0.5, 0.5],
      autoRotate: true,
      start: 0.1,
      end: 1.1,
    },
    transformOrigin: "50% 50%",
    duration: duration + 0.2,
    ease: Power1.easeInOut
  });
}

// function initGreenShine() {
//   gsap.to(".end--green", {
//     motionPath: {
//       path: ".line--green",
//       align: ".line--green",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });

//   gsap.to(".shine--green", {
//     motionPath: {
//       path: ".line--green",
//       align: ".line--green",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//       start: 1.6,
//       end: 0.6,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });

//   gsap.to(".shine--green-2", {
//     motionPath: {
//       path: ".line--green",
//       align: ".line--green",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//       start: 1.3,
//       end: 0.3,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });
// }

// function initBlueShine() {
//   gsap.to(".end--blue", {
//     motionPath: {
//       path: ".line--blue",
//       align: ".line--blue",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });

//   gsap.to(".shine--blue", {
//     motionPath: {
//       path: ".line--blue",
//       align: ".line--blue",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//       start: 1.7,
//       end: 0.7,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });

//   gsap.to(".shine--blue-2", {
//     motionPath: {
//       path: ".line--blue",
//       align: ".line--blue",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//       start: 1.25,
//       end: 0.25,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });
// }

// function initYellowShine() {
//   gsap.to(".end--yellow", {
//     motionPath: {
//       path: ".line--yellow",
//       align: ".line--yellow",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });

//   gsap.to(".shine--yellow", {
//     motionPath: {
//       path: ".line--yellow",
//       align: ".line--yellow",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//       start: 1.7,
//       end: 0.7,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });

//   gsap.to(".shine--yellow-2", {
//     motionPath: {
//       path: ".line--yellow",
//       align: ".line--yellow",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//       start: 1.4,
//       end: 0.4,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });

//   gsap.to(".shine--yellow-3", {
//     motionPath: {
//       path: ".line--yellow",
//       align: ".line--yellow",
//       alignOrigin: [0.5, 0.5],
//       autoRotate: true,
//       start: 1.1,
//       end: 0.1,
//     },
//     transformOrigin: "50% 50%",
//     duration: 0,
//   });
// }
