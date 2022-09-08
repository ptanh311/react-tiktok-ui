import { get } from '~/utils/request';

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