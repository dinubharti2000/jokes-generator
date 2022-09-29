const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

const jokeGenrated = async () => {

    const setHeader = {
                headers: {
                    Accept: "application/json"
                }
            }

        fetch('https://icanhazdadjoke.com', setHeader)
        .then((res)=> res.json())
        .then((data)=>{
            jokes.innerHTML = data.joke;
        })
        .catch((error)=>{
            console.log(error);
        })
}

jokeBtn.addEventListener('click', jokeGenrated);
jokeGenrated();