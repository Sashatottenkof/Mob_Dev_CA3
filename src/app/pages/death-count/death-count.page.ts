import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-death-count',
  templateUrl: './death-count.page.html',
  styleUrls: ['./death-count.page.scss'],
})
export class DeathCountPage implements OnInit {

    count: Observable<Object>;
    constructor(private router: Router, private api: ApiService){}

  ngOnInit() {
        this.count = this.api.getCount();
    }
    // openDetails(count) {

    //     let countId = count.count_id;
        
    //     this.router.navigateByUrl(`/tabs/death-count/${countId}`);
    // }
}
