// src/models/User.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';

class User extends Model {}

User.init({
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
}, {
  sequelize,
  modelName: 'user'
});

export default User;
