const galleryData = {
    toronto: {
        title: "Toronto, Canada",
        images: [
            "pics/toronto/20240421_135045.jpg",
            "pics/toronto/20240522_171307.jpg",
            "pics/toronto/IMG_1991.JPEG",
            "pics/toronto/IMG_2634.JPEG",
            "pics/toronto/IMG_3425.JPEG",
            "pics/toronto/IMG_3428.JPEG",
            "pics/toronto/IMG_5207.JPEG",
            "pics/toronto/IMG_5264.JPEG",
            "pics/toronto/IMG_5266.JPEG",
            "pics/toronto/IMG_5270.JPEG",
            "pics/toronto/IMG_5281.JPEG",
            "pics/toronto/IMG_5290.JPEG"
        ]
    },
    montreal: {
        title: "Montreal, Canada",
        images: [
            "pics/montreal/IMG_3112.JPEG",
            "pics/montreal/IMG_3124.JPEG",
            "pics/montreal/IMG_3350.JPEG",
            "pics/montreal/IMG_3354.JPEG",
            "pics/montreal/IMG_4572.JPEG",
            "pics/montreal/IMG_4609.JPEG",
            "pics/montreal/IMG_6204.JPEG",
            "pics/montreal/IMG_6213.JPEG",
            "pics/montreal/IMG_6214.JPEG"
        ]
    },
    ottawa: {
        title: "Ottawa, Canada",
        images: [
            "pics/ottawa/IMG_2182.JPEG",
            "pics/ottawa/IMG_2201.JPEG",
            "pics/ottawa/IMG_4293.JPEG",
            "pics/ottawa/IMG_4789.JPEG",
            "pics/ottawa/IMG_4796.JPEG",
            "pics/ottawa/IMG_4872.JPEG",
            "pics/ottawa/IMG_4911.JPEG",
            "pics/ottawa/IMG_4913.JPEG",
            "pics/ottawa/IMG_5992.JPEG"
        ]
    },
    nyc: {
        title: "New York City, USA",
        images: [
            "pics/new_york/IMG_5514.JPEG",
            "pics/new_york/IMG_5538.JPEG",
            "pics/new_york/IMG_5547.JPEG",
            "pics/new_york/IMG_5550.JPEG",
            "pics/new_york/IMG_5666.JPEG",
            "pics/new_york/IMG_5673.JPEG",
            "pics/new_york/IMG_5774.JPEG",
            "pics/new_york/IMG_5866.JPEG",
            "pics/new_york/IMG_5877.JPEG"
        ]
    },
    quebec_city: {
        title: "Quebec City, Canada",
        images: [
            "pics/Quebec_city/IMG_6022.JPEG",
            "pics/Quebec_city/IMG_6025.JPEG",
            "pics/Quebec_city/IMG_6028.JPEG",
            "pics/Quebec_city/IMG_6031.JPEG",
            "pics/Quebec_city/IMG_6038.JPEG",
            "pics/Quebec_city/IMG_6040.JPEG",
            "pics/Quebec_city/IMG_6048.JPEG",
            "pics/Quebec_city/IMG_6049.JPEG",
            "pics/Quebec_city/IMG_6079.JPEG",
            "pics/Quebec_city/IMG_6080.JPEG",
            "pics/Quebec_city/IMG_6102.JPEG",
            "pics/Quebec_city/IMG_6123.JPEG",
            "pics/Quebec_city/IMG_6153.JPEG",
            "pics/Quebec_city/IMG_6158.JPEG",
            "pics/Quebec_city/IMG_6159.JPEG",
            "pics/Quebec_city/IMG_6161.JPEG"
        ]
    }
};

const citySlides = [
    { cityKey: 'toronto', name: 'Toronto', image: 'pics/toronto/IMG_5266.JPEG' },
    { cityKey: 'montreal', name: 'Montreal', image: 'pics/montreal/IMG_6204.JPEG' },
    { cityKey: 'ottawa', name: 'Ottawa', image: 'pics/ottawa/IMG_4913.JPEG' },
    { cityKey: 'nyc', name: 'New York', image: 'pics/new_york/IMG_5877.JPEG' },
    { cityKey: 'quebec_city', name: 'Quebec City', image: 'pics/Quebec_city/IMG_6159.JPEG' }
];

let currentSlideIndex = 0;
let citySlideTimer = null;

function renderHeroSlide(index) {
    const slide = citySlides[index];
    const heroVisual = document.getElementById('hero-visual');
    const heroCity = document.getElementById('hero-city');
    const heroIndex = document.getElementById('hero-index');

    if (!slide || !heroVisual || !heroCity || !heroIndex) return;

    heroVisual.style.backgroundImage = `url('${slide.image}')`;
    heroVisual.setAttribute('data-city-key', slide.cityKey);
    heroCity.textContent = slide.name;
    heroIndex.textContent = String(index + 1).padStart(2, '0');
}

function nextHeroSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % citySlides.length;
    renderHeroSlide(currentSlideIndex);
}

function startHeroSlideshow() {
    clearInterval(citySlideTimer);
    citySlideTimer = setInterval(nextHeroSlide, 3500);
}

let currentLightboxImages = [];
let currentLightboxIndex = 0;

function openLightbox(images, startIndex) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCounter = document.getElementById('lightbox-counter');

    if (!lightbox || !lightboxImage || !images.length) return;

    currentLightboxImages = images;
    currentLightboxIndex = startIndex;

    const updateLightbox = () => {
        const currentImage = currentLightboxImages[currentLightboxIndex];
        lightboxImage.src = currentImage;
        lightboxImage.alt = `Gallery image ${currentLightboxIndex + 1}`;
        lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
    };

    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

function goToPreviousImage() {
    if (!currentLightboxImages.length) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxImages.length) % currentLightboxImages.length;
    document.getElementById('lightbox-image').src = currentLightboxImages[currentLightboxIndex];
    document.getElementById('lightbox-counter').textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
}

function goToNextImage() {
    if (!currentLightboxImages.length) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxImages.length;
    document.getElementById('lightbox-image').src = currentLightboxImages[currentLightboxIndex];
    document.getElementById('lightbox-counter').textContent = `${currentLightboxIndex + 1} / ${currentLightboxImages.length}`;
}

function openGallery(cityKey) {
    const data = galleryData[cityKey];
    if (!data) return;

    const title = document.getElementById('album-title');
    const streamContainer = document.getElementById('photo-stream-container');
    const contactSection = document.getElementById('contact');
    const journeysNav = document.getElementById('journeys-nav');
    const aboutNav = document.getElementById('about-nav');
    const contactNav = document.getElementById('contact-nav');

    title.innerText = data.title;
    streamContainer.innerHTML = "";

    data.images.forEach((fileUrl, index) => {
        const isVideo = fileUrl.toLowerCase().endsWith('.mov') || fileUrl.toLowerCase().endsWith('.mp4');

        if (isVideo) {
            const videoElement = document.createElement('video');
            videoElement.src = fileUrl;
            videoElement.controls = true;
            videoElement.muted = true;
            videoElement.playsInline = true;
            streamContainer.appendChild(videoElement);
        } else {
            const imgElement = document.createElement('img');
            imgElement.src = fileUrl;
            imgElement.alt = data.title + " Photo";
            imgElement.addEventListener('click', () => openLightbox(data.images, index));
            streamContainer.appendChild(imgElement);
        }
    });

    document.getElementById('home-view').style.display = 'none';
    document.getElementById('album-view').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    if (journeysNav) journeysNav.style.display = 'none';
    if (aboutNav) aboutNav.style.display = 'none';
    if (contactNav) contactNav.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showHomeView() {
    const journeysNav = document.getElementById('journeys-nav');
    const aboutNav = document.getElementById('about-nav');
    const contactNav = document.getElementById('contact-nav');

    document.getElementById('home-view').style.display = 'block';
    document.getElementById('album-view').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
    if (journeysNav) journeysNav.style.display = 'inline';
    if (aboutNav) aboutNav.style.display = 'inline';
    if (contactNav) contactNav.style.display = 'inline';
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.style.display = 'block';
    closeLightbox();
}

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const closeButton = document.getElementById('lightbox-close');
    const prevButton = document.getElementById('lightbox-prev');
    const nextButton = document.getElementById('lightbox-next');
    const heroVisual = document.getElementById('hero-visual');
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('form-status');

    renderHeroSlide(currentSlideIndex);
    startHeroSlideshow();

    heroVisual.addEventListener('click', () => {
        const cityKey = heroVisual.getAttribute('data-city-key');
        if (cityKey) {
            openGallery(cityKey);
        }
    });

    heroVisual.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const cityKey = heroVisual.getAttribute('data-city-key');
            if (cityKey) openGallery(cityKey);
        }
    });

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                formStatus.textContent = 'Please complete all fields before sending.';
                return;
            }

            const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
            const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            const mailtoLink = `mailto:sakshammishra1920@gmail.com?subject=${subject}&body=${body}`;

            formStatus.textContent = 'Opening your email app...';
            window.location.href = mailtoLink;
            contactForm.reset();
        });
    }

    closeButton.addEventListener('click', closeLightbox);
    prevButton.addEventListener('click', goToPreviousImage);
    nextButton.addEventListener('click', goToNextImage);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('open')) return;

        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowLeft') {
            goToPreviousImage();
        } else if (event.key === 'ArrowRight') {
            goToNextImage();
        }
    });
});
