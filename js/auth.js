

const getValue = (id) => {
        const value = document.getElementById(id).value;
        return value;
}


const handleRegistration = (event) => {
        event.preventDefault();
        const username = getValue("regUsername");
        const first_name = getValue("regFirstName");
        const last_name = getValue("regLastName");
        const email = getValue("regEmail");
        const password = getValue("regPassword");
        const confirm_password = getValue("regConfirmPassword");
        const info = {
                username,
                first_name,
                last_name,
                email,
                password,
                confirm_password,
        };

        if (password === confirm_password) {
                document.getElementById("error").innerText = "";
                if (
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
                                password
                        )
                ) {
                        console.log(info);

                        fetch("https://khanastore.onrender.com/register/", {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify(info),
                        })
                                .then((res) => res.json())
                                .then((data) => console.log(data));
                        document.getElementById("error").innerText = `
                                check your email
                                `;
                } else {
                        document.getElementById("error").innerText =
                                "pass must contain eight characters, at least one letter, one number and one special character:";
                }
        } else {
                document.getElementById("error").innerText =
                        "password and confirm password do not match";
                alert("password and confirm password do not match");
        }
};


const handleLogin = (event) => {
        event.preventDefault();
        const username = getValue("login-username");
        const password = getValue("login-password");
        console.log(username, password);
        if ((username, password)) {
                fetch("https://khanastore.onrender.com/login/", {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({ username, password }),
                })
                        .then((res) => res.json())
                        .then((data) => {
                                console.log(data);
                                if (data.token && data.user_id) {
                                        localStorage.setItem("token", data.token);
                                        localStorage.setItem("user_id", data.user_id);
                                        window.location.href = "index.html";
                                }
                        });
        }
};




const handleLogout = () => {
        const token = localStorage.getItem('token');
        fetch("https://khanastore.onrender.com/logout/", {
                method: "POST",
                headers: {

                        Authorization: `Token ${token}`,
                        "Content-Type": "application/json",
                },
        })

                .then((res) => res.json())
                .then((data) => {
                        console.log(data);
                        localStorage.removeItem("token");
                        console.log("Done");
                        localStorage.removeItem("user_id");

                        window.location.href = "index.html";
                });

};


const handleContact = (event) => {
        event.preventDefault();
        const name = getValue("name");
        const email = getValue("email");
        const message = getValue("textArea");

        fetch(`https://khanastore.onrender.com/contact/`, {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name, email, message }),
        })

                .then((res) => res.json())
                .then((data) => {
                        console.log(data);
                        alert("Thanks for contacting us!")
                })

};




