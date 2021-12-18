gsap.fromTo("h1", { x: 900, y: 200, opacity: 0 }, { opacity: 1, duration: 3 });
gsap.fromTo(
  "#img1",
  { x: 0, y: 0 },
  { x: 920, y: 250, rotation: 360, duration: 3 }
);
gsap.fromTo(
  "#img2",
  { x: 1700, y: 0 },
  { x: 920, y: 250, rotation: 360, duration: 3 }
);

//

// gsap.to("h1", { x: 400 });
// gsap.to(".star", { stagger: 1, x: 450, rotation: 360, duration: 5 });
// gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

// gsap.to(".img1", { x: 750, scale: 3, duration: 3, rotation: 360, y: 300 });
// gsap.from(".img2", { x: 1500, duration: 3 });
// gsap.to(".img2", {
//   x: 750,
//   y: 300,
//   scale: 3,
//   duration: 3,
//   rotation: 360,
//   y: 200,
// });

// const rain = gsap
//   .timeline()
//   .fromTo(
//     "svg",
//     { y: 100, opacity: 0, scale: 0 },
//     {
//       y: 750,
//       duration: 1,
//       opacity: 0.8,
//       scale: 2,
//       // stagger: { amount: 0.7 }
//     }
//   )
//   .to("#svg2", { scale: 8, y: 460, x: 220, duration: 5 });
