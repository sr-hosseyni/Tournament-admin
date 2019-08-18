import {JsonObject, JsonProperty, JsonType} from 'ta-json';

import {Team} from './team';

@JsonObject()
export class Group {
    @JsonProperty()
    id: number;

    @JsonProperty()
    name: string = '';

    @JsonProperty()
    @JsonType(Team)
    teams: Team[];
}
