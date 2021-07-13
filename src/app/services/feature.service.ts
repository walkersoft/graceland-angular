import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFeature } from 'src/shared/interfaces/IFeature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  featureStore: string = 'assets/dummy-data/features.json';
  constructor(private http: HttpClient) { }

  getFeatures(): Observable<IFeature[]> {
    return this.http.get<IFeature[]>(this.featureStore);
  }
}
