<template>
    <main>
        <!-- HERO -->
        <section class="hero d-flex justify-content-center align-items-center">
            <div class="box-hero">
                <img src="/images/homepage-hero-background.jpg" alt="">
            </div>
            <div class="hero-content d-flex flex-column">
                <h1>Drive with Avada</h1>
                <span>We offer the finest driving tuition money can buy</span>
            </div>
        </section>
        <!-- FIRST LESSON -->
        <section class="first-lesson">
            <row class="container h-100 d-flex justify-content-center">
                <div class="col-6 h-100 d-flex flex-column justify-content-center">
                    <h1 class="mt-3">Get Behind The Wheel</h1>
                    <p class="fs-4 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                    <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper. Fusce et ultrices libero, at suscipit lacus. Sed vitae fringilla nibh.</p>
                </div>
                <div class="col-6 px-5">
                    <div class="card d-flex flex-column justify-content-center align-items-center">
                        <h2>First Lesson Free!</h2>
                        <p class="text-center px-5">When you make a block booking with us your first lesson is included free.</p>
                        <form @submit.prevent class="d-flex flex-column align-items-center justify-content-center">
                            <input type="text" placeholder="Your Name*">
                            <input type="email" placeholder="Email*">
                            <input type="text" placeholder="Telephone">
                            <input type="text" placeholder="Location">
                            <button>request a callback</button>
                        </form>
                    </div>
                </div>
            </row>
        </section>
        <!-- CALL2ACTION -->
        <div class="call2action">
            <div class="box-background">
                <img src="/images/horizontal-cta-background.jpg" alt="">
            </div>
            <div class="container content">
                <div class="row container d-flex justify-content-center align-items-center">
                    <div class="col-6 d-flex flex-column justify-content-center">
                        <h1>Start Learning to Drive Today</h1>
                        <h5 class="pt-2">Give us a call to schedule your fist driving lesson</h5>
                    </div>
                    <div class="col-6 d-flex justify-content-center align-items-center">
                        <span><i class="fa-solid fa-phone-flip pe-2"></i> 1-800-555-555 </span>
                    </div>
                </div>
                
            </div>
        </div>
        <!-- COURSES -->
        <section class="courses">
            <!-- CHOOSE-COURSE -->
            <div class="choose-course">
                <div class="box-background-course">
                    <img class="background" src="/images/promise-background.jpg" alt="">
                    <img class="svg" src="/images/driving-triangle.svg" alt="">
                </div>
                <div class="row p-0 m-0 container">
                    <div class="col-4 p-0">
                        <div class="card h-100 d-flex flex-column align-items-center justify-content-around" id="card-custom">
                            <h1 class="my-4">Courses</h1>
                            <p class="text-center my-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices auctor sapien id cursus. Aliquam maximus turpis in vehicula semper.</p>
                            <button id="course-info" class="my-4">course infomation</button>
                            <div class="tringle"></div>
                            <span>new</span>
                        </div>
                    </div>
                    <div class="col-8 d-flex justify-content-center align-items-center gap-3">
                        <div class="card pe-4 bg-transparent border-0" v-for="course in store.courses">
                            <div class="card-image">
                                <img :src="'/images/' + course.image" alt="">
                            </div>
                            <div class="card-body d-flex flex-column align-items-center justify-content-center">
                                <h5>{{ course.name }}</h5>
                                <button>learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- STATISTICS -->
            <div class="statistics container text-center">
                <div class="row h-100 px-5 py-4 m-0 container d-flex justify-content-center">
                    <div class="col-4 h-100 p-2">
                        <div class="card">
                            <div class="circle d-flex justify-content-center align-items-center">
                                <span>95%</span>
                            </div>
                            <h6>pass rate</h6>
                        </div>
                    </div>
                    <div class="col-4 h-100 p-2">
                        <div class="card">
                            <div class="circle d-flex justify-content-center align-items-center">
                                <span>100%</span>
                            </div>
                            <h6>referral rate</h6>
                        </div>
                    </div>
                    <div class="col-4 h-100 p-2">
                        <div class="card">
                            <div class="circle d-flex justify-content-center align-items-center">
                                <span>0%</span>
                            </div>
                            <h6>accident rate</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="instructors container text-center">
                OUR INSTRUCTORS
            </div>
        </section>
        <!-- TESTIMONIALS -->
        <section class="testimonials">
            <div class="container text-center">
                TESTIMONIAL
            </div>
        </section>
        <!-- LATEST NEWS -->
        <section class="latest-news">
            <div class="container text-center">
                LATEST NEWS
            </div>
        </section>
        <!-- CALL2ACTION -->
        <div class="call2action d-flex justify-content-center align-items-center">
            CALL2ACTION
        </div>
    </main>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'MainComponent',
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;
    .hero{
        overflow: hidden;
        .box-hero{
            height: 720px;
            min-width: 2000px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .hero-content{
            position: absolute;
            left: 300px;
            h1{
                color: white;
                font-size: 4rem;
                font-weight: 700;
                margin-top: 120px;
            }
            span{
                color: white;
                font-size: 1.5rem;
                letter-spacing: 1px;
            }

        }
    }
    
    .first-lesson{
        height: 650px;
        h1{
            font-weight: 700;
            color: $mydarkGrey;
        }
        p{
            color: $mygrey;
            padding-right: 50px;
        }
        .card{
            padding: 50px 40px;
            border-radius: 15px;
            margin-top: -30px;
            box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
            h2{
            color: $mygreen;
            font-weight: 700;
            margin-bottom: 30px;
            }
            form{
                margin-top: 40px;
                gap: 30px;
                width: 100%;
                input{
                    width: 100%;
                    height: 50px;
                    background-color: $mylightGrey;
                    border: 1px solid lightgrey;
                    border-radius: 5px;
                    padding-left: 15px;
                    font-size: 0.9rem;
                }
                button{
                    color: white;
                    text-transform: uppercase;
                    font-weight: 600;
                    background-color: $mygreen;
                    border: transparent;
                    padding: 10px 30px;
                    border-radius: 20px;
                }
            }
        }
        
    }
    .call2action{
        overflow: hidden;
        position: relative;
        &:hover{
            cursor: pointer;
        }
        .box-background{
            height: 250px;
            min-width: 2000px;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }   
        }
        .content{
            color: white;  
            .row{
                position: absolute;
                top:50%;
                left: 50%;
                transform: translate(-50%, -50%);
                h1{
                    font-weight: 700;
                }
                h5{
                    font-weight: 700;
                    letter-spacing: 1px;;
                }
                span{
                    font-size: 1.8rem;
                    font-weight: 600;
                    padding-left: 150px;
                    i{
                        margin-right: 30px;
                    }
                }
            } 
        }
        
    }
    .courses{
        height: 1900px;

        .choose-course{
            height: 700px;
            position: relative;
            .box-background-course{
                height: 100%;
                .background{
                    height: 80%;
                    width: 100%;
                    object-fit: cover;
                    object-position: bottom;
                }
                .svg{
                    width: 100%;
                    height: 120px;
                }
            }
            .row{
                position: absolute;
                top:40%;
                left:50%;
                transform: translate(-50%, -50%);
                #card-custom{
                    margin-top: -75px;
                    padding: 100px 50px;
                    position: relative;
                    overflow: hidden;
                    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
                    h1{
                        font-weight: 700;
                        color: $mydarkGrey;
                    }
                    p{
                        color: $mygrey;
                    }
                    #course-info{
                        color: $mywhite;
                        font-weight: 700;
                        text-transform: uppercase;
                        background-color: $mygreen;
                        padding: 10px 30px;
                        border-radius: 20px;
                        border: transparent
                    }
                    .tringle{
                        width: 0; 
                        height: 0; 
                        border-left: 70px solid transparent;
                        border-right: 70px solid transparent; 
                        border-bottom: 70px solid $mygreen;
                        transform: rotate(-45deg);
                        position: absolute;
                        top: -12px;
                        left: -50px;
                    }
                    span{
                            text-transform: uppercase;
                            transform: rotate(-45deg);
                            font-weight: 700;
                            font-size: 1.2rem;
                            position: absolute;
                            top:15px;
                            left: 8px;
                            color: white;
                        }
                }
                .card-image{
                    width: 200px;
                    height: 200px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .card-body{
                    flex-grow: unset;
                    h5{
                        color: $mygrey;
                        text-transform: capitalize;
                        font-weight: 700;
                    }
                    button{
                        background-color: transparent;
                        border: 2px solid $mygrey;
                        text-transform: uppercase;
                        font-weight: 600;
                        font-size: 0.7rem;
                        color: $mygrey;
                        padding: 5px 15px;
                        border-radius: 20px;
                    }
                }
            }
        }
        .statistics{
            height: 500px;
            margin-top: -180px;
            .card{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 40px;
                width: 100%;
                height: 100%;
                border-top-right-radius: 8px;
                border-top-left-radius: 8px;
                border-bottom-right-radius: 12px;
                border-bottom-left-radius: 12px;
                box-shadow: rgba(100, 100, 111, 0.5) 0px 15px 10px 0px, $mygreen 0 -8px ;
                .circle{
                    border: 10px solid $mylightGrey;
                    border-radius: 50%;
                    height: 220px;
                    width: 220px;
                    span{
                        font-size: 2.5rem;
                        font-weight: 600;
                        color: $mygrey;
                    }
                }
                h6{
                    margin-top: 0px;
                    text-transform: uppercase;
                    font-weight: 700;
                    color: $mygrey;
                }
            }
        }
        .instructors{
            height: 800px;
            border: 1px solid blue;
        }
    }
    .testimonials{
        height: 850px;
        border: 1px solid red;
    }
    .latest-news{
        height: 850px;
        border: 1px solid red;
    }
    .debug{
        border: 1px solid blue;
    }
</style>