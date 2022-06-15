

let gg = document.querySelectorAll('.slider_table__block__text')

gg.forEach(function(btn) {
    btn.addEventListener('click', function(ev) {
        gg.forEach(function(box, i) {
            box.classList.toggle('slider_table__block__text-active', (ev.target == gg[i]));
        });
    });
});

let wrapper = document.querySelector('.wrapper');
let models = document.querySelector('.stroca_1__3d__content_model');
let blik = document.querySelector('.box__for__animation__img');

let energy_1 = document.querySelector('.slider_table__block__text_1');
let energy_2 = document.querySelector('.slider_table__block__text_2');
let energy_3 = document.querySelector('.slider_table__block__text_3');
let energy_4 = document.querySelector('.slider_table__block__text_4');
let energy_5 = document.querySelector('.slider_table__block__text_5');
let energy_6 = document.querySelector('.slider_table__block__text_6');

energy_1.addEventListener('click', ()=>{
    models.setAttribute('src', './3d/dark.glb');
    wrapper.dataset.wrapper = "dark"
});

energy_2.addEventListener('click', ()=>{
    models.setAttribute('src', './3d/blue.glb');
    wrapper.dataset.wrapper = "blue";
    blik.dataset.blick = "1";
});

energy_3.addEventListener('click', ()=>{
    models.setAttribute('src', './3d/pink.gld');
    wrapper.dataset.wrapper = "pink";
    blik.dataset.blick = "2";
    
});

energy_4.addEventListener('click', ()=>{
    models.setAttribute('src', './3d/coffe.glb');
    wrapper.dataset.wrapper = "coffe";
    blik.dataset.blick = "3";
});

energy_5.addEventListener('click', ()=>{
    models.setAttribute('src', './3d/orange.glb');
    wrapper.dataset.wrapper = "orenge";
    blik.dataset.blick = "4";
});

energy_6.addEventListener('click', ()=>{
    models.setAttribute('src', './3d/light_blue.glb');
    wrapper.dataset.wrapper = "light-blue";
    blik.dataset.blick = "5";
});

let header__px = document.querySelector(".header__px");
let menuBtn = document.getElementById('menu');
menu.addEventListener('click', () => {
	menuBtn.classList.toggle('open');
	header__px.classList.toggle('header__px-active');
	gsap.to('.px__left__link',{
		y:-50,
		duration: 0.5,
		stagger: {
			grid: [29,15],
			from: "rondom",
			axis: "x",
			amount: .5
		  },
	})
	gsap.to('.px__right',{
		right: 0,
		duration: 0.5,
		delay: 0.5,
		stagger: {
			grid: [29,15],
			from: "rondom",
			axis: "x",
			amount: .5
		  },
	})

})