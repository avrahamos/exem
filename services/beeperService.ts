import { beeper, Beeper, BeeperStatus } from "../models/bipperModel";
import { BeeperDto } from "../DTO/beeperDto";
import { getFileData, saveFileData } from "../config/fileDataLayers";

export class beeperService {
  public static async createNewBeeper(
    newBeeperDto: BeeperDto
  ): Promise<boolean> {
    const { name } = newBeeperDto;
    const newBeeper = new beeper(name);
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

  public static async getBeeperById(id: string): Promise<Beeper | null> {
    let beepers = (await getFileData("beeper")) as beeper[];
    const beeper = beepers.find((b: Beeper) => b.id == id);

    return beeper || null;
  }

  public static async getBeepersByStatus(
    status: BeeperStatus
  ): Promise<Beeper[]> {
    let beepers: beeper[] = (await getFileData("beeper")) as beeper[];
    return beepers.filter((b: Beeper) => b.status === status);
  }

  public static async updateBeeperStatus(
    id: string,
    newStatus: BeeperStatus,
    latitude?: number,
    longitude?: number
  ): Promise<Beeper | null> {
    let beepers = (await getFileData("beeper")) as beeper[];
    const beeperIndex = beepers.findIndex((b: Beeper) => b.id === id);

    if (beeperIndex === -1) {
      return null;
    }

    beepers[beeperIndex].status = newStatus;

    if (newStatus === BeeperStatus.Deployed) {
      if (latitude && longitude) {
        beepers[beeperIndex].latitude = latitude;
        beepers[beeperIndex].longitude = longitude;
      }

      setTimeout(async () => {
        beepers[beeperIndex].status = BeeperStatus.Detonated;
        beepers[beeperIndex].detonated_at = new Date();
        await saveFileData("beeper", beepers);
      }, 10000);
      return beepers[beeperIndex];
    }

    await saveFileData("beeper", beepers);
    return beepers[beeperIndex];
  }
  public static async deleteBeeper(id: string): Promise<boolean> {
    let beepers: beeper[] = (await getFileData("beeper")) as beeper[];

    const updatedBeepers: beeper[] = beepers.filter((b: Beeper) => b.id !== id);

    if (updatedBeepers.length === beepers.length) {
      return false;
    }

    await saveFileData("beeper", updatedBeepers);
    return true;
  }
}
