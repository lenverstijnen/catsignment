import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatfeedComponent } from './components//catfeed/catfeed.component';
import { BreedsearchComponent } from './components//breedsearch/breedsearch.component';
import { SubscribeComponent } from './components//subscribe/subscribe.component';
import { HomeComponent } from './components//home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cats', component: CatfeedComponent },
  { path: 'breed', component: BreedsearchComponent },
  { path: 'subscribe', component: SubscribeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
