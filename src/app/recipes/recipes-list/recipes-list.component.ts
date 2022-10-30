import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('food', 'this is a food', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStB2b-YH3ev3TzntBN-p2g7B1sUYbNaW2GEw&usqp=CAU'),
    new Recipe('food', 'this is a food', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStB2b-YH3ev3TzntBN-p2g7B1sUYbNaW2GEw&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
