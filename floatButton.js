//FLOATBUTTON

// //Get the button:
// mybutton = document.getElementById("topBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("topBtn").style.bottom = "10px";
//   } else {
//     document.getElementById("topBtn").style.bottom = "-50px";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }


// var btn = document.getElementById("topBtn");;

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, '300');
// });



// const scrollFunc = () => {
//     // Get the current scroll value
//     let y = window.scrollY;
     
//     if (y > 0) {
//       document.getElementById("topBtn").classList.add("showBtn")
//     } else {
//       document.getElementById("topBtn").classList.remove("showBtn")
//     }
//   }
  
//   window.onload= function(){
//   window.addEventListener("scroll", scrollFunc);
//   }
  
  
  
  
  var rootElement = document.documentElement
  
  
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      // Show button
      document.getElementById("topBtn").classList.add("showBtn")
    } else {
      // Hide button
      document.getElementById("topBtn").classList.remove("showBtn")
    }
  }
  