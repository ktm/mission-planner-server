/**
 * Created by ktm on 11/18/16.
 */
//var should = require('should')
//    , DB = require('../../db')
//    , fixtures = require('../fixtures/model-comments')
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const configurationDAO_1 = require("../../dao/configurationDAO");
const model_configuration_1 = require("../fixtures/model-configuration");
describe('configurationDAO', () => {
    let DB;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            DB = new configurationDAO_1.configurationDAO();
            yield configurationDAO_1.configurationDAO.openDbConnection()
                .then(function (val) { console.log("connected  "); });
            console.log("done  ");
        });
    });
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield DB.remove(model_configuration_1.fixture)
                .then(function (val) { console.log("removed fixture  "); });
            console.log("done  ");
        });
    });
    it('create', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield DB.create(model_configuration_1.fixture)
                .then(function (val) { console.log("created fixture  "); });
            console.log("done  ");
        });
    });
    it('find', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield DB.create(model_configuration_1.fixture)
                .then(function (val) { console.log("created fixture  "); });
            yield DB.findOne({ missionName: model_configuration_1.fixture.missionName })
                .then(function (item) {
                if (item == null) {
                    console.log("Not found");
                }
                else {
                    console.log("find fixture  " + JSON.stringify(item));
                }
            });
            console.log("done  ");
        });
    });
});
