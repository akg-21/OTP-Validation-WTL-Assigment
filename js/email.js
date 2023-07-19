x=Math.floor(Math.random() * 10000) + 1;

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: x,
    };
    const serviceID = "service_fq2hqix";
    const templateID = "template_tbm9r8h";
    
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          // document.getElementById("name").value = "";
          // document.getElementById("email").value = "";
          // document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  function checkotp()
  {
    var otp=document.getElementById("otp").value;
    if(otp.length==0)
    {
      document.getElementById("para").innerHTML="pls enter otp";
      document.getElementById("para").style.color="red";
    }else{
      if(otp==x){
        document.getElementById("para").innerHTML="correct otp";    
        document.getElementById("para").style.color="green";
      }else{
        document.getElementById("para").innerHTML="pls Enter Correct otp";
        document.getElementById("para").style.color="red"
      }
    }
  }
  