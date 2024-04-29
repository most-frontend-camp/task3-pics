import axios from 'axios';

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/seach/photos', {
        headers: {
            Authorization: 'Client-ID N-aW8T1ahI6Xyl740ZMHKxxMxaTZ5pGK3RRK8qqwoO0',
        },
        params: {
            query: 'cars',
        },
    });

    console.log(response);

    return response;
};

export default searchImages;