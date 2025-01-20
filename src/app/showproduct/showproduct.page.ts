import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonItem, IonInput, IonButton, IonBackButton, IonButtons, IonLabel, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonThumbnail } from '@ionic/angular/standalone';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.page.html',
  styleUrls: ['./showproduct.page.scss'],
  standalone: true,
  imports: [IonList, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonLabel, IonButtons, IonBackButton, IonButton, IonInput, IonItem, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, CommonModule, FormsModule]
})
export class ShowproductPage implements OnInit {

  products:any=[];

  constructor(public dataapi: DataapiService,
    private router: Router) { }



  ngOnInit() {
    this.show();
  }

  ionViewWillEnter() {
    this.show();
  }
  show(){
    this.dataapi.showproducts().subscribe({
      next:(data:any) => {
        this.products = data;
        console.log('products',data);
      },
      error: (error:any) => {
        console.log('error',error);
      }
    })
  }

  GotoAdd(){
    window.location.href = '/addproducts';
  }

  deletepro(id:any) {
    if (confirm('Are you sure you want to delete this image?')) {
      this.dataapi.deleteproducts(id).subscribe(
        (response: any) => {
          if (response.status === 'success') {
            alert('Image deleted successfully!');
            this.show(); // Reload the list of images
          } else {
            alert('Failed to delete image: ' + response.message);
          }
        },
        (error) => {
          console.error(error);
          alert('An error occurred while deleting the image.');
        }
      );
    }
  }
  editProduct(product: any) {
    this.router.navigate(['/editproducts'], {
      state: { product: product }
    });
  }

}
