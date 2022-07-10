let month = parseInt(prompt("enter a month"));

if(month >1 && month <12){
switch (month){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
dayCount = 31;
  break;
  case 4:
  case 6:
  case 9:
  case 11:
dayCount = 30;
  break;
  case 2:
dayCount = 28;
  break;
}
  console.log(dayCount);
}
else{
  console.log("is not in a valid range");
}
