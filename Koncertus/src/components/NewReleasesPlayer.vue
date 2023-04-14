<template>
  <div class="newReleasesPlayer">
    <div class="row">
      <div class="column">
        <div class="topTenSongs">
          <br />
          <p class="uppercase bold positionTopTenTitle">Top ten songs</p>
          <div class="row rowGap">
            <div
              class="columnTopTenSongs"
              v-for="songs in topTenSongs"
              :key="songs.src"
            >
              <div class="inline marginLeftNumber">
                <div class="paddingIcons paddingTopNumber">
                  <p class="bold">#{{ songs.id }}</p>
                </div>
                <div class="inline">
                  <div
                    class="songImage"
                    :style="backgroundImageStyles(songs)"
                  />
                  <div class="paddingIcons lineHeight">
                    <p class="bold uppercase">{{ songs.artist }}</p>
                    <p class="smallerFont">{{ songs.title }}</p>
                    <p class="smallerFont">{{ songs.album }}</p>
                    <div class="sameLinePlayButton paddingSameLine">
                      <p class="smallerFont">{{ songs.duration }}</p>
                      <button class="playButtonStyle" @click="play(songs)">
                        <font-awesome-icon
                          icon="fa-solid fa-play"
                          class="paddingRightCardIcon"
                        />Play
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
      <div
        class="column"
        v-for="song in topTenSongs.slice(0, 1)"
        :key="song.src"
      >
        <div class="nowPlaying" :style="backgroundImageStyles(current)">
          <div class="playerContentText">
            <div class="artistSong">
              <p class="uppercase bold playerArtist">{{ current.artist }}</p>
              <p class="playerSong">{{ current.title }}</p>
            </div>
            <br />
            <div class="sliders">
              <div class="slideContainer">
                <font-awesome-icon
                  icon="fa-solid fa-play"
                  class="paddingRightCardIcon positionSlider"
                  v-if="!isPlaying"
                  @click="play"
                />
                <font-awesome-icon
                  icon="fa-solid fa-pause"
                  class="paddingRightCardIcon positionSlider"
                  v-else
                  @click="pause"
                /><input
                  type="range"
                  min="1"
                  max="100"
                  value="0"
                  class="slider durationSlider"
                  id="timeSong"
                />
                <span @timeupdate="">{{ durationPrint }}</span>
              </div>
              <div class="slideContainer volumeSliderContainer">
                <font-awesome-icon
                  icon="fa-solid fa-volume-high"
                  class="paddingRightCardIcon positionSlider"
                /><input
                  type="range"
                  min="1"
                  max="100"
                  class="slider"
                  id="volumeslider"
                  @mousemove="volume"
                  v-model="volumeVal"
                />
              </div>
            </div>
          </div>
          <div class="playerButtons">
            <button type="button" class="playerButtonStyle">
              <font-awesome-icon
                icon="fa-solid fa-share-nodes"
                class="paddingRightCardIcon"
              />Share
            </button>
            <button
              type="button"
              class="playerButtonStyle"
              v-if="!isLoop"
              @click="repeatStart"
            >
              <font-awesome-icon
                icon="fa-solid fa-repeat"
                class="paddingRightCardIcon"
              />Repeat
            </button>
            <button
              type="button"
              class="playerButtonStyle"
              v-else
              @click="repeatStop"
            >
              <font-awesome-icon
                icon="fa-solid fa-repeat"
                class="paddingRightCardIcon"
              />Stop repeat
            </button>
            <button type="button" class="playerButtonStyle" @click="previous">
              <font-awesome-icon
                icon="fa-solid fa-forward"
                id="previousIcon"
              />Previous
            </button>
            <button type="button" class="playerButtonStyle" @click="next">
              <font-awesome-icon
                icon="fa-solid fa-forward"
                class="paddingRightCardIcon"
              />Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ZZTopImage from "@/assets/img/zztop.png";
import WhitesnakeImage from "@/assets/img/whitesnake.png";
import LedZeppelinImage from "@/assets/img/ledzeppelin.png";
import SabatonImage from "@/assets/img/sabaton.png";
import LinkinParkImage from "@/assets/img/linkinpark.png";
import IronMaidenImage from "@/assets/img/ironmaiden.png";
import PowerwolfImage from "@/assets/img/powerwolf.png";
import ScorpionsImage from "@/assets/img/scorpions.png";
import DisturbedImage from "@/assets/img/disturbed.png";
import DivljeJagodeImage from "@/assets/img/divljejagode.png";
import HeimlichImage from "@/assets/img/heimlich.png";
import WhitesnakeLookingForLove from "@/assets/songs/WhitesnakeLookingForLove.mp3";
import DisturbedWhatAreYouWaitingFor from "@/assets/songs/DisturbedWhatAreYouWaitingFor.mp3";
import DisturbedWhoTaughtYouHowToHate from "@/assets/songs/DisturbedWhoTaughtYouHowToHate.mp3";
import DivljeJagodeKapPoKap from "@/assets/songs/DivljeJagodeKapPoKap.mp3";
import HeimlichFtJermaineFleurASong from "@/assets/songs/HeimlichFtJermaineFleurASong.mp3";
import IronMaidenRainmaker from "@/assets/songs/IronMaidenRainmaker.mp3";
import LinkinParkPushingMeAway from "@/assets/songs/LinkinParkPushingMeAway.mp3";
import LinkinParkTalkingToMyself from "@/assets/songs/LinkinParkTalkingToMyself.mp3";
import PowerwolfArmataStrigoi from "@/assets/songs/PowerwolfArmataStrigoi.mp3";
import ScorpionsNoOneLikeYou from "@/assets/songs/ScorpionsNoOneLikeYou.mp3";

export default {
  data() {
    return {
      showModal: false,
      showMoreButton: true,
      numberOfItems: [],
      initialNumberOfItems: 10,
      currentNumberOfRows: 0,
      current: {},
      index: 0,
      time: 0,
      isPlaying: false,
      showModal: false,
      isLoop: false,
      volumeID: "#volumeslider",
      volumeVal: 50,
      audioElement: null,
      topTenSongs: [
        {
          id: "01",
          title: "Looking For Love",
          artist: "Whitesnake",
          isrc: WhitesnakeImage,
          src: WhitesnakeLookingForLove,
          album: "album1",
          duration: "4:01",
        },
        {
          id: "02",
          title: "What Are You Waiting For",
          artist: "Disturbed",
          isrc: DisturbedImage,
          src: DisturbedWhatAreYouWaitingFor,
          album: "album1",
          duration: "4:02",
        },
        {
          id: "03",
          title: "Who Taught You How To Hate",
          artist: "Disturbed",
          isrc: DisturbedImage,
          src: DisturbedWhoTaughtYouHowToHate,
          album: "album1",
          duration: "4:03",
        },
        {
          id: "04",
          title: "Kap po Kap",
          artist: "Divlje Jagode",
          isrc: DivljeJagodeImage,
          src: DivljeJagodeKapPoKap,
          album: "album1",
          duration: "4:04",
        },
        {
          id: "05",
          title: "A Song",
          artist: "Heimlich",
          isrc: HeimlichImage,
          src: HeimlichFtJermaineFleurASong,
          album: "album1",
          duration: "4:05",
        },
        {
          id: "06",
          title: "Rainmaker",
          artist: "Iron Maiden",
          isrc: IronMaidenImage,
          src: IronMaidenRainmaker,
          album: "album1",
          duration: "4:06",
        },
        {
          id: "07",
          title: "Pushing Me Away",
          artist: "Linkin Park",
          isrc: LinkinParkImage,
          src: LinkinParkPushingMeAway,
          album: "album1",
          duration: "4:07",
        },
        {
          id: "08",
          title: "Talking To Myself",
          artist: "Linkin Park",
          isrc: LinkinParkImage,
          src: LinkinParkTalkingToMyself,
          album: "album1",
          duration: "4:08",
        },
        {
          id: "09",
          title: "Armata Strigoi",
          artist: "powerwolf",
          isrc: PowerwolfImage,
          src: PowerwolfArmataStrigoi,
          album: "album1",
          duration: "4:09",
        },
        {
          id: "10",
          title: "No One Like You",
          artist: "Scorpions",
          isrc: ScorpionsImage,
          src: ScorpionsNoOneLikeYou,
          album: "album1",
          duration: "4:10",
        },
      ],
      player: new Audio(),
    };
  },
  computed: {
    backgroundImageStyles() {
      return (concert) => ({
        "background-image": `url("${concert.isrc}")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
        "background-blend-mode": "multiply",
      });
    },    
    durationPrint(){
      if (this.audioElement || !this.duration) return '0:00';
      return parseInt(this.audioElement.duration / 60) + ':' + parseInt(this.audioElement.duration % 60);
    },
  },
  methods: {
    play(song) {
      if (typeof song.src != "undefined") {
        this.current = song;
        this.player.src = this.current.src;
      }
      this.player.play();
      this.isPlaying = true;

      this.audioElement = this.player;
      this.audioElement.ontimeupdate = this.updateTime;
      var timeChange = this;
      this.audioElement.addEventListener('durationchange', function(){
        timeChange.duration = timeChange.audioElement.duration;
      })
    },
    updateTime(){
      if (!this.audioElement || !this.audioElement.currentTime) return this.time = 0;
      this.time = (this.audioElement.currentTime / this.audioElement.duration) * 100;
    },
    pause() {
      this.player.pause();
      this.isPlaying = false;
    },
    next() {
      this.index++;
      if (this.index > this.topTenSongs.length - 1) {
        this.index = 0;
      }
      this.current = this.topTenSongs[this.index];
      this.play(this.current);
    },
    previous() {
      if (this.index == 0) {
        this.index = this.topTenSongs.length - 1;
      } else {
        this.index--;
      }
      this.current = this.topTenSongs[this.index];
      this.play(this.current);
    },
    repeatStart() {
      this.player.loop = true;
      this.isLoop = true;
    },
    repeatStop() {
      this.player.loop = false;
      this.isLoop = false;
    },
    volume() {
      this.player.volume = this.volumeVal / 100;
    },
  },
  created() {
    this.current = this.topTenSongs[this.index];
    this.player.src = this.current.src;
  },
};
</script>
