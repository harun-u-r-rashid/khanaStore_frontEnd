

const loadFood = (search) => {
        document.getElementById("foods").innerHTML = "";
        fetch(`https://khanastore.onrender.com/stores/food/?search=${search ? search : ""
                }`)
                .then((res) => res.json())
                .then((data) => {
                        displayFood(data);
                });
};



const displayFood = (foods) => {
        foods.forEach((food) => {
                const parent = document.getElementById("foods");
                const div = document.createElement("div");
                div.classList.add("foodCard");
                div.innerHTML = `
                <div>       
                <img src=${food.food_image}>
                </div>

                <div class="foodDetails">       
                    <h6 class="foodName">${food.food_name}</h6>
                    <h6 class="foodPrice">${food.price}  Tk.</h6>

                </div>

                <p class="foodDescription">${food.description}</p>

                <a class="detailsBtn" href="foodDetails.html?foodDetails=${food.id}">Details</a>

            `;
                parent.appendChild(div);
        });
};




const loadCategory = () => {

        fetch('https://khanastore.onrender.com/stores/category/')
                .then((res) => res.json())
                .then((data) => {
                        data.forEach((category) => {
                                const parent = document.getElementById("drop-category");
                                const li = document.createElement("li");
                                li.classList.add("dropdown-item");
                                li.innerHTML = `
                                <li class="category" onclick="loadFood('${category.category_name}')"> ${category.category_name}</li>
                                  `;
                                parent.appendChild(li);
                        });
                });
};
    
    
const handleSearch = () => {
        const value = document.getElementById("search").value;
        loadFood(value);
}


loadCategory();
loadFood();
laodReview();


