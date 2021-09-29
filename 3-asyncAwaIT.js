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


async function getRecipiesAW()
{
    const IDs= await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);

    const chief= await getRelated("daniyal");
    console.log(chief);

    return recipe;

}

getRecipiesAW().then(result=>{
    console.log("Result: "+ result);
});