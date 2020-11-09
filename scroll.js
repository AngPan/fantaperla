//FLOATBUTTON
 
  
  var rootElement = document.documentElement
  
  
  window.onscroll = function () { scrollFunction() };
  function scrollFunction() { 
    
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;

  
  document.getElementById("progBar").style.width = scrolled + "%";
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      // Show button
      document.getElementById("topBtn").classList.add("showBtn")
    } else {
      // Hide button
      document.getElementById("topBtn").classList.remove("showBtn")
    }

 

  }
  