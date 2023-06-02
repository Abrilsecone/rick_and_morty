require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(`postgres:${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize)
UserModel(sequelize)
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;
   User.belongsToMany(Favorite, {through: 'user_favorite'}) //asi se relacionan los moedelos. para cuando son de muchos a muchos
   Favorite.belongsToMany(User, {through: 'user_favorite'})  //un usuario puede tener muchos favoritos y estos dos modelos se van a relacionar por este modelo de tabla.
//la relacion de uno a muchos es asi 

module.exports = {     
    User,
    Favorite,
   conn: sequelize,
};
