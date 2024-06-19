/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //Counter 
    const decreaseBtn = document.getElementById("decreaseBtn");
    const resetBtn = document.getElementById("resetBtn");
    const increaseBtn = document.getElementById("increaseBtn");
    const countLabel = document.getElementById("countLabel");
    let count = 0;

    increaseBtn.onclick = function(){
        count++;
        countLabel.textContent = count;
    }

    decreaseBtn.onclick = function(){
        count--;
        countLabel.textContent = count;
    }

    resetBtn.onclick = function(){
        count = 0;
        countLabel.textContent = count;
    }

    // Get the current date
    let currentDate = new Date();

    // Get the day of the week (0-6)
    let dayIndex = currentDate.getDay();
    
    // Array of days of the week
    let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    // Get the name of the day using the day index
    let dayName = daysOfWeek[currentDate.getDay()];
    
    // Get the day of the month
    let dayOfMonth = currentDate.getDate();
    
    // Array of months (0-11)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    // Get the month name using the month index
    let monthName = months[currentDate.getMonth()];
    
    // Get the year
    let year = currentDate.getFullYear();
    
    // Display the day and date on the webpage
    document.getElementById("dayOfWeek").textContent = `${monthName} ${dayOfMonth}${getOrdinalSuffix(dayOfMonth)}, ${year}`;
    
    // Get the image element
    const imageSwap = document.getElementById("imageSwap");

    // Add an event listener for the click event
    imageSwap.addEventListener("click", function() {
    // Check if the image source is "ace.png"
    if (this.src.includes("ace.png")) {
    // If it is, change the source to "newImage.png"
    this.src = "assets/img/aleemavatar.png";
      } else {
    // If it's not, change the source back to "ace.png"
    this.src = "assets/img/ace.png";
      }
    });

    // Function to get the ordinal suffix for the day of the month
    function getOrdinalSuffix(day) {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }
    

    function getPhraseForDay() {
    const currentDate = new Date();
    const dayIndex = currentDate.getDay();
    const phrases = [
        "Relax, it's Sunday!",
        "Motivation Monday!",
        "Take it easy Tuesday!",
        "Wellness Wednesday!",
        "Thriving Thursday!",
        "Feel Good Friday!",
        "Super Saturday!",
    ];
    return phrases[dayIndex];
}

function updateFooterPhrase() {
    const phrase = getPhraseForDay();
    document.getElementById("footerPhrase").textContent = phrase;
}

// Call the function initially to set the phrase when the page loads
updateFooterPhrase();

});
