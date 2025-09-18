console.log("Сайт кафедри завантажено успішно!");

var navToggle = document.getElementById("navToggle");
var mainNav = document.getElementById("main-nav");

if (navToggle) {
    navToggle.onclick = function() {
        if (mainNav.className.indexOf("open") === -1) {
            mainNav.className += " open";
        } else {
            mainNav.className = mainNav.className.replace(" open", "");
        }
    }
}

var links = document.querySelectorAll("a[href^='#']");
for (var i = 0; i < links.length; i++) {
    links[i].onclick = function(e) {
        var id = this.getAttribute("href").substring(1);
        var el = document.getElementById(id);
        if (el) {
            e.preventDefault();
            var y = el.offsetTop - 50;
            window.scrollTo(0, y);
            if (mainNav && mainNav.className.indexOf("open") !== -1) {
                mainNav.className = mainNav.className.replace(" open", "");
            }
        }
    }
}

