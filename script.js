console.log("Welcome to Gana Music Player");

document.addEventListener('DOMContentLoaded', () => {
    let songindex = 0;
    let audioelement = new Audio('Gandagana.mp3');
    let mymasterPlay = document.getElementById('masterPlay');
    let myprogressbar = document.getElementById('myprogressbar');
    let previous = document.getElementById('previous');
    let next = document.getElementById('next');
    let playb1 = document.getElementById('playb1');
    let playb2 = document.getElementById('playb2');
    let currentTimeLabel = document.getElementById('currentTimeLabel');
    let durationLabel = document.getElementById('durationLabel');
    let progressBarFill = document.getElementById('progressBarFill');

    let songs = [
        { songName: "Gandagana", filePath: "Gandagana.mp3", coverPath: "gandaganacover.jpg" },
        { songName: "DevilEyes", filePath: "DevilEyes.mp3", coverPath: "devileyescover.jpg" }
    ];

    function updateMasterIcon(isPlaying) {
        if (mymasterPlay) {
            mymasterPlay.src = isPlaying ? "pause.svg" : "play.svg";
        }
    }

    function updateTrackButtons(activeIndex, isPlaying) {
        if (playb1) {
            playb1.src = (activeIndex === 0 && isPlaying) ? "pauseback.svg" : "playblack.svg";
        }
        if (playb2) {
            playb2.src = (activeIndex === 1 && isPlaying) ? "pauseback.svg" : "playblack.svg";
        }
    }

    function loadAndPlay(index) {
        songindex = (index + songs.length) % songs.length;
        audioelement.src = songs[songindex].filePath;
        audioelement.load();
        audioelement.currentTime = 0;
        audioelement.play().catch(e => console.log("Play error:", e));
        updateMasterIcon(true);
        updateTrackButtons(songindex, true);
    }

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    audioelement.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        console.error('Audio source:', audioelement.src);
    });

    audioelement.addEventListener('loadstart', () => {
        console.log('Audio loading started:', audioelement.src);
    });

    audioelement.addEventListener('canplay', () => {
        console.log('Audio can play:', audioelement.src);
    });

    audioelement.load();

    audioelement.addEventListener('timeupdate', () => {
        const duration = audioelement.duration || 0;
        const current = audioelement.currentTime || 0;
        
        if (duration > 0 && myprogressbar) {
            myprogressbar.value = current;
            const progressPercent = (current / duration) * 100;
            if (progressBarFill) {
                progressBarFill.style.width = progressPercent + '%';
            }
        }
        
        if (currentTimeLabel) {
            currentTimeLabel.textContent = formatTime(current);
        }
    });

    audioelement.addEventListener('loadedmetadata', () => {
        const duration = audioelement.duration || 0;
        if (myprogressbar && duration > 0) {
            myprogressbar.max = duration;
        }
        if (durationLabel) {
            durationLabel.textContent = formatTime(duration);
        }
        if (progressBarFill) {
            progressBarFill.style.width = '0%';
        }
    });

    myprogressbar.addEventListener('input', () => {
        const seekTo = parseFloat(myprogressbar.value);
        if (!isNaN(seekTo) && audioelement.duration) {
            audioelement.currentTime = seekTo;
            const progressPercent = (seekTo / audioelement.duration) * 100;
            if (progressBarFill) {
                progressBarFill.style.width = progressPercent + '%';
            }
        }
    });

    mymasterPlay.addEventListener('click', () => {
        if (audioelement.paused) {
            audioelement.play().catch(e => console.log("Play error:", e));
            updateMasterIcon(true);
            updateTrackButtons(songindex, true);
        } else {
            audioelement.pause();
            updateMasterIcon(false);
            updateTrackButtons(songindex, false);
        }
    });

    next.addEventListener('click', () => {
        songindex = (songindex + 1) % songs.length;
        audioelement.src = songs[songindex].filePath;
        audioelement.load();
        audioelement.currentTime = 0;
        audioelement.play().catch(e => console.log("Play error:", e));
        updateMasterIcon(true);
        updateTrackButtons(songindex, true);
    });

    previous.addEventListener('click', () => {
        songindex = (songindex - 1 + songs.length) % songs.length;
        audioelement.src = songs[songindex].filePath;
        audioelement.load();
        audioelement.currentTime = 0;
        audioelement.play().catch(e => console.log("Play error:", e));
        updateMasterIcon(true);
        updateTrackButtons(songindex, true);
    });

    playb1.addEventListener('click', () => {
        loadAndPlay(0);
    });

    playb2.addEventListener('click', () => {
        loadAndPlay(1);
    });

    audioelement.addEventListener('ended', () => {
        const nextIndex = (songindex + 1) % songs.length;
        loadAndPlay(nextIndex);
    });

    console.log("Music player initialized successfully!");
});
