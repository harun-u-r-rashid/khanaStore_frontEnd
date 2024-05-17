const loadOrdersItems = () => {
        const user_id = localStorage.getItem("user_id");
        let totalCost = 0;
        let totalTax = 0;
        let totalItemCost = 0;

        fetch(`https://khanastore.onrender.com/orders/?user_id=${user_id}`)
                .then((res) => res.json())
                .then((data) => {
                        const promises = data.map((element) => {
                                const fetchFoodPromise = fetch(`https://khanastore.onrender.com/stores/food/${element.food}`)
                                        .then((res) => res.json());

                                return fetchFoodPromise
                                        .then((food_data) => {
                                                const itemCost = element.quantity * food_data.price;
                                                totalItemCost += itemCost;
                                                const tax = (itemCost / 100) * 2;
                                                totalTax += tax;
                                                const total = itemCost + tax;
                                                totalCost = totalItemCost + totalTax;


                                                const parent = document.getElementById("tBody");
                                                const tr = document.createElement("tr");
                                                tr.className = "singleTr";
                                                tr.innerHTML = `
                                                
                            <tr
                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="tdImage" class="p-4">
                                            <img src="${food_data.food_image}"
                                                    class="w-16 md:w-32 max-w-full max-h-full"
                                                    alt="Apple Watch">
                                    </td>
                                    <td
                                            class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            ${food_data.food_name}
                                    </td>

                                    <td
                                            class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            ${element.quantity}
                                    </td>
                                   
                                    <td
                                            class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                            ${food_data.price} <sub>Tk.</sub>
                                    </td>
                                    <td class="px-6 py-4">
                                            <button onclick="removeOrder(${element.id})" href="#"
                                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                    </td>
                            </tr>
            `;
                                                parent.appendChild(tr);


                                        });
                        });

                        return Promise.all(promises).then(() => {
                                const element = document.getElementById("totalCost");
                                element.innerHTML = `

                                <h1>Orders total</h1>
                                <hr>
                                <div class="allCost">
                                
                                <div id="cost" class="totalItemCost">
                                <h3>Total cost:</h3>
                                <span>${totalItemCost}<sub>Tk.</sub></span>
                                </div>
                                <hr>
                               
                                <div id="cost" class="totalTax">
                                <h3>Total tax:</h3>
                                <span> ${totalTax}<sub>Tk.</sub></span>
                                </div>
                                <hr>
                        
                                <div id="cost" class="grandTotalCost">
                                <h3>grand total:</h3>
                                <span>${totalCost}<sub>Tk.</sub></span>
                                </div>

                                <hr>


                                <div class="proceedBtn">
                                <button >proceed to checkout</button>
                                </div>

                               
                               
                                </div>
                                `
                        });
                });
};

loadOrdersItems();

const removeOrder = (elementId) => {


        // console.log(i = elementId); //Here, element id is the order_id
        fetch(`https://khanastore.onrender.com/orders/delete/${elementId}/`, {
                method: 'DELETE'
        })
                .then(response => {
                        console.log(response);
                        if (response.ok) {
                                alert("Deleted successfully");
                        } else {
                                alert("Failed to delete order item.");
                        }
                })
                .catch(error => {
                        console.error("Error occurred:", error);
                });
};





