// Use controller to declare all endpoints associated with that controller
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const WishListsController = require('./controllers/WishListsController')
const UserController = require('./controllers/UserController')
const FriendsController = require('./controllers/FriendsController')
const UserBeerController = require('./controllers/UserBeerController')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)
  // A login endpoint which calls the AuthenticationController.login method
  app.post('/login',
    AuthenticationController.login)

  app.get('/wishlists',
    WishListsController.index)

  app.post('/wishlists',
    WishListsController.post)

  app.get('/user/:user',
    UserController.userDisplay)

  app.post('/friends/add',
    FriendsController.addFriend)

  app.post('/beer/user/add',
    UserBeerController.addBeer)
}
