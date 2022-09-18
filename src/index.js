import './styles/index.scss'
import barba from '@barba/core'
import LocomotiveScroll from 'locomotive-scroll'
import {gsap} from './scripts/inc/_gsap'
import {ScrollTrigger} from './scripts/inc/_ScrollTrigger'
import {SplitText} from './scripts/inc/_SplitText'
import {customCursor} from "./scripts/modules/_cursor";
import CSSPlugin from './scripts/inc/_CSSPlugin'

import Swiper, {Autoplay} from 'swiper'
import 'swiper/css'

Swiper.use([Autoplay]);

import {opening, lineReveal, revealFromLeft, revealFromRight, revealSimple, revealImage, bgZoom, lineLeft, fadeUp} from './scripts/modules/_animations'
import {imageFlip} from './scripts/modules/_image3d'



const gsapWithCSS = gsap.registerPlugin(CSSPlugin, ScrollTrigger, SplitText) || gsap, // to protect from tree shaking
	TweenMaxWithCSS = gsapWithCSS.core.Tween;

const scroller = document.querySelector('[data-main-scroll]')

const lc = new LocomotiveScroll({
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
});

window.lc = lc

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

opening()

//Temp Fix, need to be updated
setTimeout(() => {
	lineReveal()
}, 200)

revealFromLeft()
revealFromRight()
revealSimple()
revealImage()
bgZoom()
lineLeft()
fadeUp()
customCursor()

// --------------- Slider
const slider = document.querySelector('[js-slider]')

if (slider) {
	const swiper = new Swiper(slider, {
		slidesPerView: 'auto',
		spaceBetween: 30,
		speed: 4000,
		grabCursor: true,
		mousewheelControl: true,
		keyboardControl: true,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		loop: true,
  })
}
