import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface FooterList {
  id: number;
  title: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <section class="bg-[#EEEEEE] pt-2 pb-6">
      <div class="max-w-[1272px] mx-auto tracking-wider flex justify-between">
        <div class="px-4">
          <h3 class="text-lg font-medium mt-2">關於誠品</h3>
          <ul class="mt-2">
            @for (item of About; track item.id) {
              <li class="hover:underline">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
          <h3 class="text-lg font-medium mt-4">合作洽談</h3>
          <ul class="mt-2">
            @for (item of Cooperate; track item.id) {
              <li class="hover:underline">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
        <div class="px-4">
          <h3 class="text-lg font-medium mt-2">誠品線上</h3>
          <ul class="mt-2">
            @for (item of Online; track item.id) {
              <li class="hover:underline">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
        <div class="px-4">
          <h3 class="text-lg font-medium mt-2">誠品通路</h3>
          <ul class="mt-2">
            @for (item of TonLu; track item.id) {
              <li class="hover:underline">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
        <div class="px-4">
          <h3 class="text-lg font-medium mt-2">營業據點</h3>
          <ul class="mt-2">
            @for (item of Gpoint; track item.id) {
              <li class="hover:underline">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
        </div>
        <div class="px-4">
          <h3 class="text-lg font-medium mt-2">訂閱誠品線上電子報</h3>
          <ul class="mt-2">
            @for (item of subscribe; track item.id) {
              <li class="hover:underline">
                <a [routerLink]="item.link">{{ item.title }}</a>
              </li>
            }
          </ul>
          <h3 class="text-lg font-medium mt-16">關注誠品</h3>
          <div class="flex gap-3">
            <a routerLink="footer"
              ><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#666666"
                  d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"
                /></svg
            ></a>
            <a routerLink="footer"
              ><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#666666"
                  d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"
                /></svg
            ></a>
            <a routerLink="footer"
              ><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
                <path
                  fill="#666666"
                  d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"
                /></svg
            ></a>
          </div>
        </div>
        <div class="px-4">
          <h3 class="text-lg font-medium mt-2">誠品APP</h3>
          <div class="flex flex-col gap-2">
            <a routerLink="/footer" class="max-w-[140px]">
              <img src="/app-store-footer.webp" alt="app" />
            </a>
            <a routerLink="/footer" class="max-w-[140px]">
              <img src="/google-play-footer.webp" alt="google" />
            </a>
          </div>
          <div class="mt-8 hover:underline">
            <a routerLink="/footer">
              <div class="flex items-end gap-4">
                <img src="/qrcode-footer.webp" class="max-w-[70px]" alt="footer" />
                <div class="">
                  <p>內政部警政署<br />165全民防騙網</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="max-w-[1272px] mx-auto text-center text-[#666666] text-xs mt-4">
        <p>
          誠品線上eslite.com - powered by 誠品生活 / 誠品書店 / 誠品物流 | 誠品生活股份有限公司
          (eslite Spectrum Corporation)
        </p>
        <p>
          統一編號：27952966 | 台灣台北市信義區松德路204號B1
          服務電話：0800-666-798／+886-2-8789-8921
        </p>
        <p>
          本網站已依台灣網站內容分級規定處理｜建議使用瀏覽器版本：Google Chrome版本60以上 /
          Firefox版本48以上 / Safari 版本11以上
        </p>
      </div>

      <div
        class="max-w-[1272px] mx-auto flex justify-center items-center gap-8 text-[#46494C] text-xs mt-10 mb-12"
      >
        <img src="/passkey-footer.webp" alt="pass" class="h-9" />

        <div class="flex gap-2">
          <img src="/iso-footer.webp" alt="iso" class="h-9" />
          <p>
            資通安全管理系統榮獲
            <br />
            ISO/IEC 27001認證
          </p>
        </div>
        <div class="flex gap-2">
          <img src="/app-l3-footer.webp" alt="" class="h-9" />
          <p>
            行動應用APP基本資安
            <br />
            標章最高L3等級認證
          </p>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class Footer {
  About: FooterList[] = [
    { id: 1, title: '企業理念', link: '/footer' },
    { id: 2, title: '創辦人故事', link: '/footer' },
    { id: 3, title: '經營內容', link: '/footer' },
    { id: 4, title: '發展歷程', link: '/footer' },
    { id: 5, title: '得獎事蹟', link: '/footer' },
  ];
  Cooperate: FooterList[] = [
    { id: 1, title: '合作業務範圍', link: '/footer' },
    { id: 2, title: '團購業務', link: '/footer' },
  ];
  Online: FooterList[] = [
    { id: 1, title: '常見問題', link: '/footer' },
    { id: 2, title: '聯絡我們', link: '/footer' },
    { id: 3, title: '網站使用條款', link: '/footer' },
    { id: 4, title: '隱私權政策', link: '/footer' },
    { id: 5, title: '個人資料保護法', link: '/footer' },
  ];
  TonLu: FooterList[] = [
    { id: 1, title: '誠品官網', link: '/footer' },
    { id: 2, title: '迷誠品', link: '/footer' },
    { id: 3, title: '誠品電影院', link: '/footer' },
    { id: 4, title: '誠品畫廊', link: '/footer' },
    { id: 5, title: '誠品展演', link: '/footer' },
    { id: 6, title: '誠品行旅', link: '/footer' },
    { id: 7, title: '誠品酒窖', link: '/footer' },
    { id: 8, title: '誠品文化藝術基金會', link: '/footer' },
  ];
  Gpoint: FooterList[] = [
    { id: 1, title: '台灣北部', link: '/footer' },
    { id: 2, title: '台灣中部', link: '/footer' },
    { id: 3, title: '台灣南部', link: '/footer' },
    { id: 4, title: '台灣東部', link: '/footer' },
    { id: 5, title: '香港', link: '/footer' },
    { id: 6, title: '蘇州', link: '/footer' },
    { id: 7, title: '東京', link: '/footer' },
    { id: 8, title: '吉隆坡', link: '/footer' },
  ];
  subscribe: FooterList[] = [
    { id: 1, title: '誠品線上電子報', link: '/footer' },
    { id: 2, title: '誠品人獨享特刊', link: '/footer' },
    { id: 3, title: '全台誠品門市活動/優惠', link: '/footer' },
  ];
}
