<template>
  <form class="contact-form" @submit.prevent="smtpSendEmail">
    <label>Name</label>
    <input type="text" name="user_name">
    <label>Email</label>
    <input type="email" name="user_email">
    <label>Message</label>
    <textarea name="message" v-model="messages"></textarea>
    <input type="submit" value="Send">
  </form>
</template>

<script>
import emailjs from 'emailjs-com';
export default {
    data(){
        return { 
          messages:'',               
        }
    },
  methods: {
    sendEmail(){     
        var vm=this; 
        var template_params={'message':vm.messages};
           
         emailjs.send('default_service', 'test111',template_params,'user_arcwwusIDaNqOUWeTqBah')
         .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
         }, (error) => {
            console.log('FAILED...', error);
         });
    },//sendEmail()
    smtpSendEmail(){
        	Email.send({
        	Host: 'smtp.gmail.com',
	        Username : 'banni4422@gmail.com',
	        Password : 'D1234501!teco1212',
	        To : 'banni442@hotmail.coom',
	        From : 'banni4422@gmail.com',
	        Subject : 'this is test',
	        Body : 'ha hahahahahahahha',
            }).then(message => alert(message)
           // console.log(message);
	          );
    },//smtpSendEmail
  }
}
</script>