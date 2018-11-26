module.exports = (sequelize, DataTypes) => {
  const UsersBeerList = sequelize.define('UsersBeerList', {
    beerName: DataTypes.STRING,
    beerStyle: DataTypes.STRING,
    beerDescription: DataTypes.TEXT,
    abv: DataTypes.STRING,
    ibu: DataTypes.STRING,
    breweryId: DataTypes.STRING
  })

  UsersBeerList.associate = function (models) {
    UsersBeerList.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  }

  return UsersBeerList
}
