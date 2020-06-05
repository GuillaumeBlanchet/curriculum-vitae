import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Accomplishment, ExperienceService } from '../experience.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-experience-grid',
  templateUrl: './experience-grid.component.html',
  styleUrls: ['./experience-grid.component.css']
})
export class ExperienceGridComponent implements OnInit {
  displayedColumns: string[] = ['no', 'client', 'project', 'function', 'period', 'duration'];
  dataSource: MatTableDataSource<Accomplishment>;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.experienceService.getAccomplishment());
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  getExperienceTotal(): string {
    let totalMonths = 0;
    for (const element of this.dataSource.data) {
      totalMonths += element.duration;
    }

    // tslint:disable-next-line:radix
    const years = totalMonths / 12 + '';
    return   parseInt(years) + ' années et ' + (totalMonths % 12) + ' mois';
  }

  export() {
    this.experienceService.generateExcel();
  }
}
