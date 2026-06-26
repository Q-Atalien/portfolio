import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { profile } from '../../core/profile';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  readonly profile = profile;
  readonly initials = profile.name
    .split(' ')
    .filter((_, i, all) => i === 0 || i === all.length - 1)
    .map((part) => part[0])
    .join('');

  readonly menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
