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
      class="modalBuyForm"
      id="myModal"
      v-if="showModal"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
      <span class="successfullyPurchased"
        >You successfully purchased your tickets!</span
      >
      <br />
      <RouterLink to="/">
        <button class="okButton">OK</button>
      </RouterLink>
    </div>
  </transition>
  <div class="wrapperBuyForm marginTopBuyForm">
    <h2 class="uppercase">Buy ticket form</h2>
    <div
      class="concertInfoContainer"
      v-for="concert in buyConcertsArray.slice(0, 1)"
      :key="concert.id"
    >
      <div class="buyConcertImage" :style="backgroundImageStyles(concert)" />
      <div class="buyConcertInfo">
        <div class="paddingIcons">
          <p class="bold uppercase">{{ concert.artist }}</p>
          <p class="descriptionFontSize">
            {{ concert.description }}
          </p>
        </div>
        <div class="paddingIcons">
          <div class="inline iconFontSize">
            <p>
              <font-awesome-icon icon="fa-solid fa-calendar" />
              {{ concert.date }}
            </p>
            <p>
              <font-awesome-icon
                icon="fa-solid fa-clock"
                class="paddingIcons removePaddingLeft"
              />{{ concert.time }}
            </p>
            <p>
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="paddingIcons removePaddingLeft"
              />{{ concert.location }}
            </p>
            <p class="paddingIcons removePaddingLeft">
              Price: {{ concert.price }} EUR
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="formContainer">
      <form @submit.prevent="submit">
        <div class="inlineNameSurname">
          <div>
            <span>Name:</span>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              class="formInputStyle"
            />
          </div>
          <div>
            <span>Surname:</span>
            <br />
            <input
              type="text"
              name="surname"
              placeholder="Enter your surname"
              class="formInputStyle"
            />
          </div>
        </div>
        <br />
        <div class="inlineNameSurname">
          <div>
            <span>Email:</span>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              class="formInputStyle"
            />
          </div>
          <div>
            <span>Phone:</span>
            <br />
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              class="formInputStyle"
            />
          </div>
        </div>
        <br />
        <div class="inlineNumberOfTickets">
          <div>
            <span>Number of tickets: </span><br />
            <input
              type="number"
              name="numberOfTickets"
              class="numberOfTicketsStyle"
              v-model="numberOfTickets"
            />
          </div>
          <div>
            <span>Date of birth:</span>
            <br />
            <input
              type="text"
              name="birthday"
              class="dateInputStyle"
              placeholder="DD/MM/YYYY"
            />
          </div>
        </div>
        <br />
        <div class="inlineNameSurname">
          <div>
            <span>Cardholder name:</span>
            <br />
            <input
              type="text"
              name="cardholder"
              placeholder="Enter cardholder name"
              class="formInputStyle"
            />
          </div>
          <div>
            <span>Card number:</span>
            <br />
            <input
              type="text"
              name="cardNumber"
              placeholder="Enter card number"
              class="formInputStyle"
            />
          </div>
        </div>
        <br />
        <div class="inlineNumberOfTickets">
          <div>
            <span>Card expiration date:</span>
            <br />
            <input
              type="text"
              name="expirationDate"
              class="dateInputStyle"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <span>CVV:</span>
            <br />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              :datatype="Number"
              class="cvvInputStyle"
            />
          </div>
        </div>
        <br />
        <div class="inlineButton">
          <div>
            <input type="checkbox" name="agreeTerms" />
            <span class="agreeTermsFontSize">I agree with the terms</span>
          </div>
          <div>
            <span
              class="priceToPay"
              v-for="concert in buyConcertsArray.slice(0, 1)"
              :key="concert.id"
              >Price: {{ calculatePrice(concert) }} EUR</span
            >
            <button
              type="submit"
              class="blueButton"
              @click="this.showModal = true"
            >
              BUY
            </button>
          </div>
        </div>
      </form>
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
      numberOfTickets: 1,
      buyConcertsArray: [
        {
          id: 1,
          artist: "zz top",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          price: 250,
          isrc: ZZTopImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
  },
  methods: {
    calculatePrice(ticketPrice) {
      if (this.numberOfTickets > 0) {
        let priceToPay = ticketPrice.price * this.numberOfTickets;
        return priceToPay;
      } else {
        return ticketPrice.price;
      }
    },
  },
};
</script>
