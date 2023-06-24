document.addEventListener('DOMContentLoaded', () => {
  let tl = new TimelineMax();

  tl.fromTo(
    '.bg-load',
    2,
    { width: '100%' },
    { width: '0%', delay: 5, ease: Expo.easeInOut }
  );

  tl.fromTo(
    '.logo',
    1,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut }
  );
  tl.fromTo(
    '.nav-list',
    1,
    { y: -50, opacity: 0 },
    { y: 0, opacity: 1, ease: Expo.easeInOut }
  );
  tl.fromTo(
    '.bg-video',
    5,
    { width: '0%', opacity: 0 },
    { width: '100%', opacity: 1, ease: Expo.easeInOut }
  );
});
