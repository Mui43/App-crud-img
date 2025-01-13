<?php
    include('config.php');
    $message =[];

    try{
        if(!isset($_FILES['image'])|| $_FILES['image']['error']!= UPLOAD_ERR_OK){
            throw new Exception("รูปภาพไม่ถูกต้อง");
        }

    $image = $_FILES['image'];
    $imagePath = 'upload/'.basename($image['name']);

    if(!move_uploaded_file($image['tmp_name'], $imagePath)){
            throw new Exception("อัปโหลดรูปภาพไม่สำเร็จ");
    }

    $dataJSON = $_POST;
    $name = $dataJSON['name'];
    $price = $dataJSON['price'];
    $sql = "INSERT INTO products(name,price,image,created_at,updated_at) VALUES
    ('$name','$price','$imagePath',NOW(),NOW());";

    $qr_insert = mysqli_query($conn, $sql);
    if ($qr_insert){
        http_response_code(201);
        $message['status']="เพิ่มข้อมูลสำเร็จ";
    }else{
        throw new Exception("เพิ่มข้อมูลไม่สำเร็จ:" .mysqli_error($conn));
    }
    
    }catch (Exception $e){
        http_response_code(422);
        $message['status'] = $e->getMessage();
    }
    echo json_encode($message);

?>