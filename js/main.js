document.addEventListener('DOMContentLoaded', function() {
    var arrow = document.getElementById('arrow');
    var arrowEnabled = false;

    arrow.onclick = function () {
        scrollTo(document.documentElement); 
    }

    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 460 && scrolled < 2500) {
            if (!arrowEnabled) {
                arrow.classList.add("show");
                arrow.classList.remove("hidden");
                arrowEnabled = true;
            }
        } else {
            if (arrowEnabled) {
                arrow.classList.add("hidden");
                arrow.classList.remove("show");
                arrowEnabled = false;
            }
        }
    }
});

function scrollTo(element, to = 0, duration= 1000) {

    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = (() => {

      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    });

    animateScroll();
  };

  Math.easeInOutQuad = function (t, b, c, d) {

    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };