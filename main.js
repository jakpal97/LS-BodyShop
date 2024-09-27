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
		title: 'Usługa 1 - Naprawa Silnika',
		description: 'Nasza usługa naprawy silnika obejmuje pełną diagnostykę, wymianę części oraz przegląd techniczny.',
	},
	service2: {
		title: 'Usługa 2 - Lakierowanie',
		description:
			'Oferujemy kompleksowe usługi lakiernicze, w tym lakierowanie całościowe oraz miejscowe naprawy powłoki lakierniczej.',
	},
	service3: {
		title: 'Usługa 3 - Wymiana Opon',
		description: 'W ramach tej usługi oferujemy wymianę opon letnich i zimowych oraz ich wyważenie.',
	},
	service4: {
		title: 'Usługa 4 - Serwis Klimatyzacji',
		description:
			'Oferujemy pełen serwis klimatyzacji, w tym uzupełnianie czynnika oraz diagnostykę ewentualnych nieszczelności.',
	},
	service5: {
		title: 'Usługa 5 - Naprawa Układu Hamulcowego',
		description: 'Nasza usługa obejmuje pełną naprawę układu hamulcowego, w tym wymianę tarcz i klocków hamulcowych.',
	},
	service6: {
		title: 'Usługa 6 - Geometria Kół',
		description: 'Zapewniamy precyzyjną regulację geometrii kół, co poprawia bezpieczeństwo jazdy i zużycie opon.',
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
