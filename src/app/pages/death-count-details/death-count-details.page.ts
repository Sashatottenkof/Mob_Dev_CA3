import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-death-count-details',
  templateUrl: './death-count-details.page.html',
  styleUrls: ['./death-count-details.page.scss'],
})
export class DeathCountDetailsPage implements OnInit {
 death: any;
  deathId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}
  ngOnInit() {
    this.deathId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getDeath(this.deathId).subscribe(res => {
      this.death = res[0];
    })
    }
  }






