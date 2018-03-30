import dotenv from 'dotenv';
import dbFactory from '../db';

dotenv.config();
const db = dbFactory(process.env.DB_HOST);

db.import('../db/models/DailyFoodGoal');
db.import('../db/models/Day');
db.import('../db/models/Ingredient');
db.import('../db/models/Meal');
db.import('../db/models/MealPlan');
db.import('../db/models/MealTime');
db.import('../db/models/Rating');
db.import('../db/models/Recipe');
db.import('../db/models/RecipeIngredient');
db.import('../db/models/ServingUnit');
db.import('../db/models/Tag');
db.import('../db/models/User');

db.sync({force: true}).then(() => {
  console.log('\n✨ Done! ✨');
  process.exit();
});
