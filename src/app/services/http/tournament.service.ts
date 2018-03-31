import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

import {Tournament} from '../../entities/tournament';


@Injectable()
export class TournamentService {

    constructor(private http: HttpClient) {}

    getTournaments(): Observable<Tournament[]> {
        return this.http.get<Tournament[]>('/api/tournament');
//            .map(res => JSON.parse<Tournament[]>(res, Tournament));
//            .catch(this.handleError);
    }

    getTournament(id: number): Observable<Tournament> {
        return this.http.get<Tournament>('/api/tournament/' + id);
//            .map(res => JSON.parse<Tournament[]>(res, Tournament));
//            .catch(this.handleError);
    }

    create(tournament: Tournament) {
        return this.http.post('/api/tournament', JSON.stringify(tournament), httpOptions);
    }
}

