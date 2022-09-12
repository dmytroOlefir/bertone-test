import {gsap} from "../inc/_gsap";
import {SplitText} from "../inc/_SplitText";

const opening = () => {
	const curtain = document.querySelector('[data-curtain]'),
		title = document.querySelector('[data-banner-title]'),
		// filmBars = document.querySelectorAll('[data-film-bar]'),
		emptyBg = document.querySelector('[data-banner-bg="empty"]'),
		bg = document.querySelectorAll('[data-banner-bg]');

	const openingTl = gsap.timeline();

	openingTl
		.to(curtain, {autoAlpha: 0, duration: 1.2}, "+=0.5")
		.to(bg, {scale: 1, duration: 4}, "-=0.7")
		.from(title, {opacity: 0, ease: "power3.in", duration: 1.5}, "-=2.8")
		// .to(filmBars, {scaleY: 0, duration: 0.8}, "-=0.75")
		.to(emptyBg, {clip: 'rect(auto auto 0vw auto)', ease: "expo.in", duration: 1.2}, "=-3.5")

}

const lineReveal = () => {
	const lineTitle = document.querySelectorAll('[data-line-reveal] > *');

	lineTitle.forEach((text, i) => {

		let splitText = new SplitText(text, {type: "lines"})

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: text,
			}
		});

		tl.from(splitText.lines, {
			duration: 1.2,
			opacity: 0,
			ease: "power3.in",
			stagger: 0.15
		})
	});
}

const revealFromLeft = () => {
	const elements = document.querySelectorAll('[data-reveal-left]');

	elements.forEach((el, i) => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
			}
		});

		tl.from(el, {
			x: -80,
			duration: 5,
			ease: "power3.out",
		}, "+=0.2")
	});
}

const revealFromRight = () => {
	const elements = document.querySelectorAll('[data-reveal-right]');

	elements.forEach((el, i) => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
			}
		});

		tl.from(el, {
			x: 80,
			duration: 5,
			ease: "power3.out",
		}, "+=0.2")
	});
}

const revealSimple = () => {
	const elements = document.querySelectorAll('[data-reveal-simple]');

	elements.forEach((el, i) => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
			}
		});

		tl.from(el, {
			opacity: 0,
			duration: 1.2,
			ease: "power3.in",
		}, "+=0.1")
	});
}

const revealImage = () => {
	const reveal = document.querySelectorAll('[data-reveal-image]');

	reveal.forEach((block, i) => {

		let image = block.querySelector('.the-image__img'),
			curtain = block.querySelector('.the-image__curtain');

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: block,
			}
		});

		tl.from(curtain, {
			duration: 1.2,
			scaleX: 1,
			ease: "power3.out",
		}, "+=0");
	});
}

export {opening, lineReveal, revealFromLeft, revealFromRight, revealSimple, revealImage};