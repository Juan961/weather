<template>
  <aside>
    <px-search @searchCity="search($event)" />
    <hr v-if="width > 590" >
    <px-cities @searchCity="search($event)" v-if="width > 590" />
    <hr v-if="width > 590" >
    <px-details :data="data" />

  </aside>
</template>

<script>
import PxSearch from '@/components/PxSearch'
import PxCities from '@/components/PxCities'
import PxDetails from '@/components/PxDetails'

export default {
  name:'PxAside',
  components: {
    PxSearch,
    PxCities,
    PxDetails
  },
  props: [
    'data',
    'width'
  ],
  methods: {
    search(city){
      this.$emit('search', city)
    }
  }
}
</script>

<style>
aside {
  padding: 20px;
  width: 400px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  max-width: 590px;
}

hr {
  width: 90%;
  align-self: center;
}

@media (max-width: 590px) {
  aside {
    height: 250px;
  }
}
</style>