import { get } from '~/utils/httpRequest';

const searchApi = async (querry, type = 'less') => {
    const result = await get('users/search', {
        params: {
            q: querry,
            type
        }
    });
    return result;
}

export default searchApi;