import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../../core/profile';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  readonly profile = profile;
  readonly year = new Date().getFullYear();
}
