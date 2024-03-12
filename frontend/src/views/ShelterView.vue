<template>
  <main>
    <h1 v-show='isLoading'>Please wait while connecting to the database</h1>
    <div v-if='!isLoading && shelters.length'>
      <shelter-card
        v-for='shelter in shelters'
        :shelter='shelter'
        :key='shelter.id'
      />
    </div>
    <Loading :active='isLoading' loader='dots'></Loading>
  </main>
</template>

<script>
import ShelterCard from '@/components/shelter-card.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import { mapState, mapActions } from 'vuex'

export default {
  name: 'ShelterView',

  data() {
    return {
      isLoading: true
    }
  },

  components: {
    ShelterCard,
    Loading
  },

  computed: {
    ...mapState(['shelters'])
  },

  methods: {
    ...mapActions(['fetchShelters'])
  },

  created() {
    this.fetchShelters().then(() => {
      this.isLoading = false
    })
  }
}
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-style: italic;
}
</style>
