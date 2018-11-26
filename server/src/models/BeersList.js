module.exports = (sequelize, DataTypes) => {
  const BeersList = sequelize.define('BeersList', {
    beerName: DataTypes.STRING,
    beerStyle: DataTypes.STRING,
    beerDescription: DataTypes.TEXT,
    abv: DataTypes.STRING,
    ibu: DataTypes.STRING
  })

  BeersList.associate = function (models) {
    BeersList.belongsTo(models.BreweryList, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  return BeersList
}
