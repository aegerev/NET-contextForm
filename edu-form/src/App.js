import React from 'react';
import { RecipeProvider } from './components/RecipeContext';
import { AddRecipe } from './components/AddRecipe';
import { RecipeList } from './components/RecipeList';

function App() {
	return (
		<RecipeProvider>
			<div>
				<h1>My Recipe App</h1>
				<AddRecipe />
				<RecipeList />
			</div>
		</RecipeProvider>
	);
};

export default App;




