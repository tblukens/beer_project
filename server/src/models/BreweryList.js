module.exports = (sequelize, DataTypes) => {
  const BreweryList = sequelize.define('BreweryList', {
    breweryName: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING
  })

  BreweryList.associate = function (models) {
    BreweryList.hasMany(models.BeersList, {})
  }

  return BreweryList
}
