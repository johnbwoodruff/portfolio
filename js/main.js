// Wrap every letter in a span
$('.ml1 .letters').each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>')
  );
});
$('.ml16').each(function() {
  $(this).html(
    $(this)
      .text()
      .replace(/([^\x00-\x80]|\w)/g, '<span class="letter">$&</span>')
  );
});

function animateIntro() {
  anime
    .timeline({ loop: true })
    .add({
      targets: '.fa-chevron-down',
      translateY: [0, 8],
      easing: 'easeInQuad',
      duration: 1200
    })
    .add({
      targets: '.fa-chevron-down',
      translateY: [8, 0],
      easing: 'easeOutQuad',
      duration: 1200
    });

  anime
    .timeline({ loop: false })
    .add({
      targets: '.ml1 .letter',
      scale: [0.3, 1],
      opacity: [0, 1],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 800,
      delay: function(el, i) {
        return 70 * (i + 1);
      }
    })
    .add({
      targets: '.ml1 .line',
      scaleX: [0, 1],
      opacity: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      offset: '-=875',
      delay: function(el, i, l) {
        return 80 * (l - i);
      }
    });

  setTimeout(function() {
    anime.timeline({ loop: false }).add({
      targets: '.more-button',
      opacity: [0, 1],
      duration: 'easeOutExpo',
      duration: 2000
    });
    anime.timeline({ loop: false }).add({
      targets: '.ml16 .letter',
      translateY: [-100, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: function(el, i) {
        return 30 * i;
      }
    });
  }, 600);
}

setTimeout(function() {
  animateIntro();
}, 200);

function scrollProjects() {
  var offset = document.querySelector('.hero').clientHeight - window.scrollY;
  window.scrollBy({ top: offset, left: 0, behavior: 'smooth' });
}
