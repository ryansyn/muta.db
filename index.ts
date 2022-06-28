import * as filestream from "fs";

interface DatabaseConstructor {
    file: string;
}

interface SetParams {
    key: string;
    data: string;
}

interface FetchParams {
    key: string;
}

export default class Database {
    private file: string;
    
    constructor (database_constructor: DatabaseConstructor) {
        if (!database_constructor.file.endsWith(".json")) database_constructor.file += ".json";

        this.file = database_constructor.file;
        
        filestream.open(this.file, "w", (error: any, file: any) => {
            if (error) throw error;
        });

        filestream.writeFileSync(this.file, JSON.stringify({data:{}}));
    }

    public set (set_params: SetParams): void {
        let file_data: any  = JSON.parse(filestream.readFileSync(this.file));

        file_data["data"][set_params.key] = set_params.data;

        filestream.writeFileSync(this.file, JSON.stringify(file_data));
    }

    public fetch (fetch_params: FetchParams): any {
        let file_data: any  = JSON.parse(filestream.readFileSync(this.file));

        return file_data["data"][fetch_params.key];
    }
}