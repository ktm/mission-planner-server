/**
 * Created by ktm on 12/2/16.
 */
import {baseDAO} from "./baseDAO";
import {MapEntry} from "../model/map";


/**
 * Created by ktm on 11/15/16.
 */
export class mapDAO extends baseDAO {
    protected getCollectionName(): string {
        return 'map';
    }
}