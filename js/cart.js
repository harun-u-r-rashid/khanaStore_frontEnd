const loadCartItems = () => {
        const user_id = localStorage.getItem("user_id");
        let totalCost = 0;

        fetch(`https://khanastore.onrender.com/carts/?user_id=${user_id}`)
                .then((res) => res.json())
                .then((data) => {
                        const promises = data.map((element) => {
                                const fetchFoodPromise = fetch(`https://khanastore.onrender.com/stores/food/${element.food}`)
                                        .then((res) => res.json());

                                return fetchFoodPromise
                                        .then((food_data) => {
                                                const itemCost = element.quantity * food_data.price;
                                                totalCost += itemCost;


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
                                            <a href="#"
                                                    class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                                    </td>
                            </tr>
            `;
                        parent.appendChild(tr);


                                        });
                        });

                        return Promise.all(promises).then(() => {
                                const element = document.getElementById("totalCost");
                                element.innerHTML=`
                               <h3 class="cost">Total cost: ${totalCost} <sub>Tk.</sub> </h3>
                               `

                        });
                });
};
loadCartItems();


