console.log('Loaded!');
var button =document.getElementsById('counter');
var counter=0;
button.onclick=function(){
  
  
  
  counter = counter+1;
  var span=document.getElementsById('count');
  span.innerHTML=counter.toString();
  
};