import { Component, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../Home/navbar/navbar.component";
import { ButtonComponent } from "../../custom/button/button.component";
import { Jobs } from './Jobs';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';

type jobmodel = {
  id:string,
  jobtitle:string,
  jobtype:string,
  workingduration:string
}

@Component({
  selector: 'app-browse-jobs',
  imports: [NavbarComponent, ButtonComponent,MatPaginatorModule],
  templateUrl: './browse-jobs.component.html',
  styleUrl: './browse-jobs.component.css'
}) 

export class BrowseJobsComponent {
  public BrowseJobs = Jobs;
  public paginatedData:jobmodel[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.paginator.page.subscribe((pageEvent) => {
      const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
      const endIndex = startIndex + pageEvent.pageSize;
      this.paginatedData = this.BrowseJobs.slice(startIndex, endIndex);
      console.log(pageEvent);
    });

     const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;
      this.paginatedData = this.BrowseJobs.slice(startIndex, endIndex);
  }

}
