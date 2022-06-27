const apiKey = 'kzPS0uTIbYveqd4UUEQBgZePRHIHUUim';

export default function getGifs({keyword = 'naruto'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=r&lang=en`;
    return fetch(apiURL)
            .then(res => res.json())
            .then(response => {
                const { data } = response
                if (Array.isArray(data)) {
                    const gifs = data.map(image => {
                        const { images, title, id } = image
                        const { url } = images.downsized_medium
                        return {title, id, url}
                    })
                    return gifs
                } else {
                    console.log('data no es un array, debe ser un array')
                }
            })
}