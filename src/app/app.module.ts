import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DavButtonComponent } from './dav-button/dav-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DavInputComponent } from './dav-input/dav-input.component';
import { DavModalComponent } from './dav-modal/dav-modal.component';
import { DavGroupHeaderComponent } from './dav-group-header/dav-group-header.component';
import { DavScreenItemComponent } from './dav-screen-item/dav-screen-item.component';
import { DavTextareaComponent } from './dav-textarea/dav-textarea.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    DavButtonComponent,
    DavInputComponent,
    DavModalComponent,
    DavGroupHeaderComponent,
    DavScreenItemComponent,
    DavTextareaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
