<script src='https://cdn.jsdelivr.net/npm/typed.js@2.0.12'></script>;
var typed = new Typed(".typing", {
  strings: ["","Software Engineer", "Front-End Developer", "React Developer"],
  typeSpeed: 90,
  backSpeed: 40,
  loop: true,
});
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun"),
    dayNight.querySelector("i").classList.toggle("fa-moon"),
    document.body.classList.toggle("dark"),
    (localStorage.theme = document
      .getElementById("themesvg")
      .classList.contains("fa-moon")
      ? "light"
      : "dark");
}),
  "dark" === localStorage.theme ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
    ? (document.body.classList.add("dark"),
      dayNight.querySelector("i").classList.add("fa-sun"),
      dayNight.querySelector("i").classList.remove("fa-moon"))
    : (document.body.classList.remove("dark"),
      dayNight.querySelector("i").classList.remove("fa-sun"),
      dayNight.querySelector("i").classList.add("fa-moon"));
const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn"),
  toastDetails = {
    timer: 5e3,
    invalidemail: {
      icon: "fa-circle-info",
      text: "Alert! Invalid email address!",
    },
    details: {
      icon: "fa-circle-info",
      text: "Kindly! Fill the required details",
    },
    sended: { icon: "fa-circle-info", text: "Your Email Sent Successfully!" },
    cvdownlaod: { icon: "fa-circle-info", text: "CV is downloading..!" },
    networkerror: {
      icon: "fa-circle-info",
      text: "Network Error! Please try again later.",
    },
  },
  removeToast = (a) => {
    a.classList.add("hide"),
      a.timeoutId && clearTimeout(a.timeoutId),
      setTimeout(() => a.remove(), 500);
  },
  createToast = (a) => {
    const { icon: b, text: c } = toastDetails[a],
      d = document.createElement("li");
    (d.className = `toast ${a}`),
      (d.innerHTML = `<div class="column">
                         <i class="fa-solid ${b}"></i>
                         <span>${c}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`),
      notifications.appendChild(d),
      (d.timeoutId = setTimeout(() => removeToast(d), toastDetails.timer));
  };
function codeAddress() {
  createToast("welcome"), setTimeout(() => createToast("info"), 1500);
}
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let b = 0; b < totalNavList; b++) {
  const c = navList[b].querySelector("a");
  c.addEventListener("click", function () {
    removebacksection();
    for (let a = 0; a < totalNavList; a++)
      navList[a].querySelector("a").classList.contains("active") &&
        addbacksection(a),
        navList[a].querySelector("a").classList.remove("active");
    this.classList.add("active"),
      showSection(this),
      1200 > window.innerWidth && asideSectionTogglerBtn();
  });
}
function removebacksection() {
  for (let a = 0; a < totalSection; a++)
    allSection[a].classList.remove("back-section");
}
function addbacksection(a) {
  allSection[a].classList.add("back-section");
}
function showSection(a) {
  for (let b = 0; b < totalSection; b++)
    allSection[b].classList.remove("active");
  const b = a.getAttribute("href").split("#")[1];
  document.querySelector("#" + b).classList.add("active");
}
function updateNav(a) {
  for (let b = 0; b < totalNavList; b++) {
    navList[b].querySelector("a").classList.remove("active");
    const c = a.getAttribute("href").split("#")[1];
    c === navList[b].querySelector("a").getAttribute("href").split("#")[1] &&
      navList[b].querySelector("a").classList.add("active");
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  showSection(this), updateNav(this);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open"), navTogglerBtn.classList.toggle("open");
  for (let a = 0; a < totalSection; a++) allSection[a].classList.toggle("open");
}
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);
function navHighlighter() {
  let a = window.pageYOffset;
  sections.forEach((b) => {
    const c = b.offsetHeight,
      d = b.offsetTop - 50;
    (sectionId = b.getAttribute("id")),
      a > d && a <= d + c
        ? document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            .classList.add("active")
        : document
            .querySelector(".navigation a[href*=" + sectionId + "]")
            .classList.remove("active");
  });
}
function togglearea() {
  let a = document.getElementById("arrdown"),
    b = document.getElementById("arrup"),
    c = document.getElementById("display_row");
  a.classList.toggle("hidden"),
    b.classList.toggle("hidden"),
    c.classList.toggle("hidden");
}
function togglearea2() {
  let a = document.getElementById("arrdown2"),
    b = document.getElementById("arrup2"),
    c = document.getElementById("display_row2");
  a.classList.toggle("hidden"),
    b.classList.toggle("hidden"),
    c.classList.toggle("hidden");
}
function togglearea3() {
  let a = document.getElementById("arrdown3"),
    b = document.getElementById("arrup3"),
    c = document.getElementById("display_row3");
  a.classList.toggle("hidden"),
    b.classList.toggle("hidden"),
    c.classList.toggle("hidden");
}
$(".back-to-top").click(function () {
  window.addEventListener("load", () => {
    100 < window.scrollY
      ? backtotop.classList.add("active")
      : backtotop.classList.remove("active");
  });
});
function sendMail() {
  if (
    "" == document.getElementById("name").value ||
    "" == document.getElementById("email").value ||
    "" == document.getElementById("message").value
  )
    createToast("details");
  else if (
    !document
      .getElementById("email")
      .value.match(
        /^([a-zA-Z])([\w-.]*)@([\w]+)([\w-.])*\.(aero|asia|be|biz|com.ar|ca|co|co.in|co.jp|co.kr|co.sg|com|com.ar|com.mx|com.sg|com.ph|co.uk|coop|de|edu|es|fr|gov|in|info|it|jobs|ltd|mil|mobi|museum|name|net|net.mx|org|ru|us)+$/
      )
  )
    createToast("invalidemail"), document.getElementById("email").focus();
  else {
    const a = {
      to: "asimshakoor920830@gmail.com",
      subject: `New Contact Form Submission - ${
        document.getElementById("subject").value || "No Subject"
      }`,
      template: "contact_form",
      templateData: {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value || "No Subject",
        message: document.getElementById("message").value,
        timestamp: new Date().toLocaleString(),
      },
      from: "asimshakoor920830@gmail.com",
    };
    fetch("https://email-server-one.vercel.app/api/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(a),
    })
      .then((a) => a.json())
      .then((a) => {
        a.success
          ? ((document.getElementById("name").value = ""),
            (document.getElementById("email").value = ""),
            (document.getElementById("subject").value = ""),
            (document.getElementById("message").value = ""),
            createToast("sended"))
          : (console.error("Failed"), createToast("networkerror"));
      })
      .catch(() => {
        console.error("Error"), createToast("networkerror");
      });
  }
}
function downlaodcv() {
  createToast("cvdownlaod");
}
let index = 0;
const totalWorkItems = $(".work-item").length;
let widthhh, newHeight, adjustedHeight;
$(document).ready(function () {
  const a = $(window).height();
  (newHeight = 0.25 * a),
    (adjustedHeight = a - newHeight),
    $(".lightbox-img").css("max-height", adjustedHeight + "px"),
    $(".btn-detailss").click(function () {
      (index = $(this).parent().parent().parent().parent().parent().index()),
        $(".lightbox").addClass("open"),
        $("body").css("overflow", "hidden"),
        lightboxSlideShow();
    }),
    $(".lightbox .prev").click(function () {
      0 == index ? (index = totalWorkItems - 1) : index--, lightboxSlideShow();
    }),
    $(".lightbox .next").click(function () {
      index == totalWorkItems - 1 ? (index = 0) : index++, lightboxSlideShow();
    }),
    $(".lightbox-close").click(function () {
      $("body").css("overflow", "auto"), $(".lightbox").removeClass("open");
    }),
    $(".lightbox").click(function (a) {
      $(a.target).hasClass("lightbox") &&
        ($("body").css("overflow", "auto"), $(this).removeClass("open"));
    });
});
function lightboxSlideShow() {
  const a = $(".work-item").eq(index).find("img").attr("data-large"),
    b = $(".work-item").eq(index).find("h4").html(),
    c = $(".work-item").eq(index).find("p").html(),
    d = $(".work-item").eq(index).find("a").attr("href");
  $(".lightbox-img").attr("src", a),
    $(".lightbox-category").html(b),
    $(".lightbox-des").html(c),
    $(".lightbox-link").attr("href", d),
    $(".lightbox-counter").html(index + 1 + "/" + totalWorkItems),
    (widthhh = $(".lightbox-img").width()),
    $(".lightbox-des").css("max-width", widthhh + "px");
}
function notifyVisitor() {
  fetch(
    "https://api.ipgeolocation.io/ipgeo?apiKey=8eae90ff90b145d1b700fa3f96d986b3"
  )
    .then((a) => a.json())
    .then((a) => {
      const b = {
        to: "asimshakoor920830@gmail.com",
        subject: "New Portfolio Visitor Alert",
        template: "visitor_notification",
        templateData: {
          ipAddress: a.ip,
          location: `${a.city}, ${a.state_prov}, ${a.country_name}, ${a.continent_name}`,
          timezone: a.time_zone.name,
          userAgent: navigator.userAgent,
          referrer: document.referrer || "Direct Visit",
          timestamp: new Date().toLocaleString(),
          city: a.city,
          state: a.state_prov,
          country: a.country_name,
          continent: a.continent_name,
        },
        from: "asimshakoor920830@gmail.com",
      };
      fetch("https://email-server-one.vercel.app/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(b),
      })
        .then((a) => a.json())
        .then((a) => {
          a.success ? console.log("Success") : console.error("Failed");
        })
        .catch(() => console.error("Error"));
    })
    .catch(() => console.error("Failed"));
}
(window.onload = notifyVisitor),
  document.addEventListener("DOMContentLoaded", function () {
    const a = document.getElementById("freelancePopup"),
      b = document.getElementById("closePopup");
    setTimeout(() => {
      a && a.classList.add("show");
    }, 3e3),
      b &&
        b.addEventListener("click", function () {
          a.classList.remove("show");
        }),
      a &&
        a.addEventListener("click", function (b) {
          b.target === a && a.classList.remove("show");
        });
    const c = document.querySelector(".hire-btn");
    c &&
      c.addEventListener("click", function () {
        setTimeout(() => {
          a.classList.remove("show");
        }, 100);
      });
  });
