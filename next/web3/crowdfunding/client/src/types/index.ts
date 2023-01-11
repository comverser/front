export interface Field {
  name: string;
  title: string;
  description: string;
  target: string;
  deadline: string;
  image: string;
}

export interface Campaign extends Omit<Field, 'name'> {
  id: string;
  pId: number;
  owner: string;
  amountCollected: string;
}
