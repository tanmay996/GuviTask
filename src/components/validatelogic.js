function validate(){
    let fname = document.getElementById("fname").value;
    if (fname === "") {
        document.getElementById("fname1").style.visibility = "visible";   
    }
    else
    {
        document.getElementById("fname1").style.visibility = "hidden";  
    }

    let lname = document.getElementById("lname").value;
    if (lname === "") {
        document.getElementById("lname1").style.visibility = "visible";   
    }
    else
    {
        document.getElementById("lname1").style.visibility = "hidden";  
    }

    let email = document.getElementById("email").value;
    if (email === "") {
        document.getElementById("email1").style.visibility = "visible";   
    }
    else
    {
        document.getElementById("email1").style.visibility = "hidden";  
    }
  
    let tell = document.getElementById("tell").value;
    if (tell === "") {
        document.getElementById("tell1").style.visibility = "visible";   
    }
    else
    {
        document.getElementById("tell1").style.visibility = "hidden";  
    }
    let pswd = document.getElementById("pswd").value;
    if (pswd === "") {
        document.getElementById("pass1").style.visibility = "visible";   
    }
    else
    {
        document.getElementById("pass1").style.visibility = "hidden";  
    }
    let cpswd = document.getElementById("cpswd").value;
    if (cpswd === "") {
        document.getElementById("cpass1").style.visibility = "visible";   
    }
    else
    {
        document.getElementById("cpass1").style.visibility = "hidden";  
    }

}
export default validate;