<template>   
   <div>
      <banner></banner>

		  <serviceArea></serviceArea>	

      <aboutArea></aboutArea>
			
			<experience></experience>
       
	    <projectArea></projectArea> 
      
      <autobiography></autobiography>
		
      <featureArea></featureArea>
           
      <educationArea></educationArea>

		  <contactArea></contactArea><mapArea></mapArea>
      
		  <footerArea></footerArea>		

   </div>
</template>

<script> 
//Resume Detail Components  
//Create by davidlee 20200724
import experience from '@/components/resume1/detail/experience';
import banner from '@/components/resume1/detail/banner';
import serviceArea from '@/components/resume1/detail/serviceArea';
import aboutArea from '@/components/resume1/detail/aboutArea';
import projectArea from  '@/components/resume1/detail/projectArea';
import featureArea from '@/components/resume1/detail/featureArea';
import contactArea from '@/components/resume1/detail/contactArea';
import footerArea from '@/components/resume1/detail/footerArea';
import educationArea from '@/components/resume1/detail/education';
import autobiography from '@/components/resume1/detail/autobiography';
import mapArea from '@/components/resume1/detail/mapArea';

//Vuex Funciton
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex'; 
import $ from 'jquery';
import { WOW } from 'wowjs'

export default {
     name: 'LoginNew',
  data () {
    return {
     user:{
        username:'banni442@gmail.com',
        password:'teco1212',      
         },
           }
  },
  components:{
     experience,    
		 banner,
		 serviceArea,
		 aboutArea,     
     educationArea,
		 projectArea,
		 featureArea,
		 contactArea,
     footerArea,
     autobiography,
     mapArea,
  },
  methods:{        
         ...mapActions({           
           signin:'signin',
         }),  
  },
  computed:{
      ...mapGetters(
        {
          msg:'getmsg',
          logintitle:'getLogintitle',
        }),
  },
//   mounted:function() {
//        var wow = new WOW({
//      boxClass: 'wow',
//   animateClass: 'animated',
//   offset: 0,
//   mobile: true,
//   live: true,
// })
// wow.init();
//   }
}
</script>


<style lang="scss" scoped>
.p1-gradient-bg, .primary-btn, .primary-btn2:hover, .default-header, .dropdown-menu, .myself-wrap .desc .talk-btn, .skillbar-bar, .single-feature:hover, .single-footer-widget .click-btn, .generic-banner {
  background-image: -moz-linear-gradient(0deg, #053455 0%, #020525 100%);
  background-image: -webkit-linear-gradient(0deg, #053455 0%, #020525 100%);
}

</style>