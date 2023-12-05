
const images = document.querySelectorAll(".animacion_element");

function triggerAnimation(entries){
    entries.forEach(entry =>{
        const image = entry.target.querySelectorAll("img");

        image.classList.toggle("unset", entry.isIntersecting);
    });
}

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}

const observer = new InteractionObserver(triggerAnimation, options);

images.forEach(image =>{
    observer.observe(image);
})

