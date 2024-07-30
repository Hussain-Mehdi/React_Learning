import React from 'react'
import './FoodList.css'
import ListItem from '../List Item/ListItem'

const dishes = [
    {
      name: "Spaghetti Carbonara",
      ingredients: "Spaghetti, eggs, pancetta, Parmesan cheese, black pepper",
      price: 12.99
    },
    {
      name: "Chicken Tikka Masala",
      ingredients: "Chicken, tomato sauce, yogurt, spices, cream",
      price: 14.99
    },
    {
      name: "Sushi Roll",
      ingredients: "Rice, seaweed, raw fish, avocado, cucumber",
      price: 10.99
    },
    {
      name: "Tacos al Pastor",
      ingredients: "Pork, pineapple, onions, cilantro, corn tortillas",
      price: 9.99
    },
    {
      name: "Pad Thai",
      ingredients: "Rice noodles, shrimp, peanuts, bean sprouts, lime",
      price: 11.99
    },
    {
      name: "Beef Stroganoff",
      ingredients: "Beef, mushrooms, onions, sour cream, egg noodles",
      price: 13.99
    },
    {
      name: "Margherita Pizza",
      ingredients: "Pizza dough, tomatoes, mozzarella cheese, basil",
      price: 8.99
    },
    {
      name: "Falafel Wrap",
      ingredients: "Chickpeas, garlic, parsley, pita bread, tahini sauce",
      price: 7.99
    },
    {
      name: "Ratatouille",
      ingredients: "Eggplant, zucchini, bell peppers, tomatoes, onions",
      price: 10.49
    },
    {
      name: "Tom Yum Soup",
      ingredients: "Shrimp, mushrooms, lemongrass, kaffir lime leaves, chili",
      price: 9.49
    }
  ];
  
  

export default function FoodList() {
  return (
    <div className='food-list__container'>
      {
        dishes.map((dish)=>(<ListItem data={dish}/>))
      }
    </div>
  )
}
