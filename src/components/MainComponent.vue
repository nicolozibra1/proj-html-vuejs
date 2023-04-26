<template>
    <main>
        <!-- HERO -->
        <section class="hero d-flex justify-content-center align-items-center">
            <div class="box-hero">
                <img src="/images/homepage-hero-background.jpg" alt="">
            </div>
        </section>
        <!-- FIRST LESSON -->
        <section class="first-lesson d-flex justify-content-center align-items-center">
            FIRST LESSON
        </section>
        <!-- CALL2ACTION -->
        <div class="call2action d-flex justify-content-center align-items-center">
            CALL2ACTION
        </div>
        <!-- COURSES -->
        <section class="courses">
            <div class="choose-course container">
                CHOOSE YOUR FAVORITE COURSE
            </div>
            <div class="statics container text-center">
                COURSE STATICS
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
    .box-hero{
        height: 720px;
        width: 100%;
        border: 1px solid red;
        img{
            width: 100%;
            height: 100%;
            border: 1px solid red;
        }
    }
    .first-lesson{
        height: 650px;
        border: 1px solid red;
    }
    .call2action{
        height: 250px;
        border: 1px solid red;
    }
    .courses{
        height: 1900px;
        border: 1px solid red;

        .choose-course{
            height: 600px;
            border: 1px solid blue;
        }
        .statics{
            height: 500px;
            border: 1px solid blue;
        }
        .instructors{
            height: 800px;
            border: 1px solid blue;
        }
    }
    .testimonials{
        height: 850px;
        border: 1px solid red;;
    }
    .latest-news{
        height: 850px;
        border: 1px solid red;
    }
</style>