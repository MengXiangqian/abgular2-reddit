export class Article {
  votes: number;
  title: string;
  link: string;
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  voteUp() {
    this.votes += 1;
    return false;
  }
  voteDown() {
    this.votes -= 1;
    return false;
  }
}
