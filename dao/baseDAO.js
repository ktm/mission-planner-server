"use strict";
const mongodb_1 = require("mongodb");
class baseDAO {
    static openDbConnection() {
        return new Promise((resolve, reject) => {
            if (baseDAO.dbConnection != null) {
                resolve();
            }
            else {
                mongodb_1.MongoClient.connect(baseDAO.shareItUrl, (err, db) => {
                    if (err != null) {
                        reject(err);
                    }
                    else {
                        baseDAO.dbConnection = db;
                        resolve();
                    }
                });
            }
        });
    }
    static closeDbConnection() {
        if (baseDAO.dbConnection) {
            baseDAO.dbConnection.close();
            baseDAO.dbConnection = null;
        }
    }
    create(doc) {
        return new Promise((resolve, reject) => {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            }
            else {
                baseDAO.dbConnection.collection(this.getCollectionName()).insertOne(doc, (err, status) => {
                    if (err != null) {
                        console.log("err: " + err);
                        reject(err);
                    }
                    else {
                        console.log("create status: " + status);
                        resolve();
                    }
                });
            }
        });
    }
    remove(doc) {
        return new Promise((resolve, reject) => {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            }
            else {
                baseDAO.dbConnection.collection(this.getCollectionName()).deleteOne(doc, (err, status) => {
                    if (err != null) {
                        console.log("err: " + err);
                        reject(err);
                    }
                    else {
                        console.log("remove status: " + status);
                        resolve();
                    }
                });
            }
        });
    }
    update(doc) {
        return new Promise((resolve, reject) => {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            }
            else {
                baseDAO.dbConnection.collection(this.getCollectionName()).updateOne(doc, (err, status) => {
                    if (err != null) {
                        console.log("err: " + err);
                        reject(err);
                    }
                    else {
                        console.log("update status: " + status);
                        resolve(status);
                    }
                });
            }
        });
    }
    findOne(match) {
        return new Promise((resolve, reject) => {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            }
            else {
                baseDAO.dbConnection.collection(this.getCollectionName()).find(match).limit(1).toArray((err, array) => {
                    if (err != null) {
                        reject(err);
                    }
                    else if (array && array.length > 0) {
                        resolve(array[0]);
                    }
                    else {
                        resolve(null);
                    }
                });
            }
        });
    }
    findAll(match) {
        return new Promise((resolve, reject) => {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            }
            else {
                baseDAO.dbConnection.collection(this.getCollectionName()).find(match).limit(1).toArray((err, array) => {
                    if (err != null) {
                        reject(err);
                    }
                    else {
                        resolve(array);
                    }
                });
            }
        });
    }
}
baseDAO.shareItUrl = 'mongodb://127.0.0.1:27017/amv';
baseDAO.dbConnection = null;
exports.baseDAO = baseDAO;
