// const { User } = require('../models')
const { UsersBeerList } = require('../models')

module.exports = {
  async addBeer (req, res) {
    try {
      console.log(req.body)
      const addUsersBeer = await UsersBeerList.create({
        beerName: req.body.beerName,
        beerStyle: req.body.beerStyle,
        beerDescription: req.body.beerDescription,
        abv: req.body.abv,
        ibu: req.body.ibu,
        breweryId: req.body.BreweryListId,
        userId: req.body.userId
      })
      console.log(addUsersBeer)
      res.send(addUsersBeer)
    } catch (err) {
      res.send(res.status)
    }
  }
}
