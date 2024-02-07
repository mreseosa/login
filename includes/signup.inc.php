<?php

   if (isset($_POST['submit'])) {

      $uid = $_POST['uname'];
      $email = $_POST['email'];
      $pwd = $_POST['pwd'];
      $pwdR = $_POST['rpwd'];

      //  Instantiate Sign up controller class

      include '../classes/signup.classes.php';
      include '../classes/signup-contro.classes.php';

      $signUp = new SignUpContr($uid, $email, $pwd, $pwdR);

      


   }

?>