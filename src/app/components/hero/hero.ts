import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../../core/profile';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  readonly profile = profile;
}
