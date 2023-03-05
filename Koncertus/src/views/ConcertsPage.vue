<template>
  <ConcertList/>
  <NewReleasesPlayer/>
  <Footer />
</template>
<script>
import Footer from "@/components/Footer.vue";
import ConcertList from "@/components/ConcertList.vue";
import NewReleasesPlayer from "@/components/NewReleasesPlayer.vue";

export default {
  components: {
    Footer,
    ConcertList,
    NewReleasesPlayer,
  },
}
</script>
