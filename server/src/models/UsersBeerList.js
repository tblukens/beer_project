module.exports = (sequelize, DataTypes) => {
  const UsersBeerList = sequelize.define('UsersBeerList', {
    beerName: DataTypes.STRING,
    beerId: DataTypes.STRING
  })

  UsersBeerList.associate = function (models) {
    UsersBeerList.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }

  return UsersBeerList
}
