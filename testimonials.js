let reviewsSection = document.querySelector('.reviews-section');
let testimonialsSection = document.querySelector('.testimonials-section');
// let previousBtn = document.querySelector('.previous-button');
// let nextBtn = document.querySelector('.next-button');
let reviewText = document.querySelector('.review-text');
let reviewAuthor = document.querySelector('.review-author');

// object with testimonial and the author
let reviewsArray = [
    { 
        name: "JAMES P., CLIFTON, NJ",
        review: "“I went from a Sonicare (of 10+ years) to the Goby and couldn't be happier. I feel like I just left the dentist chair after having my 6 month check up and cleaning.“",
    },
    { 
        name: "HUNTER B., WESTBROOK, ME",
        review: "“Goby is the without equal, it leaves your teeth flawless, and the all black design is... if James Bond had a toothbrush, he would have a Goby, and a license to kill plaque.“",
    },
    { 
        name: "CHARLES S., CLAYTON, NC",
        review: "“Such a great toothbrush, keeps my mouth clean for a long time! Love using it twice a day and the battery life is great too!“",
    },
];

// console.log(testimonialsArray);

let index = 0;
let timer;
// reviewText.innerHTML = reviewsArray[1].review;
// reviewAuthor.innerHTML = reviewsArray[1].name;

let interval = window.onload = function() {
    let obj = reviewsArray[index++ % reviewsArray.length];
    // returns the entire object
    reviewText.innerHTML = obj.review;
    reviewAuthor.innerHTML = obj.name;

    function fadeIn() {
        let opacity = 0;
        let intervalId = setInterval(function() {
            if (opacity < 1) {
                opacity = opacity + 0.02;
                reviewText.style.opacity = opacity;
                reviewAuthor.style.opacity = opacity;
            } else {
                clearInterval(intervalId);
            }
        }, 20);
    }

    // nextBtn.addEventListener('click', function() {
    //     let next = reviewsArray[index++ % reviewsArray.length];
    //     reviewText.innerHTML = next.review;
    //     reviewAuthor.innerHTML = next.name;
    //     fadeIn();
    // });

    // previousBtn.addEventListener('click', function() {
    //     let next = reviewsArray[index-- % reviewsArray.length];
    //     // console.log(reviewsArray[index]);
    //     reviewText.innerHTML = next.review;
    //     reviewAuthor.innerHTML = next.name;
    //     fadeIn();
    // });

    clearInterval(timer);
    timer = setInterval(interval, 5000);
    fadeIn();
    console.log(obj);
};
