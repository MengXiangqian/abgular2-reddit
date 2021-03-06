import { Component } from '@angular/core';
import {Article} from './article/article.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 0),
      new Article('Angular 2', 'http://angular.io', 0),
      new Article('Angular 2', 'http://angular.io', 0),
      ];
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
  sortArticle(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
