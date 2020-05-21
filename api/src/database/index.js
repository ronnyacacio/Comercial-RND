import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Product from '../app/models/Product';
import User from '../app/models/User';
import Customer from '../app/models/Customer';
import File from '../app/models/File';

const models = [Product, User, Customer, File];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
