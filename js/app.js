document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');

    // Lista de videos de YouTube (ID de cada video)
    const videos = [
        { title: "Video 1", id: "69RdQFDuYPI" }, // Este es un ejemplo de ID
        { title: "Video 2", id: "9bZkp7q19f0" },
        { title: "Video 3", id: "kJQP7kiw5Fk" },
        { title: "Video 4", id: "3JZ_D3ELwOQ" },
        { title: "Video 5", id: "HgzGwKwLmgM" },
        { title: "Video 6", id: "l5E6sGQ3CAY" }
    ];

    // Ciclo for para agregar los videos a la página
    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const videoElement = document.createElement('div');
        videoElement.classList.add('video');
        videoElement.innerHTML = `
            <a href="https://www.youtube.com/watch?v=${video.id}" target="_blank">
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <h3>${video.title}</h3>
            </a>
        `;
        videoGrid.appendChild(videoElement);
    }
});

