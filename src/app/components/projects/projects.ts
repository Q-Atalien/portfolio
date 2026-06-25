import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { GithubService, Repo } from '../../core/github.service';
import { profile } from '../../core/profile';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  private github = inject(GithubService);

  readonly profile = profile;
  readonly repos = signal<Repo[]>([]);
  readonly loading = signal(true);
  readonly empty = computed(() => !this.loading() && this.repos().length === 0);

  constructor() {
    this.github.getRepos(profile.githubUser).subscribe((repos) => {
      this.repos.set(repos);
      this.loading.set(false);
    });
  }

  prettyName(name: string): string {
    return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
  }
}
