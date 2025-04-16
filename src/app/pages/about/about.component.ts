import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Stat {
  number: string;
  caption: string;
}

interface Value {
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  tagline = "From Power BI dashboards to WordPress websites — we turn ideas into digital tools.";

  companyOverview = `WebSink is a dynamic software solutions provider specializing in transformative digital experiences. 
  We combine cutting-edge technology with creative problem-solving to deliver powerful software solutions 
  that drive business growth and efficiency.`;

  services = [
    'Power BI Dashboards',
    'Tableau Data Analytics', 
    'WordPress Development',
    'Custom Software Solutions'
  ];

  mission = "To empower businesses through smart software and intuitive data solutions — helping clients transform their ideas into impactful technology.";

  vision = "To be a trusted partner in digital transformation by delivering high-quality, client-focused solutions in data analytics and software development.";

  values: Value[] = [
    {
      title: 'Customer-Centric Approach',
      description: 'We prioritize our clients\' unique needs and goals in every project.'
    },
    {
      title: 'Innovation-Driven Development',
      description: 'Continuously exploring new technologies and creative solutions.'
    },
    {
      title: 'Quality and Transparency',
      description: 'Delivering high-standard work with clear communication.'
    },
    {
      title: 'Collaborative Growth',
      description: 'Growing together through partnership and shared success.'
    }
  ];

  teamHighlight = `Our diverse team includes data engineers, designers, WordPress experts, 
  and full-stack developers who bring a wealth of skills and perspectives to every project.`;

  stats: Stat[] = [
    {
      number: '3,500+',
      caption: 'Customers'
    },
    {
      number: '20+',
      caption: 'Years of Experience'
    },
    {
      number: '600M',
      caption: 'Invoices Created'
    },
    {
      number: '2.3B',
      caption: 'Reports Viewed'
    }
  ];

  ctaHeading = "Let's Build Something Great Together";
}
