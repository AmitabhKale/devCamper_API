

// @desc      Get all bootcamps
// @route     GET /api/v1/bootcamps
// @access    Public
const getBootcamps = (req,res) => {
    res.status(200).json({
        success: true,
        msg: 'Show all Bootcamps'
    })
}

// @desc      Get bootcamp by Id
// @route     GET /api/v1/bootcamp/:id
// @access    Public
const getBootcampById = (req,res) => {
    res.status(200).json({
        success: true,
        msg: `Show Bootcamp ${req.params.id}`
    })
}

// @desc      Create bootcamp
// @route     POST /api/v1/bootcamp
// @access    Private
const createBootcamp = (req,res) => {
    res.status(200).json({
        success: true,
        msg: 'Create New Bootcamp'
    })
}

// @desc      Update bootcamps
// @route     PUT /api/v1/bootcamps/:id
// @access    Private
const updateBootcamp = (req,res) => {
    res.status(200).json({
        success: true,
        msg: `Update Bootcamp ${req.params.id}`
    })
}

// @desc      DELETE bootcamps
// @route     DELETE /api/v1/bootcamps/:id
// @access    Private
const deleteBootcamp = (req,res) => {
    res.status(200).json({
        success: true,
        msg: `Delete Bootcamp ${req.params.id}`
    })
}

module.exports = {
    getBootcamps,
    getBootcampById,
    createBootcamp,
    updateBootcamp,
    deleteBootcamp
}