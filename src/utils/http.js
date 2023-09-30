import { useStore } from "../store/store";

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
}

// Функция копирования
const _copy = (data) => {
    return JSON.parse(JSON.stringify(data));
}

async function getData(url, method, params) {
    try {
        const store = useStore();
        const token = localStorage.getItem('token');

        const headers = {
            "Content-Type": "application/json",
        };

        if (token) {
            Object.assign(headers, {'authorization': `Bearer ${token}`});
        }

        let response = await fetch(import.meta.env.VITE_API_URL + url, {
            method: method,
            headers: headers,
            body: (method === METHODS.GET ? null : JSON.stringify(params))
        });

        if (!response.ok) {
            if (response.status === 401) {
                store.logout();
            }
        }

        return await response.json();
    } catch (error) {
        return error;
    }
}

export { getData, METHODS, _copy };
