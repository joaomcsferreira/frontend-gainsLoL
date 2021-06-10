<template>
    <div class="main">
        <div class="login">
            <div class="content-login">
                <header>
                    <h1> Login </h1>
                </header>
                <div class="form">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email:</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Senha:</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
                    </form>
                </div>
            </div>
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

<style lang="scss" scoped>
.main {
    display: flex;
    height: 100vh;
     background-image: linear-gradient(45deg, #126e82, #245B90);
    /* font-family: 'Roboto', 'sams-serif'; */
}
.login{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .content-login {
        width: 400px;
        height: 450px;
        background-color: #132c33;
        border-radius: 7px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        header {
            width: 100%;
            display: flex;
            justify-content: center;
            
            h1 {
                color: white;
                font-size: 28px;
            }
        }
        .form {
            width: 70%;
            margin-top: 20px;

            label {
                margin-top: 20px;
                color: white;
            }
            input {
                margin-top: 20px;
            }
            button {
                margin-top: 2rem;
                padding: 0.4rem;
                width: 100%;
                background: linear-gradient(to left, #126e82, #51c4d3);
                cursor: pointer;
                color: white;
                font-size: 0.9rem;
                font-weight: 300;
                border-radius: 4px;
                transition: all 0.3s ease;
            }
       


        }
    }
}
</style>