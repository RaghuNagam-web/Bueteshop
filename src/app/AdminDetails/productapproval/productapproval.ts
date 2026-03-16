import { Component, OnInit, signal } from '@angular/core';
import { Productservice } from '../../ServiceComponent/productservice';
import { NgStyle, NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-productapproval',
  imports: [NgStyle, NgIf,CommonModule],
  templateUrl: './productapproval.html',
  styleUrl: './productapproval.css'
})
export class Productapproval implements OnInit {

  pendingproducts: any[] = [];
  approvedproducts: any[] = [];

  isloading = signal(false);
  isApprove: { [key: number]: boolean } = {};
  product: any;

  constructor(private productservice: Productservice) {}

  ngOnInit(): void {
    this.refresh();
  }

  // Fetch pending products
  pendingproduct() {
    this.isloading.set(true);
    this.productservice.getpendingproducts().subscribe({
      next: (res: any) => {
        console.log('pending products', res);
        this.pendingproducts = res.filter((product: any) => !product.isApproved); // Filter pending products
        this.approvedproducts = res.filter((product: any) => product.isApproved); // Filter approved products
        this.isloading.set(false);
      },
      error: (err: any) => {
        console.log('Error fetching pending products:', err);
        this.isloading.set(false);
      }
    });
  }

  // Approve a product
  approveproducts(product: any) {
    this.isApprove[product.id] = true;  // Disable the button while approval is in progress
    this.isloading.set(true);

    // Create payload for approving product
    const payload = {
      productId: product.id,
      isApproved: true,
      rejectReason: "No reason",
      advisedChanges: "No changes"
    };

    this.productservice.postapproveproducts(payload).subscribe({
      next: (res: any) => {
        console.log('Product approved:', res);
        alert(res || 'Product approved successfully!');

        // Move the product to approved list and remove from pending list
        this.moveProductToApproved(product.id);
        this.isApprove[product.id] = false; // Re-enable the button
        this.isloading.set(false);
      },
      error: (err: any) => {
        console.log('Error approving product:', err);
        delete this.isApprove[product.id];  // Re-enable the button if error
        this.isloading.set(false);
      }
    });
  }

  // Move product from pending to approved
  moveProductToApproved(productId: number) {
    const approved = this.pendingproducts.find(p => p.id === productId);
    if (approved) {
      this.approvedproducts.unshift({
        id: approved.id,
        productName: approved.productName,
      });
      // Remove from pending list
      this.pendingproducts = this.pendingproducts.filter(p => p.id !== productId);
    }
  }

  // Refresh method to re-fetch data
  refresh() {
    this.pendingproduct();
  }

  // Track by product ID to improve performance with ngFor
  trackById(index: number, item: any): number {
    return item.id;
  }
}
