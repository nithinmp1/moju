$('.banner-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    dots:false,
    nav:false,
    animateOut: 'fadeOut',
responsive:{
0:{
    items:1,
    
},
600:{
    items:1,
   
},
1000:{
    items:1,
    
   
}
}
});



$('.rightway-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    dots:false,
    nav:true,
  
responsive:{
0:{
    items:2,
    
},
565:{
    items:3,
   
},
768:{
    items:3,
    
   
}
}
});



$('.mime-slider').owlCarousel({
  loop:true,
  margin:20,
  responsiveClass:true,
  autoplay:true,
  dots:false,
  nav:false,

responsive:{
0:{
  items:2,
  
},
565:{
  items:2,
 
},
768:{
  items:5,
  
 
}
}
});



$('.leads-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    dots:false,
    nav:true,
    animateOut: 'fadeOut',
responsive:{
0:{
    items:1,
    
},
600:{
    items:1,
   
},
1000:{
    items:1,
    
   
}
}
});



$('.update-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:false,
    dots:false,
    nav:true,
    slideSpeed: 5000,
  paginationSpeed: 3000,
  autoplaySpeed:5000,
responsive:{
0:{
    items:1,
    
},
768:{
    items:2,
   
},
991:{
    items:3,
    
   
}
}
});


$('.testimonial-slider').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:false,
    dots:false,
    nav:false,
    slideSpeed: 5000,
  paginationSpeed: 3000,
  autoplaySpeed:5000,
responsive:{
0:{
    items:1,
    
},
768:{
    items:2,
   
},
991:{
    items:3,
    
   
}
}
});





var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}



function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "100%";
    document.getElementById("main").style.overflow = "hidden";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }



  window.onscroll = function() {myFunction()};
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  $(document).ready(function(){
    $("#fr-btn").click(function(){
      $("#tr-form").css({"top": "132px", "transition": "0.9s"});
    });
  });
  
  $(document).ready(function(){
    $("#trial-close").click(function(){
      $("#tr-form").css({"top": "-250px", "transition": "0.9s"});
    });
  });