document.addEventListener("DOMContentLoaded", () => {
    const videoContainers = document.querySelectorAll(".video-container");

    videoContainers.forEach(container => {
        const video = container.querySelector("video");
        const img = container.querySelector("img");

        container.addEventListener("mouseover", () => {
            video.play();
        });

        container.addEventListener("mouseout", () => {
            video.pause();
            video.currentTime = 0; // Reinicia o vídeo
        });
    });
});
