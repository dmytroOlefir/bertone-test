import {gsap} from "../inc/_gsap";

const imageFlip = () => {
	const images = document.querySelectorAll('[data-image-3d]'),
		section = document.querySelector('[data-3d-section]');

	let w = window.innerHeight / 2,
		T = window.innerWidth / 2;

	gsap.set(images[0], {
		y: -w / 20,
		x: T / 20,
		transformOrigin: "center",
		transformPerspective: 1500
	});

	gsap.set(images[1], {
		y: -w / 20,
		x: T / 20,
		transformOrigin: "center",
		transformPerspective: 1500
	});

	section.addEventListener("mousemove", (e) => {
		let t = e.clientX / window.innerWidth - .5,
			i = e.clientY / window.innerHeight - .5,
			r = e.clientY,
			s = e.clientX;

		gsap.to(images[0], 1, {
			y: -r / 20,
			x: s / 20,
			rotationY: 25 * t,
			rotationX: 25 * i,
			ease: "Power1.easeOut"
		})

		gsap.to(images[1], 1, {
			y: r / 20,
			x: s / 20,
			rotationY: 25 * t,
			rotationX: 25 * i,
			ease: "Power1.easeOut"
			})
	})
}

export {imageFlip};