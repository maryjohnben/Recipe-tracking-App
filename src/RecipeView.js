import React from "react";

export default function RecipeView({recipe, deleteHandle}) {
    
    return (
            <tr>
                <td><>{recipe.name}</></td>
                <td>{recipe.cuisine}</td>
                <td><img src={recipe.photo} 
                alt='food'
                style={{
                    objectFit: 'scale-down',
                    width: "100%",
                    height: "100%"}}>
                        </img></td>
                <td className='content_td'><p>{recipe.ingredients}</p></td>
                <td className='content_td'><p>{recipe.preparation}</p></td>
                <td>
                    <button  
                    name="delete" 
                    onClick={deleteHandle}>
                        Delete
                        </button> 
                        
                </td>
            </tr>
    )

}