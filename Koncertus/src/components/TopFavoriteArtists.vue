<template>
    <div class="topFavoriteArtistsSection">
        <div class="wrapper">
            <div class="topArtists">
                <h1 class="uppercase">Top artists</h1>
                <div class="artistsCardsContainer">
                    <div class="artistCard" v-for="topArtist in topArtistArray"
        :key="topArtist.id" :style="backgroundImageStyles(topArtist)">
                        <div class="gradientBackground">
                            <p class="uppercase bold artistCardTitle">{{ topArtist.artist }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="favoriteArtists">
                <h1 class="uppercase">Favorite artists</h1>
                <div class="artistsCardsContainer">
                    <div class="artistCard" v-for="favoriteArtist in favoriteArtistArray"
        :key="favoriteArtist.id" :style="backgroundImageStyles(favoriteArtist)">
                        <div class="gradientBackground">
                            <p class="uppercase bold artistCardTitle">{{ favoriteArtist.artist }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ZZTopImage from '@/assets/img/zztop.png';
import WhitesnakeImage from '@/assets/img/whitesnake.png';
import SabatonImage from '@/assets/img/sabaton.png';
import LinkinParkImage from '@/assets/img/linkinpark.png';
import IronMaidenImage from '@/assets/img/ironmaiden.png';
import PowerwolfImage from '@/assets/img/powerwolf.png';
import ScorpionsImage from '@/assets/img/scorpions.png';
import DisturbedImage from '@/assets/img/disturbed.png';
import DivljeJagodeImage from '@/assets/img/divljejagode.png';
import HeimlichImage from '@/assets/img/heimlich.png';

export default {
  data() {
    return {
      showModal: false,
      concerts: {},
      search: "",
      topArtistArray: [
        {
          id: 1,
          artist: "zz top",
          isrc: ZZTopImage,
        },
        {
          id: 2,
          artist: "whitesnake",
          isrc: WhitesnakeImage,
        },
        {
          id: 3,
          artist: "disturbed",
          isrc: DisturbedImage,
        },
        {
          id: 4,
          artist: "sabaton",
          isrc: SabatonImage,
        },
        {
          id: 5,
          artist: "linkin park",
          isrc: LinkinParkImage,
        },
        {
          id: 6,
          artist: "divlje jagode",
          isrc: DivljeJagodeImage,
        },
      ],      
      favoriteArtistArray: [
        {
          id: 1,
          artist: "divlje jagode",
          isrc: DivljeJagodeImage,
        },
        {
          id: 2,
          artist: "whitesnake",
          isrc: WhitesnakeImage,
        },
        {
          id: 3,
          artist: "linkin park",
          isrc: LinkinParkImage,
        },
        {
          id: 4,
          artist: "iron maiden",
          isrc: IronMaidenImage,
        },
        {
          id: 5,
          artist: "powerwolf",
          isrc: PowerwolfImage,
        },
        {
          id: 6,
          artist: "scorpions",
          isrc: ScorpionsImage,
        },
      ],
    };
  },
  computed: {
    backgroundImageStyles() {
      return (arrayName) =>({
        "background-image": `url("${arrayName.isrc}")`,
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
      });
    },
  },
};
</script>