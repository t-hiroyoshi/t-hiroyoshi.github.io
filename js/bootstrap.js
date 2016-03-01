$(document).ready(function () {
  isMobile() && FastClick.attach(document.body);
  $("#posts").find('img').lazyload({
    placeholder: "{{ url_for(theme.images) }}/loading.gif",
    effect: "fadeIn"
  });
  // Define Motion Sequence.
  motionIntegrator
    .add(motionMiddleWares.logo)
    .add(motionMiddleWares.menu)
    .add(motionMiddleWares.postList);
  // Bootstrap Motion.
  CONFIG.motion && motionIntegrator.bootstrap();
});
