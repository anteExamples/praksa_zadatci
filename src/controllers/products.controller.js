import {getAllData, initiDB} from '../db.js'

export const fetchProducts = async (req, res)  => {
    try {
        await initiDB();

        const tableData = await getAllData();

        res.render('productsList', { tableData });
    }
    catch(error) {
      console.log(error)
      res.send(500)
    }
}