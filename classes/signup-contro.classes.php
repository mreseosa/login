<?php

   class SignUpContr {
      
      private $uid;
      private $email;
      private $pwd;
      private $pwdR;

      public function __construct($uid, $email, $pwd, $pwdR) {
         $this->$uid = $uid;
         $this->$email = $email;
         $this->$pwd = $pwd;
         $this->$pwdR = $pwdR;
      }

      private function emptyInput() {
         $result = "";

         if (empty($this->uid) || empty($this->email) || empty($this->pwd) || empty($this->pwdR)) {
            $result = false;
         } else {
            $result = true;
         }

         return $result;
      }

      private function invalidUid() {
         $result = "";

         if (!preg_match("/^[a-zA-Z0-9]*$/", $this->uid)) {
            $result = false;
         } else {
            $result = true;
         }

         
      }
   }

?>