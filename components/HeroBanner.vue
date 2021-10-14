<template>
  <client-only>

    <div class="inner-hero-banner mb-4">
      <div class="inner-hero-text">
        <div class="title">
          <h1>Reforzamiento del conocimiento</h1>
          <h3> Sigamos aprendiendo </h3>
        </div>
      </div>
    </div>

  </client-only>
</template>
<script>
export default {
  props: ["title", "subtitle"],
};
</script>
<style>
.inner-hero-banner {
  background: rgb(179, 51, 127);
  background: linear-gradient(
    90deg,
    rgba(179, 51, 127, 1) 0%,
    rgba(198, 79, 155, 1) 34%,
    rgba(179, 51, 127, 1) 79%,
    rgba(152, 25, 100, 1) 98%
  );
  /*background-image: url(~@/static/img/inner-banner.jpg);*/
  width: 100%;
  height: 18vh;
  background-position: 50%;
  background-size: cover;
  position: relative;
  -webkit-box-shadow: 0px 7px 8px -2px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 7px 8px -2px rgba(0, 0, 0, 0.38);
}
.inner-hero-banner .inner-hero-text {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  text-align: center;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.inner-hero-banner .title {
  color: #fff;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 40px;
}
.inner-hero-banner .subtitle {
  color: #ededed;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 25px;
}
/* 
  ##Device = Tablets, Ipads (portrait)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) {
  .inner-hero-banner {
    height: 13vh;
  }
}
/* 
  ##Device = Tablets, Ipads (landscape)
  ##Screen = B/w 768px to 1024px
*/
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .inner-hero-banner {
    height: 20vh;
  }
}
/* 
  ##Device = Low Resolution Tablets, Mobiles (Landscape)
  ##Screen = B/w 481px to 767px
*/
@media (min-width: 481px) and (max-width: 767px) {
  .inner-hero-banner {
    height: 30vh;
  }
}
/* 
  ##Device = Most of the Smartphones Mobiles (Portrait)
  ##Screen = B/w 320px to 479px
*/
@media (min-width: 320px) and (max-width: 480px) {
  .inner-hero-banner {
    height: 15vh;
  }
}
/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3) {
  .inner-hero-banner {
    height: 30vh;
  }
}
</style>