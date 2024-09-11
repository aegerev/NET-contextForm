import React, { useContext } from 'react';
import { RecipeContext } from './RecipeContext';
import { RecipeCard } from './RecipeCard';

export const RecipeList = () => {
	const { recipes } = useContext(RecipeContext);

	if (recipes.length === 0) {
		return (
			<h2 style={{ textAlign: 'center' }}>You don't have any recipes yet.</h2>
		);
	}

	return (
		<div>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</div>
	);
};
