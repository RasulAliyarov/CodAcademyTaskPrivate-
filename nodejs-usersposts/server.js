const { v4: uuidv4 } = require("uuid");
const express = require('express');
const app = express()
app.use(express.json())
const PORT = 8080

let isLogeddin = false

let users = []
let posts = [
    {
        id: "asc-a123-cxaz-123-acasdas",
        description: "lorem ipsum dolor",
        createdOn: "17.01.2023",
        user: {
            id: "ajn2-sa23m-cmkd2-csmc",
            name: "Suleyman",
            surname: "Dadashov",
            email: "suleyman@code.edu.az"
        }
    }
]

//API
app.get('/api', (req, res) => {
    res.send('Hi, it is Twitter API')
})

// API Users
app.get('/api/users', (req, res) => {
    res.send({ users: users })
})

// API Register
app.post('/api/register', (req, res) => {
    let emailChecked = req.body.email;
    let user = users.find(i => i.email === emailChecked);

    if (user) {
        res.send("You alright register");
        return
    }

    let { name, surname, age, email, password } = req.body

    users.push({
        name: name,
        surname: surname,
        age: age,
        email: email,
        password: password,
        id: uuidv4(),
    })
    res.send({ message: 'You are succesful is Register!', users: users });
})

//API Login
app.post('/api/login', (req, res) => {
    let password = req.body.password
    let email = req.body.email

    let mail = users.find(i => i.email === email)
    let pass = users.find(i => i.password === password)

    if (mail && pass) {
        isLogeddin = true;
        res.send({ message: 'You are succesful is Login!' });
        return
    }
    else {
        res.send({ message: 'Wrong password or email!' });
        return
    }

})

//API Posts
app.get('/api/posts', (req, res) => {
    res.send({ message: 'success', posts });
})

//API Malware
app.use((req, res, next) => {
    if (isLogeddin == false) {
        res.send({ message: 'First, you must Login in /api/login' });
        return;
    }
    next();
})


//API Login
app.post('/api/logout', (req, res) => {
    if (isLogeddin == true) {
        isLogeddin = false;
        res.send("You are Logout");
        return;
    }
})

// API Users PUT
app.put('/api/users/:id', (req, res) => {
    let { id } = req.params;
    let user = users.find((v) => v.id === id);
    let ind = users.indexOf(user)
    console.log(user)
    console.log(ind)

    let { name, surname } = req.body;
    if (!name && !surname) {
        res.status(400).send({ message: "You must update something" });
        return;
    }

    if (!user) {
        res.status(204).send();
        return;
    }

    if (name) user.name = name;
    if (surname) user.surname = surname;

    res.send({ message: "Product successfully updated!", users: users, user: user });
})

// API Users DELETE
app.delete('/api/users/:id', (req, res) => {
    let { id } = req.params;
    let user = users.find((u) => u.id === id);

    if (!user) {
        res.status(204).send();
        return;
    }
    users.splice(users.indexOf(user), 1)

    res.send({ message: `${user.name} successfuly deleted` })
})

//API Posts POST
app.post('/api/posts', (req, res) => {
    let userId = req.body.userId

    let user = users.find(i => i.id === userId)

    if (!user) {
        res.send("Problem with idemtify")
        return
    }

    console.log(user)
    let newPost = {
        id: uuidv4(),
        createdOn: "2023",
        description: req.body.description,
        user: {
            id: user.id,
            name: user.name,
            surname: user.surname,
            email: user.email
        }
    }

    posts.push(newPost)

    res.send({ message: 'success', posts });
})

//API Posts PUT
app.put('/api/posts/:id', (req, res) => {
    let { id } = req.params;
    let description = req.body.description;
    let user = posts.find((i) => i.id === id);

    if (!user) {
        res.status(204).send()
        return
    }
    if (!description) {
        res.status(400).send("Update description")
        return
    }
    if (description) user.description = description

    res.send({ message: 'success', posts });
})

// API Posts DELETE
app.delete('/api/posts/:id', (req, res) => {
    let { id } = req.params;
    let user = posts.find((u) => u.id === id);

    if (!user) {
        res.status(204).send();
        return;
    }
    posts.splice(posts.indexOf(user), 1)

    res.send({ message: ` successfuly deleted` })
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})