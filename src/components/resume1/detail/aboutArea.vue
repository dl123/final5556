<template>
    
				<!-- Start about Area -->
			<section class="about-area section-gap" id="about">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="menu-content pb-70 col-lg-8">
							<div class="title text-center">
								<h1 class="mb-10">ABOUT ME</h1>
								<h2 class="pb-40" id="Myname">{{Name}}</h2>
							</div>
						</div>
					</div>					
					<div class="row">
						<div class="col-lg-6 about-left">
							<p>
								<h5 class="introdcutionMyself">
									<!-- <p v-for="(item,key) in introdcutionMyself" :key="key">
										{{item}}
									</p> -->
							    </h5>
							</p>
							<h4 class="pb-40">Tools Expertness</h4>
							<div class="skillbar" :data-percent="item.percent" v-for="(item,key) in Tools_Expertness" :key="key">
				                    <div class="skill-bar-percent">{{item.apsect}}   {{item.percent}}</div>
				                    <div class="skillwrap">
				                    	<div class="skillbar-bar" :style="{ width: item.percent }"></div>
				                    </div>
				                </div>				             
						</div>
						<div class="col-lg-6 about-right justify-content-end d-flex">
							<div class="myself-wrap">
								<img class="img-fluid" src="@/assets/resume/img/about-img.jpg" alt="">
								<div class="desc">
									<h4>{{EnglishName}}</h4>
									<p class="pb-10">{{JobName}}</p>
									<p><span class="lnr lnr-phone"></span>{{PhoneNumber}}</p>
									<p><span class="lnr lnr-envelope"></span>{{Email}}</p>
									<a class="mt-30 text-uppercase talk-btn" href="#">Hire Me</span></a>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</section>
			<!-- End about Area -->
</template>

<script>
export default {
	data(){
		return{
			Name:'李宥勝 / David Lee',
            introdcutionMyself:[
				'I am a web designer and developer from Taiwan。',
				'擅長 JS, jQuery, Liquid, React.js, Redux, Vue.js, CSS3, SEO, GA, GTM 等相關技術，除此也對產品的使用者介面與體驗的有興趣。',
				'閒暇之餘喜歡爬山、攝影、旅行，不斷吸收新知識及美景且樂於分享。'
			],
			Tools_Expertness:[
				{percent:'90%',apsect:'ASP.NET Web Form C# '},
				{percent:'90%',apsect:'LINQ & lambda '},
				{percent:'85%',apsect:'ASP.NET MVC'},
				{percent:'85%',apsect:'MSSQL & StoredProcedure'},
				{percent:'80%',apsect:'Git & TFS'},
				{percent:'70%',apsect:'HTML & Boostrap'},
				{percent:'70%',apsect:'Javascript & Jquery & AJAX'},
				{percent:'60%',apsect:'Vue.js'},
			],
			EnglishName:'DAVID LEE',
			JobName:'WEB DEVELOPER',
			PhoneNumber:'(+886) 939-728-779',
			Email:'banni442@gmail.com',
		}
	}
}
</script>

<style lang="scss" scoped>
 .skillbar-bar {
  background-image: -moz-linear-gradient(0deg, #62bdfc 0%, #8490ff 100%);
  background-image: -webkit-linear-gradient(0deg, #62bdfc 0%, #8490ff 100%);  
}
#Myname{
font-family: Comic, 'Comic Sans MS', fantasy;  
  font-size:3em;
   color:#11789b;
}
.introdcutionMyself{
font-family: 'Noto Sans TC', sans-serif;
  font-size:1em;
   color:#11789b;
   letter-spacing:2px;
   line-height:200%;
}
</style>