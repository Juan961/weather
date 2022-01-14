<template>
  <main v-if="!isLoading" :style="{ 'background-image': `url(${background})` }">
    <px-aside :data="data" @search="getData($event)" :width="width"/>
    <px-data :data="data" />
  </main>
  <px-loader v-else />
</template>

<script>
import { getWheater } from './logic/weather.logic'
import PxAside from '@/components/PxAside'
import PxData from '@/components/PxData'
import PxLoader from '@/components/PxLoader'

import DayClearImage from '@/assets/d_clear.webp'
import NightClearImage from '@/assets/n_clear.webp'
import FogImage from '@/assets/fog.webp'
import CloudsImage from '@/assets/clouds.webp'
import RainImage from '@/assets/rain.webp'
import SnowImage from '@/assets/snow.webp'
import ThunderstromImage from '@/assets/thunderstrom.webp'

import { ref, computed, onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    PxAside,
    PxData,
    PxLoader
  },
  setup(){

    const data = ref({
      city:'',
      weather:'',
      weather_desc:'',
      logo:'',
      temperature:'',
      humidity:'',
      wind_speed:'',
      wind_direction:'',
      clouds:'',
      time:''
    })

    const width = ref(0)
    const isLoading = ref(true)

    const getData = async (city) => {
      try {
        isLoading.value = true

        const result = await getWheater(city)

        data.value.city = result.data.name
        data.value.weather = result.data.weather[0].main
        data.value.weather_desc = result.data.weather[0].description
        data.value.logo = `http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
        data.value.temperature = result.data.main.temp
        data.value.humidity = result.data.main.humidity
        data.value.wind_speed  = result.data.wind.speed
        data.value.wind_direction  = result.data.wind.deg
        data.value.clouds  = result.data.clouds.all
        data.value.time  = result.data.weather[0].icon.substr(2, 3)

        isLoading.value = false

        return result  

      } catch (err) {

        if(err.response.data.message == 'city not found') {
          alert("City not found")
          isLoading.value = false
        } else {
          alert("Server error")
          console.log(err)
          throw err
        }
      }
    }

    const background = computed(() => {
      switch (data.value.weather) {
        case 'Clear':
          if(data.value.time == 'd'){
            return DayClearImage
          } else {
            return NightClearImage
          }

        case 'Clouds':
          return CloudsImage
        
        case 'Rain':
          return RainImage
        
        case 'Fog':
          return FogImage
        
        case 'Snow':
          return SnowImage
        
        case 'Thunderstorm':
          return ThunderstromImage
      }
    })

    onMounted(() => {
      getData('London')

      window.onresize = () => {
        width.value = window.screen.width
      }

    })

    return {
      data,
      isLoading,
      background,
      DayClearImage,
      NightClearImage,
      FogImage,
      CloudsImage,
      RainImage,
      SnowImage,
      ThunderstromImage,
      width,
      getData
    }
  }
}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: white;
}

main {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
}

@media (max-width: 590px) {
  main {
    flex-direction: column;
  }
}
</style>
