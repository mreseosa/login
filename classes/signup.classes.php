<?php

   class SignUp extends DBH {

      protected function checkUser($uid, $email) {
         $sql = "SELECT users_id FROM users WHERE users_id = ? OR users_email = ?";
         $stmt = $this->Connect()->prepare($sql);

         if (!$stmt->execute(array($uid, $email))) {
            $stmt = null;
            header("location: ../index.php?error=stmtfailed");
            exit();
         }

         $resultCheck = "";

         if ($stmt->rowCount() > 0) {
            $resultCheck = false;
         } else {
            $resultCheck = true;
         }

         return $resultCheck;
      }

   }



?>