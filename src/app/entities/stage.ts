import {JsonObject, JsonProperty, JsonType} from 'ta-json';

import {Team} from './team';
//import {Group} from './group';

@JsonObject()
export class Stage {
    @JsonProperty()
    id: number;

    @JsonProperty()
    sequenceNo: number;

    @JsonProperty()
    name: string;

    @JsonProperty()
    homeAndAway: boolean;

    @JsonProperty()
    type: number;

    @JsonProperty()
    @JsonType(Team)
    teams: Team[];

//    @JsonProperty()
//    @JsonType(Team)
//    groups: Team[];
}
