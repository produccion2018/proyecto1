// Array con IDs de videos de YouTube
const videoIDs = [
    "VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3", "VIDEO_ID_4", "VIDEO_ID_5",
    "VIDEO_ID_6", "VIDEO_ID_7", "VIDEO_ID_8", "VIDEO_ID_9", "VIDEO_ID_10"
];

// Obtener el contenedor de videos
const videoGrid = document.getElementById('video-grid');

// Generar y cargar los videos con un bucle for
for (let i = 0; i < videoIDs.length; i++) {
    const videoID = videoIDs[i];

    // Crear elemento contenedor del video
    const videoItem = document.createElement('div');
    videoItem.classList.add('video-item');

    // Crear imagen de miniatura
    const thumbnail = document.createElement('img');
    thumbnail.classList.add('video-thumbnail');
    thumbnail.src = `https://img.youtube.com/vi/${videoID}/0.jpg`;

    // Crear título del video
    const title = document.createElement('p');
    title.classList.add('video-title');
    title.textContent = `Video ${i + 1}`;

    // Añadir miniatura y título al contenedor de video
    videoItem.appendChild(thumbnail);
    videoItem.appendChild(title);

    // Añadir el contenedor de video a la cuadrícula
    videoGrid.appendChild(videoItem);

    // Agregar evento para abrir el video en YouTube
    videoItem.addEventListener('click', () => {
        window.open(`https://www.youtube.com/watch?v=${videoID}`, '_blank');
    });
}


