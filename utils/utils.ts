import { getFileData } from "../config/fileDataLayers";

export const getAllBippers = async (): Promise<any[]> => {
  try {
    const beepers = await getFileData("beeper");
    return beepers || [];
  } catch (error) {
    console.error("Error fetching all beepers:", error);
    return [];
  }
};

export const isNull = (value: any): boolean => {
  return value === null || value === undefined;
};
