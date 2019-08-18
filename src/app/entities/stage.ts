import {JsonObject, JsonProperty, JsonType} from 'ta-json';

import {Team, Group, Enums} from './';

@JsonObject()
export class Stage {
    @JsonProperty()
    id: number;

    @JsonProperty()
    sequenceNo: number;

    @JsonProperty()
    name: string = '';

    @JsonProperty()
    homeAndAway: boolean = false;

    @JsonProperty()
    restrictTeamMembershipInGroups: boolean = true;

    @JsonProperty()
    type: number = Enums.StageType.LEAGUE;

    @JsonProperty()
    @JsonType(Team)
    teams: Team[];

    @JsonProperty()
    @JsonType(Group)
    groups: Group[];
}
