<template>
  
   <!--/ education -->
	<div class="w3-edu-top" id="educationss">
	<div class="container">
		<div class="w3-edu-grids">
			<div class="col-md-12 w3-edu-grid-left">
				
			</div>
			<div class="col-md-12 w3-edu-grid-right">
			<div class="w3-edu-grid-header">				
			<h3 class="centrestyle">{{$t('Education.Title')}}</h3><br>
			</div>

			<div class="col-md-3 w3-edu-info-right1">
				<br>
				
				<h3>2012~2014</h3>
			</div>
			<div class="col-md-9 w3-edu-info-right2">
				<h3>{{$t('Education.Master')}}</h3>
					<h4>{{$t('Education.Master_Department')}}</h4>
					<p>{{$t('Education.Master_Description')}}</p>
			</div>
			<div class="clearfix"></div> 

				<div class="col-md-12 w3-edu-info-right1">
					<h3>2001~2005</h3>
			</div>
			<div class="col-md-12 w3-edu-info-right2 ">
				<h3>{{$t('Education.University')}}</h3>
					<h4>{{$t('Education.University_Department')}}</h4>
					<p></p>
			</div>
			<div class="clearfix"></div>


			


			<!-- <div class="col-md-3 w3-edu-info-right1">
			<h3>2017</h3>
			</div>
			<div class="col-md-9 w3-edu-info-right2">
				<h3>{{$t('Education.Traning_Center')}}</h3>
					<h4>{{$t('Education.Traning_Department')}}</h4>
					<p>{{$t('Education.Traning_Description')}}</p>			
			</div>
			<div class="clearfix"></div>		 -->
		</div>

		<div class="clearfix"></div>	
	</div>
	</div>
	</div>
<!-- //education -->
    
</template>

<script>
//import $ from 'jquery';
export default {
    data(){
        return{
            educationList:[
				{schoolName:'雪梨科技大學 (澳州)',title:'Information Technology 碩士畢業',detail:'學習IT相關資訊 : WEB PROGRAMMING, CISCO INFORMAITON, 專案管理',during:'2012'},
				{schoolName:'海洋大學',title:'航運管理系',detail:'',during:'2005'},	
			],
        }
    },
    mounted(){
     
    },
}
</script>

<style lang="scss" scoped>
.centrestyle
{
	text-align: center;
}
.leftstyle
{
	text-align: left;
}
</style>