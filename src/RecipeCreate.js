import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {
  
  const initialForm = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  
  const [formData, setFormData] = useState({...initialForm})
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = ({target}) => {
    const value = target.value;
    setFormData({...formData, 
      [target.name]: value})
  }

  const submitHandle = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData])
    setFormData({...initialForm})
  }

  return (
    <form name="create" onSubmit={submitHandle}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
              id="name"
              name="name"
              placeholder="name"
              onChange={handleChange}
              required={true}
              value={formData.name}></input>
            </td>
            <td>
              <input 
              id="name"
              name="cuisine"
              placeholder="cuisine"
              onChange={handleChange}
              required={true}
              value={formData.cuisine}></input>
            </td>
            <td>
              <input 
              id="name"
              name="photo"
              type="url"
              placeholder="url"
              required={true}
              onChange={handleChange}
              value={formData.photo}></input>
            </td>
            <td>
              <textarea 
              id="name"
              name="ingredients"
              placeholder="ingredients"
              onChange={handleChange}
              required={true}
              value={formData.ingredients}></textarea>
              </td>
              <td>
              <textarea 
              id="name"
              name="preparation"
              placeholder="preparation"
              onChange={handleChange}
              required={true}
              value={formData.preparation}></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
