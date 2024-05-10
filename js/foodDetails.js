


const loadReview = () => {
        const param = new URLSearchParams(window.location.search).get("foodDetails");
        fetch(`https://khanastore.onrender.com/stores/${param}/review/`)

        .then((res) => res.json())
        .then((data) => foodReview(data));
};

loadReview();

const foodReview = (reviews) =>{
        reviews.forEach((review) => {
                const parent = document.getElementById("reviewContainer");
                const div = document.createElement("div");
                div.classList.add("reviewCard");
                div.innerHTML = `

                <div class="userAndRating">

                <h6>${review.user}</h6>
                <h6>${review.rating}</h6>

                </div>

                <div class="review">
                <h6>${review.review}</h6>
                </div>
                `;
                parent.appendChild(div);
        })
}



const loadFoodDetails = () => {
        const param = new URLSearchParams(window.location.search).get("foodDetails");

        fetch(`https://khanastore.onrender.com/stores/food/${param}`)
                .then((res) => res.json())
                .then((data) => displayFoodDetails(data));

};

loadFoodDetails();



const displayFoodDetails = (detail) => {
        const parent = document.getElementById("foodDetails");
        const div = document.createElement("div");
        div.classList.add("foodDetailsCard");
        div.innerHTML = `
        <div class="foodImageDetails">
        <div class="foodImage">
        <img src="${detail.food_image}" alt="">
        </div>



        <div class="Details">
        <h3 class="name">${detail.food_name}</h3>
        <h3 class="price">${detail.price} <sub>Tk.</sub> </h3>
        <p class="description">${detail.description}</p>
        <button class="cartBtn" onclick="addToCart(${detail.quantity})">Add To Cart</button>
        </div>
        </div>
        `;
        parent.appendChild(div);
};



const addToCart = (quantity) => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        const param = new URLSearchParams(window.location.search).get("foodDetails");

        fetch('https://khanastore.onrender.com/carts/?userId=${userId}', {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Token ${token}`,
                },
                body: JSON.stringify({
                        user: userId,
                        food: param,
                        quantity: quantity,

                }),
        })
                .then(response => {
                        if (response.ok) {
                                alert('Item added to cart!');
                                window.location.href = "cart.html";

                               
                        } else {

                                alert('Failed to add item to cart');
                        }
                })
};


// const addReview = (event) =>{
//         event.preventDefault();
//         const param = new URLSearchParams(window.location.search).get("foodDetails");
//         const user_id = localStorage.getItem("user_id");


//         const body = getValue("Review");
//         const rating = document.getElementById('Ratings').value;
    
//         const info = {
//             "name": name,
//             "body": body,
//             "rating": rating,
//             "food": param
//         }
//         console.log(info);
//         fetch("http://127.0.0.1:8000/stores/${param}review/create/",{
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(info),        
//         })
//         .then(res => res.json())
//         .then(data => {
            
//             console.log(data)
//             location.reload()
//         })
//     };
    
