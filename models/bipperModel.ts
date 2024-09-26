export interface Beeper {
  id: number;
  name: string;
  status: string;
  created_at: Date;
  detonated_at?: Date;
  latitude?: number;
  longitude?: number;
}
export class beeper {
  public id: number;
  public detonated_at?: Date;
  public latitude?: number;
  public longitude?: number;
  public created_at: Date;
  constructor(public name: string, public status: string) {
    this.id = randomInt(1, 10000);
    this.created_at = new Date();
  }
}

const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
