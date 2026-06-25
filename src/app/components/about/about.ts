import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../../core/profile';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  readonly profile = profile;
}
