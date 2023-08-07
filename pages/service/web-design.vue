<template>
  <div class="main">
    <div class="canvas">
      <div class="title">
        <SubpageTitle2 class="subpagetite" title="Web Design"
          subtitle="We pride ourselves on designing sites with a high level of design quality without compromising on user experience. We craft exceptional results that will make other brands want to model themselves after you." />
      </div>
      <div class="demos">
        <ImgsDisplay class="demos-content"/>
      </div>

      <div class="content">
        <div class="content-title">
          Aesthetically pleasing websites that evoke that wow reaction
        </div>
        <div class="content-description">
          A brand's website, no matter big or small, is an opportunity for them
          to stand out. So why settle for something boring and unoriginal? At
          Epoch, our clients benefit from beautifully designed websites that are
          carefully crafted and custom-made.Our main goal is for our client's
          site is to resonate with its customers and create a smooth user
          experience. As your dedicated web design agency, you can depend on our
          highly educated and experienced team to create a digital experience
          that evokes that wow factor.
        </div>
        <div class="skill-sets">
          <div class="skill-row">
            <div class="skill-tag">Figma</div>
            <div class="skill-tag">Adobe XD</div>
            <div class="skill-tag">Graphics</div>
          </div>
          <div class="skill-row">
            <div class="skill-tag">UI/UX</div>
            <div class="skill-tag">Landing pages</div>
            <div class="skill-tag">Wireframes</div>
            <div class="skill-tag">Redesign</div>
          </div>
        </div>
      </div>

      <div class="why-epoch">
        <div class="why-epoch-grid">
          <div class="sub-title why-epoch-grid-left">WHY EPOCH</div>
          <img src="../../assets/Q-line.png" alt="Q" class="why-epoch-grid-mid" />
          <div class="why-epoch-grid-right">
            <div class="why-title">Originality</div>
            <div class="why-description">
              Your new website will be hand-crafted and unique to your brand and
              its target audience. We pride ourselves in designing one-of-a-kind
              websites.
            </div>
            <div class="why-title">Creativity</div>
            <div class="why-description">
              Each design we create combines our creativity and deep
              understanding of your brand\'s user needs to deliver a meaningful
              digital experience.
            </div>
            <div class="why-title">Impactful</div>
            <div class="why-description">
              Your website’s the centrepiece of your visual identity. We make
              every click count through creative design and UX that converts.
            </div>
          </div>
        </div>
      </div>

      <div class="featured-projects">
        <div class="sub-title">FEATURED PROJECTS</div>
        <div class="scroll-swiper">
          <ScrollSwiper class="swiper" />
        </div>
      </div>

      <div class="contact">
        <GetInTouch />
      </div>

      <div class="footer">
        <MainFooter />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>



<script setup>

useHead({
  title: "Epoch Design | Web Design",
  meta: [{ name: "description", content: "web design" }],
  link: [
    {
      rel:'stylesheet',
      href:'../assets/css/services.css'
    }
  ]
});


</script>
