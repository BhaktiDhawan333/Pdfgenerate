import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetalldataComponent } from './module/getalldata/getalldata.component';
import { HttpClientModule } from '@angular/common/http';
import { DataHubModule } from './data-hub/data-hub.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './data-hub/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    GetalldataComponent,
    CreateComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataHubModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
