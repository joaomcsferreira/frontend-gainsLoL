<template>
    <div class="main text-center">
        <div class="login">
            <h3 class="mb-3 fw-normal">Create Account</h3>
            <h5>Get started with your free account</h5>
            <br>
            <form @submit.prevent="handleSubmit">
                <div class="row g-2">
                    <div class="form-floating col-md">
                        <input type="text" v-model="newUser.first_name" class="form-control" id="floatingInput" placeholder="first name">
                        <label for="floatingInput">First name</label>
                    </div>
                    <div class="form-floating col-md">
                        <input type="text" v-model="newUser.last_name" class="form-control" id="floatingInput" placeholder="last name">
                        <label for="floatingInput">Last name</label>
                    </div>
                </div>
                <div class="form-floating">
                    <input type="email" v-model="newUser.email" class="form-control" id="floatingInput" placeholder="Enter email">
                    <label for="floatingInput">Email</label>
                </div>
                <br>
                <div class="form-floating">
                    <input type="password" v-model="newUser.password" class="form-control" id="floatingInput" placeholder="Password">
                    <label for="floatingInput">Password</label>
                </div>
                <div class="form-floating">
                    <input type="password" v-model="newUser.password_confirm" class="form-control" id="floatingInput" placeholder="Repeat password">
                    <label for="floatingInput">Repeat password</label>
                </div>

                <br>

                <button type="submit" class="w-100 btn btn-lg btn-outline-primary custom-button">Register</button>
            </form>
        </div> 
    </div>
</template>


<script>

import { mapActions } from 'vuex'

export default {
    name: 'signup',
    data() {
        return {
            newUser: {}
        }
    },
    methods: {
        ...mapActions(['signup']),
        handleSubmit() {
            this.signup(this.newUser)
        }
    }
}


</script>

<style scoped>

    .main {
        height: 100vh;
        padding-top: 35px;
        background-color: var(--color-background);
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
        border-radius: 0;
        border-radius: 5px;
    }

    .custom-button {
        background-color: var(--color-button);
        color: var(--color-text-light);
    }

    .form-floating {
        margin: 5px;
    }
</style>
