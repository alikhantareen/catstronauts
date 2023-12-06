const Track = require('../Models/Tracks')

async function getAllTracks(req, res) {
  try {
    const tracks = await Track.find({})
    return res.status(200).json({
      success: true,
      tracks
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Something went wrong. Try again`,
      error
    })
  }
}

async function getSingleTrack(req, res) {
  try {
    const { id } = req.params
    const track = await Track.find({ id: id })
    return res.status(200).json({
      success: true,
      track
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Something went wrong. Try again`,
      error
    })
  }
}

module.exports = {
  getAllTracks,
  getSingleTrack
}
