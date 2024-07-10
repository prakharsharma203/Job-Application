const JobModel = require("../model/jobModel");

const createJobs = async (req, res) => {
  try {
    const newlyInsertJob = await JobModel.create(req.body);
    // console.log(req.body);
    // console.log(newlyInsertJob);
    res.json({
      success: true,
      message: "Job created successfully",
    });
  } catch {
    res.json({
      success: false,
      message: "Something went wrong, please try again after sometime",
    });
  }
};

const listJobs = async (req,res) => {
  const joblist = await JobModel.find()
  res.json({
    success: true,
    message: "Jobs listed successfully",
    results: joblist,
  });
};

const updateJobs = async (req,res) => {
  try{
    const jobId = req.params.id;
    const updateObj = {
      $set: req.body,
    };
    const response = await JobModel.findByIdAndUpdate(jobId,updateObj)
    res.json({
      success: true,
      message: "Jobs updated successfully",
    });
  }catch(err){
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after sometime",
      error: err.message,
      });
  }
};

const deleteJobs = async (req,res) => {
  try{
    const jobIds = req.params.id;
    const response = await JobModel.findByIdAndDelete(jobIds)
    res.json({
      success: true,
      message: "Jobs deleted successfully",
    });
  }catch(err){
    res.status(500).json({
      success: false,
      message: "Something went wrong, please try again after sometime",
      error: err.message,
      });
  }
};

const jobController = {
  createJobs,
  listJobs,
  updateJobs,
  deleteJobs,
};
module.exports = jobController;
