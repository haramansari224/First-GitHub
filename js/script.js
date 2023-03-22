function clearInput(){
 return document.getElementById("input").value = ""
}
function clearOutput(){
 return document.getElementById("output").innerHTML = ""
}
const name1 = "M Haram";
const password = "12345"
const email = "haram224@gmail.com"
let Cities = ["Faisalabad" , "Karachi" , "Multan" , "Islamabad" , "Lahore" ] 
let cityhtml = "Faisalabad <br> Karachi<br> Multan <br>Islamabad <br>Lahore<br>";
function input(){
return  document.getElementById("input").value
}
function output(out){
 document.getElementById("output").innerHTML = out
}
function login() {
  event.preventDefault();
  var inputName = document.getElementById("name").value
  var inputEmail = document.getElementById("email").value
  var inputPass = document.getElementById("password").value
  // console.log(inputName)
  // console.log(inputEmail)
  // console.log(inputPass)
  if (inputName == name1 && inputPass == password && email == inputEmail) {
    window.location.href = "/home.html";
    // alert("Correct")
  }else if(inputName == name1 && inputPass == password && email != inputEmail){
    Toastify({
      text: "Please Enter Yor Email Correctly",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #506e98;,#2b4b77)",
      },
      onClick: function(){} // Callback after click
    }).showToast();return;
  }else if(inputName == name1 && inputPass != password && email == inputEmail){
    Toastify({
      text: "Please Enter Correct Password",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #506e98;,#2b4b77)",
      },
      onClick: function(){} // Callback after click
    }).showToast();return;
  }else if(inputName != name1 && inputPass == password && email == inputEmail){
    Toastify({
      text: "Please Enter Correct Name",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #506e98;,#2b4b77)",
      },
      onClick: function(){} // Callback after click
    }).showToast();return;
  }else if(!inputName && !inputPass && !inputEmail){
    Toastify({
      text: "Please Fill the Form",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #506e98; ,#2b4b77)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }
  else {
    // alert("Please Enter Correct information")
    Toastify({
      text: "Please Enter Correct Information",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #506e98; ,#2b4b77)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }
}
document.getElementById("newName").innerHTML = "Welcome " + name1;
function add(){
  let city1 = input();
  let city ='<span style="text-transform:capitalize;" >' + input() + "</span>" 
  if(!city1){
    Toastify({
      text: "Please Enter Your City Name ",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #506e98;,#2b4b77)",
      },
      onClick: function(){} // Callback after click
    }).showToast();
return
  }
  // let cityFound = false;
  for(let i = 0 ; i < Cities.length; i++){
    if(Cities[i] === city){
      // cityFound = true;
      output(cityhtml);
      Toastify({
        text: "Your City Already in list",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #506e98;,#2b4b77)",
        },
        onClick: function(){} // Callback after click
      }).showToast();return;
    } 
    if (Cities[i] !== city) {
      Cities.push(city);
      output("")
      for (let i = 0; i < Cities.length; i++) {
        num =  i + 1;
        let html = cityhtml + "  " + Cities[i] + "<br>";
        output(html);
    }
    Toastify({
      text: "Your City Added In List",
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #506e98;,#2b4b77)",
      },
      onClick: function(){} // Callback after click
    }).showToast();return;
  }
}
}
  document.getElementById("year").innerHTML = new Date().getFullYear();
