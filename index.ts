import DatabaseError from "./classes/database_error";
import arrayHas from "./utils/array_has";
import * as file_stream from "fs";

interface DatabaseConstructor {
    file: string;
}

export default class Database {
    private file: string;
    
    constructor (database_constructor: DatabaseConstructor) {
        if (!database_constructor.file.endsWith(".json")) database_constructor.file += ".json";
      
        this.file = database_constructor.file;
    }

    connect (callback?: Function): Promise<void | Function> {
        let first: boolean = false;
        
        return new Promise(async (resolve, reject) => {
            if (!arrayHas({ array: await file_stream.readdirSync("./"), query: this.file })) {
                first = true;
                await file_stream.open(this.file, "w", (error: any, file: any) => {
                    if (error) throw error;
    
                    if (file_stream.readFileSync(this.file) == "") {
                        file_stream.writeFileSync(this.file, JSON.stringify({ data: {} }));
                    }

                    if (callback) resolve(callback()); else resolve();
                });
            }

            if (!first) {
                if (callback) resolve(callback()); else resolve();
            }
        });
    }
    
    set (key: string, data: any, callback?: Function): Promise<void | Function> {
        return new Promise(async (resolve, reject) => {
            let file_data: any = JSON.parse(file_stream.readFileSync(this.file))["data"],
                spliced_keys: string[] = key.split(":");

            switch(spliced_keys.length) {
                case 1:
                    file_data[spliced_keys[0]] = data;
                    break;
                case 2: 
                    if (!file_data.hasOwnProperty(spliced_keys[0])) 
                        file_data[spliced_keys[0]] = {};
                    file_data[spliced_keys[0]][spliced_keys[1]] = data;
                    break;
                case 3:
                    if (!file_data.hasOwnProperty(spliced_keys[0])) 
                        file_data[spliced_keys[0]] = {};
                    if (!file_data[spliced_keys[0]].hasOwnProperty(spliced_keys[1])) 
                        file_data[spliced_keys[0]][spliced_keys[1]] = {};
                    file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]] = data;
                    break;
                case 4:
                    if (!file_data.hasOwnProperty(spliced_keys[0])) 
                        file_data[spliced_keys[0]] = {};
                    if (!file_data[spliced_keys[0]].hasOwnProperty(spliced_keys[1])) 
                        file_data[spliced_keys[0]][spliced_keys[1]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]].hasOwnProperty(spliced_keys[2]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]] = {};
                    file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]] = data;
                    break;
                case 5:
                    if (!file_data.hasOwnProperty(spliced_keys[0])) 
                        file_data[spliced_keys[0]] = {};
                    if (!file_data[spliced_keys[0]].hasOwnProperty(spliced_keys[1])) 
                        file_data[spliced_keys[0]][spliced_keys[1]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]].hasOwnProperty(spliced_keys[2]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]].hasOwnProperty(spliced_keys[3]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]] = {};
                    file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]] = data;
                    break;
                case 6:
                    if (!file_data.hasOwnProperty(spliced_keys[0])) 
                        file_data[spliced_keys[0]] = {};
                    if (!file_data[spliced_keys[0]].hasOwnProperty(spliced_keys[1])) 
                        file_data[spliced_keys[0]][spliced_keys[1]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]].hasOwnProperty(spliced_keys[2]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]].hasOwnProperty(spliced_keys[3]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]].hasOwnProperty(spliced_keys[4]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]] = {};
                    file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]][spliced_keys[5]] = data;
                    break;
                case 7:
                    if (!file_data.hasOwnProperty(spliced_keys[0])) 
                        file_data[spliced_keys[0]] = {};
                    if (!file_data[spliced_keys[0]].hasOwnProperty(spliced_keys[1])) 
                        file_data[spliced_keys[0]][spliced_keys[1]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]].hasOwnProperty(spliced_keys[2]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]].hasOwnProperty(spliced_keys[3]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]].hasOwnProperty(spliced_keys[4]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]].hasOwnProperty(spliced_keys[5]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]][spliced_keys[5]] = {};
                    file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]][spliced_keys[5]][spliced_keys[6]] = data;
                    break;
                case 8:
                    if (!file_data.hasOwnProperty(spliced_keys[0])) 
                        file_data[spliced_keys[0]] = {};
                    if (!file_data[spliced_keys[0]].hasOwnProperty(spliced_keys[1])) 
                        file_data[spliced_keys[0]][spliced_keys[1]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]].hasOwnProperty(spliced_keys[2]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]].hasOwnProperty(spliced_keys[3]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]].hasOwnProperty(spliced_keys[4]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]].hasOwnProperty(spliced_keys[5]))
                        file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]][spliced_keys[5]] = {};
                    if (!file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]][spliced_keys[5]].hasOwnProperty(spliced_keys[6]))
                    file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]][spliced_keys[5]][spliced_keys[6]] = {};
                    file_data[spliced_keys[0]][spliced_keys[1]][spliced_keys[2]][spliced_keys[3]][spliced_keys[4]][spliced_keys[5]][spliced_keys[6]][spliced_keys[7]] = data;
                    break;
                default:
                    reject(new DatabaseError(spliced_keys.length + " is above set 8 index limit"));
                    break;
            }

            file_stream.writeFileSync(this.file, JSON.stringify({ data: file_data }));

            if (callback) resolve(callback()); else resolve();
        });
    }

    async add (key: string, data: number | string | any[], callback?: Function): Promise<void | Function> {
        return new Promise(async (resolve, reject) => {
            let new_data = await this.get(key);
            
            if (typeof(new_data) == "number") {
                if ((typeof(data)) == "number") new_data += data;
                else reject(new DatabaseError("Addition is not type of key's value <number>"));
            } else if (typeof(new_data) == "string") {
                if ((typeof(data)) == "string") new_data += data;
                else reject(new DatabaseError("Addition is not type of key's value <string>"));
            } else {
                new_data.push(data);
            }

            this.set(key, new_data);
            
            if (callback) resolve(callback()); else resolve();
        });
    }

    del (key: string, data?: number, callback?: Function): Promise<void | Function> {
        return new Promise(async (resolve, reject) => {
            let new_data = await this.get(key),
                spliced_keys: string[] = key.split(":");

            if (data) {
                if (typeof(new_data == "number")) {
                    if (!(typeof(data) == "number")) reject(new DatabaseError("Modification is not type of key's value <number>"));
                    new_data -= data;
                } else if (typeof(new_data == "object")) {
                    if (new_data.length-1 <= data) {
                        new_data.splice(data, 1);
                    } else reject(new DatabaseError("Index " + data + "is out of bounds of array"));
                }

                this.set(key, new_data);
            } else {
                let string = "";
                
                for (let index = 0; index < spliced_keys.length-1; index++) {
                    if (spliced_keys.length-1 == 1) {
                        string = spliced_keys[index]
                    } else {
                        string += spliced_keys[index] + ":";
                    }
                }

                new_data = await this.get(string);
                delete new_data[spliced_keys[spliced_keys.length-1]];
                this.set(string, new_data);
            }

            if (callback) resolve(callback()); else resolve();
        });
    }

    get (key: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            let file_data: any  = JSON.parse(file_stream.readFileSync(this.file))["data"],
                spliced_keys = key.split(":"),
                current_path = file_data;
    
            if (spliced_keys.length == 1) {
                if (current_path.hasOwnProperty(spliced_keys[0])) {
                    resolve(current_path[spliced_keys[0]]);
                } else reject(new DatabaseError("Key unfetchable or not contained in directory"));
            } else {
                for (let spliced_key of spliced_keys) {
                    if (current_path.hasOwnProperty(spliced_key)) {
                        current_path = current_path[spliced_key];
                    } else reject(new DatabaseError("Key unfetchable or not contained in directory"));
                }
            }
    
            resolve(current_path);
        });
    }
}
