import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  taskData: any = [];
  currentDate: any;
  today: any;
  modalRef: any;
  dataFindStatus: any;
  showIcon: boolean = false;
  constructor(private router: Router, private storage: StorageService) {}
  changeRoute(routeName: any, index: any) {
    index != 'i'
      ? this.router.navigate([`${routeName}`, index])
      : this.router.navigate([`${routeName}`]);
  }
  ngOnInit() {
    this.currentDate = this.storage.modifiedDate();
    this.getTaskData();
  }
  getTaskData() {
    this.dataFindStatus = null;
    this.today = null;
    this.storage.tastArray
      .pipe(tap((res) => (this.taskData = res)))
      .subscribe();
  }
  editTask(index: any) {
    this.router.navigate(['home/create-task', index]);
  }
  getFilterDate() {
    this.storage.filterData(this.today);
    this.storage.filterArr.subscribe((res) => {
      this.taskData = res;
    });
    this.storage.singleData.subscribe((res) => {
      this.dataFindStatus = res;
    });
  }
  shortTitle(number: any) {
    this.storage.sortData(number);
  }
}
