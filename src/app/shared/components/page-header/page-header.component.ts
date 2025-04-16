import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="page-header">
      <div class="container">
        <h1>{{title}}</h1>
        <p *ngIf="subtitle">{{subtitle}}</p>
      </div>
    </header>
  `,
  styles: [`
    @import '../../styles/shared';
    
    .page-header {
      @include page-header;
    }
  `]
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() subtitle?: string;
}
