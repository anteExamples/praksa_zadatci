// const sqlite3 = require('sqlite3').verbose();
// const db = new sqlite3.Database(':memory:');

// db.serialize(() => {
//     db.run("CREATE TABLE lorem (info TEXT)");

//     const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (let i = 0; i < 10; i++) {
//         stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
//         console.log(row.id + ": " + row.info);
//     });
// });

// const getAllData = async () => {
//     return new Promise((resolve, reject) => {
// 		db.serialize(() => {
// 			db.all("SELECT rowid AS id, info FROM lorem", (err, rows) => {
// 				if (err) reject(err);
// 				resolve(rows);
// 			});
// 		});
// 	}); 

// }

// module.exports = {getAllData}

import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import {readFileSync} from 'fs'

sqlite3.verbose()

export const initiDB = (async () => {
    const db = await open({
      filename: '/tmp/database.db',
      driver: sqlite3.Database
    })

    const tableExists = await db.get("SELECT * FROM sqlite_master WHERE name='Products' and type='table'")

    if(!tableExists) {
        await db.run(`CREATE TABLE Products (id TEXT, 
                                            name TEXT,
                                            productImageUrl TEXT,
                                            quantity TEXT,
                                            color TEXT,
                                            barCode TEXT)`);

        const fileContent = readFileSync('seed.json', 'utf8')
        
        if(fileContent) {
            const seedData = JSON.parse(fileContent);

            const stmt = await db.prepare("INSERT INTO Products (id, name, barCode, color, quantity, productImageUrl) VALUES (@id, @name, @barCode, @color, @quantity, @productImageUrl)");
            
            seedData['Souvenirs'].forEach(async (product) => {
                 await stmt.run(product.id, 
                                product.name, 
                                product.barCode, 
                                product.color, 
                                product.quantity, 
                                product.productImageUrl);
            })

            await stmt.finalize();
        }
    
    }

    db.close()

})

export const getAllData = async () => {
    const db = await open({
        filename: '/tmp/database.db',
        driver: sqlite3.Database
      });

    const items = await db.all("SELECT * from Products")

    db.close();

    return items;

}