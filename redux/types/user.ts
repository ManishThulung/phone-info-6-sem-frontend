export type User = {
  id: number;
  name: string;
  email: number;
};

export type LoginData = {
  email: string;
  password: string;
};

export type AccessToken = {
  access_token: string;
  role: string;
  id: number;
};
