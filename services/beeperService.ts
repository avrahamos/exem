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
}
