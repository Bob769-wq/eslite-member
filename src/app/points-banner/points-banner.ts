import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-points-banner',
  imports: [RouterLink],
  template: `
    <div class="hidden lg:block my-6">
      <a routerLink="member-day">
        <img src="/points-banner.jpeg" alt="points-banner" class="w-full" />
      </a>
    </div>
  `,
  styles: ``,
})
export class PointsBanner {}
