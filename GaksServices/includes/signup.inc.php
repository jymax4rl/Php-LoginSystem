<?php

if(isset($_POST['submit'])){

    $name = $_POST["name"];
    $surname = $_POST["surname"];
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $pwdRepeat = $_POST['pwdRepeat'];

}else{
    var_dump($_POST['submit']);
    echo "form was not submitted properly";
}

echo "Hello $name , thank you for signing UP!";
