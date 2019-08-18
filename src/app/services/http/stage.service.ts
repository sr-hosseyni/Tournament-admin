import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Stage, Tournament} from '../../entities';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class StageService {
    constructor(private http: HttpClient) {}

    create(tournamentId: number, stage: Stage): Observable<Stage> {
        var data = Object.assign(stage, {tournamentId : tournamentId});
        return this.http.post<Stage>('/api/stage', JSON.stringify(data), httpOptions);
    }
}
