console.log("Сайт кафедри завантажено успішно!")


var navToggle = document.getElementById("navToggle")
var mainNav = document.getElementById("main-nav")

if (navToggle) {
    navToggle.onclick = function () {
        mainNav.classList.toggle("open")
    }
}


var links = document.querySelectorAll("a[href^='#']")
links.forEach(function(link) {
    link.addEventListener("click", function(e) {
        var id = this.getAttribute("href").substring(1)
        var el = document.getElementById(id)
        if (el) {
            e.preventDefault()
            var y = el.offsetTop - 50
            window.scrollTo({ top: y, behavior: 'smooth' })
            if (mainNav.classList.contains("open")) mainNav.classList.remove("open")
        }
    })
})


function initCarousel(carousel) {
    var slides = carousel.querySelectorAll('.carousel__slide')
    var prevBtn = carousel.querySelector('.prev')
    var nextBtn = carousel.querySelector('.next')
    var indicators = carousel.querySelector('.carousel__indicators')
    var interval = carousel.dataset.interval || 5000
    var currentIndex = 0
    var timer


    slides.forEach((_, index) => {
        var dot = document.createElement('button')
        dot.addEventListener('click', () => showSlide(index))
        indicators.appendChild(dot)
    })

    var dots = indicators.querySelectorAll('button')

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'))
        dots.forEach(dot => dot.classList.remove('active'))

        currentIndex = index
        slides[currentIndex].classList.add('active')
        dots[currentIndex].classList.add('active')
    }

    function nextSlide() {
        var nextIndex = (currentIndex + 1) % slides.length
        showSlide(nextIndex)
    }

    function prevSlide() {
        var prevIndex = (currentIndex - 1 + slides.length) % slides.length
        showSlide(prevIndex)
    }


    nextBtn.addEventListener('click', nextSlide)
    prevBtn.addEventListener('click', prevSlide)


    function startTimer() {
        timer = setInterval(nextSlide, interval)
    }

    function stopTimer() {
        clearInterval(timer)
    }

    carousel.addEventListener('mouseenter', stopTimer)
    carousel.addEventListener('mouseleave', startTimer)


    showSlide(0)
    startTimer()
}


document.querySelectorAll('.carousel').forEach(initCarousel)


var news4Img = document.getElementById('news4-img')
var news4Audio = document.getElementById('news4-audio')

if (news4Img && news4Audio) {
    news4Img.addEventListener('click', function() {
        if (news4Audio.paused) {
            news4Audio.play()
        } else {
            news4Audio.pause()
            news4Audio.currentTime = 0
        }
    })
}


var feedbackForm = document.getElementById("feedback-form")
if (feedbackForm) {
    feedbackForm.addEventListener("submit", function(e) {
        e.preventDefault()
        alert("Дякуємо за ваше звернення!")
        feedbackForm.reset()
    })
}