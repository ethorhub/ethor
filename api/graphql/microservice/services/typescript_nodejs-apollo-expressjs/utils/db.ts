import { Sequelize, Model, STRING } from "sequelize";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: ":memory:"
});
class User extends Model {}
User.init(
  {
    // attributes
    firstName: {
      type: STRING,
      allowNull: false
    },
    lastName: {
      type: STRING
      // allowNull defaults to true
    }
  },
  {
    sequelize,
    modelName: "users"
    // options
  }
);

User.sync({ force: true }).then(() => {
  // Now the `users` table in the database corresponds to the model definition
  User.create({
    firstName: "John",
    lastName: "Hancock"
  });
  // Find all users
  User.findAll().then(users => {
    console.log("All users:", JSON.stringify(users, null, 4));
  });
  // Create a new user
  User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
    console.log("Jane's auto-generated ID:", jane.id);
  });
});
