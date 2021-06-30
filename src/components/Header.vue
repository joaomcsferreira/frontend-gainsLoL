<template>
    <header>

        <nav class="navbar navbar-expand navbar-light mb-20">
            <div class="container-fluid">
                <h2><a class="text-light text-decoration-none" href="/">GainsLoL</a></h2>

                <div id="menu-login">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/"><i class="fas fa-cog"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click.prevent="handleSubmit" href="/"><i class="fas fa-user-circle"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">{{ headers.uid }}</a>
                    </li>
                </ul>
            </div>
                
            </div>
        </nav>

    </header>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'Header',
    data() {
        return {
            headers: {}
        }
    },
    methods: {
        ...mapActions(['logout']),
        handleSubmit() {
            this.logout(this.headers)
        }
    },

    mounted() {
        this.headers['client'] = localStorage.getItem('client')
        this.headers['uid'] = localStorage.getItem('uid')
        this.headers['access-token'] = localStorage.getItem('access-token')
    }

}
</script>

<style scoped>
    header {
        background-color: var(--color-background-nav);
        line-height: 50px;
        }

    .navbar-light .navbar-nav .nav-link{
        color: var(--color-text-light);
    }
</style>
