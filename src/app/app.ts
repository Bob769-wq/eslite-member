import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Crumb } from './crumb/crumb';
import { LogSection } from './log-section/log-section';
import { Main } from './main/main';
import { PointsBanner } from './points-banner/points-banner';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Crumb, LogSection, Main, RouterLink, PointsBanner, Footer],
  template: `
    <div class="max-w-[1272px] mx-auto tracking-wider">
      <app-header />
      <app-crumb />
      <div class="flex gap-4">
        <app-log-section class="w-1/4" />
        <app-main class="w-3/4" />
      </div>
      <app-points-banner />
    </div>
    <app-footer />
  `,
  styles: ``,
})
export class App {}
