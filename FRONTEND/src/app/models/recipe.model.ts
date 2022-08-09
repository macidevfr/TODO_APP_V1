export type Recipe = {
  id: number;
  description?: string;
  ingredients?: string[];
  category?: string;
  title: string;
  price: number;
  link: string;
  time_minutes: number;
};
