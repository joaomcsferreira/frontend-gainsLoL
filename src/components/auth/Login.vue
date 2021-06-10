<template>
    <div class="main text-center">
        <div class="login">
            <form>
                <i class="mb-4 mr-2 fas fa-user-circle fa-7x profile-icon"></i>

                <h5 class="mb-3 fw-normal">Please sign in</h5>

                <div class="w-100 form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="Enter email">
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                    <label for="floatingPassword">Password</label>
                </div>
                
                <br>

                <button type="submit" class="w-100 btn btn-lg btn-outline-primary custom-button" @click.prevent="login">Login</button>
            </form>
        </div> 
    </div>
</template>
<script>
    export default {
        name: 'LoginComponent',
        
        data(){
            return{

            }
        },
        methods: {
            login(){
                alert('ok!')
            }
        }
    }
</script>

<style scoped>

    .main {
        display: flex;
        height: 100vh;
        background-image: linear-gradient(45deg, #126e82, #245B90);
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