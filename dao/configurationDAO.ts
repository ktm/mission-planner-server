import {baseDAO} from "./baseDAO";
import {Configuration} from "../model/configuration";


/**
 * Created by ktm on 11/15/16.
 */
export class configurationDAO extends baseDAO {
    protected getCollectionName(): string {
        return 'configuration';
    }
}