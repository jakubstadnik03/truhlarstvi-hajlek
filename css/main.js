
window.sr = ScrollReveal();

sr.reveal('.animate-left',{
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300,
    mobile: false,
   
});
sr.reveal('.animate-top-delay',{
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 300,
    mobile: false,
});
sr.reveal('.animate-top',{
    origin: 'top',
    duration: 1000,
    distance: '5rem',
    delay: 400,
    mobile: false,
});
sr.reveal('.animate-right',{
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 400,
    mobile: false,
});
sr.reveal('.animate-bottom',{
    origin: 'bottom',
    duration: 1000,
    distance: '5rem',
    delay: 400,
    mobile: false,
});



window.addEventListener("load", function(e){
    window.dispatchEvent(new Event('resize'));

});
  
  

  
  

  
  
