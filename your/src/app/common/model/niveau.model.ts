import { Article } from './article.model';

export class Niveau {
  code: string;
  label: string;
  articles: Array<Article>;
  niveaux: Array<Niveau>;
}
