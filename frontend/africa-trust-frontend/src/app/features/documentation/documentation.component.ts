import { Component, OnInit } from '@angular/core';

interface Service {
  name: string;
  description: string;
  features: string[];
  link: string;
}

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  services: Service[] = [
    {
      name: 'Deepfake Detection',
      description: 'Analyse et détection avancée de vidéos manipulées. Notre moteur AI détecte anomalies faciales, audio et comportementales.',
      features: [
        'Analyse vidéo / image',
        'Score de probabilité de deepfake',
        'Rapport détaillé',
      ],
      link: '/analysis'
    },
    {
      name: 'Liveness / Anti-Spoof',
      description: 'Vérification biométrique en temps réel pour authentifier les utilisateurs et éviter la fraude.',
      features: [
        'Preuve de vie (liveness check)',
        'Reconnaissance faciale sécurisée',
        'Intégration pour bourses, pensions, services étudiants',
      ],
      link: '/identity'
    },
    {
      name: 'Trust Score',
      description: 'Attribuez un score de confiance aux utilisateurs ou documents afin de faciliter les décisions automatisées.',
      features: [
        'Scoring basé sur comportement et historique',
        'Score dynamique et prédictif',
        'Intégration facile dans vos flux',
      ],
      link: '/trust'
    },
    {
      name: 'Signature Institutionnelle',
      description: 'Générez et vérifiez des signatures institutionnelles digitales pour sécuriser vos documents.',
      features: [
        'Signatures certifiées',
        'Vérification rapide',
        'Traçabilité complète',
      ],
      link: '/verify'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}