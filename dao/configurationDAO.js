"use strict";
const baseDAO_1 = require("./baseDAO");
/**
 * Created by ktm on 11/15/16.
 */
class configurationDAO extends baseDAO_1.baseDAO {
    getCollectionName() {
        return 'configuration';
    }
}
exports.configurationDAO = configurationDAO;
