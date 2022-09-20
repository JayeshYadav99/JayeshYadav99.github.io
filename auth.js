const firebaseConfig = {
  apiKey: "AIzaSyDqOmdqmsGNhDOrjy_xEIjZ-JnKq7gMBlE",
  authDomain: "my-noob-7739a.firebaseapp.com",
  databaseURL: "https://my-noob-7739a-default-rtdb.firebaseio.com",
  projectId: "my-noob-7739a",
  storageBucket: "my-noob-7739a.appspot.com",
  messagingSenderId: "829264938526",
  appId: "1:829264938526:web:86fa140189c90fcfcbd00f",
  measurementId: "G-SLHR6BV766"
};


	firebase.initializeApp(firebaseConfig);
render();
function render(){
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
	recaptchaVerifier.render();
}
	// function for send message
function phoneAuth(){
	var number = document.getElementById('number').value;
	firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
		window.confirmationResult = confirmationResult;
		coderesult = confirmationResult;
		document.getElementById('sender').style.display = 'none';
		document.getElementById('verifier').style.display = 'block';
	}).catch(function(error){
		alert(error.message);
	});
}
	// function for code verify
function codeverify(){
	var code = document.getElementById('verificationcode').value;
	coderesult.confirm(code).then(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'block';
		document.getElementsByClassName('n-conf')[0].style.display = 'none';
		var c=localStorage.getItem("CITY");
		var a=localStorage.getItem("AREA");
		if(c=="VADODARA"&& a=="SAYAJIGUNJ")
		{
			document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSf8gjzOsb_ohah0sXlSw539Cvk-Iu9mRuGuUusCWrdHG5Fjqw/viewform";
		
		}
		if(c=="VADODARA"&&a=="CHANNI")
		{
			document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeZpVTDUlvH7J5TDOCyI1n0c7_mRtLcSAs4UfZFOSPK5gkn8g/viewform";
		}
		if(c=="BHARUCH"&&a=="SINDHWAI")
		{
			document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeZpVTDUlvH7J5TDOCyI1n0c7_mRtLcSAs4UfZFOSPK5gkn8g/viewform";
		}
		if(c=="BHARUCH"&&a=="MOTABAZAR")
		{
			document.location.href="https://docs.google.com/forms/d/e/1FAIpQLSeZpVTDUlvH7J5TDOCyI1n0c7_mRtLcSAs4UfZFOSPK5gkn8g/viewform";
		}
	
        
	}).catch(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'none';
		document.getElementsByClassName('n-conf')[0].style.display = 'block';
	})
}

