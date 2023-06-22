const sublessons = require('../models/Sublessons')

const SublessonsController = {
    getSublessonsById(req, res){
       const id = req.params.id;
        
       sublessons.getSublessonsById(id, (results) => {
        if (results.status === 'success') {
            res.status(results.statusCode)
            res.json({status: results.status, 
              message: results.message,
              sublesson: results.sublesson
            })
              
          }else {
              res.status(results.statusCode)
              res.json(
                {status: results.status, 
                 message: results.message
                })
          }
       })

    },
}

module.exports = SublessonsController