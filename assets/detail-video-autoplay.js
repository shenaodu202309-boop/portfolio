(() => {
    const video = document.querySelector('[data-detail-preview]');
    if (!video) {
        return;
    }

    function tryAutoplay() {
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;

        const playAttempt = video.play();
        if (playAttempt !== undefined) {
            playAttempt.catch(() => {
                // 自动播放被系统阻止时保留封面和原生播放按钮。
            });
        }
    }

    tryAutoplay();
    video.addEventListener('loadedmetadata', tryAutoplay, { once: true });
    video.addEventListener('canplay', tryAutoplay, { once: true });
    document.addEventListener('WeixinJSBridgeReady', tryAutoplay, false);
    window.addEventListener('pageshow', tryAutoplay);
})();
