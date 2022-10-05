firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.replace("index.html");
    } else {
      document.getElementById("user").innerHTML = "Hello, " + user.email;
    }
  });
  
  function logout() {
  
    firebase.auth().signOut();
  }
  
  // window.onbeforeunload = function (e) {
    
    
  //   firebase.auth().signOut();
  // };
  var zone;
  var range;
  var district;
  var subdivision;
  var policestation;
  var btn = document.getElementById("gradient-btn");
  // add event listener for the button, for action "click"
  btn.addEventListener("click", Value);

//   function changecat() {
    
// }
  
  getZoneValue();
  function getZoneValue() {
    zone = document.getElementById("ZONE").value;
    var selectHTML = "";

    var A = ["Aravalli", "Banaskantha", "Gandhinagar"];
    var B = ["Bharuch", "Narmada", "Surat"];
    var C = ["Ahmedavad", "Anand", "Vadodara"];
    var D = ["Dwarka", "Somnath", "Junagadh"];
    var E = ["Kutch"];

    if (document.getElementById("ZONE").value == "A") {
        var select = document.getElementById('DISTRICT').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('DISTRICT').options.remove(i);
        }

        for (var i = 0; i < A.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + A[i] + "'>" + A[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('DISTRICT').add(newSelect);
        }
    }

    else if (document.getElementById("ZONE").value == "B") {
        var select = document.getElementById('DISTRICT').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('DISTRICT').options.remove(i);
        }

        for (var i = 0; i < B.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + B[i] + "'>" + B[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('DISTRICT').add(newSelect);
        }
    }

    else if (document.getElementById("ZONE").value == "C") {
        var select = document.getElementById('DISTRICT').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('DISTRICT').options.remove(i);
        }

        for (var i = 0; i < C.length; i++) { 
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + C[i] + "'>" + C[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('DISTRICT').add(newSelect);
        }
    }
    else if (document.getElementById("ZONE").value == "D") {
        var select = document.getElementById('DISTRICT').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('DISTRICT').options.remove(i);
        }

        for (var i = 0; i < C.length; i++) { 
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + C[i] + "'>" + C[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('DISTRICT').add(newSelect);
        }
    } 
    else if (document.getElementById("ZONE").value == "E") {
        var select = document.getElementById('DISTRICT').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('DISTRICT').options.remove(i);
        }

        for (var i = 0; i < C.length; i++) { 
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + C[i] + "'>" + C[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('DISTRICT').add(newSelect);
        }
    }   
  }
  
  getRangeValue();
  function getRangeValue() {
    range = document.getElementById("RANGE").value;
    
  }
  getDistrictValue();
  function getDistrictValue() {
    district = document.getElementById("DISTRICT").value;
    
    zone = document.getElementById("ZONE").value;
    var Aravalli = ["Bhiloda", "Modasa", "Sabalpur"];
    var Banaskantha = ["Amirgarh","Palanpur", "Vadgam"];
    var Gandhinagar = ["Adalaj", "Dabhoda","Pethapur"];
    var Bharuch = ["Mota Bazar", "Valia","Sindhwai"];
    var Narmada = ["Dediapada", "Rajpipla", "Kevadiya"];
    var Surat = ["Athwa", "Khatodara", "Varachha"];
    var Ahmedavad = ["Amraiwadi","Navrangpura"];
    var Anand = ["Anklav", "Vallabh Vidhyanagar", "Gamdi"];
    var Vadodara = ["Sayajiganj", "Chhani", "Fatehgunj"];
    var Dwarka = ["Mithapur", "Okha","Khambhalia"];
    var Somnath = ["Talala","Sutrapada"];
    var Junagadh = ["Vishalvav", "Kalwa", "Joshipura"];
    var Kutch = ["rapar","Khavda"];
if(zone=="A")
{
    if (district== "Aravalli") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Aravalli.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Aravalli[i] + "'>" + Aravalli[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if (district== "Banaskantha") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Banaskantha.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Banaskantha[i] + "'>" + Banaskantha[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if(district=="Gandhinagar"){
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Gandhinagar.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Gandhinagar[i] + "'>" + Gandhinagar[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
}
else if(zone=="B")
{
    if (district== "Bharuch") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Bharuch.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Bharuch[i] + "'>" + Bharuch[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if (district== "Narmada") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Narmada.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Narmada[i] + "'>" + Narmada[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if(district=="Surat"){
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Surat.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Surat[i] + "'>" + Surat[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }   
}
else if(zone=="C")
{
    if (district== "Ahmedavad") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Ahmedavad.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Ahmedavad[i] + "'>" + Ahmedavad[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if (district== "Anand") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Anand.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Anand[i] + "'>" + Anand[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if(district=="Vadodara"){
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Vadodara.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Vadodara[i] + "'>" + Vadodara[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    } 
}
else if(zone=="D")
{
    if (district== "Dwarka") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Dwarka.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Dwarka[i] + "'>" + Dwarka[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if (district== "Somnath") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Somnath.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Somnath[i] + "'>" + Somnath[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
    if(district=="Junagadh"){
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Junagadh.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Junagadh[i] + "'>" + Junagadh[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    } 
}
else
{
    if (district== "kutch") {
        var select = document.getElementById('POLICESTATION').options.length;

        for (var i = 0; i < select; i++) {
            document.getElementById('POLICESTATION').options.remove(i);
        }

        for (var i = 0; i < Kutch.length; i++) {
            var newSelect = document.createElement('option');
            selectHTML = "<option value='" + Kutch[i] + "'>" + Kutch[i] + "</option>";
            newSelect.innerHTML = selectHTML;
            document.getElementById('POLICESTATION').add(newSelect);
        }
    }
}
  }
  getSubdivison();
  function getSubdivison() {
    subdivision = document.getElementById("SUBDIVISION").value;
    
  }
  getPolicestation();
  function getPolicestation() {
    policestation = document.getElementById("POLICESTATION").value;
    
  }
  
  function Value()
 {
  if (district == "vadodara"&&policestation=="Sayajiganj") 
  {
  window.location.href="https://docs.google.com/spreadsheets/d/1li63-Sq8zHGEFnuxvQBZwoQNoWWIKJ9ry9joYolnnwY/edit?resourcekey#gid=540839683";
  }
  if(district == "vadodara"&&policestation=="Chhani")
  {
    window.location.href="https://docs.google.com/spreadsheets/d/193HfgDFsvSUZAK21N9XjBMu1dkUReQOO6kAksIAYhEg/edit?resourcekey#gid=809364902";

  }
  if(district == "bharuch"&&policestation=="Sindhwai")
  {
    window.location.href="https://docs.google.com/spreadsheets/d/1EN7FVicDQidNWdZqQDGx8xfEyfYi7kTuZOTVsN6rUhk/edit?resourcekey#gid=310556717";
  }
  if(district == "bharuch"&&policestation=="MotaBazar")
  {
    window.location.href="https://docs.google.com/spreadsheets/d/1WaGTztJfFnwPP2ZET8Rw8PubwpekHlWnhwQnc6h5DBU/edit?resourcekey#gid=1429511130";

  }

}
