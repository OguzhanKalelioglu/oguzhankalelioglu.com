<template>
    <div class="header">
          <!-- <router-link to="/" custom v-slot="{ navigate }">
              <h3 @click="navigate" @keypress.enter="navigate" role="link">Oguzhan Kalelioglu</h3>
          </router-link> -->

          <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
        <div class="container-fluid">
          
          <router-link to="/" custom v-slot="{ navigate }">
            <a class="navbar-brand" @click="navigate" role="link">Oguzhan Kalelioglu</a>
          </router-link>


          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
          <div class="navbar-collapse collapse" id="navbarColor03">
            <ul class="navbar-nav ms-auto">
              
            <router-link to="/dce5b7aca1f0419d8761605e52dc1a88" custom2 v-slot="{ navigate }">
                <li class="nav-item">
                  <a @click="navigate" role="link" class="nav-link" href="#"><span role="img" aria-label="📷" class="notion-emoji notion-page-icon-offset notion-page-icon">
                      📷 Fotoğraflar
                    </span></a>
                </li>
            </router-link>


            <router-link to="/9ad679bc31c7485c9ffbe2aeba91d59f" custom v-slot="{ navigate }">
              <li class="nav-item">
                <a class="nav-link" @click="navigate" role="link" href="#"><span role="img" aria-label="✍🏼" class="notion-emoji notion-page-icon-offset notion-page-icon">
                    ✍🏼 Yazılar
                  </span></a>
              </li>
            </router-link>

              <li class="nav-item">
                <a class="nav-link" href="#">
                    <span role="img" aria-label="📄" class="notion-emoji notion-page-icon-offset notion-page-icon">
                        📄 Hakkımda
                      </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      

    </div>
</template>


<style scoped>

.navbar-brand {
    cursor: pointer;
    font-family: 'Homemade Apple','Roboto';
    font-size: 1em;
}

.navbar-light .navbar-nav .nav-link{
  color : #008cba;
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