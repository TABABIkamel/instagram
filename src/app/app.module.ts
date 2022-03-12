import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {NgxSpinnerModule} from "ngx-spinner";
import { NzDemoCardFlexibleContentComponent } from './nz-demo-card-flexible-content/nz-demo-card-flexible-content.component';
import {NzCardModule} from "ng-zorro-antd/card";
import { ButtonComponent } from './componentsngzerro/button/button.component';
import { PublicationComponent } from './publication/publication.component';
import { GameComponent } from './game/game.component';
import {NzInputModule} from "ng-zorro-antd";

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NzDemoCardFlexibleContentComponent,
    ButtonComponent,
    PublicationComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    HttpClientModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NzCardModule,
    NzInputModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
