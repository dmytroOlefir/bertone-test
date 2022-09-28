import {gsap} from "../inc/_gsap";

const customCursor = () => {
	const cursor = document.querySelector('[data-cursor]'),
		bigBall = document.querySelector('[data-cursor-inner]'),
		hoverables = document.querySelectorAll('.hoverable'),
		letsgo = document.querySelectorAll('.letsgoable'),
		drag = document.querySelectorAll('.draggable');

	document.body.addEventListener('mousemove', onMouseMove);

	for (let i = 0; i < hoverables.length; i++) {
		hoverables[i].addEventListener('mouseenter', onMouseHover);
		hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
		hoverables[i].addEventListener('click', onMouseHoverOut);
	}

	for (let i = 0; i < letsgo.length; i++) {
		letsgo[i].addEventListener('mouseenter', onMouseLetsgo);
		letsgo[i].addEventListener('mouseleave', onMouseLetsgoOut);
		letsgo[i].addEventListener('click', onMouseLetsgoOut);
	}

	for (let i = 0; i < drag.length; i++) {
		drag[i].addEventListener('mouseenter', onMouseDrag);
		drag[i].addEventListener('mouseleave', onMouseDragOut);
	}

	function onMouseMove(e) {
		gsap.to(cursor, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15,
		})
		gsap.to(bigBall, .4, {
			backgroundColor: '#FF4409'
		})
	}

	function onMouseHover(e) {
		gsap.to(cursor, .4, {
			top: 10,
			left: 10,
			x: e.pageX,
			y: e.pageY,
		})
		gsap.to(bigBall, .4, {
			scale: 6,
			opacity: .6,
		})
	}
	function onMouseHoverOut(e) {
		gsap.to(cursor, .4, {
			top: 40,
			left: 40,
			x: e.pageX - 15,
			y: e.pageY - 15,
		})
		gsap.to(bigBall, .4, {
			scale: 1,
			opacity: 1,
		})
	}

	function onMouseLetsgo(e) {
		cursor.classList.add('letsgo');

		gsap.to(cursor, .4, {
			x: e.pageX,
			y: e.pageY,
		})

		gsap.to(bigBall, .4, {
			scale: 10,
			// top: 10,
			// left: 10,
		})
	}

	function onMouseLetsgoOut(e) {
		cursor.classList.remove('letsgo');

		gsap.to(cursor, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15,
		})

		gsap.to(bigBall, .4, {
			scale: 1,
		})
	}

	function onMouseDrag(e) {
		cursor.classList.add('drag');

		gsap.to(cursor, .4, {
			x: e.pageX,
			y: e.pageY,
		})

		gsap.to(bigBall, .4, {
			scale: 10,
			// top: 10,
			// left: 10,
		})
	}

	function onMouseDragOut(e) {
		cursor.classList.remove('drag');

		gsap.to(cursor, .4, {
			x: e.pageX - 15,
			y: e.pageY - 15,
		})

		gsap.to(bigBall, .4, {
			scale: 1,
		})
	}
}

export {customCursor}