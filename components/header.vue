<template>
    <div class="header">
          <router-link to="/" custom v-slot="{ navigate }">
              <h3 @click="navigate" @keypress.enter="navigate" role="link">Oguzhan Kalelioglu</h3>
          </router-link>

    </div>
</template>


<style scoped>
h3 {
    cursor: pointer;
}

h3:hover {
  text-shadow: 1px 1px 1px #cccccc;
}

@media screen and (max-width: 600px) {
  .header {
     text-align: center;
  }
}

</style>