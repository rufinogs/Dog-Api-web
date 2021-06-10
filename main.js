

// function to perform a get request


async function getRandomImage(frame){
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    document.getElementById(frame).style.backgroundImage = 'url('+data.message+')' 
}


getRandomImage("pup-2")
getRandomImage("pup-1")
getRandomImage("pup-3")
getRandomImage("pup-4")

/*loadRandomImage(); */