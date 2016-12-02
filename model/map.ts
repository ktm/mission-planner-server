import {ILocation} from "./location";
/**
 * Created by ktm on 12/2/16.
 */
export interface IMapEntry {
    sequence:number;
    lat:number;
    long:number;
    type:string;
}

export interface IMap {
    id:string;
    name:string;
    entries:IMapEntry[];
}

export class MapEntry implements IMapEntry {
    public sequence:number;
    public lat:number;
    public long:number;
    public type:string;
}