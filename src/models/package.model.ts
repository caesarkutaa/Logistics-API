// src/models/Package.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/config';

class Package extends Model {}

Package.init({
  packagename: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING, 
    allowNull: false,
  },
  pickupDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize,
  modelName: 'package'
});

export default Package;

