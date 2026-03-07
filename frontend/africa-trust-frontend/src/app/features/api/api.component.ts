import { Component } from '@angular/core';

interface ApiService {
  name: string;
  description: string;
  endpoints: ApiEndpoint[];
}

interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
  requestBody?: string;
  responseBody?: string;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent {
  services: ApiService[] = [
    {
      name: 'Deepfake Detection',
      description: 'Analyse de vidéos pour détecter la présence de deepfakes avec score de confiance et métadonnées.',
      endpoints: [
        {
          method: 'POST',
          path: '/api/deepfake',
          description: 'Soumet une vidéo pour analyse deepfake.',
          requestBody: `{
            "video_url": "https://example.com/video.mp4"
          }`,
          responseBody: `{
            "is_deepfake": true,
            "confidence": 0.92,
            "metadata": {...}
          }`
        }
      ]
    },
    {
      name: 'Liveness / Anti-Spoof',
      description: 'Vérification de vie et anti-spoof pour images ou flux caméra en temps réel.',
      endpoints: [
        {
          method: 'POST',
          path: '/api/liveness',
          description: 'Vérifie qu’une image provient d’une personne réelle.',
          requestBody: `{
            "image": "base64_encoded_image_here"
          }`,
          responseBody: `{
            "is_live": true,
            "confidence": 0.98
          }`
        }
      ]
    },
    {
      name: 'Trust Score',
      description: 'Évalue la crédibilité d’une entité ou d’un document.',
      endpoints: [
        {
          method: 'POST',
          path: '/api/trust',
          description: 'Calcule le score de confiance pour un utilisateur ou document.',
          requestBody: `{
            "entity_id": "user_1234"
          }`,
          responseBody: `{
            "trust_score": 87,
            "components": {...}
          }`
        }
      ]
    },
    {
      name: 'Signature Institutionnelle',
      description: 'Intégration pour signature numérique vérifiable pour documents institutionnels.',
      endpoints: [
        {
          method: 'POST',
          path: '/api/verify',
          description: 'Vérifie la validité d’une signature institutionnelle.',
          requestBody: `{
            "document_id": "doc_1234",
            "signature": "base64_signature_here"
          }`,
          responseBody: `{
            "valid": true,
            "signer": "Ministère X",
            "timestamp": "2026-03-07T12:34:56Z"
          }`
        }
      ]
    }
  ];

  selectedService: ApiService = this.services[0];

  selectService(service: ApiService) {
    this.selectedService = service;
  }
}