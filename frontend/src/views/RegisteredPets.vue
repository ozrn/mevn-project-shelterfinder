<template>
  <div class='container has-text-centered'>
    <div class='columns is-mobile is-centered'>
      <div class='column is-8'>
        <div>
          <h1 v-show='isLoading'>It might take some time</h1>
          <h2 v-show='!isLoading'>List of the registered pets</h2>
          <hr />
        </div>
        <table v-if='!isLoading && survivors.length'
          class='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'
        >
          <thead class='table-head'>
            <tr>
              <th>Pet Name</th>
              <th>Pet Type</th>
              <th>Pet Breed</th>
              <th>Pet Sex</th>
              <th>Pet Age</th>
            </tr>
          </thead>
          <survivor-card
            v-for='survivor in survivors'
            :survivor='survivor'
            :key='survivor.id'
          />
        </table>
      </div>
    </div>
    <Loading :active='isLoading' loader='dots'></Loading>
  </div>
</template>

<script>
import SurvivorCard from '../components/survivor-card.vue'
import { mapState, mapActions } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

export default {
  name: 'RegisteredPets',

  data() {
    return {
      isLoading: true
    }
  },

  components: {
    SurvivorCard,
    Loading
  },

  computed: {
    ...mapState(['survivors'])
  },

  methods: {
    ...mapActions(['fetchSurvivors'])
  },

  created() {
    this.fetchSurvivors().then(()=> {
      this.isLoading=false
    })
  }
}
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-style: italic;
}

h2 {
  margin: 2rem;
  font-weight: 700;
}

.table-head {
  background-color: #9090c1;
}

th {
  font-weight: 600;
}
</style>
