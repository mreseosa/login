<?php

   class DBH {
      
      protected function Connect() {

         try {
            $username = "root";
            $password = "";
            $dbh = new PDO("mysql:host=localhost;dbname=login", $username, $password);
            return $dbh;

         } catch (PDOException $e) {
            print "Error!: {$e->getMessage()} <br>";
            die();
         }
      }

   }

?>