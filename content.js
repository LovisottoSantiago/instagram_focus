function removeDistractingElements() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    document.title = "Lovigram";
    replaceInstagramLogo();

    removeElementByHref("/reels/");
    removeElementByHref("/explore/");
    removeElementByHrefPattern("/reels/?hl=");
    removeElementByHrefPattern("/explore/?hl=");

    removeElementByClass("x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1");
    removeElementByClass("x1qjc9v5 x9f619 x78zum5 xdt5ytf x2lah0s xk390pu xdj266r x11i5rnm xat24cr x1mh8g0r x1h3rv7z xexx8yu x18d9i69 x1n2onr6 x11njtxf x1pi30zi x1swvt13 xvbhtw8");
    


    if (!isMobile()) {
        const message = document.createElement('p');
        message.innerText = 'Estas usando Instagram Focus by Lovi';

        message.style.position = 'fixed';
        message.style.top = '50%';
        message.style.left = '50%';
        message.style.transform = 'translate(-50%, -50%)';
        message.style.fontSize = '20px';
        message.style.fontWeight = 'bold';
        message.style.color = 'white';
        message.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        message.style.padding = '10px 20px';
        message.style.borderRadius = '5px';
        message.style.textAlign = 'center';

        document.body.appendChild(message);
    }
}

function isMobile() {
    return window.innerWidth <= 768;
}

function removeElementByHref(href) {
    const element = document.querySelector(`a[href='${href}']`);
    if (element) {
        element.parentElement.style.display = "none";
    }
} 

function removeElementByHrefPattern(pattern) {
    const element = document.querySelector(`a[href^='${pattern}']`); 
    if (element) {
        element.parentElement.style.display = "none";
    }
}

function removeElementByClass(className) {
    const elements = document.querySelectorAll(`.${className.split(" ").join(".")}`);
    elements.forEach(element => {
        element.style.display = "none";
    });
}

function replaceInstagramLogo() {
    const logo = document.querySelector("svg[aria-label='Instagram']");
    if (logo) {
        logo.innerHTML = `<path fill="black" d="M10 10 H 90 V 90 H 10 Z" />`; 
    }
}


// Ejecutar cuando se cargue la página
removeDistractingElements();

// Reintentar en caso de cambios dinámicos
setInterval(removeDistractingElements, 1000);
