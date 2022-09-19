let options = {
	root: null,
	rootMargin: '99%',
	threshold: 1.0
};
let callback = (entries, observer) => {
	entries.forEach((entry) => {
		// Each entry describes an intersection change for one observed
		// target element:
		// console.log(entry.boundingClientRect);
		// console.log(entry.intersectionRatio);
		// console.log(entry.intersectionRect);
		// console.log(entry.isIntersecting);
		// console.log(entry.rootBounds);
		// console.log(entry.target);
		// console.log(entry.time);
	});
};
window.onload = function() {
	var observer = new IntersectionObserver((entries, observer) => callback(entries, observer), options);
	observer.observe(document.querySelector('#proficiencyPage'));
	// let coverPage = document.getElementById('coverPage');
	// let proficiencyPage = document.getElementById('proficiencyPage');
	// coverPage.addEventListener('scroll', function() {
	// 	console.log('scrolling');
	// });
	// coverPage.addEventListener('scroll', function() {
	// 	console.log('scrolling');
	// 	document.querySelector('#proficiencyPage').scrollIntoView({
	// 		behavior: 'smooth'
	// 	});
	// });
};
