<template>
  <div class="cities__container">
    <h2>Fast selection</h2>
    <ul class="cities__list">
      <li @click="search('California')">California</li>
      <li @click="search('Londres')">Londres</li>
      <li @click="search('Buenos Aires')">Buenos aires</li>
      <li @click="search('Seul')">Seúl</li>
      <li @click="search('Sidney')">Sidney</li>
      <li @click="search('Sudafrica')">Sudáfrica</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PxCities',
  methods: {
    search(city){
      this.$emit('searchCity', city)
    }
  }
}
</script>

<style>
.cities__container h2 {
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 20px;
}

.cities__list {
  width: 200px;
  margin-left: 20px;
}

.cities__list li {
  cursor:pointer;
  color: rgb(200, 200, 200);
  text-align: left;
  margin-bottom: 5px;
}

.cities__list li:hover {
  color: rgb(240, 240, 240);
}
</style>