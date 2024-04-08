function clock(){
    let date = new Date(); 

    var months =["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
    var week=["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
    document.getElementById("date").innerHTML=(week[date.getDay()]+" "+date.getDate()+ " " + months[date.getMonth()] +" "+ date.getFullYear());

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
   var session = hh<11?'AM':"PM";
   
   hh = (hh < 10) ? "0" + hh : hh;
   mm = (mm < 10) ? "0" + mm : mm;
   ss = (ss < 10) ? "0" + ss : ss;
   let time = hh + ":" + mm + ":" + ss + " " + session;
  
   document.getElementById('hours').innerHTML = hh;
   document.getElementById('min').innerHTML = mm;
   document.getElementById('sec').innerHTML = ss;
   document.getElementById('session').innerHTML = session;
  
    let t = setTimeout(function(){ clock() }, 1000);
}
clock();