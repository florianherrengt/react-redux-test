import React from 'react';

const headerLeft = <p>Build your own meals based on your needs</p>;
const contentLeft = (
    <p>
        FoodPlanMate will help you to correctly balance your meals everyday.
        It uses a unique advanced search feature allowing you to retrieve foods with similar composition
        (if you’re tired of eating green beans and want to try something new for instance)
        or target specific protein/carbs/fat values.
        <br />
        This way, after you entered all the foods you’re about to cook,
        if you’re missing some proteins or use too much carbs;
        FoodPlanMate will warn you and you will be able to either change the quantities,
        add a new food or delete one to balance your meal.
    </p>
);
const headerRight = (<p>Get tailored suggestions based on your habits</p>);
const contentRight = (
    <p>
        This way, after you entered all the foods you’re about to cook,
        if you’re missing some proteins or use too much carbs;
        FoodPlanMate will warn you and you will be able to either change the quantities,
        add a new food or delete one to balance your meal.
        <br />
        The more you use it, the more it will know you.
        After some time, it will know that you usually go to your favourite sushi place each Monday
        and will thus present you some meals including food from this sushi place as a suggestion for your Monday meal.
    </p>
);

export default {
    headerLeft,
    contentLeft,
    headerRight,
    contentRight
};
