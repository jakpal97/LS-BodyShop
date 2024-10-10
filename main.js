document.addEventListener('DOMContentLoaded', function () {
	const playButton = document.querySelector('.play-button-overlay')
	playButton.addEventListener('click', function () {
		alert('Play button clicked!')
	})
})

const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

hamburger.addEventListener('click', () => {
	menu.classList.toggle('active')
	hamburger.classList.toggle('active')

	const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false
	hamburger.setAttribute('aria-expanded', !expanded)
})

const services = {
	service1: {
		title: 'INSURANCE ACCIDENT REPAIR',
		description:
			'Provides comprehensive, insurance-covered vehicle repairs after an accident. Our expert team ensures a seamless process, restoring your car to its pre-accident condition with precision and care.',
	},
	service2: {
		title: 'FULL CAR RESPRAY',
		description:
			'Offers a complete paint refresh for your vehicle, restoring its original shine or transforming its color entirely. Our professional respray service ensures a flawless, factory-quality finish that lasts for years.',
	},
	service3: {
		title: 'HEADLIGHT RESTORATION',
		description:
			'Revitalizes dull, hazy headlights to enhance visibility and safety on the road. Our specialized service removes oxidation and restores clarity, ensuring your headlights look brand new and perform optimally.',
	},
	service4: {
		title: 'CAR DETAILING',
		description:
			'Provides a thorough cleaning and restoration of your vehicles interior and exterior, ensuring it looks and feels like new. Our meticulous process includes polishing, waxing, and deep cleaning to enhance your cars appearance and protect its surfaces.',
	},
	service5: {
		title: 'DENT & SCRATCH FIX',
		description:
			'Specializes in the seamless repair of dents and scratches on your vehicle, restoring its original appearance without the need for costly repainting. Our skilled technicians use advanced techniques to ensure a flawless finish, bringing your car back to life.',
	},
	service6: {
		title: 'RUST REPAIR & WELDING SOLUTIONS',
		description:
			'Offers expert restoration services to eliminate rust and strengthen your vehicle’s structure through high-quality welding. Our experienced team ensures that your car is not only safe and reliable but also looks great, extending its lifespan and enhancing its value.',
	},
}

// Funkcja do otwierania pop-upu
function openPopup(serviceKey) {
	const popup = document.getElementById('popup')
	const popupOverlay = document.getElementById('popup-overlay')

	// Pobierz dane o wybranej usłudze
	const service = services[serviceKey]

	// Zmiana treści w pop-upie
	document.getElementById('popup-title').textContent = service.title
	document.getElementById('popup-description').textContent = service.description
	document.body.style.overflow = 'hidden'

	// Pokazanie pop-upu i overlay
	popup.classList.add('active')
	popupOverlay.classList.add('active')
}

function closePopup() {
	const popup = document.getElementById('popup')
	const popupOverlay = document.getElementById('popup-overlay')
	document.body.style.overflow = ''
	popup.classList.remove('active')
	popupOverlay.classList.remove('active')
}

// Obsługa kliknięcia w przycisk usługi
document.querySelectorAll('.service-btn').forEach(button => {
	button.addEventListener('click', () => {
		const serviceKey = button.getAttribute('data-service')
		openPopup(serviceKey)
	})
})

// Zamknięcie pop-upu przy kliknięciu w "Zamknij"
document.getElementById('close-popup').addEventListener('click', closePopup)
document.getElementById('popup-overlay').addEventListener('click', closePopup)

document.addEventListener('scroll', function () {
	const components = document.querySelectorAll('.timeline__component')
	components.forEach(function (component) {
		const position = component.getBoundingClientRect().top
		const screenPosition = window.innerHeight / 1.2

		if (position < screenPosition) {
			component.classList.add('timeline__component--visible')
		}
	})
})

const sliderBox = document.querySelector('.slider-box')
const carouselImages = document.querySelectorAll('.slider-img')
const carouselSpeed = 3000
let index = 0

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselImages.length - 1
	}

	sliderBox.style.transform = `translateX(${-index * 100}%)`
}

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

window.addEventListener('resize', function () {
	changeImage()
})

window.onload = function () {
	changeImage()
}

// npm run dev  Pokazuje przycisk po przewinięciu o 200px
window.onscroll = function () {
	const button = document.getElementById('back-to-top')
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
		button.style.display = 'block'
	} else {
		button.style.display = 'none'
	}
}

// Funkcja do przewijania na górę
document.getElementById('back-to-top').onclick = function (e) {
	e.preventDefault() // Zapobiega domyślnemu działaniu
	window.scrollTo({ top: 0, behavior: 'smooth' }) // Płynne przewijanie
}
