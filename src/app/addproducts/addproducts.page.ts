import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataapiService } from '../dataapi.service';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonInput, IonCard, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.page.html',
  styleUrls: ['./addproducts.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonCard, IonInput, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddproductsPage implements OnInit {

  txtname:any;
  txtprice:any;
  selectFile:File | null = null;

  constructor(
    public dataapi: DataapiService,
  ) { }

  onfilechange(event: any) {
    const file = event.target.files[0];
    if(file){
      this.selectFile = file;
    }
  }

  ngOnInit() {
  }

  addproduct(){
    const formData = new FormData();
    formData.append('name', this.txtname);
    formData.append('price', this.txtprice);
    if(this.selectFile){
      formData.append('image', this.selectFile, this.selectFile.name);
    }
    this.dataapi.addproducts(formData).subscribe(res => {
      console.log(res);
      this.txtname = ""
      this.txtprice = ""
      this.selectFile = null;
    });
  }
}
