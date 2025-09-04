import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface CardList {
  id: number;
  title: string;
  img: string;
  link: string;
}

@Component({
  selector: 'app-main',
  imports: [MatIcon, RouterLink],
  template: `
    <section class="w-full">
      <div class="grid grid-cols-2 gap-x-8 mb-4">
        <a routerLink="/point">
          <div class="flex items-center justify-between p-4 border-b border-b-[#eeeeee]">
            <div class="flex items-center gap-[18px]">
              <div class="w-7"><img src="/points-card.png" alt="points-card" class="w-full" /></div>
              <p class="text-lg font-medium">誠品點<span>0</span>點</p>
            </div>
            <mat-icon class="text-sm">arrow_forward_ios</mat-icon>
          </div>
        </a>
        <a routerLink="/favorite">
          <div class="flex items-center justify-between p-4 border-b border-b-[#eeeeee]">
            <div class="flex items-center gap-[18px]">
              <div class="w-7">
                <img src="/favorite-card.png" alt="points-card" class="w-full" />
              </div>
              <p class="text-lg font-medium">收藏商品<span>0</span>項</p>
            </div>
            <mat-icon class="text-sm">arrow_forward_ios</mat-icon>
          </div>
        </a>
        <a routerLink="/coupon">
          <div class="flex items-center justify-between p-4 border-b border-b-[#eeeeee]">
            <div class="flex items-center gap-[18px]">
              <div class="w-7"><img src="/coupon-card.png" alt="points-card" class="w-full" /></div>
              <p class="text-lg font-medium">優惠券<span>0</span>張</p>
            </div>
            <mat-icon class="text-sm">arrow_forward_ios</mat-icon>
          </div>
        </a>
        <a routerLink="/notification">
          <div class="flex items-center justify-between p-4 border-b border-b-[#eeeeee]">
            <div class="flex items-center gap-[18px]">
              <div class="w-7"><img src="/notify-card.png" alt="points-card" class="w-full" /></div>
              <p class="text-lg font-medium">貨到通知<span>0</span>項</p>
            </div>
            <mat-icon class="text-sm">arrow_forward_ios</mat-icon>
          </div>
        </a>
      </div>

      <div class="grid grid-cols-4 gap-2">
        @for (item of cardItems; track item.id) {
          @if (item.link === '/brand-card') {
            <a routerLink="item.link" class="relative">
              <div
                class="py-7 px-2 hover:bg-[#F7F5EF] border border-[#D8D0AF] rounded-lg flex w-[230px] aspect-[8/5] justify-center items-center"
              >
                <div class="w-1/3 ">
                  <img [src]="item.img" [alt]="item.title" class="w-full h-16 object-contain" />
                </div>
              </div>
              <h3 class="absolute bottom-8 left-[68px] text-[#917E57] text-lg font-bold">
                誠品聯名卡
              </h3>
            </a>
          } @else {
            <a routerLink="item.link">
              <div
                class="py-7 px-2 border border-[#eee] rounded-lg flex w-[230px] aspect-[8/5] justify-center items-center"
              >
                <div class="w-1/3">
                  <img [src]="item.img" [alt]="item.title" class="" />
                </div>
              </div>
            </a>
          }
        }
      </div>
    </section>
  `,
  styles: ``,
})
export class Main {
  cardItems: CardList[] = [
    { id: 1, title: '我的訂單', img: '/order-card.png', link: '/order' },
    { id: 2, title: '電子書櫃', img: '/e-book-card.png', link: '/e-book' },
    { id: 3, title: '我的帳戶', img: '/account.png', link: '/account' },
    { id: 4, title: '會員資料', img: '/member-data-card.png', link: '/member-data' },
    { id: 5, title: '電子報訂閱', img: '/newspaper-card.png', link: '/newspaper' },
    { id: 6, title: '會員權益', img: '/vip.png', link: '/vip' },
    { id: 7, title: '客服專區', img: '/service-card.png', link: '/service' },
    { id: 8, title: '誠品聯名卡', img: '/brand-card.png', link: '/brand-card' },
  ];
}
