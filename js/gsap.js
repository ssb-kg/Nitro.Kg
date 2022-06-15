
let continer_fon = document.querySelector('.continer__fon');
// let wrapper = document.querySelector('.wrapper');
gsap.registerPlugin(ScrollTrigger);



gsap.to('.wrapper', {
    scrollTrigger:{
        trigger: '.cntent',
        start: 'center top',
        // markers:true,
        end:'top top',
        onEnter: ()=> {
            document.querySelector('.wrapper').dataset.wrapper = "dark";
            document.querySelector('.header').classList.add('header-up')
        }
    },

})



let location__gs = gsap.timeline({
    scrollTrigger:{
        trigger: '.sostaw__wrappwer ',
        start: 'center center',
        // markers:true,
        scrub:1.3,
        end:'100% -100%',
        pin: true,
    },
    duration: 2,
})

location__gs.to(".sostaw__content__line__croog",{scale:1,})
 location__gs.to(".sostaw__content__line__croog",{border: "solid 2px #fff", background: "none", })


location__gs.to(".sostaw__content__img__img",{opacity:1,})
location__gs.to(".sostaw__content__line_text",{
    scale:1,
    ease: "power1.inOut",
    stagger: {
      grid: [19,15],
      from: "rondom",
      axis: "x",
      amount: 1.5
    },

})


