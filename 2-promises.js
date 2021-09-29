const getIDs = new Promise((resolve, reject)=>
{
    setTimeout(()=>{
        resolve([222,124,454,321])
    },1500);
});

const getRecipe = recID =>{
   return new Promise((resolve, reject)=>
    {
        setTimeout(id=>{
            const recipe={title:"biryani", chief:"daniyal"}
            resolve( `${id} : ${recipe.title}`)
        },1500,recID);
    });    
}

const getRelated = publisher=>{

    return new Promise((resolve, reject)=>
    {
        setTimeout(pub=>{
            const recipe2={title:"karahi", chief:"daniyal"}
            resolve( `${pub} : ${recipe2.title}`)
        },1500,publisher);
    });    
}

getIDs.then((IDs)=>{
    console.log(IDs);
    return getRecipe(IDs[2]);
}).then((recipe)=>
{
    console.log(recipe);
    return getRelated('daniyal')
}).then((recipe)=>
{
    console.log(recipe);
})

getIDs.catch((error)=>{
    console.log("error");
})
