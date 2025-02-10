<template>
  <div id="app">
    <AppHeader />
    <IntroSection />
    <AboutMe />
    <QuoteSection />
    <WorkExperience />
    <EducationSection />
    <InterestsSection />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import IntroSection from './components/IntroSection.vue';
import AboutMe from './components/AboutMe.vue';
import QuoteSection from './components/QuoteSection.vue';
import WorkExperience from './components/WorkExperience.vue';
import EducationSection from './components/EducationSection.vue';
import InterestsSection from './components/InterestsSection.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    IntroSection,
    AboutMe,
    QuoteSection,
    WorkExperience,
    EducationSection,
    InterestsSection,
    AppFooter,
  },
};
</script>

<style>
/* Import global styles */
</style>