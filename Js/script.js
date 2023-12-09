/*Assignment 1  */
/*Q 1   */
/*var num =Number(window.prompt("Enter nunber "));
console.log(num);*/

/*Q 2   */
/*var num =Number(window.prompt("Enter nunber "));
if(num %3 == 0 && num%4 ==0)
console.log('yes');
else
console.log('no');*/

/*Q 3   */
/*var num1 =Number(window.prompt("Enter first nunber "));
var num2 =Number(window.prompt("Enter second nunber "));
if(num1>num2)
console.log('Max number is :'+num1);
else
console.log('Max number is :'+num2);*/

//Q 4
/*var num =Number(window.prompt("Enter nunber "));
if(num<0)
console.log('Negative');
else
console.log('Positive');*/

/*Q 5  max & Min */
/*var num1 =Number(window.prompt("Enter first nunber "));
var num2 =Number(window.prompt("Enter second nunber "));
var num3 =Number(window.prompt("Enter Third nunber "));
if(num1>num2 && num1>num3)
{
console.log('Max Element is :'+num1);
if(num2<num3)
console.log('Min Element is :'+num2);
else
console.log('Min Element is :'+num3);
}

else if(num2>num1 && num2>num3)
{
console.log('Max Element is :'+num2);
if(num1<num3)
console.log('Min Element is :'+num1);
else
console.log('Min Element is :'+num3);
}
else
{
console.log('Max Element is :'+num3);
if(num1<num2)
console.log('Min Element is :'+num1);
else
console.log('Min Element is :'+num2);
}
*/

/*Q 6   */
/*var num =Number(window.prompt("Enter nunber :"));
if(num %2== 0)
console.log('even');
else
console.log('odd');*/

/*Q 7  */
/*var char =window.prompt("Enter character :");
if(char =='a' || char =='e'|| char =='i'|| char =='o'|| char =='u')
console.log('vowel ');
else
console.log('Consonant');*/

/*Q 8 
var num =Number(window.prompt("Enter nunber :"));
for(var i=1;i<=num;i++)
{
    console.log(i)
}
*/

/*Q 9 */
/*var num =Number(window.prompt("Enter nunber :"));
for(var i=1;i<=12;i++)
{
    console.log('Munltiplication of '+i+' * '+num+' is : '+i*num)
}*/

/* Q10 
var num=Number(prompt('Enter Number :'));
for (var i=1 ; i<=num;i++)
{
    if(i%2==0)
    {
    console.log(i);}
}
*/

/*Q11
var num1=Number(prompt('Enter  Grade 1 :'));
var num2=Number(prompt('Enter Grade 2 :'));
var num3=Number(prompt('Enter Grade 3 :'));
var num4=Number(prompt('Enter Grade 4 :'));
var num5=Number(prompt('Enter Grade 5 :'));

var TotalMark=num1+num2+num3+num4+num5;
console.log('Total Mark ='+TotalMark);
var Average=TotalMark/5;
console.log('Average ='+Average);
var Percent=(TotalMark/500)*100;
console.log('Percentage'+Percent+'%');
*/

/*Q13
var num = Number(prompt("Enter  Month number  :"));
if (
  num == 1 ||
  num == 3 ||
  num == 5 ||
  num == 7 ||
  num == 8 ||
  num == 10 ||
  num == 12
)
  console.log("Days in Month: " + 31);
else if (num == 4 || num == 6 || num == 9 || num == 11)
  console.log("Days in Month: " + 30);
else if (num == 2) console.log("Days in Month: " + 28 + " or " + 29);
else console.log("Please enter valied number");
*/
/*Q14
   var num1=Number(prompt('Enter Physics Grade :'));
   var num2=Number(prompt('Enter Chemistry Grade  :'));
   var num3=Number(prompt('Enter  Biology Grade  :'));
   var num4=Number(prompt('Enter Mathematics Grade :'));
   var num5=Number(prompt('Enter Computer Grade  :'));
   
   var TotalMark=num1+num2+num3+num4+num5;
   
   var Percent=(TotalMark/500)*100;
   
       if  (Percent>=90)
           console.log('Percentage :'+Percent+'% '+' Grade A');
         
      else if (Percent>=80)
           console.log('Percentage :'+Percent+'% '+' Grade B');
         
      else if (Percent>=70)
           console.log('Percentage : '+Percent+'% '+' Grade C');
         
      else if( Percent>=60)
           console.log('Percentage : '+Percent+'% '+' Grade D');
         
      else if (Percent>=40)
           console.log('Percentage : '+Percent+'% '+' Grade E');
         
      else if (Percent<40)
           console.log('Percentage : '+Percent+'% '+' Grade F');
         
           else
               console.log('Please enter valied number')
   */

/*Q15
 var num=Number(prompt('Enter  Month number  :'));
 switch(num) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
     console.log('Days in Month: '+31)
      break;
    case 4:
    case 6:
    case 9:
     case 11:   
         console.log('Days in Month: '+30)
      break;
    case 2:
      console.log('Days in Month: '+28+' or '+29)
      break;
    
    
    default:
        console.log('Please enter valied number')
  }*/

/*Q16
var char = window.prompt("Enter character :");
switch (char) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("vowel ");
    break;

  default:
    console.log("Consonant");
}
*/

/*Q17
var num1=Number(prompt('Enter number 1 :'));
var num2=Number(prompt('Enter number 2 :'));
switch(num1>num2){

    case(true):
    console.log('The great number is '+num1);
    break;
    case(false):
    console.log('The great number is '+num2);
    break;
    
}*/

/*Q18
var num=Number(prompt('Enter number  :'));
switch(num%2==0){
    case(true):
    console.log('The  number even ');
    break;
    case(false):
    console.log('The  number odd ');
    break;
   
}*/

/*Q19
var num=Number(prompt('Enter number  :'));
switch(num<0){
    case(true):
    console.log('The  number negative  ');
    break;
    case(false):
    console.log('The  number positive ');
    break;
   
}*/


/*Q20 */
var num1=Number(prompt('Enter first  number  :'));
var sign=prompt('Enter sign (+ or - or * or /  ) :');
var num2=Number(prompt('Enter second  number  :'));
switch(true){
    case(sign=='+'):
    console.log('The  result =  '+(num1+num2));
    break;
    case(sign=='-'):
    console.log('The  result =  '+(num1-num2));
    break;
    case(sign=='*'):
    console.log('The  result =  '+(num1*num2));
    break;
    case(sign=='/'):
    console.log('The  result =  '+(num1/num2));
    break;
    
   
}
