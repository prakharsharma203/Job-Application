const express = require("express");

const jobController = require("../controller/jobController")

const router = express.Router();

router.post("/api/jobs",jobController.createJobs);

router.get("/api/jobs", jobController.listJobs)

router.put("/api/jobs/:id", jobController.updateJobs)

router.delete("/api/jobs/:id", jobController.deleteJobs)

module.exports = router