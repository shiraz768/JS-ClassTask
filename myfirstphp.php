<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    table{
        border:1px solid orange;
        border-collapse:collapse;
        text-align:center;
        width:200px;
        height:500px;
        
    }
   
  
</style>
<body>
    <table >
    <?php
    for($i = 1;$i <=10;$i++){
        
        if($i % 2 == 0 ){?>
        <tr  style="background-color:#fff983;color:black"><td>5</td><td>X</td><td><?php echo $i?></td><td>=</td><td><?php echo 5 * $i ?></td></tr><?php
        } 
         else{ ?>
        <tr  style="background-color:#ff8933;color:white"><td>5</td><td>X</td><td><?php echo $i?></td><td>=</td><td><?php echo 5 * $i ?></td></tr><?php
    }
    }
    ?>
    
    </table>
</body>
</html>