import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

const uploadFolder = path.resolve(__dirname, '..', '..', 'uploads', 'cars');

export const multerConfig = {
  storage: multer.diskStorage({
    destination: uploadFolder,
    filename: (req, file, callback) => {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),

  fileFilter: (req: any, file: Express.Multer.File, callback: any) => {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];

    if (allowedMimes.includes(file.mimetype)) {
      callback(null, true);
    } else {
      callback(new Error('Tipo de arquivo inválido'));
    }
  },
};
