const getInformationDogs = async (breedId) => {
    const url = !breedId || breedId === 0
    ? "https://api.thedogapi.com/v1/breeds/search"
    : "https://api.thedogapi.com/v1/breeds/search?breeds_ids" + breedId

    const res = await fetch(url);

    if(!res.ok) {
        const { url, status, statusText } = res;
        throw Error(`Error: ${status} ${statusText} in fetch ${url}`);
    }

    const [data] = await res.json();

    let { url: image, breeds: [breed] } = data;

}