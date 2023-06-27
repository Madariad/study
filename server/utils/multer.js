const multer = require('multer');
const path = require('path');
const fs = require('fs');
const query = require('../utils/query');
const jwtHelpers = require('../utils/jwt');



const imageConfig = {
     users: {
        pathName: 'storage/user/images',
        config(){
            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, imageConfig.users.pathName); // Папка, в которую будут сохраняться файлы
                },
                filename: function (req, file, cb) {
                    cb(null, Date.now() + '-' + file.originalname); // Имя файла на сервере
                },
                fileFilter: function (req, file, cb) {
                    // Проверка типа файла
                    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                      cb(null, true); // Разрешение загрузки файла
                    } else {
                      cb(new Error('Недопустимый тип файла')); // Отклонение загрузки файла
                    }
                  }
            });

            
            const upload = multer({ 
                storage: storage,  
                limits: {
                    fileSize: 2 * 1024 * 1024 // 2MB
              } });
              return upload.single('file')
              
        },
       async  upload(req, res, next) {
            // Обработка загруженного файла
           // req.file содержит информацию о загруженном файле
           // req.body содержит другие данные формы (если они есть)

            const token = req.headers.authorization;
            const tokens = token.split('Bearer ')[1];
            const userId = await  jwtHelpers.getUserId(tokens)
            const filename =  req.file.filename;

             const userData = await jwtHelpers.getUser(tokens);

             if (userData[0].avatar !== null) {
                const imagePath = imageConfig.users.pathName + '/' + userData[0].avatar

                 // Удаление файла
                fs.unlink(imagePath, function(err) {
                    if (err) {
                       console.error('Ошибка удаления файла:', err);
                    } else {
                       console.log('Файл успешно удален.');
                    }
                });
                
            }
            const insertPathSql = 'UPDATE users SET avatar = ? WHERE user_id = ?';
            await query(insertPathSql, [filename, userId[0].user_id]) 

    
           
           res.json(
               {status: 'success',
               message: 'File uploaded successfully!'
           });
       },
     async  download(req, res) {
        const pathFile = req.params.path
    
            // Получение абсолютного пути к текущей папке
        const currentDirectory = __dirname;
    
            // Получение пути к папке, на одну папку выше текущей
        const parentDirectory = path.join(currentDirectory, '../storage/user/images');
    
        const imagePath = path.join(parentDirectory, pathFile);
        console.log(imagePath);
    
    
    
            res.sendFile(imagePath, function(err) {
            if (err) {
            console.error('Ошибка отправки файла:', err);
            res.status(err.status).end();
            } else {
            console.log('Файл успешно отправлен на клиент');
        }
    });
}

     },
     course: {
        pathName: 'storage/course/images',
        config(){
            const storage = multer.diskStorage({
                destination: function (req, file, cb) {
                    cb(null, imageConfig.course.pathName); // Папка, в которую будут сохраняться файлы
                },
                filename: function (req, file, cb) {
                    cb(null, Date.now() + '-' + file.originalname); // Имя файла на сервере
                },
                fileFilter: function (req, file, cb) {
                    // Проверка типа файла
                    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                      cb(null, true); // Разрешение загрузки файла
                    } else {
                      cb(new Error('Недопустимый тип файла')); // Отклонение загрузки файла
                    }
                  }
            });
            
            const upload = multer({ 
                storage: storage,  
                limits: {
                    fileSize: 2 * 1024 * 1024 // 2MB
              } });
             return upload.single('file')
        },
        async  upload(req, res, next) {
            const courseId = req.params.courseId
             const getCourseSql = 'SELECT course_image FROM courses WHERE course_id = ?';
             const getCourse = await query(getCourseSql, [courseId])
     
             const filename =  req.file.filename; 
             console.log(filename); 

             if (getCourse[0].course_image !== null) {
                const imagePath = imageConfig.course.pathName + '/' + getCourse[0].course_image

                 // Удаление файла
                fs.unlink(imagePath, function(err) {
                    if (err) {
                       console.error('Ошибка удаления файла:', err);
                    } else {
                       console.log('Файл успешно удален.');
                    }
                });
                
            }
            const insertPathSql = 'UPDATE courses SET course_image = ? WHERE course_id = ?';
            await query(insertPathSql, [filename, courseId]) 

    
           
           res.json(
               {status: 'success',
               message: 'File uploaded successfully!'
           });
       },
       //не правильно нужно доробото также и user
     async  download(req, res) {
        const pathFile = req.params.path


           // Получение абсолютного пути к текущей папке
           const currentDirectory = __dirname;
    
           // Получение пути к папке, на одну папку выше текущей
       const parentDirectory = path.join(currentDirectory, '../storage/course/images');
   
       const imagePath = path.join(parentDirectory, pathFile);
       console.log(imagePath);
   
   
   
           res.sendFile(imagePath, function(err) {
           if (err) {
           console.error('Ошибка отправки файла:', err);
           res.status(err.status).end();
           } else {
           console.log('Файл успешно отправлен на клиент');
       }
   });

        // const getCoursesSql = 'SELECT course_image FROM course';
        // const getCourses = await query(getCoursesSql)

        // for (let i = 0; i < getCourses.length; i++) {
        //     const coursesImage = getCourses[i].course_image;
            
        //             // Получение абсолютного пути к текущей папке
        //         const currentDirectory = __dirname;
            
        //             // Получение пути к папке, на одну папку выше текущей
        //         const parentDirectory = path.join(currentDirectory, '..');
            
        //         const imagePath = path.join(parentDirectory, coursesImage);
            
        //         res.sendFile(imagePath, function(err) {
        //         if (err) {
        //         console.error('Ошибка отправки файла:', err);
        //         res.status(err.status).end();
        //         } else {
        //         console.log('Файл успешно отправлен на клиент');
        //     }
        // });
            
        // }
     
    
    
}
    }

}



module.exports =  imageConfig;