import {gsap} from "../inc/_gsap";

const customCursor = () => {
	const bigBall = document.querySelector('[data-cursor]'),
		hoverables = document.querySelectorAll('.hoverable'),
		letsgo = document.querySelectorAll('.letsgoable'),
		drag = document.querySelectorAll('.draggable');

	document.body.addEventListener('mousemove', onMouseMove);

	for (let i = 0; i < hoverables.length; i++) {
		hoverables[i].addEventListener('mouseenter', onMouseHover);
		hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
	}

	for (let i = 0; i < letsgo.length; i++) {
		letsgo[i].addEventListener('mouseenter', onMouseLetsgo);
		letsgo[i].addEventListener('mouseleave', onMouseLetsgoOut);
	}

	for (let i = 0; i < drag.length; i++) {
		drag[i].addEventListener('mouseenter', onMouseDrag);
		drag[i].addEventListener('mouseleave', onMouseDragOut);
	}

	function onMouseMove(e) {
		gsap.to(bigBall, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15,
			backgroundColor: '#FF4409'
		})
	}

	function onMouseHover(e) {
		gsap.to(bigBall, .4, {
			scale: 6,
			opacity: .6,
			x: e.pageX,
			y: e.pageY,
			top: 10,
			left: 10,
		})
	}
	function onMouseHoverOut(e) {
		gsap.to(bigBall, .4, {
			scale: 1,
			x: e.pageX - 15,
			y: e.pageY - 15,
			top: 40,
			left: 40,
			opacity: 1,
		})
	}

	function onMouseLetsgo(e) {
		bigBall.classList.add('letsgo');

		gsap.to(bigBall, .4, {
			scale: 10,
			x: e.pageX,
			y: e.pageY,
			top: 10,
			left: 10,
		})
	}

	function onMouseLetsgoOut(e) {
		bigBall.classList.remove('letsgo');

		gsap.to(bigBall, .4, {
			scale: 1,
			x: e.pageX - 15,
			y: e.pageY - 15,
			top: 40,
			left: 40,
		})
	}

	function onMouseDrag(e) {
		bigBall.classList.add('drag');

		gsap.to(bigBall, .4, {
			scale: 10,
			x: e.pageX,
			y: e.pageY,
			top: 10,
			left: 10,
		})
	}

	function onMouseDragOut(e) {
		bigBall.classList.remove('drag');

		gsap.to(bigBall, .4, {
			scale: 1,
			x: e.pageX - 15,
			y: e.pageY - 15,
			top: 40,
			left: 40,
		})
	}
}

export {customCursor}