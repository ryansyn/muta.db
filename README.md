<div align="center">
    
  [![Npm](https://img.shields.io/npm/v/muta.db)](https://www.npmjs.com/package/muta.db)
    
</div>

### About

**muta.db** is a simple [Node.js](https://nodejs.org/en/) module for creating a JSON database
  - Efficient
  - Quick to use
  - Easy to learn

### Implementation
Requires [Node.js](https://nodejs.org/en/) version 14.0.0 or newer
```sh-session
npm i muta.db
```

### Example
  
```js
const Database = require("muta.db");

const database = new Database({
    file: "db"
});

database.connect(async () => {
    await database.set("key:key2", "data", () => {
        console.log("Successfully set key(s) in database");
    }); 
    // -> db.json: { data: { "key": { "key2": "data"} } }

    let data = await database.get("key:key2");
    // -> returns "data" because "key" -> "key2" == "data"
});
```

### Documentation
  - `Database ({ file: string })` class
  - `connect (callback?: Function)` member function
  - `set (key: string, data: any, callback?: Function): Promise<void | Function>` member function
    - you can go as far as 8 indices by formatting the `key` with `:` in-between key names
  - `get (key: string): Promise<any>` member function
  - `add (key: string, data: number | string | any[], callback?: Function)` member function
  - `del (key: string, data?: number, callback?: Function)` member function
