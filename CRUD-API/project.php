<?php
    include('config.php');
    $table = "CREATE TABLE products (
    id INT(6) AUTO_INCREMENT PRIMARY KEY COMMENT'รหัสสินค้า',
    name VARCHAR(255) COMMENT'ชื่อสินค้า',
    price DECIMAL(10) COMMENT'ราคา',
    image VARCHAR(100) COMMENT'รูปภาพ',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT'วันที่สร้าง',
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT'วันที่แก้ไข'
    );";

    if ($conn->query($table) === TRUE) {
        echo "Table products created successfully";
    } else {
        echo "Error creating table: ". $conn->error;
    }

    $conn->close();
?>