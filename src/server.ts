import express from 'express'

const app = express()

app.use(express.json())

const users = [
    "Maicon",
    "João",
    "Ulisses",
    "Bruno"
]

app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users

    response.json(filteredUsers)
})

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user)
})

app.post('/users', (request, response) => {
    const { name, email} = request.body

    const user = {
        'name': name,
        'email': email
    }

    return response.json(user)
})

app.listen(3333)