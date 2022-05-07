// ================to disable right click====================
document.body.addEventListener('contextmenu',(e)=>{
    alert("You were not allowed to right click on this page")
    e.preventDefault();
})
// ===================time limit==============================
let a = 40;
let time = setInterval(timePeriod,1000);
let timedisplay = document.getElementById('timeDisplay');
function timePeriod(){
    if(cont.style.top=="-105vh"){
        if(a==0){
            clearInterval(time);
            check(); 
        }
        else{
        a--;
        timedisplay.innerHTML = a+' sec';}
    }
}
// ================to scroll page at top====================
window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
//====================to perform task on the button==========
const cont = document.getElementById('testContainer');
function closeContainer() {
    cont.style.top="-105vh";
    document.body.style.overflow="auto";
}
// ===========to check the test marks =====================
let res= document.getElementById('result');
function check(){
    //=======================dom makeover============
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    cont.style.top="0vh";
    document.body.style.overflow="hidden";
    document.getElementById('button').style.display="none";
    //================to check no==========================
    let i=0;
    if(document.getElementById("Ques1").checked==true)
    i++;
    if(document.getElementById("Ques2").checked==true)
    i++;
    if(document.getElementById("Ques3").checked==true)
    i++;
    if(document.getElementById("Ques4").checked==true)
    i++;
    if(document.getElementById("Ques5").checked==true)
    i++;
    if(document.getElementById("Ques6").checked==true)
    i++;
    if(document.getElementById("Ques7").checked==true)
    i++;
    if(document.getElementById("Ques8").checked==true)
    i++;
    if(document.getElementById("Ques9").checked==true)
    i++;
    if(document.getElementById("Ques10").checked==true)
    i++;
    if(i<6)
    res.innerHTML="Total marks out of 10 is = "+i+" 'fail'";
    else
    res.innerHTML="Total marks out of 10 is = "+i+" 'Pass'";
    // ====================reload page=====================
    let counter = 5;
    setInterval(()=>{
        counter--;
        if(counter==0)
        location.reload();
    },1000)
}

// for visiblity
let warning = 3
document.addEventListener("visibilitychange", (event) => {
  if(warning==0 && (a<40&&a>0) && document.visibilityState == "visible"){ 
      
    alert("You crossed the limit, and your test submit automatically. ")
    check()
}
 else if (document.visibilityState == "visible" && (a<40&&a>0) && warning!=0) {
    alert("You have CHANGE the Tab. Now you have only "+ warning + " chance left")
  }else  if((a<40&&a>0)) {
    warning--
    console.log(warning);
  }
});