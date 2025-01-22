gsap.to(".secondpage .achieve", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".secondpage .achieve ",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2 // use to repeat it 
        // markers: true

    }
})
gsap.to(".secondpage .semihead", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".secondpage .semihead ",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".secondpage .para", {
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".secondpage .para ",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".thirdpage .container #box1", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".thirdpage .container #box1",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".thirdpage .container #box3", {
    transform: "translateX(0%)",
    duration: 1,
    scrollTrigger: {
        trigger: ".thirdpage .container #box3",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})
gsap.to(".thirdpage .container #box2", {
    scale: 1,
    duration: 1,
    scrollTrigger: {
        trigger: ".thirdpage .container #box2",
        scroller: "body",
        start: "top 80% ",
        end: "top 60% ",
        scrub: 2
        // markers: true

    }
})