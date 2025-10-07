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

function initCarousel(root) {
    var track = root.querySelector(".carousel__track")
    var slides = Array.from(track.querySelectorAll(".carousel__slide"))
    var btnPrev = root.querySelector(".carousel__control.prev")
    var btnNext = root.querySelector(".carousel__control.next")
    var indicatorsWrap = root.querySelector(".carousel__indicators")
    var interval = parseInt(root.dataset.interval, 10) || 6000
    var idx = 0
    var timer = null

    slides.forEach(function (s, i) {
        var btn = document.createElement("button")
        btn.dataset.index = i
        btn.addEventListener("click", function () { goTo(i) })
        indicatorsWrap.appendChild(btn)
    })

    var indicators = Array.from(indicatorsWrap.querySelectorAll("button"))

    function activate(i) {
        slides.forEach(s => s.classList.remove("active"))
        indicators.forEach(b => b.classList.remove("active"))
        slides[i].classList.add("active")
        indicators[i].classList.add("active")
        idx = i
    }

    function next() { goTo((idx + 1) % slides.length) }
    function prev() { goTo((idx - 1 + slides.length) % slides.length) }
    function goTo(i) { activate(i); resetTimer() }
    function startTimer() { stopTimer(); timer = setInterval(next, interval) }
    function stopTimer() { if (timer) clearInterval(timer); timer = null }
    function resetTimer() { stopTimer(); startTimer() }

    if (btnNext) btnNext.addEventListener("click", next)
    if (btnPrev) btnPrev.addEventListener("click", prev)
    if (slides.length) { activate(0); startTimer() }
}

document.querySelectorAll(".carousel").forEach(initCarousel)

var news4Img = document.getElementById('news4-img')
var news4Audio = document.getElementById('news4-audio')

news4Img.addEventListener('click', () => {
    if (!news4Audio.paused) {
        news4Audio.pause()
        news4Audio.currentTime = 0
    } else {
        news4Audio.play()
    }
})
