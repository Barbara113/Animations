document.addEventListener("DOMContentLoaded", function () {
  var loading = anime.timeline({
    duration: 1000,
    easing: "easeInOutSine",
    loop: true,
    direction: "alternate",
  });

  loading
    .add({
      targets: ".itemOne",
      keyframes: [
        { translateY: -50, backgroundColor: "rgb(136, 8, 8)" },
        { translateY: 0, backgroundColor: "rgb(240, 235, 235)" },
      ],
    })
    .add(
      {
        targets: ".itemTwo",
        keyframes: [
          { translateY: -50, backgroundColor: "rgb(0,128,0)" },
          { translateY: 0, backgroundColor: "rgb(240, 235, 235)" },
        ],
      },
      "-=900"
    )
    .add(
      {
        targets: ".itemThree",
        keyframes: [
          { translateY: -50, backgroundColor: "rgb(0,0,128)" },
          { translateY: 0, backgroundColor: "rgb(240, 235, 235)" },
        ],
      },
      "-=800"
    );
});
