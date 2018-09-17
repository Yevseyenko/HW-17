var min=1;
var max=5;
var choice = confirm("Do you wanna play");
if (choice == false){
  alert("Not today");
}
else{
  
  var count =0;
  while(count< 3){
    var random =Math.round(Math.random()*(+max - +min)) + +min;
    var number = prompt("Input number from 1 to 5");
    if(number==random){
      alert("Congratulations! You are winner!");
    }else{
      count++;
    }
    
  }
  alert("Today is not your day.");
}