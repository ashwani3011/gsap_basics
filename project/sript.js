// gsap.to("h1", { x: 400 });
// gsap.to(".star", { stagger: 1, x: 450, rotation: 360, duration: 5 });
// gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

gsap.to(".img1", { x: 750, scale: 3, duration: 3, rotation: 360, y: 300 });
gsap.from(".img2", { x: 1500, duration: 3 });
gsap.to(".img2", {
  x: 750,
  y: 300,
  scale: 3,
  duration: 3,
  rotation: 360,
  y: 200,
});
