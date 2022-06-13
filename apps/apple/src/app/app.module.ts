import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgtCanvasModule} from '@angular-three/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import {
  NgtPrimitiveModule,
} from '@angular-three/core/primitive';

import {
  NgtAmbientLightModule,
  NgtSpotLightModule,
  NgtPointLightModule,
} from '@angular-three/core/lights';

import {
  NgtSobaOrbitControlsModule,
} from '@angular-three/soba/controls';

import {
  NgtPointLightHelperModule,
  NgtSpotLightHelperModule
} from '@angular-three/core/helpers';


import {AppComponent} from './app.component';

gsap.registerPlugin(ScrollTrigger);


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgtCanvasModule,
    NgtCanvasModule,
    NgtAmbientLightModule,
    NgtSpotLightModule,
    NgtPointLightModule,
    NgtSobaOrbitControlsModule,
    NgtPrimitiveModule,
    NgtSpotLightHelperModule,
    NgtPointLightHelperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
