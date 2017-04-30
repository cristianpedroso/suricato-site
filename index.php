<?php


$request = $_SERVER['REQUEST_URI'];
$requestArray = explode('/',$request);
$requestArrayCount = count($requestArray);
$content = $requestArray[1];


for($i=2; $i < $requestArrayCount;$i+=2){
    $$requestArray[$i] = $requestArray[$i+1];
}


// start layout

if($content != 'tips'){
    include 'header.php';
}
switch($content){

    case 'base-de-conhecimento':
        include 'base-de-conhecimento.php';
        break;
    case 'tips':
        include 'backend/tips.php';
        break;
    default:
        include 'home.php';
        break;
}

if($content != 'tips'){
    include 'footer.php';
}

?>