const Bootcamp = require('../models/bootcampModel')

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
const getBootcamps = async (req,res) => {
    try {
        const bootcamps = await Bootcamp.find();
    
        res
          .status(200)
          .json({ success: true, count: bootcamps.length, data: bootcamps });
      } catch (err) {
        res.status(400).json({ success: false });
      }
}

// @desc      Get bootcamp by Id
// @route     GET /api/v1/bootcamp/:id
// @access    Public
const getBootcampById = async (req,res) => {

    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        res.status(200).json({
            success: true,
            data: bootcamp
        })

    } catch (error) {
        res.status(404).json({
            success: false
        })
    }
   
}

// @desc      Create bootcamp
// @route     POST /api/v1/bootcamp
// @access    Private
const createBootcamp = async (req,res) => {
    try {
        const bootcamp = await Bootcamp.create(req.body)
        res.status(201).json({
            success: true,
            data: bootcamp
        })
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

// @desc      Update bootcamps
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
const updateBootcamp = async (req,res) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if(!bootcamp){
            return res.status(400).json({ success: false })
        }

        res.status(200).json({ success: true, data: bootcamp })


    } catch (error) {
        res.status(400).json({ success: false })
    }
}

// @desc      DELETE bootcamps
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
const deleteBootcamp = async (req,res) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    
        if (!bootcamp) {
          return res.status(400).json({ success: false });
        }
    
        res.status(200).json({ success: true, data: {} });
      } catch (err) {
        res.status(400).json({ success: false });
      }
    }

module.exports = {
    getBootcamps,
    getBootcampById,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
}