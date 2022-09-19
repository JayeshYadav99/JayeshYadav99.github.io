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
  localStorage.setItem("Zone", zone);
}

getRangeValue();
function getRangeValue() {
  range = document.getElementById("RANGE").value;
  localStorage.setItem("Range", range);
}
getDistrictValue();
function getDistrictValue() {
  district = document.getElementById("DISTRICT").value;
  localStorage.setItem("district", district);
}
getSubdivison();
function getSubdivison() {
  subdivision = document.getElementById("SUBDIVISION").value;
  localStorage.setItem("subdivison", subdivision);
}
getPolicestation();
function getPolicestation() {
  policestation = document.getElementById("POLICESTATION").value;
  localStorage.setItem("policestation", policestation);
}

function Value() {
  if (district == "vadodara") {
    if (policestation == "Sayajiganj") {
      window.location.href = "Code1.png";
    }
    if (policestation =="Chhani") {
      window.location.href =="Code2.png";
    }
  }
  if (district == "Bharuch") {
    if (policestation == "Sindhwai") {
      window.location == "Code3.png";
    }
    if (policestation == "MotaBazar") {
      window.location == "Code4.png";
    }
  }
}
