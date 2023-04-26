<template>
   <div class="call2action">
        <div class="container">
            CALL2ACTION
        </div> 
   </div>
   <header>
        <div class="container h-100 d-flex justify-content-between align-items-center">
            <div class="box-logo">
                LOGO
            </div>
            <div class="navbar">
                NAVBAR
            </div>
            <div class="book-now">
                BOOK-NOW
            </div>
        </div>
   </header>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .call2action{
        height: 50px;
        width: 100%;
        border: 1px solid red;
    }

    header{
        height: 120px;
        border: 1px solid red;
    }
</style>