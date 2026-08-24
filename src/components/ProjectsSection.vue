<template>
  <section id="projects">
    <div class="wrapper">
      <div class="section-head">
        <h2>Built from curiosity and passion.</h2>
        <p>Six personal projects, each one either solving a problem I actually had or chasing something I was curious about, from HealthKit scoring models through to a couple of hand-coded blogs.</p>
      </div>

      <article class="case">
        <div class="case-copy">
          <h3><span class="mark">氣</span> Chi</h3>
          <p class="meta">2026 &mdash; present</p>
          <p>A Whoop-style wellness app that computes Strain, Recovery and Sleep entirely on-device from Apple Watch data, scored against personalised trailing baselines rather than population norms. The watchOS companion mirrors the iPhone's scores live, with a watch-face complication for an at-a-glance read. The scoring is calibration-checked against outside references: the sleep model tracks Apple's own Sleep Score within a couple of points, and Strain is validated against the Banister TRIMP model from sports-science literature.</p>
          <div class="case-tags">
            <span class="tag">Swift</span>
            <span class="tag">SwiftUI</span>
            <span class="tag">HealthKit</span>
            <span class="tag">watchOS</span>
            <span class="tag">WidgetKit</span>
          </div>
        </div>
        <div class="case-shot">
          <div class="device-phone">
            <div class="screen"><div class="notch"></div><img src="@/assets/images/projects/chi/dashboard.jpg" alt="Chi's main dashboard, showing Strain, Recovery and Sleep scores for the day"></div>
          </div>
          <div class="device-watch paired">
            <div class="screen"><img src="@/assets/images/projects/chi/watch-face.jpg" alt="Chi's watch-face complication showing live heart rate"></div>
          </div>
        </div>
      </article>

      <article class="case reverse">
        <div class="case-copy">
          <h3>Collectors Catalogue</h3>
          <p class="meta">Personal project</p>
          <p>Catalogue and browse a collection with barcode scanning and photos. Taken through the full release process to Ready for Distribution on App Store Connect.</p>
          <div class="case-tags">
            <span class="tag">SwiftData</span>
            <span class="tag">CloudKit</span>
          </div>
        </div>
        <div class="case-shot">
          <div class="device-phone">
            <div class="screen"><div class="notch"></div><img src="@/assets/images/projects/collectors-catalog/list.jpg" alt="Collectors Catalogue's item list, grouped by category"></div>
          </div>
        </div>
      </article>

      <article class="case">
        <div class="case-copy">
          <h3>Todaloo</h3>
          <p class="meta">Personal project</p>
          <p>Finds nearby public toilets and plots them on a map when you need one most, backed by a live dataset of real facilities.</p>
          <div class="case-tags">
            <span class="tag">MapKit</span>
            <span class="tag">Supabase</span>
          </div>
        </div>
        <div class="case-shot">
          <div class="device-phone">
            <div class="screen"><div class="notch"></div><img src="@/assets/images/projects/todaloo/map.jpg" alt="Todaloo's map, showing nearby public restrooms in central London"></div>
          </div>
        </div>
      </article>

      <article class="case reverse">
        <div class="case-copy">
          <h3>Step Pet</h3>
          <p class="meta">Personal project</p>
          <p>A watch-only app that gamifies daily walking: your steps feed a virtual pet living right on your wrist, with its own WidgetKit complication.</p>
          <div class="case-tags">
            <span class="tag">watchOS</span>
            <span class="tag">WidgetKit</span>
          </div>
        </div>
        <div class="case-shot">
          <div class="device-watch"><div class="screen"><img src="@/assets/images/projects/steppet/walk.jpg" alt="Step Pet's Walk to Earn Cheese screen on Apple Watch"></div></div>
        </div>
      </article>

      <article class="case">
        <div class="case-copy">
          <h3>Yung Bros</h3>
          <p class="meta"><a href="https://yungbros.com" target="_blank" rel="noopener">yungbros.com</a></p>
          <p>A hand-coded travel and food blog, built from scratch with vanilla HTML, CSS and JavaScript rather than a site builder, with a custom post and category layout for trip write-ups from Japan and beyond.</p>
          <div class="case-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
        </div>
        <div class="case-shot">
          <div class="device-browser">
            <div class="browser-bar"><span></span><span></span><span></span></div>
            <div class="screen"><img src="@/assets/images/projects/yungbros/homepage.jpg" alt="Yung Bros homepage, featuring a travel story about Kinkaku-ji in Kyoto, Japan"></div>
          </div>
        </div>
      </article>

      <article class="case reverse">
        <div class="case-copy">
          <h3>Train Smart Not Hard</h3>
          <p class="meta"><a href="https://trainsmartnothard.com" target="_blank" rel="noopener">trainsmartnothard.com</a> &mdash; running over a decade</p>
          <p>A science-backed fitness and nutrition blog I've written and coded myself for over ten years, rebuilt as a hand-coded static site with a dark, editorial design across training guides, nutrition breakdowns and beginner programmes.</p>
          <div class="case-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
            <span class="tag">JavaScript</span>
          </div>
        </div>
        <div class="case-shot">
          <div class="device-browser">
            <div class="browser-bar"><span></span><span></span><span></span></div>
            <div class="screen"><img src="@/assets/images/projects/trainsmartnothard/homepage.jpg" alt="Train Smart Not Hard homepage, showing the 'Train Smart Not Hard' hero headline"></div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
};
</script>
