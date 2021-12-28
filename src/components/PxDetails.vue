<template>
  <div class="details__container">
    <h2>Weather details</h2>

    <div class="details">
      <div class="detail">
        <span> <strong>Cloudiness</strong> </span> 
        <p>%{{data.clouds }} </p> 
      </div>
      <div class="detail">
        <span> <strong>Humidity</strong> </span> 
        <p>%{{data.humidity}} </p> 
      </div>
      <div class="detail">
        <span> <strong>Wind</strong> </span> 
        <div>
          <p>Speed: {{data.wind_speed}} m/s </p> 
          <p>Direction: {{data.wind_direction}} deg</p> 
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'PxDetails',
  props: [
    'data'
  ]
}
</script>

<style>
.details__container {
  width:100%;
  display: flex;
  flex-direction: column;
}

.details__container h2 {
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 20px;
}

.details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detail p {
  color: rgb(200, 200, 200);
}
</style>