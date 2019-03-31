export interface User {
  id: string;
  name: string;
  age: string;
  sex: string;
  location: string;
  rating: number;
  thumbnail: string;
}

export interface SwimmingLane {
  id: string;
  title: string;
  users: User[];
  enabled: boolean;
}