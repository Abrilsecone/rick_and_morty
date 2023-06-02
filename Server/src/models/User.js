const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {  //(pepito) <-esto es el parametro de la instancia de pepito, puede tener cualquier nombre.
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true //tiene que tener formato de email
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      },

   },
   { timestamps: false });
};
