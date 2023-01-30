import React from 'react';
import './MusicPlayer.scss';

const MusicPlayer = () => {

    const songs = [
        {
          name: "Stomping Rock",
          author: "Alex Grohl",
          path: "./assets/songs/Alex Grohl - Stomping Rock.mp3",
        },
        {
          name: "Jazzy Abstract Beat",
          author: "Coma Media",
          path: "./assets/songs/Coma Media - Jazzy Abstract Beat.mp3",
        },
        {
          name: "Sexy Fashion Beats",
          author: "Coma Media",
          path: "./assets/songs/Coma Media - Sexy Fashion Beats.mp3",
        },
        {
          name: "Best Time",
          author: "FASSounds",
          path: "./assets/songs/FASSounds - Best Time.mp3",
        },
        {
          name: "Guitar Electro Sport",
          author: "Gvidon",
          path: "./assets/songs/Gvidon - Guitar Electro Sport Trailer.mp3",
        },
    ];
    
    const togglePlaySong = () => {
        if (audioPlayer.paused) {
          audioPlayer.play();
          btnPlayIcon.classList.replace("bi-play-fill", "bi-pause-fill");
        } else {
          audioPlayer.pause();
          btnPlayIcon.classList.replace("bi-pause-fill", "bi-play-fill");
        }
      };


    return (
        <div class="container">
      <div class="player">
        <audio id="audio-player"></audio>

        <h2 id="song-name" class="song-name"></h2>
        <p id="song-author" class="song-author"></p>

        <div class="player-progress">
          <div class="progress-values">
            <span id="player-current-time">--:--</span>
            <span id="player-duration">--:--</span>
          </div>
          {/* <progress id="player-progress"></progress> */}
          <input type="range" id="player-progress" value="50" />
        </div>

        <div class="player-buttons">
                    <button id="btn-repeat" class="btn btn-repeat" onClick={() => toggleRepeatSong()}>
            <i class="bi bi-repeat"></i>
          </button>
          <button id="btn-prev" class="btn btn-prev" onClick={() => changeSong(false)}>
            <i class="bi bi-rewind-fill"></i>
          </button>
          <button id="btn-play" class="btn btn-play" onClick={() => togglePlaySong()}>
            <i id="btn-play-icon" class="bi bi-play-fill"></i>
          </button>
          <button id="btn-next" class="btn btn-next" onClick={() => changeSong()}>
            <i class="bi bi-fast-forward-fill"></i>
          </button>

          <div class="dropdown">
            <button id="btn-volume" class="btn btn-volume" onClick={() => changeVolumn()}>
              <i class="bi bi-volume-up-fill"></i>
            </button>

            <div class="dropdown-content">
              <input
                type="range"
                id="player-volume"
                value="1"
                min="0"
                max="1"
                step="0.01"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MusicPlayer;