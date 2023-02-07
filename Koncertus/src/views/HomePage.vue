<template>
  <div id="coverImage">
    <div>
      <p class="commentHeroText">Best website for concerts!! I love it!!</p>
    </div>
  </div>
  <UpcomingConcerts />
  <TopFavoriteArtists />
  <RegisterNewsletter />
  <Footer />
</template>

<script>
import UpcomingConcerts from "@/components/UpcomingConcerts.vue";
import TopFavoriteArtists from "@/components/TopFavoriteArtists.vue";
import RegisterNewsletter from "@/components/RegisterNewsletter.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    UpcomingConcerts,
    TopFavoriteArtists,
    RegisterNewsletter,
    Footer,
  },
}
</script>

