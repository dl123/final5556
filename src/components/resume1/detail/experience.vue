<template>
    <div>
 	<div class="exper" id="Experience">
				<div class="wrap">
					<h3 class="heading">{{$t('experience.Experience')}}</h3>
				<section class="row section">
					<div class="row-content2">
						<div class="timeline-label column six">
							<h4>{{$t('experience.Work_experience')}}</h4>
							<p>{{$t('experience.Specialties')}} : {{Specialties}}</p>
							<div class="brows_button_4">
								<a :href="hre_Linkedin" target="_blank">{{$t('experience.View_on_Linkedin')}}</a>
							</div>
						</div><!-- timeline-label -->		
					    <div class="timeline column six last">
                           <div class="year" v-for="(item,key) in detail_List" :key="key">
                               <time :datetime="item.beginTime">{{item.beginTime}}</time>
                               <div class="experience ">
                                 <span class="circle"></span>
								 <div class="experience-img"><img :src="item.image" alt=""></div>
								 <div class="experience-info clear-after">
                                      <h5>{{item.companyName}}</h5>
									  <div class="role">{{item.position}}</div>
									  <p>{{item.work_during}}</p>
									  <p>{{item.address}}({{item.specific_area}})</p>
								 </div><!-- experience-info -->	 
							   </div><!-- experience -->   
                           </div><!-- year -->
						</div><!-- timeline -->
						<div class="clear"> </div>
					</div>	
				</section>
				</div>			
			</div>

    </div>

</template>

<script>
export default {
	data(){
      return{
		  detail_List:[
		   {image:require('@/assets/resume_01/images/asset001.jpg'),companyName:'Cybersoft Digital Service Corp',position:'Senior Network Engineer', specific_area:'支付相關產品系統公司',
		  work_during:'March 2017 – April 2021',address:'114台北市內湖區陽光街321巷56號3樓',beginTime:'2017/03',endTime:'2020/08'},
		   {image:require('@/assets/resume_01/images/asset01.jpg'),companyName:'暘雲科技股份有限公司', position:'Programmer', specific_area:'專案公司',
		  work_during:'November 2015 – February 2017',address:'內湖區瑞光路298號7樓',beginTime:'2015/11',endTime:'2017/02'},		  
		  ],
		  Specialties:'Specialties : ASP.NET WEB FORM, ASP.NET MVC, LINQ, NET Framework, JQUERY, JAVASCRIPT, MSSQL, STOREDPROCEDURE',	 
		  hre_Linkedin:'https://www.linkedin.com/in/david-lee-38ba6816a/',
	  }
	},
	computed:{
	   //detail_order(){
		//  var vm=this;
		//  return vm.detail_List.sort();
	   //},	   
	},
	mounted() {
		//var vm=this;
		//console.log('aaa');
		//console.log(vm.detail_List.sort());
		//console.log('bbb');
	},
}
</script>