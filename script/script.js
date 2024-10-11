
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
  const showAllItem = document.getElementById('show-all');
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
          <p class="h-[100px] overflow-hidden">${item.strCategoryDescription}</p>
          <button class="text-xl view-btn font-semibold text-orange-300 underline">View Details</button>
        </div>
      `;
      foodContainer.appendChild(foodCart);
      showModal()
    });
  }
  // Show Details Modal =================================================
  const showModal = ()=>{
    const viewBtn = document.getElementsByClassName('view-btn');
    for(const btn of viewBtn){
      btn.addEventListener('click', ()=>{
        detailsModal.classList.remove('hidden');
      })
    }
  }
    // Show Modal Information ============================
    const detailsModal = document.getElementById('details-modal');
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal', 'min-h-[200px]', 'w-11/12', 'md:w-1/2', 'bg-orange-300', 'p-3')
    modalDiv.innerHTML = `
    <p class="mt-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Dignissimos, nostrum eius? Accusamus, maiores suscipit sapiente ut
      esse quasi quo, soluta est aperiam dolor illum eaque inventore, ab
      exercitationem voluptatibus dignissimos!
    </p>
    <button id="close-btn" class="bg-white px-5 py-2 rounded-md float-end ">Close</button>
    `
    detailsModal.appendChild(modalDiv)
    document.getElementById('close-btn').addEventListener('click', () =>{
      detailsModal.classList.add('hidden')
    })


  




  let sliceData = data.slice(0, 4);
  renderFoods(sliceData);
};

getAllFoods()