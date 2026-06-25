import { Component } from '@angular/core';
import { LavaBackground } from './components/lava-background/lava-background';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Sudoku } from './components/sudoku/sudoku';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [LavaBackground, Navbar, Hero, About, Skills, Projects, Sudoku, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
