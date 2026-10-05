// Database object containing information and photos for each destination
// Database object containing information and photos for each destination
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
            "pics/montreal/IMG_6206.JPEG",
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

// Function that hides the home list and populates the dynamic stream
function openGallery(cityKey) {
    const data = galleryData[cityKey];
    if (!data) return;

    // Set Title
    document.getElementById('album-title').innerText = data.title;

    // Build Image/Video Stream HTML
    const streamContainer = document.getElementById('photo-stream-container');
    streamContainer.innerHTML = ""; // Clear old content
    
    data.images.forEach(fileUrl => {
        // Check if the file is a video format
        const isVideo = fileUrl.toLowerCase().endsWith('.mov') || fileUrl.toLowerCase().endsWith('.mp4');

        if (isVideo) {
            const videoElement = document.createElement('video');
            videoElement.src = fileUrl;
            videoElement.controls = true;
            videoElement.muted = true;
            videoElement.playsInline = true;
            videoElement.style.width = "100%";
            videoElement.style.marginBottom = "20px";
            videoElement.style.borderRadius = "6px";
            videoElement.style.boxShadow = "0 4px 10px rgba(0,0,0,0.05)";
            streamContainer.appendChild(videoElement);
        } else {
            const imgElement = document.createElement('img');
            imgElement.src = fileUrl;
            imgElement.alt = data.title + " Photo";
            streamContainer.appendChild(imgElement);
        }
    });

    // Toggle Visibility
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('album-view').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    
    // Smoothly scroll back to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to navigate back to the primary collection list
function showHomeView() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('album-view').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
}


// Function that hides the home list and populates the dynamic stream
function openGallery(cityKey) {
    const data = galleryData[cityKey];
    if (!data) return;

    // Set Title
    document.getElementById('album-title').innerText = data.title;

    // Build Image Stream HTML
    const streamContainer = document.getElementById('photo-stream-container');
    streamContainer.innerHTML = ""; // Clear old images
    
    data.images.forEach(imgUrl => {
        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.alt = data.title + " Photo";
        streamContainer.appendChild(imgElement);
    });

    // Toggle Visibility
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('album-view').style.display = 'block';
    document.getElementById('backBtn').style.display = 'block';
    
    // Smoothly scroll back to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Function to navigate back to the primary collection list
function showHomeView() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('album-view').style.display = 'none';
    document.getElementById('backBtn').style.display = 'none';
}
