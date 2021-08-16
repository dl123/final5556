<template>
      <!-- start banner Area -->
			<section class="banner-area content" id="home" :style="{ height: bannerHeigh }">
				<!-- Start Header Area -->
				<header class="default-header" id="test123">
					<nav class="navbar navbar-expand-lg  navbar-light">
						<div class="container">
							  <a class="" href="index.html">
							  	<img src="@/assets/resume/img/logo.png" alt="">
							  </a>
							  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							    <span class="text-white lnr lnr-menu"></span>
							  </button> -->
							 
							   <div class="w3layouts_menu" id="menu_hide">
				                <nav class="cd-stretchy-nav edit-content">
				                     	<a class="cd-nav-trigger" href="#0"> {{ $t('BANNER.Menu') }} <span aria-hidden="true"></span> </a>
				                 	<ul>
				                  		<li><a href="#home"        class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="Home">           <i class="fas fa-home               menu_set" >     <span>{{ $t('BANNER.Home') }}</span></i></a></li>
					                 	<li><a href="#about"       class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="About">          <i class="fas fa-info-circle        menu_set" >     <span>{{ $t('BANNER.About') }}</span></i></a></li>
						                <li><a href="#Experience"  class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="Experiences">    <i class="fas fa fa-users           menu_set" >     <span>{{ $t('BANNER.Experiences') }}</span></i></a></li>
						                <li><a href="#service"     class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="Skills">         <i class="fas fas fa-image          menu_set" >     <span>{{ $t('BANNER.Skills') }}</span></i></a></li> 
						                <li><a href="#project"     class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="Projects">       <i class="fas fa-th-large           menu_set" >     <span>{{ $t('BANNER.Projects') }}</span></i></a></li>
						                <li><a href="#autobio"     class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="Autobiography">  <i class="fas fa-chalkboard-teacher menu_set" >     <span>{{ $t('BANNER.Autobiography') }}</span></i></a></li>
						                <li><a href="#educationss" class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="Education">      <i class="fas fa-user-graduate      menu_set" >     <span>{{ $t('BANNER.Education') }}</span></i></a></li>
						                <li><a href="#contact"     class="scroll down_scrolling"   data-toggle="tooltip" data-placement="left" title="Contact">        <i class="fas fa-newspaper          menu_set" >     <span>{{ $t('BANNER.Contact') }}</span></i></a></li>
										
					            	</ul> 
					               <span aria-hidden="true" class="stretchy-nav-bg"></span>
				                 </nav> 
			                 </div>


							  <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
							    <ul class="navbar-nav">
									<li><a href="#home">{{ $t('BANNER.Home') }}</a></li>
									<li><a href="#service">{{ $t('BANNER.Skills') }}</a></li>
									<li><a href="#about">{{ $t('BANNER.About') }}</a></li>
									<li><a href="#Experience">{{ $t('BANNER.Experience') }}</a></li>
									<li><a href="#project">{{ $t('BANNER.Projects') }}</a></li>
									<li><a href="#autobio">{{ $t('BANNER.Autobiography') }}</a></li>
									<li><a href="#cetification">{{ $t('BANNER.Certification') }}</a></li>
									<li><a href="#educationss">{{ $t('BANNER.Education') }}</a></li>									
									<li><a href="#contact">{{ $t('BANNER.Contact') }}</a></li>
								   <!-- Dropdown -->
								    <li class="dropdown">
								      <a class="dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
								        {{ $t('BANNER.Language') }}
								      </a>
								      <div class="dropdown-menu">
								        <a class="dropdown-item" data-lang="tw" href="#" @click.prevent="setLang">{{ $t('BANNER.TW') }}</a>
								        <a class="dropdown-item" data-lang="en" href="#" @click.prevent="setLang">{{ $t('BANNER.EN') }}</a>
								      </div>
								    </li>										
							    </ul>
							  </div>						
						</div>
					</nav>
				</header>
				<!-- End Header Area -->				
			<div class="container">
				<div class="row justify-content-start align-items-center">					
					<div class="col-lg-12 col-md-12 banner-left" id="header_text">
						<h1 class="text-white" id="header_title">
							<span>{{$t('BANNER.header_name')}}</span> <br>
							<!-- {{ $t('BANNER.Menu') }} -->
							<div id="padding_heigh"></div>
							<vue-typer :text="[$t('BANNER.header_titles1'),$t('BANNER.header_titles2')]"  erase-style='clear' caret-animation='smooth' type-delay='300'></vue-typer>
						</h1>						
						<p class="mx-auto text-white  mt-40 mb-40" >
							<h5 class="text-white" id="header_title1">{{$t('BANNER.header_profession')}}</h5>
							 <br>
						</p>
						<a href="#contact" class="text-uppercase header-btn">{{ $t('BANNER.Let_Us_Talk') }}</a>
                            <br>
							<br>
							<br>
							<div class="thim-click-to-bottom">
			                  	<a href="#service" class="scroll down_scrolling" >
			               		<i class="fa  fa-chevron-down"></i>								
			                	</a>								
		                	</div>							
					</div>
				</div>
			</div>
			</section>
			<!-- End banner Area -->
</template>
<script>
import $ from 'jquery';
import { mapActions } from 'vuex';
export default {
	data()
	{
		return{
			//header_name:$t('BANNER.header_name'),
			//header_titles:[$t('BANNER.header_titles1'),$t('BANNER.header_titles2')],
			//header_profession:$t('BANNER.header_profession'),
			bannerHeigh:'',
		}
	},

	mounted(){
         var vm=this;
		 $(function () { $("[data-toggle='tooltip']").tooltip(); });
		 vm.bannerHeigh=window.innerHeight+'px';
	 }, //End mounted()

	methods: {  
	 ...mapActions({
           setLang:'setLang',          
        }),
  }//methods
}
</script>
<style lang="scss" scoped>
 .navbar-brand {
    padding-top: 0rem;
    padding-bottom: 0rem;
    font-size: 0rem;   
  }
.vue-typer {
  //font-family: Copperplate, 'Copperplate Gothic Light', fantasy;
  font-family: Comic, 'Comic Sans MS', fantasy;  
  font-size:1em;
}
.vue-typer .custom.char.typed {
  color:#edf0f1;
}
.vue-typer .custom.char.selected {
  color:#edf0f1;
  background-color: transparent;
  text-decoration: line-through;
}

.vue-typer .custom.caret {
  display: none;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------


</style>