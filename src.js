function Signup() {
    let Email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
  
  
    if (Email && password) {
      let userData = JSON.parse(localStorage.getItem("User")) || [];
      userData.push({ Email, password });
      localStorage.setItem("User", JSON.stringify(userData))
      alert("Data submit sucessfully....");
      window.location.href = "index.html"
    }
    else {
      alert("Check the info")
    }
  
    Email = document.getElementById("email").value = "";
    password = document.getElementById("pass").value = "";
  
  }
  
  
  function login() {
    let EmailLogin = document.getElementById("emailE").value;
    let passwordLogin = document.getElementById("passP").value;
    let data = JSON.parse(localStorage.getItem("User")) || [];
    let matched = data.find(x => x.Email === EmailLogin && x.password === passwordLogin)
    if (matched) {
      alert("Login Sucessful....")
      window.location.href = "main.html";
    } else {
      alert(" Login info not matched....")
    }
  }
  
  function forget(){
    let inputEmail=prompt("Enter Email...");
    console.log(inputEmail);
    let getdata=JSON.parse(localStorage.getItem("User"))||[]
    console.log(getdata);
   
  getdata.forEach(e => {
    if(inputEmail===e.Email){
      alert(`Your email is : ${e.Email} and Your password is: ${e.password}`)
    }
    
  })
   }