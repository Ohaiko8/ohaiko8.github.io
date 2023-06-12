const { innerHeight } = window;

gsap.to(".layers__item", {
   scale: 2.5, stagger: 0, duration: 3,
   scrollTrigger: {
       trigger: ".layers",
       pin: true,
       end: `+=${innerHeight * 0.5}`,
       scrub: 3
   }
});