<template>
    	<!-- Start service Area -->
			<section class="service-area section-gap" id="service"> 
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="menu-content pb-70 col-lg-8">
							<div class="title text-center">
								<h1 class="mb-10">{{ $t('SERVICEAREA.About_Skills') }}</h1>
								<h3>{{ $t('SERVICEAREA.Skill') }}</h3>
							</div>
						</div>
					</div>						
					<div class="row">						
						<div class="single-service  rowsss col-lg-5 col-md-6 mb-30 " v-for="(item,key) in skill_list" :key="key" id="background_grey" >
							<div class="icon">
								<img :src="item.imagSrc" alt="">
							</div>
							<div class="dec">
								<h4 class="mt-10" id="header_hover"><a href="#" @click.prevent="">{{item.header}}</a></h4>			
								<p class="mt-20">
									{{item.title}}
								</p>	<br>
									<p class="mt-20">
								{{item.description}}
								</p>						
							</div>
						</div>			

					</div>
				</div>	
			</section>
			<!-- End service Area -->
</template>

<script>
import $ from 'jquery';
export default {
	   data()
    {
        return {
          skill_list:[
	{ header:'Frontend Development',imagSrc:require('@/assets/resume/img/s1.png'),title:'HTML5, JavaScript(ES6), bootstrap + Vue',
	 description:'使用 HTML5、CSS3、SCSS 獨立切版或套用 Bootstrap 搭配JavaScript 或 jQuery 製作各式動畫效果，使用MVVM Vue.js 製作Side porjects。'
    },
    { header:'Web Development',imagSrc:require('@/assets/resume/img/s2.png'),title:'ASP.NET, WEB Form, APS.NET MVC, C#, WEB API',
	 description:'ASP.NET WEB FORM : 台新信用卡收單需求開發帳務及進件系統開法及進件系統維護。ASP.NET MVC : 環球專利案官網等相關切版及開發。'
   },
    { header:'SQL SERVER',imagSrc:require('@/assets/resume/img/s3.png'),title:'MSSQL, StoredProcedure, ORACLE',
	 description:'使用MS SQL、ORACLE SQL來資料連結，搭配EntityFramwork CodeFirst或Dapper repository進行資料的CRUD。如有大量資料庫要處理，會搭配StoredProcedure來執行。'
   },
    { header:'Others',imagSrc:require('@/assets/resume/img/s4.png'),title:'TFS, Git',
	 description:'TFS & Git Tortoise : 進行版本控制。'
   },
		  ],
        }
	},


	methods:{
		
	}
}
</script>

<style lang="scss" scoped>

#background_grey
{
	 -webkit-transition: all 0.3s ease 0s;
     -moz-transition: all 0.3s ease 0s;
     -o-transition: all 0.3s ease 0s;
     transition: all 0.3s ease 0s;
	 background-color: #f7f4f4;	
}
#background_grey:hover
{
	 transform: scale(1.3);	
}


#header_hover a:hover
{
  background-image: -moz-linear-gradient(0deg, #62bdfc 0%, #8490ff 100%);
  background-image: -webkit-linear-gradient(0deg, #62bdfc 0%, #8490ff 100%);  
}

</style>