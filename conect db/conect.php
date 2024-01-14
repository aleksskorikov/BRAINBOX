<?php

$servername = "sql305.infinityfree.com";
$username = "if0_35757249";
$password = "WLxouUNfnXG4Y";
$dbname = "if0_35757249_brainbox";

// Создаем подключение
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем подключение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

// Закрываем соединение
$conn->close();

?>