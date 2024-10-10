
const getAllFoods = async() =>{
  try{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data =  await res.json();
    displayAllFoods(data.categories);
  }
  catch(error){
    console.log(error);
  }
}

const displayAllFoods = (data) => {
  const foodContainer = document.getElementById('food-container');
  const showAllItem = document.getElementById('details-modal');
  showAllItem.addEventListener('click', () => {
    renderFoods(data); 
  });
  const renderFoods = (sliceData) => {
    foodContainer.innerHTML = '';
    sliceData.forEach((item) => {
      const foodCart = document.createElement('div');
      foodCart.classList.add('grid', 'md:grid-cols-5', 'gap-5', 'justify-between', 'items-center', 'border', 'py-5', 'px-3', 'rounded-lg');
      foodCart.innerHTML = `
        <div class="md:col-span-2"><img class="max-h-[200px]" src="${item.strCategoryThumb}" alt=""></div>
        <div class="md:col-span-3">
          <h3 class="text-2xl font-bold">${item.strCategory}</h3>
          <p>${item.strCategoryDescription}</p>
          <button class="text-xl font-semibold text-orange-300 underline">View Details</button>
        </div>
      `;
      foodContainer.appendChild(foodCart);
    });
  }
  let sliceData = data.slice(0, 4);
  renderFoods(sliceData);
};

// const displayAllFoods = (data)=>{
//   const foodContainer =  document.getElementById('food-container');
//   const showAllItem =  document.getElementById('details-modal');

//   let sliceData = data.slice(0, 2)
//   showAllItem.addEventListener('click', ()=>{
//       sliceData = data.slice(0, data.length);
//       console.log('i am ok', data.length);
//   })
//   sliceData.forEach((item)=>{
//     const foodCart = document.createElement('div');
//     foodCart.classList.add('grid','grid-cols-5', 'gap-5', 'justify-between', 'items-center', 'border', 'py-5', 'rounded-lg')
//     foodCart.innerHTML = `
//     <div class="col-span-2"><img class="max-h-[200px]" src=${item.strCategoryThumb} alt=""></div>
//     <div class="col-span-3">
//       <h3 class="text-2xl font-bold">${item.strCategory}</h3>
//       <p>${item.strCategoryDescription}</p>
//       <button class="text-xl font-semibold text-orange-300 underline">View Details</button>
//     `
//     foodContainer.appendChild(foodCart)
//   })
// }
getAllFoods()