type Author = {
  id: number;
  name: string;
  email: string;
  password?: string;
  role: string;
};

type Review = {
  id: number;
  review: string;
};

export type Phone = {
  id: number;
  name: string;
  company: string;
  camera: string;
  battery: string;
  memory: string;
  photo?: string;
  price?: number;
  author?: Author;
  review?: Review;
};
