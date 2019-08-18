import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Match} from '../../entities';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class GeneratorService {
    constructor(private http: HttpClient) {}

    generateMatches(groupId: number): Observable<Match[]> {
        return this.http.get<Match[]>('/api/generator/' + groupId + '/matches');
    }
}
