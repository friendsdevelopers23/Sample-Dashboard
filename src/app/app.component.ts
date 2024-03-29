import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
    selector: 'students-details-root',
    standalone: true,
    imports: [CommonModule, RouterModule,RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'students-details';
}
