import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StandingService {
    constructor(private http: HttpClient) {}

    getSummary(groupId: number): Observable<Object[]> {
        return this.http.get<Object[]>('/api/standing/' + groupId + '/summary');
    }
}
