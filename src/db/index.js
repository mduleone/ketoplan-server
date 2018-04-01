import Sequelize from 'sequelize';

const dbFactory = (dbHost) => {
  const db = new Sequelize(dbHost);
  const models = {
    DailyFoodGoal: db.import('./models/DailyFoodGoal'),
    Day: db.import('./models/Day'),
    Ingredient: db.import('./models/Ingredient'),
    Meal: db.import('./models/Meal'),
    MealPlan: db.import('./models/MealPlan'),
    MealTime: db.import('./models/MealTime'),
    Rating: db.import('./models/Rating'),
    Recipe: db.import('./models/Recipe'),
    RecipeIngredient: db.import('./models/RecipeIngredient'),
    ServingUnit: db.import('./models/ServingUnit'),
    Tag: db.import('./models/Tag'),
    User: db.import('./models/User'),
  };

  return {
    db,
    models,
  };
};

export default dbFactory;
