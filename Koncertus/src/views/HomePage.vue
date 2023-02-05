<template>
  <div id="coverImage">
    <div>
      <p class="commentHeroText">Best website for concerts!! I love it!!</p>
    </div>
  </div>
  <div class="wrapper">
    <UpcomingConcerts />
  </div>
</template>

<script>
import UpcomingConcerts from "@/components/UpcomingConcerts.vue";

export default {
  components: {
    UpcomingConcerts,
  },
}
</script>

