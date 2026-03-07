import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  mobileMenuOpen = false;
  openAiMenu = false;
  aiMobileMenuOpen = false;
  notificationsOpen = false;

  unreadCount = 3; // exemple

  notifications = [
    {
      title: 'Nouvelle analyse Deepfake',
      message: 'Une vidéo a été analysée avec succès.',
      link: '/analysis',
      color: 'bg-blue-500'
    },
    {
      title: 'Vérification identité',
      message: 'Une identité a été vérifiée.',
      link: '/identity',
      color: 'bg-green-500'
    },
    {
      title: 'Trust Score mis à jour',
      message: 'Le Trust Score d’une institution a été recalculé.',
      link: '/trust',
      color: 'bg-purple-500'
    },
    {
      title: 'Signature institutionnelle',
      message: 'Un document a été signé.',
      link: '/verify',
      color: 'bg-orange-500'
    }
  ];

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}