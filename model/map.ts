import {ILocation} from "./location";
/**
 * Created by ktm on 12/2/16.
 */

export interface IMapBase {
    name:string;
    lat:number;
    long:number;
    zoom:number;
}

export interface IMapEntry {
    sequence:number;
    lat:number;
    long:number;
    type:string;
}

export class MapEntry implements IMapEntry {
    public sequence:number;
    public lat:number;
    public long:number;
    public type:string;
}

export class Map implements IMapBase {
    public name:string;
    public lat:number;
    public long:number;
    public zoom:number;
}