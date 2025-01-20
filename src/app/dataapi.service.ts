import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    private http: HttpClient
  ) { }

  addproducts(formData:any) {
    console.log("ข้อมูลที่ส่งไปยัง api",formData);
    return this.http.post('http://127.0.0.1/2-3/CRUD-API/upload.php', formData);
  }

  showproducts() {
    return this.http.get('http://127.0.0.1/2-3/CRUD-API/read.php');
  }

  deleteproducts(id:number) {
    return this.http.delete('http://127.0.0.1/2-3/CRUD-API/delete.php?id='+id);
  }

  updateproducts(formData:any) {
    console.log("ข้อมูลที่ส่งไปยัง api",formData);
    return this.http.post(`http://127.0.0.1/2-3/CRUD-API/edit.php`, formData); }

}

