<template>
    <main>
            <div class="row">
                <div class="col-md-3">
                    <div class="sticky-top p-3" id="menu-items">
                        <ul class="nav nav-pills flex-column mb-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <i class="fas fa-chart-line"></i> Table list
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <i class="fas fa-dice"></i>  Programing
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <i class="fas fa-chart-bar"></i>  Match analysis
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <i class="fas fa-calculator"></i> ODD calculator
                                </a>
                            </li>
                            <hr class="text-light"/>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <i class="fas fa-cog"></i> Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-9 ml-5 mt-5">
                    <div class="row" id="main">
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Total profit</h5>
                                    <p class="display-6 text-dark">60</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Total bets</h5>
                                    <p class="display-6 text-dark">{{ allBets.length }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Monthly profit</h5>
                                    <p class="display-6 text-dark">43</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card">
                                <div class="card-body">
                                    <h5>Percentage</h5>
                                    <p class="display-6 text-dark">64</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12" id="principal">
                            <form @submit="postBet" class="row g-2 m-3">
                                <div class="form-floating col-md">
                                    <input type="date" v-model="newBet.game_date" class="form-control" id="floatingInput" placeholder="Game date">
                                    <label for="floatingInput">Game date</label>
                                </div>
                                <div class="form-floating col-md">
                                    <select @change="onChange($event)" v-model="newBet.league" class="form-control" id="floatingPassword" placeholder="League">
                                        <option v-for="league in leagueData" v-bind:key="league.id" v-bind:value="league['AreaId']">
                                            {{ league['Name'] }}
                                        </option>
                                    </select>
                                    <label for="floatingPassword">League</label>
                                </div>
                                <div class="form-floating col-md">
                                    <input type="text" v-model="newBet.style" class="form-control" id="floatingInput" placeholder="Style">
                                    <label for="floatingInput">Style</label>
                                </div>
                                <div class="form-floating col-md">
                                    <select v-model="newBet.winner" class="form-control" id="floatingPassword" placeholder="Winner">
                                        <option v-for="team in sportData" v-bind:key="team.id">
                                            {{ team['Name'] }}
                                        </option>
                                    </select>
                                    <label for="floatingPassword">Winner</label>
                                </div>
                                <div class="form-floating col-md">
                                    <select v-model="newBet.loser" class="form-control" id="floatingPassword" placeholder="Loser">
                                        <option v-for="team in sportData" v-bind:key="team.id">
                                            {{ team['Name'] }}
                                        </option>
                                    </select>
                                    <label for="floatingPassword">Loser</label>
                                </div>
                                <div class="form-floating col-md">
                                    <input type="text" v-model="newBet.result" class="form-control" id="floatingPassword" placeholder="Result">
                                    <label for="floatingPassword">Result</label>
                                </div>
                                <div class="form-floating col-md">
                                    <input type="text" v-model="newBet.input" class="form-control" id="floatingPassword" placeholder="Input">
                                    <label for="floatingPassword">Input</label>
                                </div>
                                <div class="form-floating col-md">
                                    <input type="text" v-model="newBet.odd" class="form-control" id="floatingPassword" placeholder="ODD">
                                    <label for="floatingPassword">ODD</label>
                                </div>

                                <br>

                                <button type="submit" class="w-100 btn btn-sm btn-outline-primary custom-button">post</button>
                            </form>
                            <hr>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Game date</th>
                                        <th>League</th>
                                        <th>Style</th>
                                        <th>Winner</th>
                                        <th>Loser</th>
                                        <th>Result</th>
                                        <th>Input</th>
                                        <th>ODD</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="bet in allBets" v-bind:key="bet.id">
                                        <td>{{ bet.game_date }}</td>
                                        <td>{{ bet.league }}</td>
                                        <td>{{ bet.style }}</td>
                                        <td>{{ bet.winner }}</td>
                                        <td>{{ bet.loser }}</td>
                                        <td>{{ bet.result }}</td>
                                        <td>{{ bet.input }}</td>
                                        <td>{{ bet.odd }}</td>
                                        <th><a @click.prevent="deleteBet(bet.id)"><i class="fas fa-2x fa-times text-danger"></i></a></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </main>
</template>

<script>

import { mapActions, mapGetters} from 'vuex'

export default {
    name: 'dashboard',
    data() {
        return {
            newBet: {}
        }
    },
    computed: 
        mapGetters(['allBets', 'sportData', 'leagueData']),
    methods: {
        ...mapActions(['fetchBets', 'addBet', 'deleteBet', 'getTeams', 'getLeague']),
        postBet() {
            this.addBet(this.newBet)
        },
        onChange(event) {
            this.getTeams(event.target.value)
        }
    },
    created() {
        this.fetchBets()
        this.getLeague()
    }
}
</script>

<style scoped>
    main {
        height: 100%;
        background-color: var(--color-background);
    }
    #menu-items {
        height: 100vh;
        background-color: var(--color-background-side);
    }
    ul li {
        margin: 5px 0;
    }

    ul li a{
        color: var(--color-text);
        font-size: 0.9em;
    }

    ul li a:hover{
        color: var(--color-background-dark);
    }

    div.card {
        text-align: center;
        color: grey;
        border-radius: 10px;
        width: 95%;
    }

    div.card h5, p {
        font-weight: 900;
    }

    #principal {
        margin: 30px auto;
        background-color: #fff;
        width: 90%;
        border-radius: 10px;
        height: 100%;
    }
</style>
