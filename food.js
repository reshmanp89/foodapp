
function foodData()
{
    foodname=searchinput.value
    console.log(foodname)
    fetch(` https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`)
    .then(data=>data.json()).then(data=>displayData(data))
    

}
function displayData(mealData)
{
    mealname=mealData.meals[0].strMeal
   
    instra=mealData.meals[0].strInstructions
    photomeal=mealData.meals[0].strMealThumb
    category=mealData.meals[0].strCategory
    place=mealData.meals[0].strArea
    youtube=mealData.meals[0].strYoutube
    photo.innerHTML= `<img src="${photomeal}" class="card-img-top" alt="..." >`

    foodtype.innerHTML=`${mealname}`
    instruction.innerHTML=`<strong>Preparation:-</strong>${ instra}`
    categoryname.innerHTML=`<strong>Category:-</strong>${category}`
    area.innerHTML=`<strong>Area:-</strong>${place}`
    utube.innerHTML=` <a href="${youtube}">watch video</a>`
    
}
