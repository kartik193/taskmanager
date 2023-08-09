import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {
    this.modifiedDate();
  }
  tastArray = new BehaviorSubject<any[]>([
    {
      title: 'demmy title',
      Decription:
        '  Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
      date: '',
    },
  ]);
  singleData = new BehaviorSubject<any>({});
  filterArr = new BehaviorSubject<any[]>([]);

  // #############this function use for store data in taskArray ###########
  storeData(data: any) {
    this.tastArray.next(this.tastArray.getValue().concat([data]));
  }

  // #############this function use for get particular data from taskArray ###########
  getParticularData(id: any) {
    let findTask = this.tastArray.getValue()[id];
    this.singleData.next(findTask);
  }

  // #############this function use for update data in taskArray ###########
  updateData(data: any, index: any) {
    let changeData = this.tastArray.getValue()[index];
    changeData['title'] = data?.title;
    changeData['Decription'] = data?.Decription;
    changeData['date'] = data?.date;
  }

  // #############this function use for filter data in taskArray ###########
  filterData(selectDate: any) {
    let findData = this.tastArray
      .getValue()
      .filter((res) => res?.date == selectDate);
    this.filterArr.next(findData);
    this.singleData.next(findData);
  }

  // #############this function use for sort data in taskArray ###########
  sortData(sortNo: any) {
    sortNo == 1
      ? this.tastArray
          .getValue()
          .sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
      : this.tastArray.getValue().reverse();
  }

  // #############this function use for modifid date  ###########
  modifiedDate() {
    let dtToday = new Date();
    let month: any = dtToday.getMonth() + 1;
    let day: any = dtToday.getDate();
    let year: any = dtToday.getFullYear();
    if (month < 10) month = '0' + month.toString();
    if (day < 10) day = '0' + day.toString();
    let minDate = year + '-' + month + '-' + day;
    this.tastArray.getValue()[0]['date'] = minDate;
    return minDate;
  }
}
