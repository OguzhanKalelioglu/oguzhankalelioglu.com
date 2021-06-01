<template>
  <div>
    <Header/>
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/header'
export default {
  components : {
  Header
  }
}
</script>


<style>
html {
  font-family:
    'Homemade Apple','Open Sans', sans-serif;;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  line-height: 1.5;
  color: rgb(55, 53, 47);
}

.notion-quote{
  color : rgb(11, 110, 153)
}

.notion-page-cover{
    height: 35vh !important;
}

@media screen and (max-width: 600px) {
  .notion-page-cover{
    min-height: 30vh !important;
}
}


</style>
