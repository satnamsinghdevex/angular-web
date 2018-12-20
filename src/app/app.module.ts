import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SiderbarComponent } from './siderbar/siderbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ExamplesComponent } from './examples/examples.component';
import { APageComponent } from './a-page/a-page.component';
import { AnotherPageComponent } from './another-page/another-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SiderbarComponent,
    MainContentComponent,
    FooterComponent,
    ExamplesComponent,
    APageComponent,
    AnotherPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
