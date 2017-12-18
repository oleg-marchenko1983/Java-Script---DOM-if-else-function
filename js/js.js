
/* task 1 */
    var buttonTask1 = document.querySelector("#buttonTask1");
    var resultTask1 = document.querySelector("#resultTask1");
    var inputValue = document.querySelector("#inputTask1");
    function subtractLenght (){
      var valueResult = inputValue.value
      resultTask1.innerHTML = `Длина строки ${valueResult.length} Вы ввели ${valueResult}`;
    }
    buttonTask1.addEventListener("click", subtractLenght)

/* task 2 */

    var buttonTask2 = document.querySelector("#buttonTask2");
    buttonTask2.addEventListener("click", viewImg);

  function viewImg (){

    var divImages = document.querySelector("#divImages");
    var arrImg = ["img/html.png" , "img/css.png" , "img/js.png"];
      for (var i = 0; i < arrImg.length; i++) {
    var img = document.createElement("img");
      img.className = "imgTask2";
      divImages.insertBefore(img,null);
      img.setAttribute('src', arrImg[i]);
      }
  }


/* task 3 */
var buttonTask3 = document.querySelector('#buttonTask3');
var arrT3 = ['https://', 'http://'];
var str = document.querySelector('#inputTask3');
function url () {
  var valueTask3 = str.value;
  arrT3.forEach(function (elem) {
    if (valueTask3.indexOf (elem)!= -1) {
      var newStr = valueTask3.slice(elem.length);
      alert(newStr);
    }
  });
}
buttonTask3.addEventListener('click', url);

/*Task4*/

var submitTask4 = document.querySelector('#submitTask4');
var arrT4 = ['https://www.', 'https://www.', 'http://www.', 'https://', 'http://'];
var result = document.querySelector('#resultTask4');
var strTask4 = document.querySelector('#inputTask4');
function urlAdd () {
    var valueTask4 = strTask4.value;
  arrT4.forEach(function (elem) {
    if (valueTask4.indexOf(elem) === 0) {
      var newStr = valueTask4.slice(elem.length);
      result.innerHTML = newStr;
    }
  });
};
submitTask4.addEventListener('click',urlAdd)


/* Task5*/
var buttonTask5 = document.querySelector("#submitForm");
var emailInput = document.querySelector("#emailInput");
var passwordsInput = document.querySelector("#passwordsInput");
var surnameInput = document.querySelector("#surnameInput");
var nameInput = document.querySelector("#nameInput");
function validForm (){
  event.preventDefault();
  var surname = surnameInput.value.trim();
  var name = nameInput.value.trim();
  var password = passwordsInput.value.trim();
  var email = emailInput.value.trim();
  var email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;

    if (surname !== "" && name !== "" && email_regexp.test(email) && password.length > 5 ) {

      alert (true);
      console.log(`${surname} ${name} ${email} ${password}`);
    }
    else {
      alert (false);
      console.log(`${surname} ${name} ${email} ${password}`);
    }
}
buttonTask5.addEventListener('click', validForm);



/*task6*/

 var buttonTask6 = document.querySelector("#buttonTask6");

  function outputToCode (){
   var inputTask6  = document.querySelector("#inputTask6").value;
    var result = document.querySelector("#resultTask6");

    result.innerHTML = `"${inputTask6.charCodeAt(0)}" - unicode-код для: ${inputTask6} `;
  }

  buttonTask6.addEventListener("click" , outputToCode);
