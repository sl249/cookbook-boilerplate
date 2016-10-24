import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CookbookService } from '../cookbooks/cookbook.service';
import { Cookbook } from '../cookbooks/cookbook-item/cookbook';
import { Recipe } from './recipe/recipe';


@Component({
  selector: 'app-cookbook-detail',
  templateUrl: './cookbook-detail.component.html',
  styleUrls: ['./cookbook-detail.component.css'],
  providers: [CookbookService]
})
export class CookbookDetailComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {

  }

  openRecipe(recipe: Recipe) {
  }

  goBack() {
  }

}
