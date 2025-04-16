import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  services: Service[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications tailored to your business needs',
      icon: 'fas fa-globe'
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: 'fas fa-mobile-alt'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment',
      icon: 'fas fa-cloud'
    }
  ];

  features: Feature[] = [
    {
      title: 'Modern Technology',
      description: 'Using the latest frameworks and tools',
      icon: 'fas fa-code'
    },
    {
      title: 'Responsive Design',
      description: 'Optimized for all devices and screens',
      icon: 'fas fa-desktop'
    },
    {
      title: 'Fast Performance',
      description: 'Optimized code for maximum speed',
      icon: 'fas fa-bolt'
    }
  ];

  featuredProjects: Project[] = [
    {
      id: 'e-commerce',
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping platform with mobile apps',
      image: 'https://picsum.photos/800/450?random=1',
      tags: ['Web', 'Mobile', 'E-commerce']
    },
    {
      id: 'crm-system',
      title: 'CRM System',
      description: 'Customer relationship management system for sales teams',
      image: 'https://picsum.photos/800/450?random=2',
      tags: ['Web', 'CRM', 'Enterprise']
    },
    {
      id: 'booking-app',
      title: 'Booking Application',
      description: 'Online booking and reservation system',
      image: 'https://picsum.photos/800/450?random=3',
      tags: ['Web', 'Mobile', 'Booking']
    }
  ];

  stats: { number: string; caption: string }[] = [
    {
      number: '3,500+',
      caption: 'Customers'
    },
    {
      number: '2+',
      caption: 'Years of Experience'
    },
    {
      number: '600',
      caption: 'Dashboards Created'
    },
    {
      number: '1000+',
      caption: 'WordPress Projects'
    }
  ];
}
