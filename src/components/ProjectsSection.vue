<template>
  <!-- Reuses the workexperience styles so it matches the section above it. -->
  <section class="workexperience" id="projects">
    <div class="wrapper">
      <h2>Projects</h2>
      <aside>
        <h3>Chi — Health &amp; Fitness App for iPhone + Apple Watch</h3>
        <h4>2026 to present</h4>
        <p>A Whoop-style wellness app designed and built solo in Swift and SwiftUI. Chi computes daily Strain, Recovery, and Sleep scores entirely on-device from Apple Watch data — heart rate, heart-rate variability, resting heart rate, respiratory rate, and sleep stages read via HealthKit — scored against personalized trailing baselines rather than population norms. The paired watchOS companion app mirrors the iPhone's scores over WatchConnectivity, with a WidgetKit watch-face complication and HealthKit background delivery keeping everything current. The scoring models are calibrated against published references: the sleep model tracks Apple's own Sleep Score to within a couple of points, and the training-strain model is validated against the Banister TRIMP training-load model from sports-science literature. Privacy-first by design — all health data stays on the device.</p>
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
};
</script>
