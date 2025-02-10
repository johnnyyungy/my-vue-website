<template>
  <section class="interests" id="interests">
    <div class="wrapper">
      <div>
        <h2>Outside Interests</h2>
        <p>Outside of work, my hobbies include traveling, cooking, fitness, and learning different languages.</p>
        <p>For fitness, I train Olympic weightlifting and CrossFit. I practice Mixed Martial Arts, in particular Muay Thai and Brazilian Jiu-Jitsu.</p>
        <p>I like to collect limited edition action figures, such as Transformers and Power Rangers.</p>
        <p>I am also interested in photography and videography. I combine my interests by taking photos on my travels and making videos for my YouTube cooking channel, <a href="https://www.youtube.com/channel/UCZhsbHXGqVWHivekOiC9ofQ" target="_blank">Hello! Taste</a>.</p>
        <p>I also have a fitness blog that is built in WordPress: <a href="http://www.trainsmartnothard.com/" target="_blank">www.trainsmartnothard.com</a></p>
      </div>
      <div class="photo">
        <div class="slideshow-container">
          <div class="mySlides fade" v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
            <div class="numbertext">{{ index + 1 }} / {{ slides.length }}</div>
            <img :src="slide.image" style="width:100%" :alt="slide.alt">
            <div class="text">{{ slide.caption }}</div>
          </div>
          <a class="prev" @click="prevSlide">&#10094;</a>
          <a class="next" @click="nextSlide">&#10095;</a>
        </div>
        <br>
        <div style="text-align:center">
          <span class="dot" v-for="(slide, index) in slides" :key="index" :class="{ active: currentSlide === index }" @click="setSlide(index)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InterestsSection',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { 
          image: require('@/assets/images/muay_thai.jpg'), 
          alt: 'Muay Thai', 
          caption: 'Muay Thai' 
        },
        { 
          image: require('@/assets/images/toys.jpg'), 
          alt: 'Power Rangers Collection', 
          caption: 'Power Rangers Collection' 
        },
        { 
          image: require('@/assets/images/japan.jpg'), 
          alt: 'Kyoto, Japan', 
          caption: 'Kyoto, Japan' 
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    setSlide(index) {
      this.currentSlide = index;
    },
  },
};
</script>
