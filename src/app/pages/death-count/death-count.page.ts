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

    deathCounts: Observable<Object>;
    deaths: Observable<any>;
    constructor(private router: Router, private api: ApiService){}

  ngOnInit() {
        this.deathCounts = this.api.getCount(); 
         this.deaths = this.api.getDeaths();
    }
    openDetails(death) {

        let deathId = death.death_id;
        
        this.router.navigateByUrl(`/tabs/death-count/${deathId}`);
    }
}
