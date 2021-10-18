// alert("This Page contain same Quiz related to HTMl. Each correct answer contain 1 marks.You have to score atleast 6 marks to pass the test")
const cont = document.getElementById('testContainer');
function closeContainer() {
    cont.style.top="-105vh";
}
function check(){
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
    alert("Total marks out of 10 is = "+i+" 'Fail'");
    else
    alert("Total marks out of 10 is = "+i+" 'Pass'");
}