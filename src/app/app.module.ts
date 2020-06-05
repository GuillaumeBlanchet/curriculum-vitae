import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatCardModule, MatListModule, MatChipsModule, MatButtonModule, MatButtonToggleModule, MatTableModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MomentModule } from 'ngx-moment';
import { AppComponent } from './app.component';
import { CareerSummaryComponent } from './career-summary/career-summary.component';
import { EducationComponent } from './education/education.component';
import { HonorsComponent } from './honors/honors.component';
import { PublicationsComponent } from './publications/publications.component';
import { ExperienceComponent } from './experience/experience.component';
import { ExperienceGridComponent } from './experience-grid/experience-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExperienceService } from './experience.service';


@NgModule({
  declarations: [
    AppComponent,
    CareerSummaryComponent,
    EducationComponent,
    HonorsComponent,
    PublicationsComponent,
    ExperienceComponent,
    ExperienceGridComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTableModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ ExperienceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
