import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent],
  template: `
    <div class="services-page">
      <app-page-header
        title="Our Services"
        subtitle="Comprehensive software solutions tailored to your business needs">
      </app-page-header>

      <section class="services-grid">
        <div class="container">
          <div class="grid">
            <div class="service-card" *ngFor="let service of services">
              <div class="service-icon">
                <i [class]="service.icon"></i>
              </div>
              <h3>{{service.title}}</h3>
              <p>{{service.description}}</p>
              <ul class="features">
                <li *ngFor="let feature of service.features">
                  <i class="fas fa-check"></i>
                  {{feature}}
                </li>
              </ul>
              <div class="benefits">
                <h4>Key Benefits</h4>
                <ul>
                  <li *ngFor="let benefit of service.benefits">
                    <i class="fas fa-arrow-right"></i>
                    {{benefit}}
                  </li>
                </ul>
              </div>
              <a [routerLink]="['/services', service.id]" class="btn btn-primary">
                Learn More
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="cta">
        <div class="container">
          <div class="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Let's discuss how our services can help transform your business</p>
            <a routerLink="/contact" class="btn btn-primary">Contact Us Today</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      icon: 'fas fa-code',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Content Management Systems'
      ],
      benefits: [
        'Improved User Experience',
        'Increased Conversion Rates',
        'Better Performance',
        'Scalable Architecture'
      ]
    },
    {
      id: 'mobile-apps',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications',
      icon: 'fas fa-mobile-alt',
      features: [
        'iOS & Android Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'App Store Optimization'
      ],
      benefits: [
        'Wider Market Reach',
        'Better User Engagement',
        'Offline Functionality',
        'Push Notifications'
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services',
      icon: 'fas fa-cloud',
      features: [
        'Cloud Migration',
        'DevOps Services',
        'Serverless Architecture',
        'Cloud Security'
      ],
      benefits: [
        'Reduced Costs',
        'Improved Scalability',
        'Better Reliability',
        'Enhanced Security'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights',
      icon: 'fas fa-chart-line',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics',
        'Real-time Analytics'
      ],
      benefits: [
        'Better Decision Making',
        'Increased Efficiency',
        'Cost Optimization',
        'Competitive Advantage'
      ]
    }
  ];
}
