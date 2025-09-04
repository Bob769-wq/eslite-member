import { Component } from '@angular/core';

@Component({
  selector: 'app-log-section',
  imports: [],
  template: `
    <section class="w-full h-full pr-[15px]">
      <div
        class="flex flex-col items-center justify-center bg-[url('/rectangle.webp')] h-full w-full"
      >
        <div class="text-center text-xl font-bold mb-2 lg:mb-12">
          <p>您好，請先登入</p>
          <p>若您尚未成為會員，</p>
          <p>請先註冊</p>
        </div>
        <div class="flex flex-col items-center justify-center font-medium">
          <a class="mb-4 p-[10px] w-[200px] text-center bg-[#8A6827] text-white rounded-md"
            >會員登入</a
          >
          <a
            class="p-[10px] w-[200px] text-center bg-white border text-[#8A6827] border-[#8A6827] rounded-md"
            >註冊會員</a
          >
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class LogSection {}
