gsap.to(".top h1",{
    duration: 5,
    repeat: -1,
    x: 500,
    ease: "none"

})

gsap.to(".bottom h1",{
    duration: 5,
    repeat: -1,
    x: -500,
    ease: "none"

})

var animated = document.querySelector(".top h1")

animated.addEventListener("mouseenter", () => {
  animated.pause();
});

// Resume animation on mouse leave
animated.addEventListener("mouseleave", () => {
  animated.resume();
});



let loder = document.querySelector(".loder")

let body = document.querySelector("body")


body.addEventListener("mousemove", (e)=> {

    gsap.to(loder,{
        duration: 1,
        x: e.x,
        y: e.y
    })

})
let animate = document.querySelector(".animate")

let btn = document.querySelector(".animate button")

btn.addEventListener("click", ()=> {
    gsap.to(animate,{
        height: "0%",
        opacity: "0",
        duration: 1
    })
})

var section2 = document.querySelector(".section-2")

var first = document.querySelector(".first img")

var second = document.querySelector(".second img")


section2.addEventListener("mousemove", ()=>{
   

    gsap.to(first,{
        duration: 1,
        x: "-800",
        scrollTrigger: {
            trigger: section2,
            start: "top 80%",
            end: "top 20%",
            scrub: 3,
            // markers: true
        }
       
    })

    gsap.to(second,{
        duration: 1,
        x: "800",
        scrollTrigger: {
            trigger: section2,
            start: "top 80%",
            end: "top 20%",
            scrub: 3,
           
        }
       
    })

});

var crsr = document.querySelector(".cursor")

window.addEventListener("mousemove", function(run){
    gsap.to(crsr,{
        duration: 1,
        x: run.x,
        y: run.y
    })
});

var heading = document.querySelector(".section-4-heading h1")

gsap.from(heading,{
    duration: 2,
    x: -500,
    opacity: 0,
    scrollTrigger: {
        trigger: ".section-4",
        start: "top -15%",
        end: "top -35%",
        scrub: 3,
        // markers: true
    }
    
})


var upslide = document.querySelector(".section-3")

gsap.to(upslide,{
    scrollTrigger: {
        scroller: "body",
        trigger: ".section-3",
        start: "top 0%",
        end: "top -75%",
        pin: true

    }
})

gsap.to(".overlay",{
    height: "0%",
    opacity: "0",
    scrollTrigger: {
        trigger: ".section-3",
        start: "top 0%",
        end: "top -50%",
        scrub: 3,
        // markers: true
    }
 
})

gsap.to(".overlay-1",{
    height: "0%",
    opacity: "0",
    marginTop: "50%",
        scrollTrigger: {
        trigger: ".section-3",
        start: "top 0%",
        end: "top -145%",
        scrub: 3,
        // markers: true
    }
 
})

gsap.to(".section-6-overlay", {
    duration: "1",
    marginLeft: "200%",
    scrollTrigger: {
        scroller: "body",
        trigger: ".section-6",
        start: "top 10%",
        pin: true,
        end: "top -70%",
        scrub: 2,
        // markers: true
    }
})









