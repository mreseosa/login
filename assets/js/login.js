
// import 'signup.js';

const email = document.querySelector('#email')
const pwd = document.querySelector('#pwd')
const login = document.querySelector('#login')

const emailErr = document.querySelector('#emailErr')
const pwdErr = document.querySelector('#pwdErr')


let tgBtn = document.querySelector('#tgBtn')

if (pwd.value.length > 1) {
   tgBtn.style.visibility = "visible"
}


login.addEventListener('click', function () {
   
   if (email.value.length < 1 && pwd.value.length < 1) {
      email.focus()
      errorC(errMsg.email.error1, emailErr)
      errorC(errMsg.pwd.error1, pwdErr)
      this.disabled = true

   } else if (email.value.length < 1) {
      email.focus()
      errorC(errMsg.email.error1, emailErr)
      this.disabled = true

   } else if (pwd.value.length < 1) {
      pwd.focus()
      errorC(errMsg.pwd.error1, pwdErr)
      this.disabled = true

   } 

})


email.addEventListener('keyup', function () {
   login.disabled = false

   if (this.value.length > 1) {
      emailErr.textContent = '' 
      login.disabled = false
   } else { 
      login.disabled = true
   }
 
})

email.addEventListener('blur', function () {

   if (this.value.length < 1) {

      typingTimer = setTimeout(function() {
         errorC(errMsg.email.error1, emailErr)
         login.disabled = true
      }, 1500)    

   } else {
      emailErr.textContent = '' 
      login.disabled = false
   }

   login.disabled = false
})



pwd.addEventListener('keyup', function () {
   tgBtn.style.visibility = "visible"
   login.disabled = false
   shwTglBtn()

   if (this.value.length > 1) {
      pwdErr.textContent = ''
      login.disabled = false
   } else {
      login.disabled = true
   }
})

pwd.addEventListener('blur', function () {

   if (this.value.length < 1) {

      typingTimer = setTimeout(function() {
         errorC(errMsg.pwd.error1, pwdErr)
         login.disabled = true
      }, 1500)

   } else {
      pwdErr.textContent = '' 
      login.disabled = false
   }

   login.disabled = false
})
















// Functions 


function errorC(error, element) {
   element.textContent = ''
   let err = document.createElement('div')
   err.classList.add('errMsg')
   err.textContent = `${error}`
   element.appendChild(err)
} 

tgBtn.addEventListener('click', function () {
   shwPwd()
})

function shwPwd() {
   let type = pwd.getAttribute('type') === 'password' ? 'text' : 'password'
   pwd.setAttribute('type', type)
   tgBtn.classList.toggle('show')
}

function shwTglBtn() {
   tgBtn.style.visibility = 'visible'
}