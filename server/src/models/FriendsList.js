module.exports = (sequelize, DataTypes) => {
  const FriendsList = sequelize.define('FriendsList', {
    friendsId: DataTypes.STRING,
    friendsUserName: DataTypes.STRING
  })

  FriendsList.associate = function (models) {
    FriendsList.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }

  return FriendsList
}
