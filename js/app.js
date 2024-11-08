document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');

    // Array de videos (podrías obtener esto desde una API)
    const videos = [
        { title: "Video 1", url: "#", thumbnail: "https://via.placeholder.com/250" },
        { title: "Video 2", url: "#", thumbnail: "https://via.placeholder.com/250" },
        { title: "Video 3", url: "#", thumbnail: "https://via.placeholder.com/250" },
        { title: "Video 4", url: "#", thumbnail: "https://via.placeholder.com/250" },
        { title: "Video 5", url: "#", thumbnail: "https://via.placeholder.com/250" },
        { title: "Video 6", url: "#", thumbnail: "https://via.placeholder.com/250" }
    ];

    // Ciclo for para agregar videos a la página
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <a href="${video.url}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <h3>${video.title}</h3>
            </a>
        `;
        videoGrid.appendChild(videoElement);
    }
});
