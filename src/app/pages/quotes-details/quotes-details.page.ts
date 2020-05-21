import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.page.html',
  styleUrls: ['./quotes-details.page.scss'],
})
export class QuotesDetailsPage implements OnInit {
  quote: any;
  quoteId = null;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}
  ngOnInit() {
    this.quoteId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getQuote(this.quoteId).subscribe(res => {
      this.quote = res[0];
    })
    }
}
