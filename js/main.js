
var btn = document.getElementById('btn');
var quteArray =[
    { qute : "It's not what happens to you, but how you react to it that matters." ,
Auther : '--Epictetus' } ,

{qute : 'You miss 100% of the shots you do not take.',
Auther: '--Wayne Gretzy'},

{qute :"The best revenge is massive success." ,
Auther : '--Frank Sinatra' }   
]



function getQute(){
  var number = Math.floor(Math.random()*quteArray.length) ;
   console.log(number);

   document.getElementById('quteTitle').innerHTML = quteArray[number].qute;
   document.getElementById('quteAuther').innerHTML = quteArray[number].Auther;
   
}

btn.addEventListener('click' , getQute);