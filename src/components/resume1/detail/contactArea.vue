<template>
    	<!-- start contact Area -->		
			<section class="contact-area section-gap" id="contact">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="menu-content pb-20 col-lg-8">
							<div class="title text-center">
								<h1 class="mb-10" id="Contact_Title">{{ $t('CONTACTAREA.TITLE') }}</h1>
								<p></p>
							</div>
						</div>
					</div>										
					<!-- <form class="form-area mt-60 contact-form text-right" id="myForm" action="mail.php" method="post" > -->
					<form class="form-area mt-60 contact-form text-right" id="myForm" @submit.prevent="sendEmail()" >
						<div class="row">	
						<div class="col-lg-6 form-group">
							<input name="name" :placeholder="$t('CONTACTAREA.Enter_your_name')" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required="" type="text" v-model="Name">
						
							<input name="email" :placeholder="$t('CONTACTAREA.Enter_email_address')" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required="" type="email" v-model="EmailAddress">

							<input name="subject" :placeholder="$t('CONTACTAREA.Enter_your_subject')" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your subject'" class="common-input mb-20 form-control" required="" type="text" v-model="Subject">
						</div>
						<div class="col-lg-6 form-group">
							<textarea class="common-textarea mt-10 form-control" name="message" :placeholder="$t('CONTACTAREA.Messege')" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Messege'" required="" v-model="Messages"></textarea>
							<button class="btn btn-info btn-lg mt-20">{{ $t('CONTACTAREA.SEND') }}</button>
							<div class="alert-msg">								
						</div>
						</div></div>
					</form>						
					
				</div>	
			</section>
			<!-- end contact Area -->	
</template>

<script>
import $ from 'jquery';
import emailjs from 'emailjs-com';
export default {
    data(){
        return { 
		  Name:'',
		  EmailAddress:'',
		  Subject:'',
          Messages:'',               
        }
    },
  methods: {
    sendEmail(){ 
        var vm=this; 
		var title=$('#Contact_Title').text();
		var regex = new RegExp("^[a-zA-Z0-9 ]+$");
		var msg_success='';
		var success='';
		var msg_fail='';
		var fail='';
		if (regex.test(title))
		{
            msg_success='DAVIDLEE WILL CONTACT YOU ASAP, THANK YOU ';
			success='SUCCESS';
			msg_fail='SEND FAIL, PLEASE SEND AGAGIN';
			fail='FAIL';
		}
		else
		{
            msg_success='DAVIDLEE將會與你盡快聯絡，謝謝';
			success='寄件成功';
			msg_fail='寄件發生錯誤';
			fail='寄件失敗';
		}
        var template_params={ 'name':vm.Name ,
                              'address': vm.EmailAddress,
                              'subject': vm.Subject,
                              'message': vm.Messages};
           
		// emailjs.send('default_service', 'test111',template_params,'user_arcwwusIDaNqOUWeTqBah')
		 emailjs.send('default_service', 'samle1',template_params,'user_O38zHzXbXSSF4jTmpWvz1')
         .then((result) => {			
			this.$alert(msg_success,success,'success');
			vm.clearForm();
         }, (error) => {			
			this.$alert(msg_fail,fail, 'error'); 
         });
	},//sendEmail
	clearForm(){
	   var vm=this;
	   vm.Name='';
	   vm.EmailAddress='';
	   vm.Subject='';
	   vm.Messages='';
	},//clearForm
  }
}
</script>