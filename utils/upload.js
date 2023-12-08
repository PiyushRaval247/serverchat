import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const storage = new GridFsStorage({
    url: `mongodb://${USERNAME}:${PASSWORD}@ac-tj88kom-shard-00-00.xhzg4hs.mongodb.net:27017,ac-tj88kom-shard-00-01.xhzg4hs.mongodb.net:27017,ac-tj88kom-shard-00-02.xhzg4hs.mongodb.net:27017/?ssl=true&replicaSet=atlas-w1v2ad-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg", "image/jpeg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 