<template>
  <div class="wrapper marginTop">
    <h2 class="uppercase">My Profile</h2>
    <div class="profileInfoAndNotifications">
      <div class="profileInfo">
        <div class="profilePicture" />
        <div class="profileInfoContent">
          <font-awesome-icon
            icon="fa-solid fa-user"
            class="paddingIconForm"
          /><input type="text" value="Jane Doe" disabled />
          <hr />
          <br />
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="paddingIconForm"
          /><input type="email" value="jane.doe@gmail.com" disabled />
          <hr />
          <br />
          <font-awesome-icon
            icon="fa-solid fa-lock"
            class="paddingIconForm"
          /><input type="password" value="lozinka123" disabled />
          <hr />
        </div>
        <div class="verticalLine" />
        <div class="socialMediaProfile">
          <font-awesome-icon
            icon="fa-brands fa-facebook"
            class="socialMediaIconsSizeProfile"
          />
          <br />
          <br />
          <font-awesome-icon
            icon="fa-brands fa-twitter"
            class="socialMediaIconsSizeProfile notFirst"
          />
          <br />
          <br />
          <font-awesome-icon
            icon="fa-brands fa-instagram"
            class="socialMediaIconsSizeProfile notFirst"
          />
        </div>
      </div>
      <div class="notifications">
        <p class="uppercase bold nextConcertTitle">Next concerts</p>
        <div
          class="nextConcertProfile"
          v-for="nextConcert in nextConcertArray.slice(0, 1)"
          :key="nextConcert.id"
        >
          <div
            class="nextConcertImage"
            :style="backgroundImageStyles(current)"
          />
          <div class="nextConcertContent">
            <h3 class="uppercase bold">{{ current.artist }}</h3>
            <p class="marginTopNextConcerts">
              <font-awesome-icon
                icon="fa-solid fa-calendar"
                class="paddingRightCardIcon"
              />
              {{ current.date }}
            </p>
            <p class="marginTopNextConcerts">
              <font-awesome-icon
                icon="fa-solid fa-clock"
                class="paddingRightCardIcon"
              />
              {{ current.time }}
            </p>
            <p class="marginTopNextConcerts">
              <font-awesome-icon
                icon="fa-solid fa-location-dot"
                class="paddingRightCardIcon"
              />
              {{ current.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="topFiveAndReservations">
      <div class="topFive">
        <h2 class="uppercase favoriteTitle">Favorite artists</h2>
        <div
          class="artistProfile"
          v-for="favoriteArtist in favoriteArtistArray"
          :key="favoriteArtist.id"
        >
          <div
            class="artistImageProfile"
            :style="backgroundImageStyles(favoriteArtist)"
          />
          <p class="uppercase artistName">{{ favoriteArtist.artist }}</p>
        </div>
      </div>
      <div class="myReservations">
        <div class="sameLine">
          <h2 class="uppercase favoriteTitle">My reservations</h2>
          <div class="searchBarAndIcon">
            <font-awesome-icon
              icon="fa-solid fa-magnifying-glass"
              class="paddingRightCardIcon"
            />
            <input
              type="search"
              name="searchReservation"
              class="searchbar"
              placeholder="Search artist"
              v-model="search"
            />
          </div>
        </div>
        <div v-for="reservation in filteredConcerts" :key="reservation.index">
          <div
            class="reservationContainer inline"
            :style="backgroundImageStylesMobile(reservation)"
          >
            <div class="paddingIcons paddingTopDateReservation">
              <p class="bold">{{ substringDateNumber(reservation) }}</p>
              <p class="bold uppercase">
                {{ substringMonthName(reservation) }}
              </p>
            </div>
            <div
              class="inline paddingIcons paddingTopContent widthContentReservation"
            >
              <div
                class="concertImageReservation"
                :style="backgroundImageStyles(reservation)"
              />
              <div class="paddingIcons">
                <p class="bold uppercase">{{ reservation.artist }}</p>
                <p class="descriptionFontSize">
                  {{ reservation.description }}
                </p>
                <div class="inline iconFontSize iconPaddingReservation">
                  <p>
                    <font-awesome-icon icon="fa-solid fa-calendar" />
                    {{ reservation.date }}
                  </p>
                  <p>
                    <font-awesome-icon
                      icon="fa-solid fa-clock"
                      class="paddingIcons removePaddingLeft"
                    />{{ reservation.time }}
                  </p>
                  <p>
                    <font-awesome-icon
                      icon="fa-solid fa-location-dot"
                      class="paddingIcons removePaddingLeft"
                    />{{ reservation.location }}
                  </p>
                  <p class="paddingIcons removePaddingLeft">
                    Price: {{ reservation.price }} EUR
                  </p>
                </div>
              </div>
              <div class="buttonPositionReservation">
                <RouterLink to="/buypage">
                  <button class="blueButton">BUY</button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
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
      search: "",
      index: 0,
      current: {},
      myReservationsArray: [
        {
          id: 1,
          artist: "zz top",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          price: 250,
          isrc: ZZTopImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
          artist: "linkin park",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          price: 250,
          isrc: LinkinParkImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
      ],
      favoriteArtistArray: [
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
          artist: "led zeppelin",
          isrc: LedZeppelinImage,
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
      ],
      nextConcertArray: [
        {
          id: 1,
          artist: "zz top",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          isrc: ZZTopImage,
        },
        {
          id: 2,
          artist: "whitesnake",
          location: "Tvornica Kulture",
          date: "20.04.2023",
          time: "21:15",
          isrc: WhitesnakeImage,
        },
        {
          id: 3,
          artist: "led zeppelin",
          location: "Spaladium Arena",
          date: "28.08.2023",
          time: "19:15",
          isrc: LedZeppelinImage,
        },
        {
          id: 4,
          artist: "sabaton",
          location: "Pulska Arena",
          date: "25.05.2023",
          time: "22:00",
          isrc: SabatonImage,
        },
        {
          id: 5,
          artist: "linkin park",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          isrc: LinkinParkImage,
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
    backgroundImageStylesMobile() {
      if (screen.width <= 412) {
        return (concert) => ({
          background: `linear-gradient(rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url("${concert.isrc}")`,
          "background-repeat": "no-repeat",
          "background-size": "cover",
          "background-position": "center",
        });
      } else {
        return () => ({
          "background-color": "#fffefe;",
          "border-radius": "10px",
          width: "90%",
          height: "175px",
          "padding-bottom": "10px",
          margin: "20px 0 0 24px",
        });
      }
    },
    filteredConcerts() {
      return this.myReservationsArray.filter((srch) => {
        return srch.artist.match(this.search);
      });
    },
  },
  methods: {
    substringDateNumber(concert) {
      let dateNumber = concert.date.substring(0, 2);
      return dateNumber;
    },
    substringMonthName(concert) {
      let month = concert.date.substring(3, 5);
      if (month == "01") {
        return "Jan";
      } else if (month == "02") {
        return "Feb";
      } else if (month == "03") {
        return "Mar";
      } else if (month == "04") {
        return "Apr";
      } else if (month == "05") {
        return "May";
      } else if (month == "06") {
        return "Jun";
      } else if (month == "07") {
        return "Jul";
      } else if (month == "08") {
        return "Aug";
      } else if (month == "09") {
        return "Sep";
      } else if (month == "10") {
        return "Oct";
      } else if (month == "11") {
        return "Nov";
      } else if (month == "12") {
        return "Dec";
      }
    },
    nextSlide() {
      this.index++;
      if (this.index > this.nextConcertArray.length - 1) {
        this.index = 0;
      }
      this.current = this.nextConcertArray[this.index];
    },
  },
  created() {
    this.current = this.nextConcertArray[this.index];
  },
  mounted() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  },
};
</script>
