import axios from "axios"

const baseUrl = 'https://fly.sportsdata.io/v3/lol/scores/json/'
const key = '?key=51fdca962e6b4debb9b08d5279ad7466'


export default {
    state: {
        teams: {},
        league: {}
    },
    
    getters: {
        sportData: state => state.teams,
        leagueData: state => state.league
    },

    mutations: {
        updateTeams: (state, responseData) => state.teams = responseData,
        updateLeague: (state, responseData) => state.league = responseData
    },
    
    actions: {
        async getTeams({ commit }, areaId) {
            const response = await axios.get(`${baseUrl}/Teams${key}`)
            
            const teamsArea = []

            for (let i = 0; i < response.data.length; i++) {
                let team = response.data[i]
                if (team['AreaId'] == areaId) {
                    teamsArea.push(team) 
                }
            }

            commit('updateTeams', teamsArea)
        },

        async getLeague({ commit }) {
            const response = await axios.get(`${baseUrl}/Competitions${key}`)

            commit('updateLeague', response.data)
        }
        
    }
}