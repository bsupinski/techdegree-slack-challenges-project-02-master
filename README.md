
# ![Treehouse Island Inc. Logo](https://3wga6448744j404mpt11pbx4-wpengine.netdna-ssl.com/wp-content/uploads/2018/05/Treehouse-logo_Social-150x150.png "Treehouse Island Inc. Logo") Techdegree F.E.W.D. Slack Challenge Project 02

## Randomized Meal Planner

### **Overview**

---
Create a randomized meal planner that you can use to generate a weekly meal plan for the week.

### **Instructions**

---

The HTML and CSS files are already set up for you. The JavaScript file contains references to the various elements on the page as well as predefined functions and an event listener for the show plan button. You will use JavaScript to complete the tasks. There is also a mockup file that shows how the page should look when the `Show Plan` button is pressed. The complete folder contains an example of the completed project.

1. Using the `getDay()` function, you will need to return the current day so that you can use the function to display today's day e.g. in the format 'Monday'.

2. Using the `getRandomWeeklyMeals()` function, you will need to randomize the `meals` array and return it back using a function call in the program.

3. Using the `displayWeeklyMealPlan()` function, you will need to create a new list item for every meal and append it to the DOM using the `mealList` element.

4. Using the `showPlan()` function, you will need to call the `displayWeeklyMealPlan()` function, add the class `slideUp` to the headline element, change the tagline content so it reads "Here's your weekly meal plan!", remove the class `hidden` from the planDiv element, and remove the startButton element from the page. If you want to match the mockup version of the page, you will need to use JavaScript to change the CSS for the headline element by setting the bottom `margin` to `0` and change the `font-size` to `3em`. You will also need to remove the top `margin` from the tagline element.

#### Bronze Challenge

The CSS is a bit plain for the plan display. Add some nice touches to the plan display to liven up the readability of the meals. This can be anything you would like to add! Such as a bottom border for each list item.

#### Silver Challenge

Create a modal preview window that shows additional information for the meal, e.g. show the receipe to cook the dish.

#### Gold Challenge

Restructure your `meals` array to contain cheap dishes and fancy dishes. Using the newly structured array, you will show 6 cheap dishes and 1 fancy dish to complete the meal plan for the week. To do this, you will need to ammend your `getRandomWeeklyMealMeals()` function so that it can select 6 random cheap dishes and 1 random fancy dish and combine the 7 dishes together into a new array returned by the function. 

The *complete* folder contains an example of the completed project that you can compare with when you have finished to see the different solutions.

Make sure to share your completed project on slack and feel free to collaborate with others on it. Have fun!