
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     window.onload = function(){
//      document.getElementById("navbar").hidden = "true";
//      document.getElementById("logo").hidden = "true";
//     }
  
//     this.isMobile = true;
  
//     // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
//     window.onscroll = function () { scrollFunction() };
//     function scrollFunction() {
//       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar-mobile").style.padding = "10px";
//         document.getElementById("navbar-mobile").style.borderRadius = "0px 0px 0px 300px";
//         document.getElementById("navbar-mobile").style.marginLeft = "200px";
//         document.getElementById("navbar-mobile").style.color = "#ad8630";
//         document.getElementById("navbar-mobile").style.borderLeft = "5px";
//         document.getElementById("navbar-mobile").style.borderLeftStyle = "solid";
  
//         document.getElementById("logo-mobile").style.height = "100px";
//         document.getElementById("logo-mobile").style.float = "right";
//         document.getElementById("logo-mobile").style.paddingRight = "200px";
  
//       } else {
//         document.getElementById("navbar-mobile").style.padding = "30px ";
//         document.getElementById("navbar-mobile").style.borderRadius = "0px";
//         document.getElementById("navbar-mobile").style.marginLeft = "0px";
//         document.getElementById("navbar-mobile").style.borderLeft = "0px";
//         document.getElementById("navbar-mobile").style.borderLeftStyle = "solid";
  
  
  
//         document.getElementById("logo-mobile").style.float = "none";
//         document.getElementById("logo-mobile").style.height = "200px";
//         document.getElementById("logo-mobile").style.paddingRight = "0px";
  
//       }
//     }
  
//   }
//   else {
//     window.onload = function(){
//       document.getElementById("navbar-mobile").hidden = "true";
//       document.getElementById("logo-mobile").hidden = "true";
//      }
//     this.isMobile = false;
//     // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
//     window.onscroll = function () { scrollFunction() };
  
//     function scrollFunction() {
//       if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         document.getElementById("navbar").style.padding = "15px 10px";
//         document.getElementById("logotxt").style.height = "80px";
//         document.getElementById("logo").style.height = "80px";
//       } else {
//         document.getElementById("navbar").style.padding = "30px";
//         document.getElementById("logo").style.height = "120px";
//       }
//     }
//   }