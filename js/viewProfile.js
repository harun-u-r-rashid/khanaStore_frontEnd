
const userDetails = () => {
    const user_id = localStorage.getItem("user_id");
    fetch(`https://khanastore.onrender.com/users/${user_id}`)
        .then((res) => res.json())
        .then((data) => {
            const parent = document.getElementById("userDetails");
            const div = document.createElement("div");
            div.classList.add("userInfo");
            div.innerHTML = `
                <div class="userNameContainer">
    
                <div  class="userName">
                <h1>User Id: <span>${data.id}</span></h1>
                </div>
    
                <div class="userName">
                <h1>User Name: <span>${data.username}</span></h1>
                </div> 
    
                <div class="userName">
                <h1>Full Name: <span>${data.first_name} ${data.last_name}</span></h1>
                </div> 
    
                <div class="userName">
                <h1>Email: <span>${data.email}</span></h1>
                </div> 
               
                    
    
                </div>
                `;
            parent.appendChild(div);
        })
       
};

userDetails();
