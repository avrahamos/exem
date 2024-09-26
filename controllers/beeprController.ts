import express, { Router, Request, Response } from "express";
import { BeeperDto } from "../DTO/beeperDto";
import { beeperService } from "../services/beeperService";
import { beeper, Beeper, BeeperStatus } from "../models/bipperModel";

const router: Router = express.Router();

router.post(
  "/beepers",
  async (req: Request<any, any, BeeperDto>, res: Response): Promise<void> => {
    try {
      await beeperService.createNewBeeper(req.body);
      res.json({
        erorr: false,
        messege: "TRUE",
        data: undefined,
      });
    } catch (error) {
      res.status(400).json({
        error: true,
        messege: "erororororororoororororororororororoorororororororo",
        data: null,
      });

      console.error(error);
    }
  }
);

router.get("/beepers", async (req: Request, res: Response): Promise<void> => {
  try {
    const beepers: beeper[] = await beeperService.getAllBeepers();

    if (!beepers) {
      res.status(404).json({
        error: true,
        message: "Beepers not found",
        data: null,
      });
    }
    res.status(200).json({
      error: false,
      message: "Beeper retrieved successfully",
      data: beepers,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      messege: "erororororororoororororororororororoorororororororo",
      data: null,
    });

    console.error(error);
  }
});
router.get("/beepers/status/status", async (req: Request, res: Response) => {
  try {
    res.json({
      erorr: false,
      messege: "TRUE",
      data: undefined,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      messege: "erororororororoororororororororororoorororororororo",
      data: null,
    });

    console.error(error);
  }
});
router.patch(
  "/beepers/:id/status",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id;
      const { status } = req.body;

      if (!Object.values(BeeperStatus).includes(status)) {
        console.log("1");
        res.status(400).json({
          error: true,
          message: "Invalid status",
          data: null,
        });
      }

      const updatedBeeper = await beeperService.updateBeeperStatus(id, status);

      if (!updatedBeeper) {
        console.log("2");
        res.status(404).json({
          error: true,
          message: "Beeper not found ",
          data: null,
        });
      }

      res.status(200).json({
        error: false,
        message: "Beeper status updated successfully",
        data: updatedBeeper,
      });
      console.log("3");
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "Server error while updating beeper status",
        data: null,
      });
    }
  }
);
router.delete(
  "/beepers/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const id: string = req.params.id;

      const success = await beeperService.deleteBeeper(id);

      if (!success) {
        res.status(404).json({
          error: true,
          message: "Beeper not found ",
          data: null,
        });
      }

      res.status(200).json({
        error: false,
        message: "Beeper deleted successfully",
        data: null,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "Server error while deleting beeper",
        data: null,
      });
    }
  }
);
router.get(
  "/beepers/:id",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const beeper = await beeperService.getBeeperById(req.params.id);

      if (!beeper) {
        res.status(404).json({
          error: true,
          message: "Beeper not found",
          data: null,
        });
      }

      res.status(200).json({
        error: false,
        message: "Beeper retrieved successfully",
        data: beeper,
      });
    } catch (error) {
      res.status(500).json({
        error: true,
        message: "Server error while retrieving beeper",
        data: null,
      });
    }
  }
);

export default router;
