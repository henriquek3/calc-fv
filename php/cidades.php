<?php
/**
 * Created by PhpStorm.
 * User: jeanfreitas
 * Date: 06/08/17
 * Time: 13:34
 */

//$conn = new PDO('mysql:host=localhost;dbname=luxsolar;charset=utf8', 'root', '84089554');
$conn = new PDO('mysql:host=localhost;dbname=luxsolar;charset=utf8', 'root', '');

$uf = $_GET['uf'];

$stmt = $conn->prepare('SELECT * FROM cidades WHERE uf_estado = :uf');
$stmt->bindParam(':uf', $uf);
$stmt->execute();
$result = $stmt->fetch();

foreach ($stmt as $item) {
    echo '<option value="' . $item['id'] . '">' . $item['nome'] . '</option>';
}