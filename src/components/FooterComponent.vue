<template>
   <footer>
        <!-- FOOTER TOP -->
        <div class="f-top">
            <div class="background-footer">
                <img src="/images/footer-background-color.jpg" alt="">
            </div>
            <div class="content d-flex justify-content-center">
                <div class="row container p-0 m-0">
                    <!-- ABOUT US -->
                    <div class="col-3 d-flex flex-column">
                        <div class="box-logo">
                            <img src="/images/avada-drivers-logo-1x.png" alt="">
                        </div>
                        <p>Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time.</p>
                    </div>
                    <!-- CONTACT -->
                    <div class="col-3">
                        <h6>contact details</h6>
                        <ul class="contacts list-unstyled d-flex flex-column" v-for="contact in store.contacts">
                            <li><i class="fa-solid fa-house-chimney"></i> <span>{{ contact.address }}</span></li>
                            <li><i class="fa-solid fa-phone"></i> {{ contact.number }}</li>
                            <li><i class="fa-regular fa-envelope"></i> {{ contact.email }}</li>
                            <li><i class="fa-solid fa-link"></i> {{ contact.link }}</li>
                        </ul>
                    </div>
                    <!-- OUR COURSES LINK -->
                    <div class="col-3">
                        <h6>courses</h6>
                        <ul class="list-unstyled d-flex flex-column align-items-start">
                            <li id="links" v-for="link in store.coursesLinks">
                                <i class="fa-regular fa-circle-right me-2"></i>    
                                <a href="#" class="text-decoration-none"> {{ link }}</a>
                            </li>
                        </ul>
                    </div>
                    <!-- PROMO -->
                    <div class="col-3 d-flex flex-column align-items-center">
                        <div class="box-image">
                            <img src="/images/footer-ad-grid.png" alt="">
                        </div>
                        <button>book now</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- FOOTER BOTTOM -->
        <div class="f-bottom">
            <div class="content h-100 container d-flex justify-content-between align-items-center">
                <span>© Copyright 2012 - 2023 | Avada Theme by <span class="green">ThemeFusion</span> | All Rights Reserved | Powered by <span class="green">WordPress</span></span>
                <div class="social d-flex me-5">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>    
        </div>
   </footer>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'FooterComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .f-top{
        height: 450px;
        position: relative;
        overflow: hidden;
        .background-footer{
            height: 100%;
            width: 2000px;
            img{
                height: 100%;
                width: 100%;
            }
        }
        .content{
            width: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            .box-logo{
                img{
                    scale: 0.8;
                    margin-left: -20px;
                }
            }
            h6{
                color: white;
                text-transform: uppercase;
                font-weight: 700;
                text-align: start;
                padding: 10px;
            }
            li, p{
                padding: 10px;
                font-size: 0.9rem;
                color: $mygrey;
                font-weight: 600;
            }
            .contacts{
                li{
                    &:hover{
                    cursor: pointer;
                    color: white;
                    }
                }
            }
            #links, #links a{
                color: $mygreen;
                font-size: 1rem;
                padding: 8px;
                border-bottom: 2px solid transparent;
                &:hover{
                    color: white;
                }
            }
            .box-image{
                img{
                    width: 100%;
                    height: 100%;
                    padding: 30px;
                    margin-top: -20px;
                }
            }
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
    .f-bottom{
        height: 150px;
        background-color: #1c1d1e;
        span{
            color: $mygrey;
            font-size: 0.8rem;
            font-weight: 600;
            .green{
                color: $mygreen;
                cursor: pointer;
            }
        }
        .social{
            color: white;
            i{
                padding: 10px;
                &:hover{
                    color: $mygreen;
                    cursor: pointer;
                }
            }
        }
    }
    .debug{
        border: 1px solid yellow;
    }
</style>