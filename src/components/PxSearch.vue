<template>
  <div class="search__container">
    <input v-model="city" @keyup.enter="search" type="text" name="" id="" placeholder="Search">
  </div>
</template>

<script>
export default {
  name:'PxSearch',
  data(){
    return {
      city: ''
    }
  },
  methods: {
    search(){
      this.$emit('searchCity', this.city)
    }
  }
}
</script>

<style>
.search__container {
  width: 100%;
}

.search__container input{
  font-size: 1.1rem;
  padding: 5px 20px;
  background: transparent;
  border: 2px solid rgb(214, 214, 214);
  border-radius: 10px;
  color: white;
  width: 100%;
}

.search__container input::placeholder{
  color: white;
}

</style>