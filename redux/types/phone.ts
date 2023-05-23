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
  photo: string;
  releaseDate?: string;
  price?: number;
  ratings?: number;
  author?: Author;
  review?: Review;
};

export type ComparePhone = {
  phone1: Phone;
  phone2: Phone;
};

export type CompareData = {
  phoneOne: string;
  phoneTwo: string;
};

export type Company = {
  id: number;
  company: string;
  phone: Phone[];
};

export type Companies = Company[];
