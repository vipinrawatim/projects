let btnel = document.getElementById("btn");
let date1 = document.getElementById("date");
let birthday = date1.value;
btnel.addEventListener("click", function () {
    let btnel = document.getElementById("btn");
    let date1 = document.getElementById("date");
    let birthday = date1.value;
    if (birthday === "") {
        alert("please enter the Date of birth");
    }
    else {
        let age1 = getage(birthday);
        document.getElementById("result").innerHTML=`your age is  ${age1} ${age1>1 ? "years" : "year"}  old `;
    }
});
function getage(d) {
    let currentdate = new Date();
   
    let birthdate= new Date(d);
    let age = currentdate.getFullYear()-birthdate.getFullYear();
    let month = currentdate.getMonth()-birthdate.getMonth();
    if(month<0 || (month===0 && currentdate.getDate()<birthdate.getDate())){
        age=age-1;
    }
    return age;

 
}