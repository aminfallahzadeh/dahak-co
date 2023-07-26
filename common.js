// AJAX call functionalities
const main = document.getElementById('main');
const links = document.querySelectorAll('a');

// http request function
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML();

// apply click event to all links
// page controllers
links.forEach((item) => {
    item.addEventListener('click', () => {
        if (item.id == "web-gis") { main.setAttribute('include-html', 'pages/webgis.html') }
        if (item.id == "geobi") { main.setAttribute('include-html', 'pages/geobi.html') }
        if (item.id == "fsm") { main.setAttribute('include-html', 'pages/fsm.html') }
        if (item.id == "senama") { main.setAttribute('include-html', 'pages/senama.html') }
        if (item.id == "twin") { main.setAttribute('include-html', 'pages/twin.html') }
        if (item.id == "system-production") { main.setAttribute('include-html', 'pages/system-production.html') }
        if (item.id == "datascan") { main.setAttribute('include-html', 'pages/datascan.html') }
        if (item.id == "gather-info") { main.setAttribute('include-html', 'pages/gather-info.html') }
        if (item.id == "man") { main.setAttribute('include-html', 'pages/man.html') }
        if (item.id == "counceling") { main.setAttribute('include-html', 'pages/counceling.html') }
        if (item.id == "geomarketing") { main.setAttribute('include-html', 'pages/geomarketing.html') }
        if (item.id == "gis") { main.setAttribute('include-html', 'pages/gis.html') }
        if (item.id == "map") { main.setAttribute('include-html', 'pages/map.html') }
        includeHTML();
    });
});

// ------------------------------------------------------------ other functionalities
// ACCESSING HOME PAGE ELEMENTS
// mobile view nav-bar elements
const mobileMenu = document.querySelector('.navigation__mobilenav--menu-main');
const icon = document.querySelector('.navigation__mobilenav--icon');

// handling list items in mobile view nav-bar
const productsMenu = document.getElementById('mobileProducts');
const productsBtn = document.getElementById('mobileProductsBtn');

const projectsBtn = document.getElementById('projectsBtn');
const projectsMenu = document.getElementById('projects');

const skillsBtn = document.getElementById('skillsBtn');
const skillsMenu = document.getElementById('skills');

const utilitiesBtn = document.getElementById('utilitiesBtn');
const utilitiesMenu = document.getElementById('utilitiesMenu');

const permissions = document.getElementById("permissions");
const closePermissions = document.getElementById("closePermissions");
const permissionsBtn = document.getElementById("permissionsBtn");
const overlay = document.getElementById("overlay");

mobileMenu.style.visibility = "hidden";
mobileMenu.style.opacity = '0';

productsMenu.style.visibility = 'hidden';
productsMenu.style.opacity = '0';

projectsMenu.style.visibility = 'hidden';
projectsMenu.style.opacity = '0';

skillsMenu.style.visibility = 'hidden';
skillsMenu.style.opacity = '0';

utilitiesMenu.style.visibility = 'hidden';
utilitiesMenu.style.opacity = '0';

// main and mobile nav-bar functionalities
document.addEventListener('scroll', () => {
    // accessing main nav-bar elements
    const nav = document.querySelector('nav');
    const items = document.querySelectorAll('.navigation__list--link');
    const logo = document.querySelector('.navigation__logo');
    const dahak = document.querySelector('.navigation__dahak');
    const dropdown = document.querySelectorAll('.hover-menu');

    // accessing mobile nav-bar elements
    const mobileNavMenuList = document.querySelectorAll('.navigation__mobilenav--link');

    if (window.scrollY > 0) {
        nav.classList.add('scroll');
        items.forEach(element => element.style.color = 'white');
        logo.src = "img/logo-white.png";
        dahak.style.backgroundImage = "linear-gradient(to left, #40251f, white)";
        dropdown.forEach(element => element.style.backgroundColor = "rgba(0,0,0,0.8)");
        mobileMenu.style.backgroundColor = "rgba(0,0,0,0.8)";
        productsMenu.style.backgroundColor = "rgba(0,0,0,0.8)";
        projectsMenu.style.backgroundColor = "rgba(0,0,0,0.8)";
        skillsMenu.style.backgroundColor = "rgba(0,0,0,0.8)";
        utilitiesMenu.style.backgroundColor = "rgba(0,0,0,0.8)";
        mobileNavMenuList.forEach(element => element.style.color = "white");
        if (mobileMenu.style.visibility === "hidden") {
            icon.style.color = "white";
        }

    } else {
        nav.classList.remove('scroll');
        document.querySelectorAll('.navigation__list--link').forEach(element => element.style.color = '#4b4b4b');
        logo.src = "img/logo.png";
        dahak.style.backgroundImage = "linear-gradient(to left, #f5a08c, #2a969d, #40251f)";
        dropdown.forEach(element => element.style.backgroundColor = "rgba(255, 255, 255, .6)");
        mobileNavMenuList.forEach(element => element.style.color = "black");
        mobileMenu.style.backgroundColor = "rgba(255, 255, 255, .6)";
        productsMenu.style.backgroundColor = "rgba(255, 255, 255, .6)";
        projectsMenu.style.backgroundColor = "rgba(255, 255, 255, .6)";
        skillsMenu.style.backgroundColor = "rgba(255, 255, 255, .6)";
        utilitiesMenu.style.backgroundColor = "rgba(255, 255, 255, .6)";
        if (mobileMenu.style.visibility === "hidden") {
            icon.style.color = "black";
        }
    }
});

// mobile nav-bar button functionalities on click
icon.addEventListener('click', (event) => {
    event.preventDefault();
    if (mobileMenu.style.visibility === "hidden" && mobileMenu.style.opacity === '0') {
        mobileMenu.style.visibility = "visible";
        mobileMenu.style.opacity = '1';
        mobileMenu.style.transform = 'scaleY(1)';
        icon.style.transform = 'scale(1.3)';
        icon.style.color = '#f5a08c';

    } else {
        mobileMenu.style.visibility = "hidden";
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'scaleY(0)';
        icon.style.transform = 'scale(1)';

        if (window.scrollY > 0) {
            icon.style.color = 'white';
        } else {
            icon.style.color = 'black';
        }
    }
});

// mobile projects item & dropdown list functionalities
productsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (productsMenu.style.visibility === "hidden" && productsMenu.style.opacity === '0') {
        productsMenu.style.visibility = "visible";
        productsMenu.style.opacity = '1';
        productsMenu.style.transform = 'scaleY(1)';

        productsBtn.style.boxShadow = '0 0 1.5rem #f5a08c';
        projectsBtn.style.boxShadow = 'none';
        skillsBtn.style.boxShadow = 'none';
        utilitiesBtn.style.boxShadow = 'none';

        projectsMenu.style.visibility = 'hidden';
        projectsMenu.style.opacity = '0';
        projectsMenu.style.transform = 'scaleY(0)';

        skillsMenu.style.visibility = 'hidden';
        skillsMenu.style.opacity = '0';
        skillsMenu.style.transform = 'scaleY(0)';

        utilitiesMenu.style.visibility = 'hidden';
        utilitiesMenu.style.opacity = '0';
        utilitiesMenu.style.transform = 'scaleY(0)';

    } else {
        productsMenu.style.visibility = "hidden";
        productsMenu.style.opacity = '0';
        productsMenu.style.transform = 'scaleY(0)';
        productsBtn.style.boxShadow = 'none';
    }
});

projectsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (projectsMenu.style.visibility === "hidden" && projectsMenu.style.opacity === '0') {
        projectsMenu.style.visibility = "visible";
        projectsMenu.style.opacity = '1';
        projectsMenu.style.transform = 'scaleY(1)';

        projectsBtn.style.boxShadow = '0 0 1.5rem #f5a08c';
        productsBtn.style.boxShadow = 'none';
        skillsBtn.style.boxShadow = 'none';
        utilitiesBtn.style.boxShadow = 'none';

        productsMenu.style.visibility = 'hidden';
        productsMenu.style.opacity = '0';
        productsMenu.style.transform = 'scaleY(0)';

        skillsMenu.style.visibility = 'hidden';
        skillsMenu.style.opacity = '0';
        skillsMenu.style.transform = 'scaleY(0)';

        utilitiesMenu.style.visibility = 'hidden';
        utilitiesMenu.style.opacity = '0';
        utilitiesMenu.style.transform = 'scaleY(0)';

    } else {
        projectsMenu.style.visibility = "hidden";
        projectsMenu.style.opacity = '0';
        projectsMenu.style.transform = 'scaleY(0)';
        projectsBtn.style.boxShadow = 'none';
    }
});

// mobile skills item & dropdown list functionalities
skillsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (skillsMenu.style.visibility === "hidden" && skillsMenu.style.opacity === '0') {
        skillsMenu.style.visibility = "visible";
        skillsMenu.style.opacity = '1';
        skillsMenu.style.transform = 'scaleY(1)';

        skillsBtn.style.boxShadow = '0 0 1.5rem #f5a08c';
        productsBtn.style.boxShadow = 'none';
        projectsBtn.style.boxShadow = 'none';
        utilitiesBtn.style.boxShadow = 'none';

        productsMenu.style.visibility = 'hidden';
        productsMenu.style.opacity = '0';
        productsMenu.style.transform = 'scaleY(0)';

        projectsMenu.style.visibility = 'hidden';
        projectsMenu.style.opacity = '0';
        projectsMenu.style.transform = 'scaleY(0)';

        utilitiesMenu.style.visibility = 'hidden';
        utilitiesMenu.style.opacity = '0';
        utilitiesMenu.style.transform = 'scaleY(0)';

    } else {
        skillsMenu.style.visibility = "hidden";
        skillsMenu.style.opacity = '0';
        skillsMenu.style.transform = 'scaleY(0)';
        skillsBtn.style.boxShadow = 'none';
    }
});

// mobile utilities item & dropdown list functionalities
utilitiesBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (utilitiesMenu.style.visibility === "hidden" && utilitiesMenu.style.opacity === '0') {
        utilitiesMenu.style.visibility = "visible";
        utilitiesMenu.style.opacity = '1';
        utilitiesMenu.style.transform = 'scaleY(1)';

        utilitiesBtn.style.boxShadow = '0 0 1.5rem #f5a08c';
        productsBtn.style.boxShadow = 'none';
        projectsBtn.style.boxShadow = 'none';
        skillsBtn.style.boxShadow = 'none';

        productsMenu.style.visibility = 'hidden';
        productsMenu.style.opacity = '0';
        productsMenu.style.transform = 'scaleY(0)';

        projectsMenu.style.visibility = 'hidden';
        projectsMenu.style.opacity = '0';
        projectsMenu.style.transform = 'scaleY(0)';

        skillsMenu.style.visibility = 'hidden';
        skillsMenu.style.opacity = '0';
        skillsMenu.style.transform = 'scaleY(0)';

    } else {
        utilitiesMenu.style.visibility = "hidden";
        utilitiesMenu.style.opacity = '0';
        utilitiesMenu.style.transform = 'scaleY(0)';
        utilitiesBtn.style.boxShadow = 'none';
    }
});

// close the mobile nav-bar when clicked on outside of it
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !icon.contains(event.target) && mobileMenu.style.visibility === "visible" && mobileMenu.style.opacity === '1') {
        mobileMenu.style.visibility = "hidden";
        mobileMenu.style.opacity = '0';
        mobileMenu.style.transform = 'scaleY(0)';

        icon.style.transform = 'scale(1)';

        if (window.scrollY > 0) {
            icon.style.color = 'white';
        } else {
            icon.style.color = 'black';
        }
    }
});
