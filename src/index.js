import './styles/index.scss'
import barba from '@barba/core'
import LocomotiveScroll from 'locomotive-scroll'
import {gsap} from './scripts/inc/_gsap'
import {ScrollTrigger} from './scripts/inc/_ScrollTrigger'
import {SplitText} from './scripts/inc/_SplitText'
import {customCursor} from "./scripts/modules/_cursor"
import CSSPlugin from './scripts/inc/_CSSPlugin'

require('fslightbox');

import Swiper, {Autoplay, FreeMode} from 'swiper'
import 'swiper/css'

// Menu ----------------------------------------------------
const menu_btn = document.querySelector('[js-menu-btn]')
const menu = document.querySelector('[js-menu]')
const menu_bkg = document.querySelector('[js-menu-bkg]')
let isOpen = false

menu_btn.addEventListener('click', () => {
	toggleMenu()
})

menu_bkg.addEventListener('click', () => {
	toggleMenu()
})

function toggleMenu() {
	if (isOpen) {
		menu_btn.classList.remove('is-open')
		menu.classList.remove('is-open')
		menu_bkg.classList.remove('is-open')
	} else {
		menu.classList.add('is-open')
		menu_btn.classList.add('is-open')
		menu_bkg.classList.add('is-open')
	}
	isOpen = !isOpen
}

Swiper.use([Autoplay, FreeMode]);

import {opening, tlOpening, lineReveal, revealFromLeft, revealFromRight, revealSimple, revealImage, bgZoom, lineLeft, fadeUp, yearReveal, captionReveal} from './scripts/modules/_animations'


const gsapWithCSS = gsap.registerPlugin(CSSPlugin, ScrollTrigger, SplitText) || gsap, // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

// --------------- Slider
const slider = document.querySelector('[js-slider]')

if (slider) {
	const swiper = new Swiper(slider, {
		slidesPerView: 'auto',
		// spaceBetween: 30,
		speed: 4000,
		slideToClickedSlide: false,
		grabCursor: true,
		// mousewheelControl: true,
		// keyboardControl: true,
		// freeMode: {
		// 	enabled: true,
		// 	momentumBounceRatio: 0.03,
		// 	momentumVelocityRatio: 2,
		// 	minimumVelocity: 0.1,
		// 	momentumRatio: 0.3
		// },
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		loop: true,
  })
}

function delay(ms) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve('resolved');
		}, ms);
	});
}

const scroller = document.querySelector('[data-main-scroll]')

const timelinePage = document.querySelector('.page-template-timeline')

let lc

if (window.screen.width >= 1201) {
	 lc = new LocomotiveScroll({
		el: scroller,
		smooth: true,
		lerp: 0.08,
		multiplier: 0.5,
		smartphone: {
			smooth: true
		},
		tablet: {
			smooth: true
		}
		//Will probably remove Loco for mobile/tablet later on
		// tablet: {
		// 	breakpoint: 1200,
		// 	smooth: true,
		// }
	})
} else {
	lc = new LocomotiveScroll({
		el: scroller,
		smooth: true,
		lerp: 0.09,
		multiplier: 0.8,
		smartphone: {
			smooth: true
		},
		tablet: {
			smooth: true
		}
		//Will probably remove Loco for mobile/tablet later on
		// tablet: {
		// 	breakpoint: 1200,
		// 	smooth: true,
		// }
	})
}

window.lc = lc

if (timelinePage) {
	lc.stop()
}

barba.hooks.beforeEnter((data) => {
	ScrollTrigger.getAll().forEach(t => t.kill())
})

barba.hooks.after((data) => {

	if (data.next.namespace === 'timeline') {
		lc.update()
		lc.stop()
	} else {
		lc.update()
		setTimeout(() => {
			lc.start()
		}, 500)
	}
})

const curtain = document.querySelector('[data-curtain]'),
	header = document.querySelector('#header')

let frontCount = 0;

barba.init({
	transitions: [{
		name: 'default-transition',
		 async leave(data) {
			console.log('default');

			gsap.to(curtain, {autoAlpha: 1, duration: 0.7})

			 const res = await delay(700);

		},
		afterLeave(data) {
			toggleMenu()
			// lc.scrollTo('top', {
			// 	'offset': 0,
			// 	'duration': 0,
			// 	'disableLerp': true
			// })
		},
		enter(data) {
			console.log('enter');
			// gsap.to(curtain, {autoAlpha: 0, duration: 0.3, ease: "power3.Out"})
		}
	}],
	views: [{
		namespace: 'front',
		async beforeEnter(data) {
			customCursor()

			lc.on('scroll', ScrollTrigger.update)

			ScrollTrigger.scrollerProxy(scroller, {
				scrollTop(value) {
					return arguments.length
						? lc.scrollTo(value, 0, 0)
						: lc.scroll.instance.scroll.y
				},
				getBoundingClientRect() {
					return {
						left: 0,
						top: 0,
						width: window.innerWidth,
						height: window.innerHeight
					}
				},
				pinType: scroller.style.transform ? "transform" : "fixed"
			})

			ScrollTrigger.defaults({
				scroller: scroller
			})

			ScrollTrigger.addEventListener('refresh', () => lc.update())
			ScrollTrigger.refresh()

			// const header = document.querySelector('.header');
			//
			// if (header) {
			// 	gsap.to(header, {autoAlpha: 1, ease: "power3.Out", duration: 0.3})
			// }
		},
		async afterEnter(data) {
			header.classList.add('show')

			if (frontCount >= 1) {
				setTimeout(()=> {
					const tlSection = document.querySelector('#timeline-section');

					lc.scrollTo(tlSection, {
						'offset': -100,
						'duration': 0,
						'disableLerp': true
					})
				})
			}

			opening(frontCount)
			frontCount++

			// //Temp Fix, need to be updated
			// setTimeout(() => {
			// 	lineReveal()
			// }, 200)
			//
			// revealFromLeft()
			// revealFromRight()
			// revealSimple()
			// revealImage()
			// bgZoom()
			// lineLeft()
			// fadeUp()
		},
		afterLeave(data) {
			header.classList.remove('show')

			ScrollTrigger.getAll().forEach(t => t.kill())

			ScrollTrigger.defaults({
				scroller: scroller,
				horizontal: false
			});

			ScrollTrigger.addEventListener('refresh', () => lc.update())
			ScrollTrigger.refresh()
		}
	},{
		namespace: 'timeline',
		beforeEnter(data) {
			customCursor()

			ScrollTrigger.getAll().forEach(t => t.kill())

			const horizontalScroller = document.querySelector('[data-hz-scroll]')

			const locoScroll = new LocomotiveScroll({
				el: horizontalScroller,
				smooth: true,
				direction: 'horizontal',
				lerp: 0.08,
				multiplier: 0.4,
				// tablet: {
				// 	breakpoint: 1200,
				// 	smooth: true,
				// 	direction: 'horizontal',
				// }
				// gestureDirection: 'both'
			});

			locoScroll.on('scroll', ScrollTrigger.update)
			window.hscroll = locoScroll

			ScrollTrigger.scrollerProxy(horizontalScroller, {
				scrollLeft(value) {
					return arguments.length
						? locoScroll.scrollTo(value, 0, 0)
						: locoScroll.scroll.instance.scroll.x
				},
				getBoundingClientRect() {
					return {
						left: 0,
						top: 0,
						width: window.innerWidth,
						height: window.innerHeight
					}
				},
				pinType: horizontalScroller.style.transform ? "transform" : "fixed"
			})

			ScrollTrigger.defaults({
				scroller: horizontalScroller,
				horizontal: true
			})

			ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

			// Cursor adjustment
			const cursor = document.querySelector('.a-cursor');

			if (cursor) {
				cursor.classList.remove('letsgo')

				gsap.to(cursor.querySelector('[data-cursor-inner]'), .4, {
					scale: 1,
				})
			}


		},
		async afterEnter(data) {
			tlOpening()
			//Temp Fix, need to be updated
			setTimeout(() => {
				lineReveal()
				yearReveal()
			}, 300)

			revealFromLeft()
			revealFromRight()
			revealSimple()
			revealImage()
			bgZoom()
			lineLeft()
			fadeUp()
			captionReveal()
		},
		afterLeave(data) {
			ScrollTrigger.getAll().forEach(t => t.kill())

			ScrollTrigger.defaults({
				scroller: scroller,
				horizontal: false
			});

			// ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
			ScrollTrigger.refresh()
		}

	}, {
		namespace: 'page',
		beforeEnter(data) {
			customCursor()
			lc.on('scroll', ScrollTrigger.update)

			ScrollTrigger.scrollerProxy(scroller, {
				scrollTop(value) {
					return arguments.length
						? lc.scrollTo(value, 0, 0)
						: lc.scroll.instance.scroll.y
				},
				getBoundingClientRect() {
					return {
						left: 0,
						top: 0,
						width: window.innerWidth,
						height: window.innerHeight
					}
				},
				pinType: scroller.style.transform ? "transform" : "fixed"
			})

			ScrollTrigger.defaults({
				scroller: scroller
			})

			ScrollTrigger.addEventListener('refresh', () => lc.update())
			ScrollTrigger.refresh()
		},
		async afterEnter(data) {
			// const lineTitle = document.querySelectorAll('[data-line-reveal], [data-line-reveal] > *');
			const elements = document.querySelectorAll('[data-reveal-simple]');
			const elementsFade = document.querySelectorAll('[data-reveal-fade]');
			// const elements = document.querySelectorAll('[data-reveal-simple]');

			gsap.fromTo(header, {
				yPercent: -100,
			}, {
				yPercent: 0,
				duration: 1
			})

			gsap.fromTo(curtain, { autoAlpha: 1 }, { autoAlpha: 0, duration: 1.4 })
			header.classList.add('show')

			elements.forEach((el, i) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
					}
				});

				tl.from(el, {
					duration: 1,
					y: 40,
					opacity: 0,
				}, `+=0.4`)
			})
			elementsFade.forEach((el, i) => {
				let tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
					}
				});

				tl.from(el, {
					duration: 1,
					opacity: 0,
				}, `+=1.2`)
			})

			lineReveal()
			revealImage()
		},
		afterLeave(data) {
			header.classList.remove('show')

			ScrollTrigger.getAll().forEach(t => t.kill())

			ScrollTrigger.defaults({
				scroller: scroller,
				horizontal: false
			});

			ScrollTrigger.addEventListener('refresh', () => lc.update())
			ScrollTrigger.refresh()
		}
	}]
});


// MENU
