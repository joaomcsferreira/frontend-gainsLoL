import axios from 'axios'

const baseUrl = 'http://localhost:3000/api'

export default {
    state: {
        bets: []
    },

    getters: {
        allBets: state => state.bets
    },

    mutations: {
        updateBets: (state, responseData) => state.bets = responseData,
        removeBet: (state, id) => (state.bets = state.bets.filter(bet => bet.id !== id))
    },

    actions: {
        fetchBets({ commit }) {
            axios.get(`${baseUrl}/bets`)
            .then(response => {
                commit('updateBets', response.data)
            })
        },

        addBet({ commit }, bet) {
            axios.post(`${baseUrl}/bets`, bet)
            .then(response => {
                commit('updateBets', response.data)
            })
        },

        async deleteBet({ commit }, id) {
            await axios.delete(`${baseUrl}/bets/${id}`)
            commit('removeBet', id)
        }
    }
}