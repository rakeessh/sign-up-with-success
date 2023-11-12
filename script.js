const ContainerBox = document.getElementById('fcontainer');
    const Successbox = document.getElementById('SuccessBox');
    function SubmitOK(){
      const EmailBox = document.getElementById('email').value; 
      const InvalidMail = document.getElementById('email');
      const Addmail = document.getElementById('addMail');
      const ErrorBox = document.getElementById('errorBox');

      const validEmail = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,3}$/;

      if(EmailBox === ""){
        InvalidMail.classList.add('errorInput');
        ErrorBox.innerText = "Invalid Input";
      }else if(!validEmail.test(EmailBox)){
        ErrorBox.innerText = "Valid Email required"
        InvalidMail.classList.add('errorInput');
      }
       else{
          InvalidMail.classList.remove('errorInput');
          ErrorBox.innerText = "";
          ContainerBox.classList.add('hideItem');
          Successbox.classList.remove('hideItem');
          Addmail.innerText = EmailBox;

      }
      
    }
    function DismissButton(){
      ContainerBox.classList.remove('hideItem');
      document.getElementById('email').value =null;
      
    }
