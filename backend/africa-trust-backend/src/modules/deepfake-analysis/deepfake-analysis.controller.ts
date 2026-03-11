    import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
    import { FileInterceptor } from '@nestjs/platform-express';
    import { DeepfakeAnalysisService } from './deepfake-analysis.service';

    @Controller('deepfake')
    export class DeepfakeAnalysisController {

    constructor(private readonly dpfake_service: DeepfakeAnalysisService) {}

    @Post('analyze')
    @UseInterceptors(
        FileInterceptor('file', {
        limits: {
            fileSize: 200 * 1024 * 1024
        },
        fileFilter: (req, file, cb) => {
    
            if (!file.mimetype.match(/(image|video)/)) {
            return cb(new Error('Seules les images ou vidéos sont autorisées'), false);
            }
    
            cb(null, true);
        }
        })
    )
    async analyze(@UploadedFile() file: Express.Multer.File) {

        if (!file) {
        return {
            label: 'Erreur',
            deepfake_probability: 0,
            message: 'Aucun fichier envoyé'
        };
        }

        const result = await this.dpfake_service.analyze(
        file.buffer,
        file.originalname
        );

        return result;
    }

    }