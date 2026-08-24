<template>
  <header>
    <div class="toggle">
      <button @click="toggleNav">
        <svg width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>burger</title>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="burger">
              <g id="Layer_2" transform="translate(3.000000, 8.000000)" fill="#fff" fill-rule="nonzero"> <!-- Fill set to #fff -->
                <path d="M25,2 L1,2 C0.44771525,2 0,1.55228475 0,1 C0,0.44771525 0.44771525,0 1,0 L25,0 C25.5522847,0 26,0.44771525 26,1 C26,1.55228475 25.5522847,2 25,2 Z" id="Path"></path>
                <path d="M25,9 L1,9 C0.44771525,9 0,8.55228475 0,8 C0,7.44771525 0.44771525,7 1,7 L25,7 C25.5522847,7 26,7.44771525 26,8 C26,8.55228475 25.5522847,9 25,9 Z" id="Path"></path>
                <path d="M25,16 L1,16 C0.44771525,16 0,15.5522847 0,15 C0,14.4477153 0.44771525,14 1,14 L25,14 C25.5522847,14 26,14.4477153 26,15 C26,15.5522847 25.5522847,16 25,16 Z" id="Path"></path>
              </g>
              <g id="frame">
                <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
    <nav :class="{ showNav: isNavVisible }" id="myToggle">
      <a href="#home" :class="{ active: activeSection === 'home' }">Home</a>
      <a href="#aboutme" :class="{ active: activeSection === 'aboutme' }">My Background</a>
      <a href="#work" :class="{ active: activeSection === 'work' }">Work Experience</a>
      <a href="#projects" :class="{ active: activeSection === 'projects' }">Projects</a>
      <a href="#education" :class="{ active: activeSection === 'education' }">Education</a>
      <a href="#interests" :class="{ active: activeSection === 'interests' }">Outside Interests</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isNavVisible: false,
      activeSection: 'home',
    };
  },
  mounted() {
    this.sections = Array.from(document.querySelectorAll('section[id]'));
    this.updateActiveSection();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
    if (this.scrollTicking) {
      cancelAnimationFrame(this.scrollTicking);
    }
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible;
    },
    onScroll() {
      if (this.scrollTicking) return;
      this.scrollTicking = requestAnimationFrame(() => {
        this.updateActiveSection();
        this.scrollTicking = null;
      });
    },
    updateActiveSection() {
      // The section whose top has most recently passed just below the
      // fixed nav is "current" - falls back to the first section (home)
      // when nothing has scrolled past that line yet.
      const navOffset = 80;
      let current = this.sections[0];
      for (const section of this.sections) {
        if (section.getBoundingClientRect().top <= navOffset) {
          current = section;
        }
      }
      if (current) {
        this.activeSection = current.id;
      }
    },
  },
};
</script>
