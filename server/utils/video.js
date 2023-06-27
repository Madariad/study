const multer = require('multer');
const path = require('path');
const fs = require('fs');
const query = require('../utils/query');
const jwtHelpers = require('../utils/jwt');


const videoConfig = {
    config(){
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, 'storage/course/video')
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + '-' + file.originalname)
            },
           
        })
        const upload = multer({ 
            storage: storage,  
            limits: {
                fileSize: 500 * 1024 * 1024 // 2MB
          } });
          return upload.single('video')
    },
   async upload(req, res){
    const {id} = req.body;
    // console.log(id);
    
    const sublessonDataSql = 'SELECT sublesson_video FROM sublessons WHERE sublesson_id = ?';
    const result = await query(sublessonDataSql, [id])
    
    if (result[0].sublesson_video !== null) {
        const videoPath = 'storage/course/video'+ '/' + result[0].sublesson_video
        console.log(videoPath);
        
        // Удаление файла
        fs.unlink(videoPath, function(err) {
            if (err) {
                console.error('Ошибка удаления файла:', err);
            } else {
                console.log('Файл успешно удален.');
            }
        });
    }
    
    console.log(result);
    const insertPathSql = 'UPDATE sublessons SET sublesson_video = ? WHERE sublesson_id = ?';
    const filePath = req.file.filename
    await query(insertPathSql, [filePath, id])

    res.json(
        {status: 'success',
        message: 'File uploaded successfully!'
    });


        // const token = req.headers.authorization;
        // const tokens = token.split('Bearer ')[1];
        // const userId = await  jwtHelpers.getUserId(tokens)
        // const filename =  req.file.filename;

        // const userData = await jwtHelpers.getUser(tokens);


    },
    async download(req, res) {
        const pathFile = req.params.path;
      
        // Получение абсолютного пути к текущей папке
        const currentDirectory = __dirname;
      
        // Получение пути к папке, на одну папку выше текущей
        const parentDirectory = path.join(currentDirectory, '../storage/course/video');
      
        const videoPath = path.join(parentDirectory, pathFile);
      
        res.sendFile(videoPath, function(err) {
          if (err) {
            console.error('Ошибка отправки файла:', err);
            res.status(err.status).end();
          } else {
            console.log('Файл успешно отправлен на клиент');
          }
        });
      }
}
module.exports = videoConfig
