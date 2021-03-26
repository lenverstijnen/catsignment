import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CatfeedComponent } from './catfeed/catfeed.component';
import { BreedsearchComponent } from './breedsearch/breedsearch.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { PrettyJsonPipe } from './pipes/pretty-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatfeedComponent,
    BreedsearchComponent,
    SubscribeComponent,
    HomeComponent,
    FooterComponent,
    CardComponent,
    SpinnerComponent,
    PrettyJsonPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
