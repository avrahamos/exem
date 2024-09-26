import { beeper, Beeper } from "../models/bipperModel";
import { BeeperDto } from "../DTO/beeperDto";
import { getFileData, saveFileData } from "../config/fileDataLayers";

export class beeperService {
  public static async createNewBeeper(
    newBeeperDto: BeeperDto
  ): Promise<boolean> {
    const { name, status } = newBeeperDto;
    const newBeeper = new beeper(name, status);
    let beeperes = await getFileData("beeper");
    if (!beeperes) beeperes = [];
    beeperes.push(newBeeper);
    return await saveFileData("beeper", beeperes);
  }
  public static async getAllBeepers(): Promise<beeper[]> {
    let beeperes: beeper[] = (await getFileData("beeper")) as beeper[];
    if (!beeperes) beeperes = [];
    return beeperes;
  }

  public static async getBeeperById(id: number): Promise<beeper | null> {
    const beepers = await this.getAllBeepers();
    return beepers.find((b: beeper) => b.id === id) || null;
  }

  //   public static async updateBeeperStatus(
  //     id: number,
  //     newStatus: string
  //   ): Promise<boolean> {
  //     let beepers = await this.getAllBeepers();
  //     const beeperIndex = beepers.findIndex((b: beeper) => b.id === id);
  //     if (beeperIndex === -1) return false;

  //     beepers[beeperIndex].status = newStatus;
  //     return await saveFileData("beeper", beepers);
  //   }

  //   public static async deleteBeeper(id: number): Promise<boolean> {
  //     let beepers = await this.getAllBeepers();
  //     const updatedBeepers = beepers.filter((b: beeper) => b.id !== id);

  //     if (updatedBeepers.length === beepers.length) return false;

  //     return await saveFileData("beeper", updatedBeepers);
  //   }

  //   public static async getBeepersByStatus(status: string): Promise<beeper[]> {
  //     let beepers = await this.getAllBeepers();
  //     return beepers.filter((b: beeper) => b.status === status);
  //   }
}
