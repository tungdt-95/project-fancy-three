


var options = {
    strings: ['<i>First</i> sentence.', '  welcome to fancy'],
    typeSpeed: 200  
  };
  
  var typed = new Typed('.type__effect', options);



  // ================== scroll menu ===================
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-50px";
  }
}


// scroll img
//  window.addEventListener("scroll",function(){
//    let scrollimg = document.querySelector(".list__img");
//    let imgposi = scrollimg.getBoundingClientRect().top;
//    let screenposi = window.innerHeight;

//    if(imgposi < screenposi )
//    {
//      scrollimg.classList.add("active");
//    }
//    else
//    {
//      scrollimg.classList.remove("active");
//    }

//  })
///
$(document).ready(function(){
  $('#icon').click(function(){
      $('ul').toggleClass('show')
  });
});