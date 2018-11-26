const { UsersBeerList } = require('../models')
const { User } = require('../models')
const { FriendsList } = require('../models')

module.exports = {
  // Find all wish lists in the dayabase
  async userDisplay (req, res) {
    try {
      console.log(req.params.user)
      const displayUser = await User.findAll({
        where: {
          userName: req.params.user
        },
        include: [UsersBeerList, FriendsList]
      })
      console.log(displayUser)
      res.send(displayUser)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to fetch the wish lists'
      })
    }
  }
}
