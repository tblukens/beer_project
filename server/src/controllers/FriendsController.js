// const { User } = require('../models')
const { FriendsList } = require('../models')

module.exports = {
  async addFriend (req, res) {
    try {
      console.log(req.body)
      const addFriend = await FriendsList.create({
        friendsId: req.body.friendsId,
        friendsUserName: req.body.friendsUserName,
        userId: req.body.userId
      })
      console.log(addFriend)
      res.send(addFriend)
    } catch (err) {
      res.send(res.status)
    }
  }
}
