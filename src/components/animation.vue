<template lang="jade">
.animation
  .pulse-out(:style='loadingStyle')
    span
      img(src="../assets/stone.png")
      .text 1
    span
      img(src="../assets/stone.png")
      .text 2
    span
      img(src="../assets/stone.png")
      .text 3
    span
      img(src="../assets/stone.png")
      .text 4
    span
      img(src="../assets/stone.png")
      .text 5
</template>

<style scoped>
.pulse-out,
.pulse-out > span {
  position: relative;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.pulse-out {
  display: block;
  font-size: 0;
  color: #fff;
}

.pulse-out.la-dark {
  color: #333;
}

.pulse-out > span {
  display: inline-block;
  float: none;
  background-color: currentColor;
  border: none;
}

.pulse-out {
  width: 20px;
  height: 17px;
}

img {
  display: inline-block;
  width: 20px;
  height: 17px;
}

.pulse-out > span {
  width: 30px;
  height: 20px;
  margin: 2px;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 0;
  /* -webkit-animation: pulse-out 1s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
  -moz-animation: pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
  -o-animation: pulse-out 0.9s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85); */
  animation: pulse-out 3s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
}

.pulse-out > span:nth-child(3) {
  -webkit-animation-delay: -0.9s;
  -moz-animation-delay: -0.9s;
  -o-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.pulse-out > span:nth-child(2),
.pulse-out > span:nth-child(4) {
  -webkit-animation-delay: -0.7s;
  -moz-animation-delay: -0.7s;
  -o-animation-delay: -0.7s;
  animation-delay: -0.7s;
}

.pulse-out > span:nth-child(1),
.pulse-out > span:nth-child(5) {
  -webkit-animation-delay: -0.5s;
  -moz-animation-delay: -0.5s;
  -o-animation-delay: -0.5s;
  animation-delay: -0.5s;
}

/* @-webkit-keyframes pulse-out {
  0% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }

  50% {
    -webkit-transform: scaley(0.3);
    transform: scaley(0.3);
  }

  100% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
}

@-moz-keyframes pulse-out {
  0% {
    -moz-transform: scaley(1);
    transform: scaley(1);
  }

  50% {
    -moz-transform: scaley(0.3);
    transform: scaley(0.3);
  }

  100% {
    -moz-transform: scaley(1);
    transform: scaley(1);
  }
}

@-o-keyframes pulse-out {
  0% {
    -o-transform: scaley(1);
    transform: scaley(1);
  }

  50% {
    -o-transform: scaley(0.3);
    transform: scaley(0.3);
  }

  100% {
    -o-transform: scaley(1);
    transform: scaley(1);
  }
} */

@keyframes pulse-out {
  from {
    left: 10px;
    top: 0;
  } to {
    left: 10px;
    top: 30px;
  }
}
/* @keyframes pulse-out {
  0% {
    -webkit-transform: scaley(1);
    -moz-transform: scaley(1);
    -o-transform: scaley(1);
    transform: scaley(1);
  }

  50% {
    -webkit-transform: scaley(0.3);
    -moz-transform: scaley(0.3);
    -o-transform: scaley(0.3);
    transform: scaley(0.3);
  }

  100% {
    -webkit-transform: scaley(1);
    -moz-transform: scaley(1);
    -o-transform: scaley(1);
    transform: scaley(1);
  }
} */
</style>
<script>
export default {
  props: ["color"],
  computed: {
    loadingStyle() {
      return {
        color: this.color || "#fff"
      };
    }
  }
};
</script>
