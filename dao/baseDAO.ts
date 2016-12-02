import {MongoClient} from "mongodb";

export abstract class baseDAO {
    static shareItUrl: string = 'mongodb://127.0.0.1:27017/amv';
    protected static dbConnection: any = null;

    protected abstract getCollectionName(): string;

    public static openDbConnection():Promise<any> {
        return new Promise((resolve,reject)=>{
            if (baseDAO.dbConnection != null) {
                resolve();
            } else {
                MongoClient.connect(baseDAO.shareItUrl, (err, db) => {
                    if (err != null) {
                        reject(err);
                    } else {
                        baseDAO.dbConnection = db;
                        resolve();
                    }
                });
            }
        });
   }

    public static closeDbConnection() {
        if (baseDAO.dbConnection) {
            baseDAO.dbConnection.close();
            baseDAO.dbConnection = null;
        }
    }

    public create(doc: any):Promise<any> {
        return new Promise((resolve,reject)=> {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            } else {
                baseDAO.dbConnection.collection(this.getCollectionName()).insertOne(doc, (err, status) => {
                    if (err != null) {
                        console.log("err: " + err);
                        reject(err);
                    } else {
                        console.log("create status: " + status);
                        resolve();
                    }
                });
            }
        });
    }

    public remove(doc: any):Promise<any> {
        return new Promise((resolve,reject)=> {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            } else {
                baseDAO.dbConnection.collection(this.getCollectionName()).deleteOne(doc, (err, status) => {
                    if (err != null) {
                        console.log("err: " + err);
                        reject(err);
                    } else {
                        console.log("remove status: " + status);
                        resolve();
                    }
                });
            }
        });
    }

    public update(doc: any):Promise<any> {
        return new Promise((resolve,reject)=> {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            } else {
                baseDAO.dbConnection.collection(this.getCollectionName()).updateOne(doc, (err, status) => {
                    if (err != null) {
                        console.log("err: " + err);
                        reject(err);
                    } else {
                        console.log("update status: " + status);
                        resolve(status);
                    }
                });
            }
        });
    }

    public findOne(match:any):Promise<any> {
        return new Promise((resolve,reject)=> {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            } else {
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


    public findAll(match:any):Promise<any> {
        return new Promise((resolve,reject)=> {
            if (baseDAO.dbConnection == null) {
                reject("Not connected.");
            } else {
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