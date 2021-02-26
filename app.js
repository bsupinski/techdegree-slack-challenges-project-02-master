// VARIABLES
const main = document.querySelector('main');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const startButton = document.getElementById('startButton');
const planDiv = document.querySelector('.plan');
const mealList = document.getElementById('meals');
const name = prompt('Please enter your name.'); // Assign your name
const meals = {
    'Fancy': [
      'Sweet potato and chicken traybake',
      'Green biryani with crispy onions',
      'Stuffed butternut squash',
      'Salmon hash',
      'Saag aloo pancakes',
      'Tomato and pesto spaghetti',
      'Fish and veggie parcels with couscous',
      'Spicy corn and chickpea burgers',
      'Chilli beef and bean stir fry',
      'Charred corn and halloumi pancakes',
      'Cauliflower and bean chilli',
      'Kitchiri',
      'Baked cod with a tangy topping',
      'Lemon-roasted Greek cheese and broccoli with orzo',
      'Salt and pepper tofu',
      'Roasted plaice with fennel and tomatoes',
      'Masala fish and chips with mushy peas',
      'Carrot and feta burgers',
      'One-put Southwest chicken',
      'Smoky Mexican chicken traybake',
      'Slow-Cooked Caribbean Pot Roast',
      'Golden Summer Peach Gazpacho',
      'Chicken Florentine Meatballs'
    ],
    'Cheap': [
      'Tuna with Whole-Wheat or Multigrain Pasta or Jacket Potato',
      'Tortilla wraps or Burritos with avocado, salsa and black beans',
      'Pilau rice with brocolli, ',
      'Marinated Kale salad with cherry tomatoes and pepitas',
      'Chili con carne',
      'Spinach and Brocolli Enchiladas',
      'Seasoned Tilapia Fillets',
      'Egg Roll Noodle Bowl',
      'Asparagus Ham Dinner'
    ]
  }; // Add in some meals...

// HELPER FUNCTIONS
const getDay = () => {
    var date = new Date();
    var day = date.getDay();
    const weekDays =['Sunday', 'Monday', 'Tuesday', 'Wednseday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[day];
};

const getRandomWeeklyMeals = () => {
    const cheapMeals = meals.Cheap.sort().slice(0,6);
    const fancyMeals = meals.Fancy.sort().slice(0,1);
    const randomMealList = cheapMeals.concat(fancyMeals);
    return randomMealList;
};

const displayWeeklyMealPlan = () => {
    for ( let i= 0; i < randomMealList.length; i++){
        let li = document.createElement('li');
        li.textContent = randomMealList[i];
        mealList.appendChild(li);
    }
};

const randomMealList = getRandomWeeklyMeals();

const showPlan = () => {
    displayWeeklyMealPlan(randomMealList);
    headline.classList.add('slideup');
    planDiv.classList.remove('hidden');
    headline.style =`margin-top: 0; font-size: 3em`;
    tagline.style.marginTop = '0';
    tagline.textContent = 'Your meal plan'
    main.removeChild(startButton);
};

headline.textContent = getDay();
tagline.textContent = `Hey ${name}, click the button below to see your weekly meal planner.`;

// EVENT LISTENERS
startButton.addEventListener('click', showPlan);


