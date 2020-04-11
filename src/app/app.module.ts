import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PrimaryComponent } from './components/primary/primary.component';
import { SendtoServiceComponent } from './sendto-service/sendto-service.component';
import { HttpClientModule } from '@angular/common/http';
import { MyRestServiceCaller } from './services/httpRestApi';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    SendtoServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [MyRestServiceCaller],
  bootstrap: [AppComponent]
})
export class AppModule { }
