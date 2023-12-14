import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataHubRoutingModule } from './data-hub-routing.module';
import { AboutComponent } from './about/about.component';
import { EditComponent } from './edit/edit.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AboutComponent,
    EditComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    DataHubRoutingModule,
    ReactiveFormsModule,

  ]
})
export class DataHubModule { }
