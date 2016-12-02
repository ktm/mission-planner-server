/**
 * Created by ktm on 11/13/16.
 */
export interface IConfiguration {
    missionName: string;
    navTimerMS: number;
    navigationResolutionM: number;
    missionLoopTimerMS: number;
    observationTimerMS: number;
    inactiveTimerMS: number;
}

export class Configuration implements IConfiguration {
    public missionName: string;
    public navTimerMS: number;
    public navigationResolutionM: number;
    public missionLoopTimerMS: number;
    public observationTimerMS: number;
    public inactiveTimerMS: number;
}