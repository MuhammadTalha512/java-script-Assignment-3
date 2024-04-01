function simpleAlert(){
    alert("I'm an alert")
}


function printMyName(){
    let myName = document.getElementById("inputtext") .value;

    if(!myName){
        alert("Please Type Your Name");
        return;
    }
  document.getElementById("output").innerHTML = myName

}
function clearOutPut(){
    document.getElementById("output").innerHTML = "";
}
 function clearinput(){
   document.getElementById("buttoninput")
}
 
let cities = ["Faisalabad", "Lahore", "Karachi", "Islamabad", "Multan", "Shekhupura", "Kashmir"]


function printAllCities(){
    document.getElementById("output").innerHTML = " "
  //  document.getElementById("originaltextbox"). innerHTML =  "   1) Faisalabad <br> 2) Lahore <br>   3) Karachi <br> 4)  Islamabad <br> 5) Burewala <br> 6) Shekhupura <br> 7) Kashmir "
    for (let i=0; i<cities.length; i++){
        document.getElementById("output").innerHTML += i+1 +") " + cities[i] + "<br />"
        
    }
}


function addCity(){
let city = document.getElementById("inputtext").value
if(!city){
  alert("Please type your city name")
  return;
}
cities.push(city);
document.getElementById("output").innerHTML += '<span style="color:green; font-size: 20px;">"' + city + '"</span> has been successfully added into list.';

}

function generatetable(){
  let number = document.getElementById("inputtext").value
 

  if(!number){
    alert("Please enter a number")
    return
  }

  var limit = +prompt ("Give a number")
  document.getElementById('output').innerHTML = "";

  for(var index = 1; index <= limit; index++){
    document.getElementById('output').innerHTML += number + " * " + index + " = " + number * index + "<br>" 
  }

}



