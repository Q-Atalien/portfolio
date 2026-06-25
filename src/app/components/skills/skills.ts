import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skills } from '../../core/profile';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  readonly groups = skills;
}
