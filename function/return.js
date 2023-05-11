function address(name, email){
    return [
        {name: name,
        email: email,}
    ]
}

const data = address("Muhammad Mehedi Hasan Opi Sarker", "opisarker99@gmail.com")
console.log(data[0].email)