var zone;
var range;
var district;
var subdivision;
var policestation;
var btn = document.getElementById("gradient-btn");
// add event listener for the button, for action "click"
btn.addEventListener("click", Value);

getZoneValue();
function getZoneValue() {
  zone = document.getElementById("ZONE").value;
  
}

getRangeValue();
function getRangeValue() {
  range = document.getElementById("RANGE").value;
  
}
getDistrictValue();
function getDistrictValue() {
  district = document.getElementById("DISTRICT").value;
  
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
  window.location.href="Code1.png";
  }
  if(district == "vadodara"&&policestation=="Chhani")
  {
    window.location.href="Code2.png";

  }
  if(district == "bharuch"&&policestation=="Sindhwai")
  {
    window.location.href="Code3.png";
  }
  if(district == "bharuch"&&policestation=="MotaBazar")
  {
    window.location.href="Code4.png";
  }

}
