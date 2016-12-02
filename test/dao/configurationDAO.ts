/**
 * Created by ktm on 11/18/16.
 */
//var should = require('should')
//    , DB = require('../../db')
//    , fixtures = require('../fixtures/model-comments')

import {configurationDAO} from "../../dao/configurationDAO";
import {fixture} from "../fixtures/model-configuration";


describe('configurationDAO', () => {

    let DB: configurationDAO;

    before(async function() {
        DB = new configurationDAO();
        await configurationDAO.openDbConnection()
            .then(function (val) { console.log("connected  "); });
        console.log("done  ");
    });

    beforeEach(async function() {
        await DB.remove(fixture)
            .then(function (val) { console.log("removed fixture  "); });
        console.log("done  ");
    });

    it('create', async function() {
        await DB.create(fixture)
            .then(function (val) { console.log("created fixture  "); });
        console.log("done  ");
    });

    it('find', async function() {
        await DB.create(fixture)
            .then(function (val) { console.log("created fixture  "); });
        await DB.findOne({missionName: fixture.missionName})
            .then(function(item) {
                if (item == null) {
                    console.log("Not found");
                } else {
                    console.log("find fixture  " + JSON.stringify(item));
                }
            });
        console.log("done  ");
    });
});