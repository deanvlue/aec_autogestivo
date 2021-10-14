<template>
  <div>
    <button class="goTop" v-if="isVisible" @click="backToTop">
      <b-icon-arrow-up variant="light"></b-icon-arrow-up>
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    initToTopButton: function() {
      $(document).bind('scroll', function() {
        var backToTopButton = $('.goTop');
        if ($(document).scrollTop() > 250) {
          backToTopButton.removeClass('notVisible');
          backToTopButton.addClass('isVisible');
          this.isVisible = true;
        } else {
          backToTopButton.removeClass('isVisible');
          backToTopButton.addClass('notVisible');
          this.isVisible = false;
        }
      }.bind(this));
    },
    backToTop: function() {
      $('html,body').stop().animate({
        scrollTop: 0
      }, 'slow', 'swing');
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      this.initToTopButton();
    });
  }
}
</script>
<style>
.goTop {
  border-radius: 100%;
  background-color: #da3773;
  background-color: rgba(218, 55, 115, 1);
  position: fixed;
  width: 50px;
  height: 50px;
  display: block;
  right: 25px;
  bottom: 25px;
  border: none;
  opacity: 0;
  z-index: -1;
  box-shadow: 1px 2px 6px 1px rgba(0,0,0,0.20);
}
.goTop:hover {
  opacity: 1;
  background-color: #da3773;
  background-color: rgba(218, 55, 115, 1);
}
.isVisible {
  opacity: 0.8;
  z-index: 4;
  -webkit-transition: all 0.4s ease-in;
  transition: all 0.4s ease-in;
}
.notVisible {
  -webkit-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}
</style>