import { Component, OnInit } from '@angular/core';
import { Accomplishment, ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  accomplishments: Array<Accomplishment>;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.accomplishments = this.experienceService.getAccomplishment();
  }

}
