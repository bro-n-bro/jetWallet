export const vParallax = {
    mounted(el) {
        window.addEventListener('scroll', function () {
            if (window.scrollY <= el.offsetHeight) {
                el.style.opacity = (1 - window.scrollY / (el.offsetHeight * 0.6))

                el.style.transform = `translateY(-${(window.scrollY / el.offsetHeight) * 1.2 * 100}%)`
            }
        })
    }
}