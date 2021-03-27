import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components//navbar/navbar.component';
import { CatfeedComponent } from './components/catfeed/catfeed.component';
import { BreedsearchComponent } from './components/breedsearch/breedsearch.component';
import { SubscribeComponent } from './components//subscribe/subscribe.component';
import { HomeComponent } from './components//home/home.component';
import { FooterComponent } from './components//footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components//card/card.component';
import { SpinnerComponent } from './components//spinner/spinner.component';
import { PrettyJsonPipe } from './pipes/pretty-json.pipe';
import { BreedDetailsComponent } from './components/breed-details/breed-details.component';

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
    BreedDetailsComponent,
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
