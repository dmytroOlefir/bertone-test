import {gsap} from "../inc/_gsap";
import {SplitText} from "../inc/_SplitText";

const opening = () => {
	const curtain = document.querySelector('[data-curtain]'),
		bgWrap = document.querySelector('[data-banner-wrap]'),
		title = document.querySelector('[data-banner-title]'),
		introText = document.querySelectorAll('[data-intro-text] span'),
		introImg = document.querySelector('[data-intro-img]'),
		// filmBars = document.querySelectorAll('[data-film-bar]'),
		banner = document.querySelector('#banner'),
		emptyBg = document.querySelector('[data-banner-bg="empty"]'),
		header = document.querySelector('#header'),
		bg = document.querySelectorAll('[data-banner-bg]');

	let splitText = new SplitText(introText, {type: "lines"})

	const openingTl = gsap.timeline();

	openingTl
		.to(curtain, {autoAlpha: 0, duration: 1.2}, "+=0.5")
		.to(bg, {scale: 1, duration: 4}, "-=0.7")
		.from(title, {opacity: 0, ease: "power3.in", duration: 1.5}, "-=2.8")
		// .to(filmBars, {scaleY: 0, duration: 2.15, ease: "power3.in"}, "-=3")
		.to(emptyBg, {clip: 'rect(auto auto 0vw auto)', ease: "power2.out", duration: 1.1}, "=-1.4")
		.to(bgWrap, {opacity: 0, ease: "power3.Out", duration: 1.4}, "-=0.8")
		.to(banner, {autoAlpha: 0, ease: "power3.Out", duration: 0.6 }, "+=0")
		.from(introImg, {opacity: 0, x: -80, duration: 3}, "+=0.25")
		.from(splitText.lines, {duration: 1, y: 75, opacity: 0, ease: "power3.out", stagger: 0.12}, "-=2.4")
		.from(header, {y: '-120%', ease: "power3.Out", duration: 1.25}, "-=0.45")


}

const lineReveal = () => {
	const lineTitle = document.querySelectorAll('[data-line-reveal], [data-line-reveal] > *');

	lineTitle.forEach((text, i) => {

		let splitText = new SplitText(text, {type: "lines"})

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: text,
				start: 'bottom 90%'
			}
		});

		tl.from(splitText.lines, {
			duration: 1.2,
			y: 75,
			opacity: 0,
			ease: "power3.out",
			stagger: 0.12
		})
	});
}

const revealFromLeft = () => {
	const elements = document.querySelectorAll('[data-reveal-left]');

	elements.forEach((el, i) => {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "center bottom"
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
				start: "center bottom"
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
		let delay = el.dataset.revealSimple || '0';

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: 'bottom 95%'
			}
		});

		tl.from(el, {
			opacity: 0,
			duration: 1.2,
			ease: "power3.out",
		}, `+=${delay}`)
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
				start: "center bottom"
			}
		});

		tl.from(curtain, {
			duration: 1.2,
			scaleX: 1,
			ease: "power3.out",
		}, "+=0");
	});
}

const bgZoom = () => {
	const bg = document.querySelectorAll('[data-bg-zoom]');

	bg.forEach((block, i) => {

		let image = block.querySelector('.zoom');

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: block,
				start: "center bottom"
			}
		});

		tl.from(image, {
			duration: 8,
			scale: 1.2,
			ease: "power1.out",
		}, "+=0");
	});
}

const fadeUp = () => {
	const elements = document.querySelectorAll('[data-fade-up]');

	elements.forEach((el, i) => {
		let delay = el.dataset.revealSimple || '0';

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				start: "bottom bottom"
			}
		});

		tl.from(el, {
			opacity: 0,
			y: '40',
			duration: 1.2,
			ease: "power3.out",
		}, `+=${delay}`)
	});
}

const lineLeft = () => {
	const lines = document.querySelectorAll('[data-line]');

	lines.forEach((line, i) => {
		let direction = line.dataset.line;

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: line,
				start: "center bottom"
			}
		});

		tl.from(line, {
			duration: 0.8,
			scale: 0,
			transformOrigin: direction,
			ease: "power3.out",
		}, "+=0.2");
	});
}

export {opening, lineReveal, revealFromLeft, revealFromRight, revealSimple, revealImage, bgZoom, lineLeft, fadeUp};