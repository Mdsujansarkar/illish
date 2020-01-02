<?php
// Parent class
trait HelloGeeks { 
  public function geekst() { 
      echo 'Hello World!'; 
  } 
} 

class Geeksforgeeks { 
  use HelloGeeks; 
  public function geeks() { 
      echo 'Hello Geeks!'; 
  } 
} 

$obj = new Geeksforgeeks(); 
$obj->geeks();

