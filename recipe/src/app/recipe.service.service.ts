import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class Recipe.ServiceService {

  constructor() { }
    


   // get a product based on the name
   addProduct(name: string, calories: string, ingredients: string, time: string): string {
       
 	

       if (localStorage.getItem(name) != null) {
           return = localStorage.getItem(name)
           }
   	else {
       return = "name=" + this.name + "&calories=" + this.calories + "&ingredients=" + this.ingredients + "&time=" + this.time;
       localStorage.setItem(name, calories,ingredients,time);
}
      
   }
}
