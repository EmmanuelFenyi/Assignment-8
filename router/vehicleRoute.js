const router = require("express").Router();
const vehicleController = require("../controllers/vehicleController");

router
  .get("/", vehicleController.AllVehicles)
  .get("/:id", vehicleController.getVehicle);

router.post("/", vehicleController.createVehicle);
router.patch("/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);

module.exports = router;
