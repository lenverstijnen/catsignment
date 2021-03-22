import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatfeedComponent } from './catfeed/catfeed.component';
import { BreedsearchComponent } from './breedsearch/breedsearch.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { HomeComponent } from './home/home.component';

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
