import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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

  profileMenuOpen = false;

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

  constructor(private router: Router) {}

  toggleNotifications() {
    this.notificationsOpen = !this.notificationsOpen;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleProfileMenu() {
    this.profileMenuOpen = !this.profileMenuOpen;
  }

  logout() {
    console.log('Déconnexion...');
    // Ajouter ici la logique réelle de déconnexion
  }

  closeAllMenus() {
    this.openAiMenu = false;
    this.notificationsOpen = false;
    this.profileMenuOpen = false;
    this.aiMobileMenuOpen = false;
    this.mobileMenuOpen = false;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.aiMobileMenuOpen = false;
  }

  toggleAiMobileMenu(event: Event) {
    event.stopPropagation(); // empêche le clickOutside de fermer le menu
    this.aiMobileMenuOpen = !this.aiMobileMenuOpen;
  }

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeAllMenus();
      });
  }
}