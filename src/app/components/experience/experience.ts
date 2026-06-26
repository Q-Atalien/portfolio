import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experiences } from '../../core/profile';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly items = experiences;
}
