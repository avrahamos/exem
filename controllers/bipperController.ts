import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.post("/beepers", async (req: Request, res: Response) => {
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

router.get("/beepers", async (req: Request, res: Response) => {
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
router.get("/beepers/status/:status", async (req: Request, res: Response) => {
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
router.patch("/beepers/:id/status", async (req: Request, res: Response) => {
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
router.delete("/beepers/:id", async (req: Request, res: Response) => {
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
router.get("/beepers/:id", async (req: Request, res: Response) => {
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
