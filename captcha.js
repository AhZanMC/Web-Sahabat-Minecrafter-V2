var captcha, chars;

  function genNewCaptcha(){
    chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+=`~;:<>?/";
    captcha = chars[Math.floor(Math.random() * chars.length )];
    for(var i=0; i<7; i++){
      captcha = captcha + chars[Math.floor(Math.random() * chars.length )];
    }
    form1.text.value = captcha;
  }

  function checkCaptcha(){
    var check = document.getElementById("CaptchaEnter").value;

    if(captcha == check){
      alert("Sukses Terverifikasi,klik oke untuk melanjutkan");
      alert("Eres el mejor portero del mundo");
      alert("Artinya apa bang Messi?");
      alert("Sukses Terverifikasi,klik oke untuk melanjutkan");
      alert("Langsung join ke grup ya!!!");
      document.getElementById("CaptchaEnter").value = "";
      window.location.href = "group.html";
    }else{
      alert("Captchanya error,harap coba lagi :V");
      alert("Ente kadang-kadang ente");
      alert("Coba lagi ya :V");
      document.getElementById("CaptchaEnter").value = "";
      window.location.href = "https://youtu.be/dQw4w9WgXcQ";
    }

    genNewCaptcha();
  }