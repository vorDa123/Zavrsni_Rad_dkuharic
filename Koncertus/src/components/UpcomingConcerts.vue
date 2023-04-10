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
      class="modalContainer"
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
          <h1 class="uppercase">{{ modalArtist }}</h1>
        </div>
        <p>
          {{ modalDescription }}
        </p>
        <br />
        <p class="bold">Price: {{ modalPrice }} EUR</p>
        <br />
        <div>
          <div class="sameLineCustom">
            <p>
              <font-awesome-icon
                icon="fa-solid fa-calendar"
                class="paddingRightCardIcon"
              />
              {{ modalDate }}
            </p>
            <br />
            <p>
              <font-awesome-icon
                icon="fa-solid fa-clock"
                class="paddingRightCardIcon"
              />
              {{ modalTime }}
            </p>
            <br />
            <p>
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="paddingRightCardIcon"
              />
              {{ modalLocation }}
            </p>
          </div>
          <br />
          <button type="button" class="blueButton modalButtonPosition">
            BUY
          </button>
        </div>
      </div>
    </div>
  </transition>
  <div class="wrapper">
    <h1 class="uppercase">Upcoming concerts</h1>
    <!-- 
        For importing icons:
        <font-awesome-icon icon="fa-solid fa-calendar" />
        <font-awesome-icon icon="fa-brands fa-facebook" /> 
      -->
    <div class="concertCardContainer" v-for="(row, index) in rows" :key="index">
      <div
        class="concertCard"
        v-for="concert in row"
        :key="concert.id"
        @click="itemClicked(concert)"
      >
        <div
          class="concertCardImage"
          :style="backgroundImageStyles(concert)"
        ></div>
        <div class="concertCardText">
          <p class="concertCardTextTitle uppercase">{{ concert.artist }}</p>
          <p>
            <font-awesome-icon
              icon="fa-solid fa-calendar"
              class="paddingRightCardIcon"
            />
            {{ concert.date }}
          </p>
          <p>
            <font-awesome-icon
              icon="fa-solid fa-clock"
              class="paddingRightCardIcon"
            />
            {{ concert.time }}
          </p>
          <div class="sameLine">
            <p>
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="paddingRightCardIcon"
              />
              {{ concert.location }}
            </p>
            <p class="alignRight bold">{{ concert.price }} EUR</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="alignCenter showMoreContainer"
      @click="loadMore"
      v-show="showMoreButton"
    >
      <p class="uppercase">SHOW MORE</p>
      <font-awesome-icon icon="fa-solid fa-arrow-right" class="showMoreArrow" />
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

export default {
  data() {
    return {
      showModal: false,
      showMoreButton: true,
      modalArtist: "",
      modalPrice: 0,
      modalDate: "",
      modalLocation: "",
      modalTime: "",
      modalImage: "",
      rows: [],
      initialNumberOfItems: 4,
      upcomingConcertsArray: [
        {
          id: 1,
          artist: "zz top",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          price: 250,
          isrc: ZZTopImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 2,
          artist: "whitesnake",
          location: "Tvornica Kulture",
          date: "20.04.2023",
          time: "21:15",
          price: 240,
          isrc: WhitesnakeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 3,
          artist: "led zeppelin",
          location: "Spaladium Arena",
          date: "28.08.2023",
          time: "19:15",
          price: 220,
          isrc: LedZeppelinImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 4,
          artist: "sabaton",
          location: "Pulska Arena",
          date: "25.05.2023",
          time: "22:00",
          price: 200,
          isrc: SabatonImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 5,
          artist: "Linkin park",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          price: 250,
          isrc: LinkinParkImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 6,
          artist: "powerwolf",
          location: "Tvornica Kulture",
          date: "20.04.2023",
          time: "21:15",
          price: 240,
          isrc: PowerwolfImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 7,
          artist: "Disturbed",
          location: "Spaladium Arena",
          date: "28.08.2023",
          time: "19:15",
          price: 220,
          isrc: DisturbedImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 8,
          artist: "scorpions",
          location: "Pulska Arena",
          date: "25.05.2023",
          time: "22:00",
          price: 200,
          isrc: ScorpionsImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
        {
          id: 9,
          artist: "scorpions",
          location: "Pulska Arena",
          date: "25.05.2023",
          time: "22:00",
          price: 200,
          isrc: ScorpionsImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At mattis commodo aenean congue tempor, mattis neque purus. Libero eu neque faucibus risus mauris amet, mauris. Facilisi urna ipsum commodo in eleifend malesuada pharetra.",
        },
      ],
    };
  },
  computed: {
    backgroundImageStyles() {
      return (concert) => ({
        "background-image": `url("${concert.isrc}")`,
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
    loadMore() {
      const currentRowCount = this.rows.length;
      const nextCards = this.upcomingConcertsArray.slice(
        currentRowCount * 4,
        currentRowCount * 4 + 4
      );
      this.rows.push(nextCards);
      if (
        currentRowCount == Math.round(this.upcomingConcertsArray.length / 4)
      ) {
        this.showMoreButton = false;
      }
    },
    itemClicked(item) {
      this.modalArtist = item.artist;
      this.modalDate = item.date;
      this.modalLocation = item.location;
      this.modalPrice = item.price;
      this.modalTime = item.time;
      this.modalImage = item.isrc;
      this.modalDescription = item.description;
      this.showModal = true;
    },
  },
  mounted() {
    this.loadMore();
  },
};
</script>
