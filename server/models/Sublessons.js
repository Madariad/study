const query = require('../utils/query');


const sublessons = {
 async    getSublessonsById(id, callback){
       try {
        const getSublessonsByIdSql = 'SELECT * FROM sublessons WHERE sublesson_id = ?'
        const results =  await query(getSublessonsByIdSql, [id])
        callback(
            {
              status: 'success',
              message: 'All sublessons from this lesson',
              sublesson: results,
              statusCode: 200,
            })
       } catch (error) {
        callback(
            {
              status: 'error',
              message: error,
              statusCode: 500,
            });
       }
    },
}

module.exports = sublessons