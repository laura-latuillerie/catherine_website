const gallery = document.querySelector(".gallery");
console.log(gallery.offsetWidth);

function getScrollAmount() {
	let galleryWidth = gallery.scrollWidth + 60;
	return -(galleryWidth - window.innerWidth);
}

const tween = gsap.to(gallery, {
	x: getScrollAmount,
	duration: 3,
	ease: "none"
});

ScrollTrigger.create({
	trigger: ".gallery",
	start: "top 0",
	end: () => `+=${getScrollAmount() * -1}`,
	pin: true,
	animation: tween,
	scrub: 1,
	invalidateOnRefresh: true,
	markers: false
});

ScrollTrigger.observe({
	target: ".gallery", // can be any element (selector text is fine)
	type: "pointer,touch", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
	// onUp: () => previous(),
	// onDown: () => next(),

	onDrag: (self) => {
		console.warn(self.deltaX);
		gsap.to(window, { scrollTo: { y: `+=${self.deltaX * 10}` } });
	}
});
