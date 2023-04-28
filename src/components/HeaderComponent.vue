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
                <img src="/images/avada-drivers-logo-1x.png" alt="">
            </div>
            <div class="navbar d-flex gap-4">
                <ul v-for="link in store.navLinks" class="list-unstyled mt-3">
                    <li class="text-white"><a href="#">{{ link }}</a></li>
                </ul>
            </div>
            <div class="book-now">
                <button>book now</button>
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
        background-color: rgb(37, 37, 37);
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
        width: 100%;
        position: absolute;
        top: 50px;
        background-color: rgba(46, 46, 46, 0.521);

        .box-logo{
            width: 250px;
            height: 50px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .navbar{
            li{
                padding: 10px 8px;
                cursor: pointer;
                border-bottom: 2px solid transparent;
                &:hover{
                    box-shadow: inset 0 -2px 0 $mygreen;
                }
                &:hover a{
                    color: $mygreen;
                }
            }
            a{
                color: white;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 700;
                font-size: 0.9rem;
            }
        }
        .book-now{
            button{
                color: white;
                text-transform: uppercase;
                font-weight: 700;
                background-color: $mygreen;
                border-radius: 20px;
                border: transparent;
                padding: 10px 30px;
                &:hover{
                    background-color: #7abc64b7;
                    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
                }
            }
            
        }
    }
    .debug{
        border: 1px solid red;
    }
</style>