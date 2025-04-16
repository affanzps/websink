import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactMethod {
  platform: string;
  icon: string;
  value: string;
  type: 'phone' | 'whatsapp' | 'linkedin';
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  formSubmitted = false;
  
  // Contact Page Content
  pageTitle = "Let's Connect";
  pageSubtitle = "Have a project in mind or want to learn more about our services? We'd love to hear from you.";
  
  // Contact Methods
  contactMethods: ContactMethod[] = [
    {
      platform: 'Phone',
      icon: 'fas fa-phone',
      value: "+44 7723 799353",
      type: 'phone'
    },
    {
      platform: 'WhatsApp',
      icon: 'fab fa-whatsapp',
      value: "447723799353",
      type: 'whatsapp'
    },
    {
      platform: 'LinkedIn',
      icon: 'fab fa-linkedin',
      value: 'https://www.linkedin.com/company/websink',
      type: 'linkedin'
    }
  ];
  
  // CTA Section
  ctaText = "Want to collaborate or have questions? Let's talk.";
  ctaButtonText = "Connect on WhatsApp";
  ctaButtonUrl = `https://wa.me/${this.contactMethods.find(m => m.type === 'whatsapp')?.value}`;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    
  }

  initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required, 
        Validators.minLength(2),
        Validators.maxLength(50)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]],
      subject: ['', [
        Validators.maxLength(100)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      
      this.formSubmitted = true;
      this.contactForm.reset();

      setTimeout(() => {
        this.formSubmitted = false;
      }, 5000);
    } else {
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  openWhatsApp(): void {
    const whatsappMethod = this.contactMethods.find(m => m.type === 'whatsapp');
    if (whatsappMethod) {
      window.open(`https://wa.me/${whatsappMethod.value}`, '_blank');
    }
  }

  openLinkedIn(): void {
    const linkedinMethod = this.contactMethods.find(m => m.type === 'linkedin');
    if (linkedinMethod) {
      window.open(linkedinMethod.value, '_blank');
    }
  }

  get f() { return this.contactForm.controls; }
}
