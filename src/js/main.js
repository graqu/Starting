const mobileMenu = document.querySelector('.nav__links-mobile');
const mobileMenuLinks = mobileMenu.querySelectorAll('.nav__item');
const burgerIcon = document.querySelector('.nav__menu-icon-fa');
const burgerBtn = document.querySelector('.nav__burger');
const sections = document.querySelectorAll('.section');
const allDNavItems = document.querySelectorAll('.nav__item-desktop');

let offset = 0;

const handleMobileMenu = () => {
	changeMenuLook();
	mobileMenu.classList.toggle('nav__active');
};
const changeMenuLook = () => {
	burgerIcon.classList.toggle('fa-bars');
	burgerIcon.classList.toggle('fa-x');
};
const handleScroll = () => {
	offset = window.scrollY;
	sections.forEach((sec) => {
		const sectionTop = sec.offsetTop;
		const sectionHeight = sec.offsetHeight;
		const windowHeight = window.innerHeight;
		let activeSection;

		if (
			offset >= sectionTop - windowHeight / 2 &&
			offset < sectionTop - windowHeight / 2 + sectionHeight
		) {
			activeSection = sec.getAttribute('id');
			scrollSpy(activeSection);
		} else if (offset === 0) {
			activeSection = '';
			scrollSpy(activeSection);
		}
	});
};
const scrollSpy = (activeSection) => {
	allDNavItems.forEach((item) => {
		const linkToSection = item.getAttribute('href').slice(1);
		if (
			linkToSection === activeSection &&
			!item.classList.contains('current')
		) {
			item.classList.add('current');
		} else if (
			linkToSection !== activeSection &&
			item.classList.contains('current')
		) {
			item.classList.remove('current');
		}
	});
};

//Event listeners

burgerBtn.addEventListener('click', handleMobileMenu);
window.addEventListener('scroll', handleScroll);
mobileMenuLinks.forEach((item) => {
	item.addEventListener('click', handleMobileMenu);
});
