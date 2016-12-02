"use strict";
/**
 * Created by ktm on 12/2/16.
 */
const baseDAO_1 = require("./baseDAO");
/**
 * Created by ktm on 11/15/16.
 */
class mapDAO extends baseDAO_1.baseDAO {
    getCollectionName() {
        return 'map';
    }
}
exports.mapDAO = mapDAO;
