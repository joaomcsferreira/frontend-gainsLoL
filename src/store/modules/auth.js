import axios from 'axios'
import router from '../../router'

const baseUrl = 'http://localhost:3000/api/auth'

export default {
    state: {
        authData: null
    },

    getters: {
        authData: state => state.authData
    },

    mutations: {
        updateUser(state, responseData) {
            state.authData = responseData
        }
    },

    actions: {
        signup({ commit }, authParams) {
            axios.post(`${baseUrl}/`, {
                nickname: authParams.first_name + authParams.last_name,
                email: authParams.email,
                password: authParams.password,
                password_confirm: authParams.password_confirm
            })
            .then(response => {
                commit('updateUser', response.headers)
                router.replace('login')
            })
        },

        forgot({ commit }, authParams) {
            axios.post(`${baseUrl}/password`, {
                email: authParams.email,
                redirect_url: authParams.redirect_url
            })
            .then(response => {
                commit('updateUser', response.headers)
                console.log(response)
            })
        },

        login({ commit }, authParams) {
            axios.post(`${baseUrl}/sign_in`, {
                email: authParams.email,
                password: authParams.password,
            })
            .then(response => {
                commit('updateUser', response.headers)

                localStorage.setItem('access-token', response.headers['access-token'])
                localStorage.setItem('client', response.headers['client'])
                localStorage.setItem('uid', response.headers['uid'])
                localStorage.setItem('expiry', response.headers['expiry'])

                router.replace('/')
            })
        },

        logout({ commit }, authParams) {
            axios.delete(`${baseUrl}/sign_out`, {
                headers: authParams
            })
            commit('updateUser', null)

            localStorage.removeItem('access-token')
            localStorage.removeItem('client')
            localStorage.removeItem('uid')
            localStorage.removeItem('expiry')

            router.replace('login', () => {})
        },

        current_user({ commit }, authParams) {
            axios.get(`${baseUrl}/validate_token`, {
                headers: authParams
            })
            .then( response => {
                commit('updateUser', response.headers)

            })
        }
    }
}
