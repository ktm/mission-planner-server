/**
 * Created by ktm on 11/13/16.
 */
export interface ILocation {
    latitude: number;
    longitude: number;
}

class Location implements ILocation {
    public latitude: number;
    public longitude: number;


    constructor(student: ILocation) {
        this.latitude = student.latitude;
        this.longitude = student.longitude;
    }
}
