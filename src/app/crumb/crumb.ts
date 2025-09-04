import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crumb',
  imports: [MatIcon, RouterLink],
  template: `
    <section class="flex py-5">
      <div class="text-[#666666]"><a routerLink="/home">首頁</a></div>
      <mat-icon class="text-sm text-[#B0B0B0] ml-3">arrow_forward_ios</mat-icon>
      <div class="text-[#917E57] font-medium"><a routerLink="/member">會員中心</a></div>
    </section>
  `,
  styles: ``,
})
export class Crumb {}
