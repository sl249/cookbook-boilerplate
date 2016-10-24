import { Component, OnInit } from '@angular/core';
import { CookbookService } from './cookbook.service'
import { Cookbook } from './cookbook-item/cookbook'


@Component({
  selector: 'app-cookbooks',
  templateUrl: './cookbooks.component.html',
  styleUrls: ['./cookbooks.component.css'],
  providers: [CookbookService]
})
export class CookbooksComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {

  }

}
