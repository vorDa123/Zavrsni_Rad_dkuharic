<template>
  <transition name="fade" appear>
    <div
      class="modalOverlay"
      v-if="showModal"
      @click="showModal = false"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    ></div>
  </transition>
  <transition name="fade" appear>
    <div
      class="modalContainer modalContainerCustom"
      id="myModal"
      v-if="showModal"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <span @click="showModal = false">
        <font-awesome-icon icon="fa-solid fa-xmark" class="xIconSize"
      /></span>
      <div>
        <div
          :style="modalBackgroundImageStyles(modalImage)"
          class="modalArtistImage"
        ></div>
        <div>
          <h2 class="uppercase modalArtistFontSize">{{ modalArtist }}</h2>
        </div>
        <p>
          {{ modalDescription }}
        </p>
        <hr class="modalLine" />
        <div v-for="song in modalSongs"
        :key="song.id">
          <p class="marginTopFiveSongs">{{ song.songID }}. {{ song.songName }}</p>          
        </div>
      </div>
    </div>
  </transition>
  <div class="topFavoriteArtistsSection">
    <div class="wrapper">
      <div class="topArtists">
        <h1 class="uppercase">Top artists</h1>
        <div class="artistsCardsContainer">
          <div
            class="artistCard"
            v-for="topArtist in topArtistArray"
            :key="topArtist.id"
            :style="backgroundImageStyles(topArtist)"
            @click="itemClicked(topArtist)"
          >
            <div class="gradientBackground">
              <p class="uppercase bold artistCardTitle">
                {{ topArtist.artist }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="favoriteArtists">
        <h1 class="uppercase">Favorite artists</h1>
        <div class="artistsCardsContainer">
          <div
            class="artistCard"
            v-for="favoriteArtist in favoriteArtistArray"
            :key="favoriteArtist.id"
            :style="backgroundImageStyles(favoriteArtist)"
            @click="itemClicked(favoriteArtist)"
          >
            <div class="gradientBackground">
              <p class="uppercase bold artistCardTitle">
                {{ favoriteArtist.artist }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ZZTopImage from "@/assets/img/zztop.png";
import WhitesnakeImage from "@/assets/img/whitesnake.png";
import SabatonImage from "@/assets/img/sabaton.png";
import LinkinParkImage from "@/assets/img/linkinpark.png";
import IronMaidenImage from "@/assets/img/ironmaiden.png";
import PowerwolfImage from "@/assets/img/powerwolf.png";
import ScorpionsImage from "@/assets/img/scorpions.png";
import DisturbedImage from "@/assets/img/disturbed.png";
import DivljeJagodeImage from "@/assets/img/divljejagode.png";
import HeimlichImage from "@/assets/img/heimlich.png";

export default {
  data() {
    return {
      showModal: false,
      modalArtist: "",
      modalImage: "",
      modalSongs: [],
      modalDescription: "",
      topArtistArray: [
        {
          id: 1,
          artist: "zz top",
          isrc: ZZTopImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "La Grange",
            },
            {
              songID: 2,
              songName: "Pearl Necklace",
            },
            {
              songID: 3,
              songName: "Shard Dressed Man",
            },
            {
              songID: 4,
              songName: "Gimme All Your Lovin",
            },
            {
              songID: 5,
              songName: "Tush",
            },
          ],
        },
        {
          id: 2,
          artist: "whitesnake",
          isrc: WhitesnakeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Here I Go Again",
            },
            {
              songID: 2,
              songName: "Fool For Your Loving",
            },
            {
              songID: 3,
              songName: "Standing In The Shadow",
            },
            {
              songID: 4,
              songName: "Looking For Love",
            },
            {
              songID: 5,
              songName: "Restless Heart",
            },
          ],
        },
        {
          id: 3,
          artist: "disturbed",
          isrc: DisturbedImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Sound Of Silence",
            },
            {
              songID: 2,
              songName: "Uninvited Guest",
            },
            {
              songID: 3,
              songName: "Who",
            },
            {
              songID: 4,
              songName: "What Are You Waiting For",
            },
            {
              songID: 5,
              songName: "Are You Ready",
            },
          ],
        },
        {
          id: 4,
          artist: "sabaton",
          isrc: SabatonImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Fields Of Verdun",
            },
            {
              songID: 2,
              songName: "Carolus Rex",
            },
            {
              songID: 3,
              songName: "Primo Victoria",
            },
            {
              songID: 4,
              songName: "The Red Baron",
            },
            {
              songID: 5,
              songName: "Lady Of The Dark",
            },
          ],
        },
        {
          id: 5,
          artist: "linkin park",
          isrc: LinkinParkImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Numb",
            },
            {
              songID: 2,
              songName: "In The End",
            },
            {
              songID: 3,
              songName: "Breaking The Habit",
            },
            {
              songID: 4,
              songName: "Lost",
            },
            {
              songID: 5,
              songName: "Final Masquerade",
            },
          ],
        },
        {
          id: 6,
          artist: "divlje jagode",
          isrc: DivljeJagodeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Kap Po Kap",
            },
            {
              songID: 2,
              songName: "Divlje Jagode",
            },
            {
              songID: 3,
              songName: "Ti Bez Riječi Znaš",
            },
            {
              songID: 4,
              songName: "Piramida",
            },
            {
              songID: 5,
              songName: "Plave Noći Bez Tebe",
            },
          ],
        },
      ],
      favoriteArtistArray: [
        {
          id: 1,
          artist: "divlje jagode",
          isrc: DivljeJagodeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Kap Po Kap",
            },
            {
              songID: 2,
              songName: "Divlje Jagode",
            },
            {
              songID: 3,
              songName: "Ti Bez Riječi Znaš",
            },
            {
              songID: 4,
              songName: "Piramida",
            },
            {
              songID: 5,
              songName: "Plave Noći Bez Tebe",
            },
          ],
        },
        {
          id: 2,
          artist: "whitesnake",
          isrc: WhitesnakeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Here I Go Again",
            },
            {
              songID: 2,
              songName: "Fool For Your Loving",
            },
            {
              songID: 3,
              songName: "Standing In The Shadow",
            },
            {
              songID: 4,
              songName: "Looking For Love",
            },
            {
              songID: 5,
              songName: "Restless Heart",
            },
          ],
        },
        {
          id: 3,
          artist: "linkin park",
          isrc: LinkinParkImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Numb",
            },
            {
              songID: 2,
              songName: "In The End",
            },
            {
              songID: 3,
              songName: "Breaking The Habit",
            },
            {
              songID: 4,
              songName: "Lost",
            },
            {
              songID: 5,
              songName: "Final Masquerade",
            },
          ],
        },
        {
          id: 4,
          artist: "iron maiden",
          isrc: IronMaidenImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Fear Of The Dark",
            },
            {
              songID: 2,
              songName: "Rainmaker",
            },
            {
              songID: 3,
              songName: "The Writing On The Wall",
            },
            {
              songID: 4,
              songName: "Dance Of Death",
            },
            {
              songID: 5,
              songName: "Empire Of The Clouds",
            },
          ],
        },
        {
          id: 5,
          artist: "powerwolf",
          isrc: PowerwolfImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "Dancing With The Dead",
            },
            {
              songID: 2,
              songName: "Armata Strigoi",
            },
            {
              songID: 3,
              songName: "Kiss Of The Cobra King",
            },
            {
              songID: 4,
              songName: "Reverent Of Rats",
            },
            {
              songID: 5,
              songName: "My Will Be Done",
            },
          ],
        },
        {
          id: 6,
          artist: "scorpions",
          isrc: ScorpionsImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
          songs: [
            {
              songID: 1,
              songName: "No One Like You",
            },
            {
              songID: 2,
              songName: "Rock You Like A Hurricane",
            },
            {
              songID: 3,
              songName: "Rhythm Of Love",
            },
            {
              songID: 4,
              songName: "Wind Of Change",
            },
            {
              songID: 5,
              songName: "Still Loving You",
            },
          ],
        },
      ],
    };
  },
  computed: {
    backgroundImageStyles() {
      return (arrayName) => ({
        "background-image": `url("${arrayName.isrc}")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
      });
    },
    modalBackgroundImageStyles() {
      return (bgimage) => ({
        "background-image": `url("${bgimage}")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
      });
    },
  },
  methods: {
    itemClicked(item) {
      this.modalArtist = item.artist;
      this.modalImage = item.isrc;
      this.modalDescription = item.description;
      this.modalSongs = item.songs;
      this.showModal = true;
    },
  },
};
</script>
