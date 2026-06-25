import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  topics: string[];
  updated_at: string;
}

@Injectable({ providedIn: 'root' })
export class GithubService {
  private http = inject(HttpClient);

  getRepos(user: string): Observable<Repo[]> {
    const url = `https://api.github.com/users/${user}/repos?per_page=100&sort=updated`;
    return this.http.get<Repo[]>(url).pipe(
      map((repos) =>
        repos
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || b.updated_at.localeCompare(a.updated_at))
          .slice(0, 6)
      ),
      catchError(() => of([]))
    );
  }
}
