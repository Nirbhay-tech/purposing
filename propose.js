document.querySelector(".btnn").addEventListener("click",()=>{
   document.querySelector(".a").style.display="none"
   document.querySelector(".b").style.display="flex"
   gsap.from(".b",{
    opacity:0,
    rotate:720,
    scale:0,
    borderRadius:"90%",
    duration:3,
})

document.querySelector(".yes").addEventListener("click",()=>{
   document.querySelector(".b").style.display="none"
   document.querySelector(".y").style.display="flex"

   
gsap.from(".y",{
    opacity:0,
    scale:0,
    x:"-100vh",
    ease:"bounce.out",
    borderRadius:"90%",
    duration:3,
})
})
})

document.querySelector(".no").addEventListener("mouseenter",()=>{
   document.querySelector(".no").style.display="none"
})
document.querySelector(".no").addEventListener("mouseleave",()=>{
   document.querySelector(".no").style.display="block"
})




gsap.from(".a",{
    opacity:0,
    scale:0,
    borderRadius:"90%",
    duration:3,
})





