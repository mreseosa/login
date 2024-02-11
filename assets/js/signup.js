const uName = document.querySelector('#uName')
const sEmail = document.querySelector('#sEmail')
const spwd = document.querySelector('#spwd')
const spwd2 = document.querySelector('#spwd2')
const signup = document.querySelector('#signup')

const uNameErr = document.querySelector('#uNameErr')
const sEmailErr = document.querySelector('#sEmailErr')
const spwdErr = document.querySelector('#spwdErr')
const spwdErr2 = document.querySelector('#spwdErr2')


let stgBtn = document.querySelector('#stgBtn')
let stgBtn2 = document.querySelector('#stgBtn2')

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// This is for the signup section in the login form

if (spwd.value.length > 1 || spwd2.value.length > 1) {
   shwTglBtn2()
}

let errMsg = {

   uName: {
      error1: 'Please enter your username!',
      error2: 'Username is invalid!'
   },

   email: {
      error1: 'Please enter your email address!',
      error2: 'Please enter a valid email address!'
   },

   pwd: {
      error1: 'Please enter your password!'
   },

   pwd2: {
      error1: 'Please re-enter your password!'
   }
}

signup.addEventListener('click', function () {
   
   if (uName.value.length < 1 && sEmail.value.length < 1 && spwd.value.length < 1 && spwd2.value.length < 1) {
      uName.focus()
      errorC(errMsg.uName.error1, uNameErr)
      errorC(errMsg.email.error1, sEmailErr)
      errorC(errMsg.pwd.error1, spwdErr)
      errorC(errMsg.pwd2.error1, spwdErr2)
      this.disabled = true

   } else if (uName.value.length < 1) {
      uName.focus()
      errorC(errMsg.uName.error1, uNameErr)
      this.disabled = true

   } else if (sEmail.value.length < 1) {
      sEmail.focus()
      errorC(errMsg.email.error1, sEmailErr)
      this.disabled = true

   }  else if (!sEmail.value.match(validRegex)) {
      sEmail.focus()
      errorC(errMsg.email.error2, sEmailErr)
      this.disabled = true

   } else if (spwd.value.length < 1) {
      spwd.focus()
      errorC(errMsg.pwd.error1, spwdErr)
      this.disabled = true

   } else if (spwd2.value.length < 1) {
      spwd2.focus()
      errorC(errMsg.pwd2.error1, spwdErr2)
      this.disabled = true
   } 

})


uName.addEventListener('keyup', function () {
   signup.disabled = false

   if (this.value.length > 1) {
      uNameErr.textContent = '' 
      signup.disabled = false
   } else { 
      signup.disabled = true
   }
 
})

uName.addEventListener('blur', function () {

   if (this.value.length < 1) {

      typingTimer = setTimeout(function() {
         errorC(errMsg.uName.error1, uNameErr)
         signup.disabled = true
      }, 1500)    

   } else {
      uNameErr.textContent = '' 
      signup.disabled = false
   }

   signup.disabled = false
})


sEmail.addEventListener('keyup', function () {
   signup.disabled = false

   if (this.value.length > 1) {
      sEmailErr.textContent = '' 
      signup.disabled = false
   } else { 
      signup.disabled = true
   }
 
})

sEmail.addEventListener('blur', function () {

   if (this.value.length < 1) {

      typingTimer = setTimeout(function() {
         errorC(errMsg.email.error1, sEmailErr)
         signup.disabled = true
      }, 1500)    

   } else {
      emailErr.textContent = '' 
      signup.disabled = false
   }

   signup.disabled = false
})



spwd.addEventListener('keyup', function () {
   signup.disabled = false
   shwTglBtn2()

   if (this.value.length > 1) {
      spwdErr.textContent = ''
      signup.disabled = false
   } else {
      signup.disabled = true
   }
})

spwd.addEventListener('blur', function () {

   if (this.value.length < 1) {

      typingTimer = setTimeout(function() {
         errorC(errMsg.pwd.error1, spwdErr)
         signup.disabled = true
      }, 1500)

   } else {
      spwdErr.textContent = '' 
      signup.disabled = false
   }

   signup.disabled = false
})


spwd2.addEventListener('keyup', function () {
   signup.disabled = false
   shwTglBtn2()

   if (this.value.length > 1) {
      spwdErr2.textContent = ''
      signup.disabled = false
   } else {
      signup.disabled = true
   }
})

spwd2.addEventListener('blur', function () {

   if (this.value.length < 1) {

      typingTimer = setTimeout(function() {
         errorC(errMsg.pwd2.error1, spwdErr2)
         signup.disabled = true
      }, 1500)

   } else {
      spwdErr2.textContent = '' 
      signup.disabled = false
   }

   signup.disabled = false
})















// Functions 

stgBtn.addEventListener('click', function () {
   shwPwds()
})

stgBtn2.addEventListener('click', function () {
   shwPwds()
})


function shwPwds() {
   let type = spwd.getAttribute('type') === 'password' ? 'text' : 'password'
   spwd.setAttribute('type', type)
   spwd2.setAttribute('type', type)
   stgBtn.classList.toggle('show')
   stgBtn2.classList.toggle('show')
}

function shwTglBtn2() {
   stgBtn.style.visibility = 'visible'
   stgBtn2.style.visibility = 'visible'
}