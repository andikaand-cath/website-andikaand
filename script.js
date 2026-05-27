document.addEventListener("DOMContentLoaded", () => {
    // Mengambil semua card player
    const players = document.querySelectorAll('.player-card');

    players.forEach(player => {
        const audio = player.querySelector('.audio-file');
        const playBtn = player.querySelector('.play-btn');
        const progressBar = player.querySelector('.progress-bar');
        const currentTimeEl = player.querySelector('.current-time');
        const durationTimeEl = player.querySelector('.duration-time');

});
});