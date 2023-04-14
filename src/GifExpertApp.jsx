import { useState } from "react";
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Jojos']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }

  //1GNh3srYNrBeueFhcxGOaZd0kKq3Pk3h
  //CLASE 77
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={e => onAddCategory(e)}/>
        {categories.map((category) => <GifGrid key={category} category={category}/>)}
    </>
  )
}
