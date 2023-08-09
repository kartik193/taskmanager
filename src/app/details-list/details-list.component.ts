import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../storage/storage.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.scss'],
})
export class DetailsListComponent {
  deatilsData: any;
  constructor(
    private route: ActivatedRoute,
    private storage: StorageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      this.storage.getParticularData(res?.id);
    });
    this.storage.singleData
      .pipe(
        tap((res) => {
          this.deatilsData = res;
        })
      )
      .subscribe();
    console.log(this.deatilsData);
  }
  changeRoute() {
    this.router.navigate(['home/list-task']);
  }
}
