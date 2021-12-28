<template>
  <div class="data">
    <p class="data__temperature"> {{Math.floor(data.temperature)}}ºC </p>
    <div class="data__city">
      <h1> {{data.city}} </h1>
      <p> {{data.weather_desc}} </p>
    </div>
    <div class="data__logo">
      <img :src="data.logo" :alt="'Logo of ' + data.weather_desc">
    </div>
  </div>
</template>

<script>
export default {
  name:'PxData',
  props: [
    'data'
  ],
  data(){
    return {
      type: ''   
    }
  }
}
</script>

<style>

.data {
  align-self: flex-end;
  margin-bottom: 50px;
  margin-left: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.data__temperature {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  font-size: 4rem;
}

.data__city {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.data__city h1 {
  font-family: 'Jost', sans-serif;
  font-weight: 400;
}

@media (max-width: 590px) {
  .data {
    margin: 0;
    flex-direction: column;
    width: 100%;
    gap: 0;
  }
}

</style>