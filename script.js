// gsap.to(".nav",{
//     backgroundColor:" rgba(65, 32, 9, 0.61)",
//     duration:3,
//     delay:1,
//     scrollTrigger:{
//     trigger:".nav",
//     scroller:"body",
//     markers:true,
//     start:"top -10%",
//     end:"top-11%",
//     srcub:true,
// }
// })
document.addEventListener("mousemove",function(dets){
    console.log(dets);
})

gsap.to(".nav",{
    // backgroundColor:" rgba(65, 32, 9, 0.61)",
    duration:0.5,
    height:"120px",
    scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    markers:true,
    start:"top -10%",
    end:"top-11%",
    srcub:1,
}
})
// gsap.to(".main",{
//     backgroundColor:"#000",
//     scrollTrigger:{
//     trigger:".main",
//     scroller:"body",
//     markers:true,
//     start:"top -25vh",
//     end:"top-30vh",
//     srcub:2,
//     }  

// })
