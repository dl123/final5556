<template>
  <div id="app">
     
      <h1>
        <loading :active.sync="isLoading" :is-full-page="true">
           <template slot="before">I am</template>
        <template slot="default">        
              <i class="fas fa-cog fa-spin"></i>
        </template>
        <template slot="after">loading</template>
      </loading>
      </h1>

    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',  
  mounted() {
        //Send Email API Free    crate by Davidlee 20208026
        let smtpJsScript = document.createElement('script');
            smtpJsScript.setAttribute('src', 'https://smtpjs.com/v3/smtp.js'); 
            smtpJsScript.defer = true
            document.head.appendChild(smtpJsScript);
  }, 
  computed: {
      ...mapGetters({
        isLoading:'getIsLoading', //return this.$store.state.app.isLoading;
      }),
  },
}
</script>
<style lang="scss"> //npm install --save-d sass-loader@7.1.0
@import "./assets/all";
</style>


