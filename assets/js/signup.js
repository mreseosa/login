const uName = document.querySelector('#uName')
const sEmail = document.querySelector('#sEmail')
const spwd = document.querySelector('#spwd')
const signup = document.querySelector('#signup')

const uNameErr = document.querySelector('#uNameErr')
const sEmailErr = document.querySelector('#sEmailErr')
const spwdErr = document.querySelector('#pwdErr')


let tgBtn = document.querySelector('#tgBtn')

if (spwd.value.length > 1) {
   tgBtn.style.visibility = "visible"
}



let errMsg = {

   email: {
      error1: 'Please enter your email address!',
      error2: 'Email address is invalid!'
   },

   pwd: {
      error1: 'Please enter your password!'
   }
}

signup.addEventListener('click', function () {
   
   if (sEmail.value.length < 1 && spwd.value.length < 1) {
      sEmail.focus()
      errorC(errMsg.sEmail.error1, ssEmailErr)
      errorC(errMsg.spwd.error1, spwdErr)
      this.disabled = true

   } else if (sEmail.value.length < 1) {
      sEmail.focus()
      errorC(errMsg.sEmail.error1, ssEmailErr)
      this.disabled = true

   } else if (spwd.value.length < 1) {
      spwd.focus()
      errorC(errMsg.spwd.error1, spwdErr)
      this.disabled = true

   } 

})


sEmail.addEventListener('keyup', function () {
   signup.disabled = false

   if (this.value.length > 1) {
      ssEmailErr.textContent = '' 
      signup.disabled = false
   } else { 
      signup.disabled = true
   }
 
})

sEmail.addEventListener('blur', function () {

   if (this.value.length < 1) {

      typingTimer = setTimeout(function() {
         errorC(errMsg.sEmail.error1, ssEmailErr)
         signup.disabled = true
      }, 1500)    

   } else {
      ssEmailErr.textContent = '' 
      signup.disabled = false
   }

   signup.disabled = false
})



spwd.addEventListener('keyup', function () {
   tgBtn.style.visibility = "visible"
   signup.disabled = false
   shwTglBtn()

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
         errorC(errMsg.spwd.error1, spwdErr)
         signup.disabled = true
      }, 1500)

   } else {
      spwdErr.textContent = '' 
      signup.disabled = false
   }

   signup.disabled = false
})
















// Functions 


// function errorC(error, element) {
//    element.textContent = ''
//    let err = document.createElement('div')
//    err.classList.add('errMsg')
//    err.textContent = `${error}`
//    element.appendChild(err)
// } 

// tgBtn.addEventListener('click', function () {
//    shwPwd()
// })

// function shwPwd() {
//    let type = pwd.getAttribute('type') === 'password' ? 'text' : 'password'
//    pwd.setAttribute('type', type)
//    tgBtn.classList.toggle('show')
// }

// function shwTglBtn() {
//    tgBtn.style.visibility = 'visible'
// }