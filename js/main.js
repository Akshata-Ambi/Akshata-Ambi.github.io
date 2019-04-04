/***********
 *  JQuery Function needed for website
 ************/
$(function() {
  //Navbar active class toggle

  //Smooth Scrolling
  $("nav a, a.logo").bind("click", function() {
    //Selecting all the nav area and the anchors within it then attaching a function to click event
    $("html, body")
      .stop()
      .animate(
        {
          //Stop any animation currently going on in html or body of the page and then create new animate function using jquery animate function
          scrollTop: $($(this).attr("href")).offset().top //ScrollTop is used to determine where the top of the page should be, then we are looking at href attribute and setting the value at scrollTop with an offset of 100 so that the heading doesnt go under the navbar
        },
        1500,
        "easeInOutExpo"
      ); //Animation will take 1.5s and we will use easeInOutExpo animation from Easing library
    if (!$(this).hasClass("active")) {
      $("#nav_bar nav a.active").removeClass("active");
      $(this).addClass("active");
    } //Adding active class for scrollspy to work
  });

  //Toggle navbar when in mobile view
  $("#mobile-link").click(function() {
    $("#nav_bar nav").toggleClass("show");
    return false;
  });

  $("#nav_bar nav a").removeClass("active");
  $(".home-link").addClass("active");
  $(".front-page h1").blast({
    delimiter: "character",
    tag: "span"
  });
  a = 0;
  b = 0;
  $(".front-page .blast").each(function() {
    if (a == 300) {
      a = 400;
    }
    if (a == 1100) {
      a = 1200;
    }
    var el = $(this);
    setTimeout(function() {
      el.addClass("animated bounceIn");
    }, a);
    if (a < 1200) {
      a = a + 100;
    } else {
      a = a + 80;
    }
  });
  setTimeout(function() {
    $(".front-page .blast").removeClass("animated bounceIn");
    $(".front-page .blast").css("opacity", 1);
    $(".front-page .blast").mouseenter(function() {
      var el = $(this);
      $(this).addClass("animated rubberBand");
      $(this).one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function() {
          el.removeClass("animated rubberBand");
        }
      );
    });
  }, 3000);
  $(".front-page .flat-button").mouseenter(function() {
    var el = $(this);
    $(this).addClass("animated rubberBand");
    $(this).one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function() {
        el.removeClass("animated rubberBand");
      }
    );
  });

  TweenMax.to($(".view")[0], 0.4, {
    opacity: 1,
    ease: Power2.easeIn
  });

  /** START Technical Skills Progress */

  var bodyLength = $(".main-body").length,
    technical_progress_check = false,
    skillsSection = $(".skills-page"),
    technicalSkills = $(".technical-skills");

    function skillsProgress() {
      $('.timer').countTo();
      $('.progress-bar-container').each(function () {
          var thisElement = $(this),
              timer = thisElement.find('.timer'),
              dataTo = timer.data("to");
          thisElement.find('.progress-bar').css({ "width": dataTo + "%" });
          timer.css({ "left": "calc(" + dataTo + "% - 19px)" });
      });
  }
  
  skillsSection.on("scroll", function() {
    var offsetTop = getOffsetTop($(this), technicalSkills);
    if (
      !technical_progress_check &&
      offsetTop <
        $(this)
          .parent()
          .height()
    ) {
      skillsProgress();
      technical_progress_check = true;
    }
  });

  // on mobile size
  $(document, window).on("scroll", function() {
    if (bodyLength || window.matchMedia("(max-width: 767px)").matches) {
      var bodyScrollTop = $(document, window).scrollTop(),
        techoffsetTop = technicalSkills.offset().top - $(window).height() / 2;
      if (!technical_progress_check && bodyScrollTop >= techoffsetTop) {
        skillsProgress();
        technical_progress_check = true;
      }
    }
  });
  /** END Technical Skills Progress */

  /**** EasyPieChart Circle Progress ****/
    //circle progress additional skills
    $('.chart').easyPieChart({
      barColor: '#1894ff',
      trackColor: 'rgba(255,255,255,0)',
      scaleColor: 'rgba(255,255,255,0)',
      lineWidth: '5',
      size: 130,
      lineCap: 'square'
  });


});

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        let currentYear = new Date().getFullYear();
        let targetDate = new Date(currentYear + 0, 5);
        let onStart = () => {
            document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ days, hours, minutes, seconds }) => {
            document.querySelector('.countdown-item.days').innerHTML = days;
            document.querySelector('.countdown-item.hours').innerHTML = hours;
            document.querySelector('.countdown-item.minutes').innerHTML = minutes;
            document.querySelector('.countdown-item.seconds').innerHTML = seconds;
        };
        let options = new LsCountdownOptions({ targetDate, onStart, onTick });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;
    });
})();

//Js related to scrollspy

window.onload = function() {
  scrollSpy("#nav", {
    sectionClass: ".view",
    menuActiveTarget: ".links",
    offset: 100
  });
};
//Scroll to top on page reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}


