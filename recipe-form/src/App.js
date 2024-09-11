import React from 'react';
import { RecipeProvider } from './components/RecipeContext';
import { AddRecipe } from './components/AddRecipe';
import { RecipeList } from './components/RecipeList';
import "./App.css";

function App() {
	return (
		<RecipeProvider>
			<div>
				<h1>Sanji's Recipes</h1>
				<AddRecipe />
				<RecipeList />
			</div>
		</RecipeProvider>
	);
};

export default App;




