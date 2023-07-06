(function ($) {
  // Show current year
  $("#current-year").text(new Date().getFullYear());

  // Remove no-js class
  $("html").removeClass("no-js");

  // Animate to section when nav is clicked
  $("header a").click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass("no-scroll")) return;

    e.preventDefault();
    var heading = $(this).attr("href");
    var scrollDistance = $(heading).offset().top;

    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      Math.abs(window.pageYOffset - $(heading).offset().top) / 1
    );

    // Hide the menu once clicked if mobile
    if ($("header").hasClass("active")) {
      $("header, body").removeClass("active");
    }
  });

  // Scroll to first element
  $("#lead-down span").click(function () {
    var scrollDistance = $("#lead").next().offset().top;
    $("html, body").animate(
      {
        scrollTop: scrollDistance + "px",
      },
      500
    );
  });

  // Open mobile menu
  $("#mobile-menu-open").click(function () {
    $("header, body").addClass("active");
  });

  // Close mobile menu
  $("#mobile-menu-close").click(function () {
    $("header, body").removeClass("active");
  });
})(jQuery);

// old app js content



document.addEventListener("DOMContentLoaded", function () {
  var animationList = document.getElementById("animation-list");
  var firstTimeRendered = localStorage.getItem("firstTimeRendered");

  if (!firstTimeRendered) {
    animationList.style.visibility = "hidden";
    localStorage.setItem("firstTimeRendered", true);
  } else {
    animationList.style.visibility = "visible";
  }
});

function showSpinner() {
  var button = document.getElementById("analyzeButtonText");
  var spinnerContainer = document.getElementById("spinnerContainer");

  // Hide the button text and display the spinner
  button.style.visibility = "hidden";
  spinnerContainer.style.visibility = "visible";

  setTimeout(function () {
    // Simulating task completion
    hideSpinner();
  }, 5000);
}

function hideSpinner() {
  var button = document.getElementById("analyzeButtonText");
  var spinnerContainer = document.getElementById("spinnerContainer");

  // Hide the spinner and display the button text
  spinnerContainer.style.visibility = "hidden";
  button.style.visibility = "visible";
}

// Function to open the popup
function openPopup() {
  document.getElementById("popupContainer").style.display = "flex";
  var popupContent = document.querySelector(".popup-content");
  var rightDiv = document.getElementById("right1");
  var leftDiv = document.getElementById("right2");

  popupContent.classList.add("show");
  rightDiv.classList.add("show");
  leftDiv.classList.add("show");
}

// Function to close the popup
function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
  var popupContent = document.querySelector(".popup-content");
  var rightDiv = document.getElementById("right1");
  var leftDiv = document.getElementById("right2");

  popupContent.classList.remove("show");
  rightDiv.classList.remove("show");
  leftDiv.classList.remove("show");
}

// Event listener for the open popup button
document.getElementById("openPopupButton").addEventListener("click", openPopup);

var openPopupButton = document.getElementById("openPopupButton");
openPopupButton.addEventListener("click", openPopup);
