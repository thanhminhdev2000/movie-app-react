export interface Movie {
  id: number;
  title: string;
  release_date: string;
  runtime: number;
  mpaa_rating: string;
  description: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
}
