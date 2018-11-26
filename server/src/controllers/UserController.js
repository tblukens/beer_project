const { User } = require('../models')

module.exports = {
  // Find all wish lists in the dayabase
  async userDisplay (req, res) {
    try {
      const displayUser = await User.findOne({
        where: {
          userName: req.params.user
        },
        include: ['beers', 'friends']
      })
      res.send(displayUser)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the user'
      })
    }
  }
}
