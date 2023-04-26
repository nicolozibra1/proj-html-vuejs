<template>
   <div class="call2action">
        <div class="container h-100 d-flex justify-content-between align-items-center">
            <span>We have a 95% Succesful Pass Rate!</span>
            <span><i class="fa-solid fa-phone-flip pe-2"></i> Give us a call to book your tuition! 1-800-555-555 </span>
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
@use '../assets/styles/partials/variables' as *;
    .call2action{
        height: 50px;
        background-color: $mydarkGrey;
        border: 1px solid red;
        span{
            color: $mygrey;
            font-size: 0.9rem;
            font-weight: 600;
        }
        &:hover{
            cursor: pointer;
        }
        

    }

    header{
        height: 120px;
        border: 1px solid red;
    }
</style>