import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private readonly resource = 'http://127.0.0.1:8000/api/missions';

  constructor(private readonly http: HttpClient) {}

  getRecipes(userId?: number): Observable<Recipe[]> {
    const url = `${this.resource}/recipes/`;

    let params = new HttpParams();
    if (userId) {
      params = params.append('userId', userId.toString());
    }

    return this.http.get<Recipe[]>(url, { params });
  }

  getPoints(userId?: number): Observable<any> {
    const url = `${this.resource}/get_points/${userId}`;

    return this.http.get<any>(url);
  }
}
