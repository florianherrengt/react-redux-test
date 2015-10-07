import React from 'react';

const headerLeft = <p>Keep track on what you eat based on your goal</p>;
const contentLeft = (
    <p>
        You can setup your goal to either body fat loss; balance or muscle gain.
        Based on your goal;
        <br />
        FoodPlanMate will tell you how much you can eat during the day and in which proportions.
        As it is also a food diary;
        it will know what you already ate and thus tell you what you can still eat for the rest of the day.
    </p>
);
const headerRight = (<p>Write your recipe book and share it</p>);
const contentRight = (
    <p>
        Enter all the ingredients you used and their quantities. Then, when it’s all done;
        you just have to either enter its weight or how many portions it will be cut into.
        <br />
        FoodPlanMate will then automatically calculate all proteines,
        carbs and fat that’s inside for one portion and add it to your personal food database
        for you to use later just like any other food.
    </p>
);

export default {
    headerLeft,
    contentLeft,
    headerRight,
    contentRight
};
