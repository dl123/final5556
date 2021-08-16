<template>
    	<!-- Start feature Area -->
			<section class="feature-area project-area pt-100" id="cetification">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="menu-content pb-70 col-lg-8">
							<div class="title text-center">
								<h1 class="mb-10">{{$t('featureArea.title')}}</h1>
								<p>{{$t('featureArea.title_description')}}</p>
							</div>
						</div>
					</div>						
					<div class="row">
						<div class="col-lg-4 col-md-6 " v-for="(item,key) in certification_List" :key="key" >
							<div class="single-feature mb-30" id="cetification_imgAll">
									<a :href="item.ref_certification" target="_blank" id="cetificateLink"><img :src='item.img_src'  id="cetification_img"><br><br></a>
									
								<div class="title d-flex flex-row pb-20">
									<span class="lnr lnr-user"></span>
									<h4><a href="#" class="certification_hover">{{item.title}}</a></h4>
								</div>
								<p class="certification_hover">
									{{item.decription}}.
								</p>		
							</div>							
						</div>																					
					</div>
				</div>	
			</section>
			<!-- End feature Area -->
</template>

<script>
export default {
	data(){
		return{
			//imagSrc:require('@/assets/resume/img/certification/app_builder.jpg'),
			certification_List:[
				{title:'MCSD: App Builder — Certified 2020',decription:'發照日期:2020/03',ref_certification:'https://www.youracclaim.com/badges/4f28b99c-eed4-4c06-b8c7-435782632b1e',img_src:require('@/assets/resume/img/certification/app_builder.jpg')},
				{title:'Developing Microsoft Azure and Web Services',ref_certification:'https://www.youracclaim.com/badges/503080fb-4caa-4197-8973-216118f55b7d',decription:'發照日期:2020/03',img_src:require('@/assets/resume/img/certification/web_service.jpg')},
				{title:'MCSA: Web Applications — Certified 2020',decription:'發照日期:2020/01',ref_certification:'https://www.youracclaim.com/badges/c620d98d-9fb2-4c24-b190-6d1419893297',img_src:require('@/assets/resume/img/certification/web_application.jpg')},
				{title:'Programming in C#',decription:'發照日期:2020/01',ref_certification:'https://www.youracclaim.com/badges/16e26fda-8da4-4660-88c2-9749816931a3',img_src:require('@/assets/resume/img/certification/c.jpg')},				
				{title:'Developing ASP.NET MVC Web Applications',decription:'發照日期:2017/12', ref_certification:'https://www.youracclaim.com/badges/16e26fda-8da4-4660-88c2-9749816931a3',img_src:require('@/assets/resume/img/certification/mvc.jpg')},				
			],
			
		}
	},
}
</script>

