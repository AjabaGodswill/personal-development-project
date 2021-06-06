const tl_img = gsap.timline({ ease: "Power1.easeinout" })

    .to(".men .overlay", {
        duration: 1,
        y: "100%"
    })
    .to(".women .overlay", {
        duration: 1,
        y: "100%"
    },"-=.7")