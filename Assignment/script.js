// Assignment code here
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChars = ['!','@','#','$','%','^','&','*'];
var numbers = ['0','1','2','3','4','5','6','7','8','9'];
var allowChars=  [];

// formula to generate a random password
function generatePassword () {

  var allowLowercase = prompt('Do you want to include lowercase characters?')
  if (allowLowercase.toLowerCase() == 'yes') {
    //add the lowercase characters to the allowedChars
    for (var i=0; i < lowercase.length; i +=1){
      allowChars.push(lowercase[i]);
    }
  }
    else {
      console.log('no lowercase added')
    }
  
  

    //add the uppercase characters to the allowedChars
  var allowUppercase = prompt('Do you want to include uppercase characters?')
  if (allowUppercase.toLowerCase() == 'yes'){
    for (var i=0; i < lowercase.length; i +=1){
      allowChars.push(uppercase[i]);
    }
  }
  else {
    console.log('no uppercase added')
  }

  //add the numbers characters to the allowedChars
  var allowNum = prompt('Do you want to include numbers?')
  if (allowNum.toLowerCase() == 'yes'){
    for (var i=0; i < numbers.length; i +=1){
      allowChars.push(numbers[i]);
    }
  }
  else {
    console.log('no number added')
  }

  //add the special characters to the allowedChars
  var allowSpecialChars = prompt('Do you want to include special characters?')
  if (allowSpecialChars.toLowerCase() == 'yes'){
    for (var i=0; i < specialChars.length; i +=1){
      allowChars.push(specialChars[i]);
    }
  }
  else {
    console.log('no special chars added')
  }

  var length = prompt('What length do you want your password to be?')

  // if password is less than 8 or greater than 120
  if (length < 8 || length>120){
    alert('This password needs to be no less than 8 characters long a no greater than 120 characters long, please select a length again.')
  }

  else{
    var password= "";
    for (var i=0; i< length; i++){
      password += allowChars [Math.floor(Math.random() * allowChars.length)];
      
      }
    }
    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.innerHTML = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
