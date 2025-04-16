import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, NgClass, NgIf, SafePipe],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  selectedTool: string = 'all';
  previewActive: boolean = false;
  currentPreviewUrl: string | null = null;

  constructor() {}

  filterProjects(tool: string): void {
    this.selectedTool = tool;
  }

  isProjectVisible(tool: string): boolean {
    return this.selectedTool === 'all' || this.selectedTool === tool;
  }

  openPreview(projectId: string): void {
    // Replace with actual dashboard URLs
    const dashboardUrls: { [key: string]: string } = {
      'retail-sales': 'https://app.powerbi.com/view?r=eyJrIjoiOTdjZWNmOGQtOWUxMi00ZDBjLTg0MjAtMzM4MGFmMGNhYzEyIiwidCI6ImU2M2Q5NzFmLTQxNzMtNGRiYi1hZGQ0LTRkY2I2NzVhNDI4YSJ9',
      'ecommerce': 'https://app.powerbi.com/view?r=eyJrIjoiNjg0NDFmZTAtNmE4MC00OTA0LWFhYTItMjZjYmMzOWQ5ZmEwIiwidCI6ImU2M2Q5NzFmLTQxNzMtNGRiYi1hZGQ0LTRkY2I2NzVhNDI4YSJ9',
      'tableau-collection': 'https://public.tableau.com/app/profile/muhammad.faizan3141/viz/HRAttritionAnalytics_17157953187700/HRAnalyticsDashboard'
    };

    this.currentPreviewUrl = dashboardUrls[projectId] || null;
    this.previewActive = true;
  }

  closePreview(): void {
    this.previewActive = false;
    this.currentPreviewUrl = null;
  }

  downloadCaseStudy(projectId: string): void {
    // Replace with actual case study PDF URLs
    const caseStudyUrls: { [key: string]: string } = {
      'retail-sales': '/assets/case-studies/retail-sales-case-study.pdf',
      'ecommerce': '/assets/case-studies/ecommerce-case-study.pdf',
      'tableau-collection': '/assets/case-studies/tableau-collection-case-study.pdf'
    };

    const url = caseStudyUrls[projectId];
    if (url) {
      window.open(url, '_blank');
    }
  }
}
