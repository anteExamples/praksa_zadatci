import {getAllData, initiDB} from '../db.js'

export const fetchProducts = async (req, res)  => {
    try {
        await initiDB();

        const tableData = await getAllData();

        res.render('index', { tableData });
        res.sendStatus(201);
    }
    catch(error) {
      console.log(error)
      res.sendStatus(500)
    }
}