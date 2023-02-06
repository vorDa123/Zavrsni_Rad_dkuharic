<template>
  <div id="coverImage">
    <div>
      <p class="commentHeroText">Best website for concerts!! I love it!!</p>
    </div>
  </div>
  <UpcomingConcerts />
  <TopFavoriteArtists />
</template>

<script>
import UpcomingConcerts from "@/components/UpcomingConcerts.vue";
import TopFavoriteArtists from "@/components/TopFavoriteArtists.vue";

export default {
  components: {
    UpcomingConcerts,
    TopFavoriteArtists,
  },
}
</script>

