import {JsonObject, JsonProperty, JsonType} from 'ta-json';

import {Stage} from './stage';

@JsonObject()
export class Tournament {
    @JsonProperty()
    id: number;

    @JsonProperty('sequence_no')
    sequenceNo: number;

    @JsonProperty()
    name = '';

    @JsonProperty()
    platform = '';

    @JsonProperty('is_single_stage')
    isSingleStage = true;

    @JsonProperty()
    logo = '';

    @JsonProperty()
    registerStart: Date = new Date();

    @JsonProperty()
    registerFinish: Date = new Date();

    @JsonProperty()
    competitionStart: Date = new Date();

    @JsonProperty()
    competitionFinish: Date = new Date();

    @JsonProperty()
    @JsonType(Stage)
    stages: Stage[];
}
