<?php 
header('Content-type: application/json');

$data = [
    ['id' => 1, 'name' => 'Item 1'],
    ['id' => 2, 'name' => 'Item 2'],
    ['id' => 3, 'name' => 'Item 3']
];

echo json_encode($data);
?>