import { Injectable } from '@angular/core';
 
@Injectable()
export class FiltersProvider {
  public condition: string;
  public arrose: boolean;
  public deblaye: boolean;
  public resurface: boolean;
 
  constructor() {
    this.condition = "Mauvaise";
    this.arrose = false;
    this.deblaye = false;
    this.resurface = false;
  }
}