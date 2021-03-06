import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { property } from '../services/property.service';

@Component({
  selector: 'app-view-listings',
  templateUrl: './view-listings.component.html',
  styleUrls: ['./view-listings.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewListingsComponent implements OnInit {

	apiSvc: any;
	properties : any;

    constructor(@Inject(property) _apiSvc: property) {
  		this.apiSvc = _apiSvc;
    }

  ngOnInit() {
  	this.properties = this.apiSvc.getListings();
  	console.log(this.properties);
  }
}
