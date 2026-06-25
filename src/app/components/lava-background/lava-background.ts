import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lava-background',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './lava-background.html',
  styleUrl: './lava-background.scss'
})
export class LavaBackground {
  readonly blobs = Array.from({ length: 7 }, (_, i) => i);
}
