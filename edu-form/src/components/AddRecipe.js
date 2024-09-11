import React, { useState, useContext } from 'react';
import { RecipeContext } from './RecipeContext';

export const AddRecipe = () => {
	const [name, setName] = useState('');
	const [ingredients, setIngredients] = useState('');
	const [instructions, setInstructions] = useState('');
	const { addRecipe } = useContext(RecipeContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		addRecipe({
			id: Math.floor(Math.random() * 10000),
			name,
			ingredients,
			instructions,
		});
		setName('');
		setIngredients('');
		setInstructions('');
	};

	return (
		<form onSubmit={handleSubmit} className="recipe-form">
			<div className="form-group">
				<label htmlFor="name">Recipe Name:</label>
				<input
					type="text"
					id="name"
					className="form-control"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="ingredients">Ingredients:</label>
				<textarea
					id="ingredients"
					className="form-control"
					value={ingredients}
					onChange={(e) => setIngredients(e.target.value)}
				/>
			</div>
			<div className="form-group">
				<label htmlFor="instructions">Instructions:</label>
				<textarea
					id="instructions"
					className="form-control"
					value={instructions}
					onChange={(e) => setInstructions(e.target.value)}
				/>
			</div>
			<button type="submit">Add Recipe</button>
		</form>
	);
};
