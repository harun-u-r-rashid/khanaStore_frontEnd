/*
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

*/





const loadReview = () => {
        const param = new URLSearchParams(window.location.search).get("foodDetails");
        fetch(`https://khanastore.onrender.com/stores/${param}/review/`)

                .then((res) => res.json())
                .then((data) => foodReview(data));
};

loadReview();

const foodReview = (reviews) => {
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

        <button class="cartBtn" onclick="addToCart(${detail.id})">Add To Cart</button>

        <button class="cartBtn" onclick="orderItem(${detail.id})">Order</button>

        </div>
        </div>
        `;
        parent.appendChild(div);
};



const addToCart = (foodId) => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        // const param = new URLSearchParams(window.location.search).get("foodDetails");

        if (userId) {
                fetch('https://khanastore.onrender.com/carts/?userId=${userId}', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Token ${token}`,
                        },
                        body: JSON.stringify({
                                user: userId,
                                food: foodId,
                                quantity: 1,

                        }),
                })
                        .then(response => {
                                if (response.ok) {
                                        alert('Item added to cart!');
                                        window.location.href = "cart.html";

                                } else {

                                        alert('Failed to add item to cart');
                                }
                        });

        }
        else {
                alert("Please login to your account")
        }

};




// const orderItem = (foodId) => {
//         const userId = localStorage.getItem('user_id');
//         const token = localStorage.getItem('token');
//         // const param = new URLSearchParams(window.location.search).get("foodDetails");
//         console.log(userId, token, foodId);

//         if(userId){
//                 fetch('http://127.0.0.1:8000/orders/?userId=${userId}', {

//                         method: 'POST',
//                         headers: {
//                                 'Content-Type': 'application/json',
//                                 Authorization: `Token ${token}`,
//                         },
//                         body: JSON.stringify({
//                                 user: userId,
//                                 food: foodId,
//                                 quantity: 1,



//                         }),
//                 })
//                         .then(response => {
//                                 console.log(response);
//                                 if (response.ok) {
//                                         alert('We revieved your order!');
//                                         window.location.href = "viewProfile.html";

//                                 } else {

//                                         alert('Order failed');
//                                 }
//                         });

//         }
//         else{
//                 alert("Please login to your account")
//         }

// };



// const orderItem = (foodId) => {
//         const userId = localStorage.getItem('user_id');
//         const token = localStorage.getItem('token');
//         console.log(userId, token, foodId);
    
//         if (userId) {
//             document.getElementById("orderForm").style.display = "block";
//             document.getElementById("orderForm").onsubmit = function(event) {
//                 event.preventDefault();
                
//                 const first_name = document.getElementById("firstName").value;
    
//                 fetch(`http://127.0.0.1:8000/orders/?userId=${userId}`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Token ${token}`,
//                     },
//                     body: JSON.stringify({
//                         user: userId,
//                         food: foodId,
//                         quantity: 1,
//                         first_name: first_name,
//                     }),
//                 })
//                 .then(response => {
//                     console.log(response);
//                     if (response.ok) {
//                         alert('We received your order!');
//                         window.location.href = "viewProfile.html";
//                     } else {
//                         alert('Order failed');
//                     }
//                 });
//             };
//         } else {
//             alert("Please login to your account");
//         }
//     };
    

const orderItem = (foodId) => {
        const userId = localStorage.getItem('user_id');
        const token = localStorage.getItem('token');
        // const param = new URLSearchParams(window.location.search).get("foodDetails");

        if (userId) {
                fetch('https://khanastore.onrender.com/orders/?userId=${userId}', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Token ${token}`,
                        },
                        body: JSON.stringify({
                                user: userId,
                                food: foodId,
                                quantity: 1,

                        }),
                })
                        .then(response => {
                                if (response.ok) {
                                        alert('Item added to orderlis!');
                                        window.location.href = "viewProfile.html";

                                } else {

                                        alert('Failed to add item to orderlist');
                                }
                        });

        }
        else {
                alert("Please login to your account")
        }

};





const addReview = (event) => {
        event.preventDefault();
        const userId = localStorage.getItem("user_id");
        const Token = localStorage.getItem("token");
        const param = new URLSearchParams(window.location.search).get("foodDetails");
        const rating = document.getElementById("Ratings").value;
        const review = document.getElementById("Review").value;
        // console.log(param);


        const info = {
                userId,
                param,
                rating,
                review,
        };
        // console.log(info);

        fetch(`https://khanastore.onrender.com/stores/reviewAdd/${param}/`, {
                method: "POST",
                headers: {
                        Authorization: `Token ${Token}`,
                        "Content-Type": "application/json",

                },
                body: JSON.stringify(info),


        })
                .then((res) => {
                        if (res.ok) {
                                alert("Review added successfully! Thanks for staying with us");

                        }

                        else {
                                alert("You already added the review");
                        }
                })

        /*
        //This one also work
           .then((data) =>{
                   // console.log(data);
                   if(data){
                           alert("Review added successfully! Thanks for staying with us");
                          
                   }
                   else{
                           alert("You already added the review");
                   }
           })
           */


};

// document.getElementById("reviewForm").addEventListener("submit", addReview);



