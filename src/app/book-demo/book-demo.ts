import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],  templateUrl: './book-demo.html',
  styleUrl: './book-demo.css',
})
export class BookDemo {

   formData = {
    name: '',
    title: '',
    institution: '',
    email: '',
    useCase: ''
  };

  isSubmitting = false;
  isSubmitted = false;

  useCases = [
    'Member/Customer Experience',
    'Cost Reduction',
    'Compliance & Security',
    'Lending Automation',
    'Fraud Detection',
    'Other'
  ];

  get isFormValid(): boolean {
    return !!(this.formData.name && this.formData.email && this.formData.institution && this.formData.useCase);
  }

  handleSubmit(): void {
    if (!this.isFormValid) {
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      this.isSubmitted = true;

      setTimeout(() => {
        this.isSubmitted = false;
        this.formData = {
          name: '',
          title: '',
          institution: '',
          email: '',
          useCase: ''
        };
      }, 3000);
    }, 1500);
  }
}
