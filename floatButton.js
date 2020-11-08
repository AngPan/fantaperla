//FLOATBUTTON
 
  
  var rootElement = document.documentElement
  
  
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      // Show button
      document.getElementById("topBtn").classList.add("showBtn")
    } else {
      // Hide button
      document.getElementById("topBtn").classList.remove("showBtn")
    }
  }
  