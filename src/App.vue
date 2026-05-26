<script setup>
</script>

<template>
  <div class="site">
    <header class="site-header">
      <div class="container header-inner">
        <div class="brand">
          <div class="logo">ST</div>
          <div>
            <div class="school-name">SOS TECHNICAL HIGHSCHOOL</div>
            <div class="school-tag">Practical skills for real careers</div>
          </div>
        </div>
        <nav class="site-nav">
          <a href="#programs">Programs</a>
          <a href="#gallery">Gallery</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero container">
        <h2 class="hero-title">Practical skills. Real results.</h2>
        <p class="hero-sub">Hands-on short programs in IT, Electronics and Automotive — focused on jobs.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#gallery">View Photos</a>
          <a class="btn" href="#programs">See Programs</a>
        </div>
      </section>

      <section id="programs" class="container cards">
        <article class="card">
          <h3>Information Technology</h3>
          <p>Software basics, networking and practical labs to build employable skills.</p>
        </article>
        <article class="card">
          <h3>Electronics</h3>
          <p>Hands-on circuitry, microcontrollers and real project work.</p>
        </article>
        <article class="card">
          <h3>Automotive</h3>
          <p>Diagnostics, maintenance and workshop practice for technical careers.</p>
        </article>
      </section>


      <section id="gallery" class="container gallery">
        <h3>Gallery</h3>
        <div class="gallery-grid">
          <figure class="gallery-item">
            <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=60" alt="Students in workshop" />
            <figcaption>Workshop session</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60" alt="Hands-on electronics" />
            <figcaption>Electronics lab</figcaption>
          </figure>
          <figure class="gallery-item">
            <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=60" alt="Technical training" />
            <figcaption>Technical training</figcaption>
          </figure>
        </div>
      </section>

    </main>

    <footer class="site-footer">
      <div class="container">
        <div>© SOS Technical Highschool</div>
        <div>Address: KN 129st</div>
        <div>Phone: (+250) 785903026</div>
        <div>Email:SOSTHS@gmail.com</div>
      </div>
    </footer>
  </div>
</template>

<style scoped></style>
