import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxTagBoxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
