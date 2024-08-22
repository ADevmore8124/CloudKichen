import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private services:OrderdetailsService) { }
   foodData:any;
  ngOnInit(): void {
    this.foodData=this.services.foodDetails;
  }

}
