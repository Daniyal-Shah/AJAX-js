function getRecipe()
{
    setTimeout(()=>{
        const recipeID=[222,124,454,321];
        console.log(recipeID);

        setTimeout((id)=>
        {
            const recipe={title:"biryani", chief:"daniyal"}
            console.log( `${id} : ${recipe.title}` )

            setTimeout(chief=>{
                const recipe2={title:"karahi", chief:"daniyal"}
                console.log( recipe2 );
            },1000, recipe.chief )

        },1000, recipeID[2]);

    },1500)
}
getRecipe();