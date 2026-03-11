import { Injectable } from '@nestjs/common';
import axios from 'axios';
import FormData from 'form-data';

@Injectable()
export class DeepfakeAnalysisService {

  async analyze(fileBuffer: Buffer, filename: string) {

    const form = new FormData();
    form.append('file', fileBuffer, filename);

    try {

      const response = await axios.post(
        'http://217.69.2.167:8000/detect/deepfake',
        form,
        {
          headers: form.getHeaders(),
        },
      );

      return response.data;

    } catch (error) {

      return {
        label: 'Erreur',
        deepfake_probability: 0,
        message: 'Service IA indisponible'
      };

    }

  }

}