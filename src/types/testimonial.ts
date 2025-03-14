export interface Testimonial {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
  rating?: number; // El rating no viene de la API, lo generamos aleatoriamente
  avatar?: string;
}
