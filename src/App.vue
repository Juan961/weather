<template>
  <main v-if="!isLoading" :style="{ 'background-image': `url(${background})` }">
    <px-aside :data="data" @search="getData($event)" :width="width"/>
    <px-data :data="data" />
  </main>
  <px-loader v-else />
</template>

<script>
import { example } from './logic/weather.logic'
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

export default {
  name: 'App',
  data(){
    return {
      data: {
        city: '',
        weather: '',
        weather_desc: '',
        temperature: 0,
        humidity: 0,
        logo: '',
        wind_speed: 0,
        wind_direction: 0,
        clouds: 0,
        time: 0
      },
      DayClearImage,
      NightClearImage,
      FogImage,
      CloudsImage,
      RainImage,
      SnowImage,
      ThunderstromImage,
      isLoading: true,
      width: window.screen.width
    }
  },
  components: {
    PxAside,
    PxData,
    PxLoader
  },
  mounted(){

    this.getData('London')
    .catch(err => {
      console.log(err)
    })

    window.onresize = () => {
      this.width = window.screen.width
    }
  },
  methods: {
    async getData(city) {
      try {
        this.isLoading = true

        let result = await example(city)

        this.data.city = result.data.name
        this.data.weather = result.data.weather[0].main
        this.data.weather_desc = result.data.weather[0].description
        this.data.logo = `http://openweathermap.org/img/wn/${result.data.weather[0].icon}@2x.png`
        this.data.temperature = result.data.main.temp
        this.data.humidity = result.data.main.humidity
        this.data.wind_speed  = result.data.wind.speed
        this.data.wind_direction  = result.data.wind.deg
        this.data.clouds  = result.data.clouds.all
        this.data.time  = result.data.weather[0].icon.substr(2, 3)

        this.isLoading = false

        return result  

      } catch (err) {

        if(err.response.data.message == 'city not found') {
          alert("City not found")
          this.isLoading = false
        } else {
          alert("Error del servidor")
          console.log(err)
          throw err
        }
      }
      
    }
  },
  computed: {
    background(){
      switch (this.data.weather) {
        case 'Clear':
          if(this.data.time == 'd'){
            return this.DayClearImage
          } else {
            return this.NightClearImage
          }

        case 'Clouds':
          return this.CloudsImage
        
        case 'Rain':
          return this.RainImage
        
        case 'Fog':
          return this.FogImage
        
        case 'Snow':
          return this.SnowImage
        
        case 'Thunderstorm':
          return this.ThunderstromImage
      
      }
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
