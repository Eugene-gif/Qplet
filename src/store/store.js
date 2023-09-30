import {defineStore} from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        count: 1,
    }),
    getters: {
        counter(state) {
            return state.count;
        }
    },
    actions: {
        async userLogin(email, password) {
            try {
                let response = await fetch(import.meta.env.VITE_API_URL + '/api/login',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                        })
                    }
                );

                response = await response.json();

                if (response.success) {
                    localStorage.setItem('token', response.result.items.token);
                    // await this.getProfile();
                    this.token = response?.result.items.token;
                    // this.isAuthenticated = true;
                }

                return response;
            } catch (e) {
                return e;
            }
        },

    }
});
