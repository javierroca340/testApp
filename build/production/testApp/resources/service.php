<?php
$action = $_REQUEST["action"];

switch ($action) {
    case "list":
    $con = mysqli_connect('localhost','root','milesdavis','test');
    if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_select_db($con,"ajax_demo");
    $sql="SELECT * FROM heroes";
    $result = mysqli_query($con,$sql);
 $nbrows = mysqli_num_rows($result);    
    if($nbrows>0){
        while($rec = mysqli_fetch_object($result)){   
            $arr[] = $rec;
        }
        $jsonresult = json_encode($arr);
        echo '{"success": true,"total":"'.$nbrows.'","data":'.$jsonresult.'}';
    } else {
        echo '({"total":"0", "data":""})';
    }

    mysqli_close($con);
        break;
    case "edit":
        echo "edit";
        break;
    case "delete":
        echo "delete";
        break;
    default:
        echo "none";
}
?>
