<template>
    <div class="main text-center">
        <div class="login">
            <form>
                <i class="mb-4 mr-2 fas fa-user-circle fa-7x profile-icon"></i>

                <h5 class="mb-3 fw-normal">Please sign in</h5>

                <div class="w-100 form-floating">
                    <input type="email" v-model="newUser.email" class="form-control" id="floatingInput" placeholder="Enter email">
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating">
                    <input type="password" v-model="newUser.password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                
                <br>

                <button type="submit" class="w-100 btn btn-lg btn-outline-primary custom-button" @click.prevent="handleSubmit">Login</button>
            </form>
        </div> 
    </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'login',
    
    data(){
        return {
            newUser: {}
        }
    },
    methods: {
        ...mapActions(['login']),
        handleSubmit() {
            this.login(this.newUser)   
        }
    }
}
</script>

<style scoped>

    .main {
        padding-top: 80px;
        height: 100vh;
        background-color: var(--color-background);
        /* font-family: 'Roboto', 'sams-serif'; */
    }

    .login{
        width: 100%;
        max-width: 500px;
        margin: auto;
        padding: 30px 60px;
        background: var(--color-text-light);
        border-radius: 5px;
    }

    .profile-icon {
        color: var(--color-background-home);
    }

    #floatingInput {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    #floatingPassword {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .custom-button {
        background-color: var(--color-button);
        color: var(--color-text-light);
    }
</style>
