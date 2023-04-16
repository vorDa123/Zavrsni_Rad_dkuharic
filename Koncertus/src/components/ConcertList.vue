<template>
  <div class="wrapper marginTop">
    <h2 class="uppercase">Upcoming concerts</h2>
    <div class="listOfConcerts" v-for="(row, index) in numberOfItems" :key="index">
      <div class="row">
        <div class="column" v-for="concert in row"
        :key="concert.id">
          <div class="odd left inline">
            <div class="paddingIcons paddingTopDate">
              <p class="bold">{{substringDateNumber(concert)}}</p>
              <p class="bold uppercase">{{substringMonthName(concert)}}</p>
            </div>
            <div class="inline paddingIcons paddingTopContent widthContent">
              <div class="concertImage" :style="backgroundImageStyles(concert)" />
              <div class="paddingIcons">
                <p class="bold uppercase">{{ concert.artist }}</p>
                <p class="descriptionFontSize">
                  {{ concert.description }}
                </p>
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
                  <p class="paddingIcons removePaddingLeft">Price: {{ concert.price }} EUR</p>
                </div>
              </div>
              <div class="alignCenter shoppingCart">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                <br />
                <button class="buttonMargin whiteButton">BUY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    <div
      class="alignCenter showMoreContainerConcertList"
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
      numberOfItems: [],
      initialNumberOfItems: 10,
      currentNumberOfRows: 0,
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
          artist: "Linkin park",
          location: "Arena Zagreb",
          date: "16.11.2023",
          time: "20:15",
          price: 250,
          isrc: LinkinParkImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 9,
          artist: "divlje jagode",
          location: "Pulska Arena",
          date: "25.05.2023",
          time: "22:00",
          price: 200,
          isrc: DivljeJagodeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 10,
          artist: "iron maiden",
          location: "Pulska Arena",
          date: "25.05.2023",
          time: "22:00",
          price: 200,
          isrc: IronMaidenImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 11,
          artist: "zz top",
          location: "Arena Zagreb",
          date: "17.11.2023",
          time: "20:15",
          price: 250,
          isrc: ZZTopImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 12,
          artist: "whitesnake",
          location: "Tvornica Kulture",
          date: "21.04.2023",
          time: "21:15",
          price: 240,
          isrc: WhitesnakeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 13,
          artist: "led zeppelin",
          location: "Spaladium Arena",
          date: "29.08.2023",
          time: "19:15",
          price: 220,
          isrc: LedZeppelinImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 14,
          artist: "sabaton",
          location: "Pulska Arena",
          date: "26.05.2023",
          time: "22:00",
          price: 200,
          isrc: SabatonImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 15,
          artist: "Linkin park",
          location: "Arena Zagreb",
          date: "17.11.2023",
          time: "20:15",
          price: 250,
          isrc: LinkinParkImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 16,
          artist: "powerwolf",
          location: "Tvornica Kulture",
          date: "21.04.2023",
          time: "21:15",
          price: 240,
          isrc: PowerwolfImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 17,
          artist: "Disturbed",
          location: "Spaladium Arena",
          date: "29.08.2023",
          time: "19:15",
          price: 220,
          isrc: DisturbedImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 18,
          artist: "scorpions",
          location: "Pulska Arena",
          date: "26.05.2023",
          time: "22:00",
          price: 200,
          isrc: ScorpionsImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 19,
          artist: "divlje jagode",
          location: "Pulska Arena",
          date: "26.05.2023",
          time: "22:00",
          price: 200,
          isrc: DivljeJagodeImage,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed enim eu leo dignissim elementum ut a urna.",
        },
        {
          id: 20,
          artist: "iron maiden",
          location: "Pulska Arena",
          date: "26.05.2023",
          time: "22:00",
          price: 200,
          isrc: IronMaidenImage,
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
    loadMore() {
      const currentNumberOfItems = this.numberOfItems.length;
      const nextCards = this.upcomingConcertsArray.slice(
        currentNumberOfItems * 10,
        currentNumberOfItems * 10 + 10
      );
      this.numberOfItems.push(nextCards); 
      if (
        currentNumberOfItems ==
        Math.round(this.upcomingConcertsArray.length / 10)
      ) {
        this.showMoreButton = false;
      }
    },
    substringDateNumber(concert){
      let dateNumber = concert.date.substring(0,2);    
      return dateNumber;
    },    
    substringMonthName(concert){ 
      let month = concert.date.substring(3,5); 
      if(month == "01"){
        return "Jan";
      } else if (month == "02"){
        return "Feb";
      } else if (month == "03"){
        return "Mar";
      } else if (month == "04"){
        return "Apr";
      } else if (month == "05"){
        return "May";
      } else if (month == "06"){
        return "Jun";
      } else if (month == "07"){
        return "Jul";
      } else if (month == "08"){
        return "Aug";
      } else if (month == "09"){
        return "Sep";
      } else if (month == "10"){
        return "Oct";
      } else if (month == "11"){
        return "Nov";
      } else if (month == "12"){
        return "Dec";
      }
    },
  },
  mounted() {
    this.loadMore();
  },
};
</script>
