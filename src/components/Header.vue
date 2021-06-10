<template>
    <header>

        <nav class="navbar navbar-expand navbar-light mb-20">
            <div class="container-fluid">
                <a class="display-4 text-dark text-decoration-none" href="/">GainsLoL</a>

                <div id="menu-login">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">teste@teste.com</a>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/"><i class="fas fa-user-circle"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/"><i class="fas fa-cog"></i></a>
                    </li>
                </ul>
            </div>
                
            </div>
        </nav>

        <span id=line></span>

    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    #line {
        display: block;
        border-bottom: 1.5px solid #cecece;
        margin: 0 50px;
    }
</style>