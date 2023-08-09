import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../storage/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'app-crate-task',
  templateUrl: './crate-task.component.html',
  styleUrls: ['./crate-task.component.scss'],
})
export class CrateTaskComponent {
  currentDate: any;
  taskForm: FormGroup<any>;
  editData: any;
  paramsId: any;
  statusObj: any = {};
  constructor(
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private storage: StorageService,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      Decription: ['', Validators.required],
      date: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.storage.tastArray
      .pipe(tap((res) => (this.statusObj['arrayLength'] = res)))
      .subscribe();
    this.currentDate = this.storage.modifiedDate();
    this.route.params.subscribe((res: any) => {
      this.paramsId = res.id;
      this.storage.getParticularData(this.paramsId);
    });
    this.storage.singleData
      .pipe(
        tap((res) => {
          (this.editData = res), this.patchValue();
        })
      )
      .subscribe();
  }
  onSubmit() {
    this.paramsId == undefined
      ? this.storage.storeData(this.taskForm.value)
      : this.storage.updateData(this.taskForm.value, this.paramsId);
    this.paramsId == undefined
      ? (this.statusObj['createMode'] = true)
      : (this.statusObj['editMode'] = true);
    this.statusObj?.arrayLength.length > 1 ? this.taskForm.reset() : '';
    setInterval(() => {
      this.statusObj['createMode'] = false;
      this.statusObj['editMode'] = false;
    }, 5000);
  }
  patchValue() {
    this.taskForm.patchValue({
      title: this.editData?.title,
      Decription: this.editData?.Decription,
      date: this.editData?.date,
    });
  }
  changeRoute() {
    this.router.navigate(['home/list-task']);
  }
}
