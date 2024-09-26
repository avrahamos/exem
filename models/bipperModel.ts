import { v4 } from "uuid";

export enum BeeperStatus {
  Manufactured = "manufactured",
  Assembled = "assembled",
  Shipped = "shipped",
  Deployed = "deployed",
  Detonated = "detonated",
}

export interface Beeper {
  id: string;
  name: string;
  status: BeeperStatus;
  created_at: Date;
  detonated_at?: Date;
  latitude?: number;
  longitude?: number;
}

export class beeper {
  public id: string;
  public status: BeeperStatus;
  public detonated_at?: Date;
  public latitude?: number;
  public longitude?: number;
  public created_at: Date;

  constructor(public name: string) {
    this.id = v4();
    this.status = BeeperStatus.Manufactured;
    this.created_at = new Date();
  }

  public setStatus(newStatus: BeeperStatus): void {
    this.status = newStatus;
  }
}
