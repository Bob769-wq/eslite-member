import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

interface NavList {
  id: number;
  title: string;
  link: string;
  children?: SubMenu[];
}

interface SubMenu {
  id: number;
  title1: string;
  title2?: string;
  title3?: string;
  link: string;
  children?: SubMenu[];
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, ReactiveFormsModule],
  template: `
    <div class="hidden overflow-hidden rounded-md lg:block mb-5">
      <a routerLink="member-day">
        <img src="/banner.jpg" alt="member-day" class="w-full" />
      </a>
    </div>
    <div class="flex justify-between items-center mb-5 h-[30px]">
      <ul class="flex font-medium">
        <li
          class="my-1 pr-3 border-r border-r-[#cccccc] text-[#454545] hover:underline cursor-pointer"
        >
          <a routerLink="/home">回首頁</a>
        </li>
        <li class="my-1 pl-3 text-[#454545] hover:underline cursor-pointer">
          <a routerLink="/download">APP下載</a>
        </li>
      </ul>
      <ul class="flex">
        @for (item of navItems; track item.id) {
          @if (item.link === '/cart') {
            <li class="font-medium my-1 px-3 text-[#454545] hover:text-[#917E57] cursor-pointer">
              <a [routerLink]="item.link"
                >{{ item.title }}(<span class="text-[#917E57]">0</span>)</a
              >
            </li>
          } @else {
            <li
              class="font-medium my-1 px-3 border-r border-r-[#cccccc] text-[#454545] hover:text-[#917E57] cursor-pointer"
            >
              <a [routerLink]="item.link">{{ item.title }}</a>
            </li>
          }
        }
      </ul>
    </div>

    <div class="flex items-center justify-between gap-8 w-full">
      <div class="max-w-[250px] flex-1">
        <a routerLink="/home"><img src="/logo.png" alt="logo" /></a>
      </div>
      <div class="max-w-[710px] flex-1">
        <form [formGroup]="form" class="flex w-full pb-[10px]">
          <input
            class="pl-4 py-[6px] w-full pr-3 border border-r-0 border-[#ccc] text-[#999] rounded-l-lg focus-within:outline-none"
            type="text"
            placeholder="請輸入關鍵字"
            formControlName="searchControl"
          />
          <button type="submit" class="bg-[#917E57] py-[6px] px-4 rounded-r-lg">
            <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
              <path
                fill="#ffffff"
                d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
              />
            </svg>
          </button>
        </form>
        <div class="w-full">
          <ul class="flex items-center overflow-hidden w-full text-[13px]">
            @for (item of miniNav; track item.id) {
              @if (item.link === '/start') {
                <li class="text-[#454545] hover:text-[#917E57] my-1 pr-[10px]">
                  <a [routerLink]="item.link">{{ item.title }}</a>
                </li>
              } @else {
                <li
                  class="text-[#454545] hover:text-[#917E57] hover:underline my-1 px-[10px] border-l border-l-[#cccccc]"
                >
                  <a [routerLink]="item.link">{{ item.title }}</a>
                </li>
              }
            }
          </ul>
        </div>
      </div>
      <div class="max-w-[250px] flex-1">
        <a routerLink="/coupon"><img src="/coupon.png" alt="coupon" /></a>
      </div>
    </div>

    <div class="w-full py-[10px]"></div>

    <div class="w-full">
      <div class="h-8 px-2 text-[13px] rounded-lg bg-[#f8f8f8] inline-flex">
        <a routerLink="/scam" class="flex items-center text-[#917e57] hover:underline">
          <img src="/scam.svg" width="24" height="24" alt="防詐" />
          <p>防詐3要訣：不聽信、不操作、掛斷電話</p>
          <span class="ml-1 text-[#917e57]">(詳)</span>
        </a>
      </div>
    </div>

    <div class="h-4"></div>

    <ul class="flex text-base mb-4">
      @for (item of bigNav; track item.id) {
        @if (item.link === '/types') {
          <li class="relative group">
            <a [routerLink]="item.link" class="px-4 py-2"
              >{{ item.title }}
              <div
                class="absolute top-full h-1 w-0 bg-[#212224] group-hover:w-full transition-all duration-300"
              ></div>
            </a>
            <div
              class="absolute top-[115%] border border-[#917e57] py-6 w-[212px] bg-white hidden group-hover:block"
            >
              <div class="flex flex-col h-[476px] justify-evenly">
                @for (sub of item.children; track sub.id) {
                  @if (sub.link === '/e-book') {
                    <div
                      class="flex h-7 px-4 py-1 text-sm font-bold hover:text-[#917E57] hover:bg-[#F7F5EF] text-[#454545]"
                    >
                      <a [routerLink]="sub.link" class="hover:underline">{{ sub.title1 }}</a>
                      <span>・</span>
                      <a [routerLink]="sub.link" class="hover:underline">{{ sub.title2 }}</a>
                      <span class="px-1 h-5 rounded bg-[#FFF3E0] text-[#F39B13] ml-2">New</span>
                    </div>
                  } @else {
                    <div
                      class="flex h-7 px-4 py-1 text-sm font-bold hover:text-[#917E57] hover:bg-[#F7F5EF] text-[#454545]"
                    >
                      <a [routerLink]="sub.link" class="hover:underline">{{ sub.title1 }}</a>
                      <span>・</span>
                      <a [routerLink]="sub.link" class="hover:underline">{{ sub.title2 }}</a>
                      <span>・</span>
                      <a [routerLink]="sub.link" class="hover:underline">{{ sub.title3 }}</a>
                    </div>
                  }
                }
              </div>
            </div>
          </li>
        } @else {
          <li class="relative group">
            <a [routerLink]="item.link" class="px-4 py-2 "
              >{{ item.title }}
              <div
                class="absolute top-full h-1 w-0 bg-[#212224]  group-hover:w-full transition-all duration-300"
              ></div>
            </a>
            <div class="absolute top-1 left-0 h-4 w-[1px] bg-[#ccc] "></div>
          </li>
        }
      }
    </ul>
  `,
  styles: ``,
})
export class Header {
  fb = inject(NonNullableFormBuilder);
  form = this.fb.group({
    searchControl: this.fb.control(''),
  });

  navItems: NavList[] = [
    {
      id: 1,
      title: '登入',
      link: '/log-in',
    },
    {
      id: 2,
      title: '註冊',
      link: '/sign-in',
    },
    {
      id: 3,
      title: '會員中心',
      link: '/member',
    },
    {
      id: 4,
      title: '我的訂單',
      link: '/order',
    },
    {
      id: 5,
      title: '收藏商品',
      link: '/like',
    },
    {
      id: 6,
      title: '優惠券',
      link: '/coupon',
    },
    {
      id: 7,
      title: '誠品點',
      link: '/location',
    },
    {
      id: 8,
      title: '購物車',
      link: '/cart',
    },
  ];
  bigNav: NavList[] = [
    {
      id: 1,
      title: '全站分類',
      link: '/types',
      children: [
        {
          id: 1,
          title1: '電子書',
          title2: '新手上路',
          link: '/e-book',
        },
        {
          id: 2,
          title1: '中文書',
          title2: '主打書',
          title3: '強檔預購',
          link: '/book',
        },
        {
          id: 3,
          title1: '外文書',
          title2: '日文書',
          title3: '塔羅館',
          link: '/book',
        },
        {
          id: 4,
          title1: '雜誌',
          title2: '影音',
          title3: '影音預購',
          link: '/book',
        },
        {
          id: 5,
          title1: '童書',
          title2: '外文童書',
          title3: '編輯推薦',
          link: '/book',
        },
        {
          id: 6,
          title1: '親子用品',
          title2: 'Jellycat',
          title3: '開學',
          link: '/book',
        },
        {
          id: 7,
          title1: '文具潮藝',
          title2: '手帳',
          title3: '理想文具',
          link: '/book',
        },
        {
          id: 8,
          title1: '服飾鞋包',
          title2: '行李箱',
          title3: '精品',
          link: '/book',
        },
        {
          id: 9,
          title1: '美妝保養',
          title2: '香水',
          title3: '臉部保養',
          link: '/book',
        },
        {
          id: 10,
          title1: '休閒戶外',
          title2: '露營',
          title3: '運動瑜伽',
          link: '/book',
        },
        {
          id: 11,
          title1: '生活家居',
          title2: '日用品',
          title3: '餐廚',
          link: '/book',
        },
        {
          id: 12,
          title1: '食品',
          title2: '保健',
          title3: '醫護輔具',
          link: '/book',
        },
        {
          id: 13,
          title1: '3C通訊',
          title2: '家電',
          title3: '相機攝影',
          link: '/book',
        },
      ],
    },
    {
      id: 2,
      title: '品牌旗艦館',
      link: '/brand',
    },
    {
      id: 3,
      title: '排行榜',
      link: '/list',
    },
    {
      id: 4,
      title: '誠品選書',
      link: '/select',
    },
    {
      id: 5,
      title: '誠品獨家',
      link: '/special',
    },
    {
      id: 6,
      title: '誠品畫廊',
      link: '/gallery',
    },
    {
      id: 7,
      title: '活動專區',
      link: '/district',
    },
    {
      id: 8,
      title: 'expo',
      link: '/expo',
    },
    {
      id: 9,
      title: '誠品聯名卡',
      link: '/card',
    },
  ];
  miniNav: NavList[] = [
    { id: 1, title: '會員日開跑！', link: '/start' },
    { id: 2, title: '1元券限量搶', link: '/limited' },
    { id: 3, title: 'kobo年度優惠', link: '/kobo' },
    { id: 4, title: 'ほぼ日手帳', link: '/hobo' },
    { id: 5, title: '母嬰護理2件折扣', link: '/infant' },
    { id: 6, title: '哈利波特機關書', link: '/hp' },
  ];
}
