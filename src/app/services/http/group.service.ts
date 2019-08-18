import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import {Group, Team, Stage} from '../../entities';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class GroupService {
    constructor(private http: HttpClient) {}

    addTeam(group: Group, team: Team) {
        let data = {
            teams: [
                team.id
            ]
        };

        return this.http.post('/api/group/' + group.id + '/team', JSON.stringify(data), httpOptions);
    }

    create(stageId: number, group: Group) {
        var data = Object.assign(group, {stageId: stageId});
        return this.http.post<Stage>('/api/group', JSON.stringify(data), httpOptions);
    }
}
