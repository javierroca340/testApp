<?php
$action = $_REQUEST["action"];

switch ($action) {
    case "list":
    $con = mysqli_connect('localhost','root','milesdavis','test');
    if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
    }
    
    $limit = $_REQUEST['limit'];
    $start = $_REQUEST['start'];
    mysqli_select_db($con,"test");
    $sql="SELECT * FROM heroes LIMIT $start, $limit";
    $result = mysqli_query($con,$sql);
    $sqlcount = "SELECT * FROM heroes";
    $resultcount = mysqli_query($con,$sqlcount);
    $nbrows = mysqli_num_rows($resultcount);    
    if($nbrows>0){
        while($rec = mysqli_fetch_object($result)){   
            $arr[] = $rec;
        }
        $jsonresult = json_encode($arr);
        echo '{"success": true,"total":'.$nbrows.',"data":'.$jsonresult.'}';
    } else {
        echo '({"total":"0", "data":""})';
    }

    mysqli_close($con);
    break;
    case "create":
    $con = mysqli_connect('localhost','root','milesdavis','test');
    if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
    }
    mysqli_select_db($con,"test");
    $sql="INSERT INTO heroes (name, email, phone) VALUES('".$_POST["name"]."', '".$_POST["email"]."','".$_POST["phone"]."')";
    $result = mysqli_query($con,$sql);
    if(!$result){
    echo '{"success": false,"msg":"foo"}';
    } else {
    echo '{"success": true,"msg":"foo"}';
    }
    mysqli_close($con);
    break;
    case "update":
    $con = mysqli_connect('localhost','root','milesdavis','test');
    if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
    }
    mysqli_select_db($con,"test");
    $sql="UPDATE heroes SET name = '".$_POST["name"]."', email = '".$_POST["email"]."', phone = '".$_POST["phone"]."' 
    WHERE id = '".$_POST["id"]."'";
    $result = mysqli_query($con,$sql);
    if(!$result){
    echo '{"success": false,"msg":"foo"}';
    } else {
    echo '{"success": true,"msg":"foo"}';
    }
    mysqli_close($con);


    break;
    default:
        echo "none";
}
?>
