export const vOdometer = {
    mounted(el, number) {
        if (number) {
            // Get array
            let numberArr = number.value.toFixed(10).split('')

            // Generate base html
            el.innerHTML = numberArr.map(char => `
                <div class="digit">
                    <span class="old">${char}</span>
                </div>
            `).join('')
        }
    },

    updated(el, number) {
        // Get array
        let numberArr = number.value.toFixed(10).split(''),
            oldNumberArr = number.oldValue?.toFixed(10).split('') || [],
            maxLength = Math.max(numberArr.length, oldNumberArr.length),
            html = '',
            mismatchIndex = null,
            mismatchCount = 0,
            animationDuration = 1500,
            animationDelay = 50


        // Pad arrays with empty strings to maximum length
        numberArr = numberArr.concat(Array(maxLength - numberArr.length).fill(''))
        oldNumberArr = oldNumberArr.concat(Array(maxLength - oldNumberArr.length).fill(''))


        // Generate html
        el.innerHTML = numberArr.map((char, i) => {
            // Get mismatch
            if (mismatchIndex === null && char !== oldNumberArr[i]) {
                mismatchIndex = i
                mismatchCount = maxLength - i
                animationDuration = animationDuration - animationDelay * mismatchCount
            }

            // Calc animation
            let duration = 0

            if (mismatchIndex !== null) {
                duration = animationDuration / mismatchCount / 1000
            }

            html += `<div class="digit ${mismatchIndex !== null && i >= mismatchIndex ? 'animate' : ''}">
                        <span class="new" style="animation-duration: ${parseFloat(duration.toFixed(2))}s; animation-delay: ${animationDelay * (i - mismatchIndex) / 1000}s;">
                            ${char}
                        </span>

                        <span class="old" style="animation-duration: ${parseFloat(duration.toFixed(2))}s; animation-delay: ${animationDelay * (i - mismatchIndex) / 1000}s;">
                            ${oldNumberArr[i]}
                        </span>
                    </div>`
        })


        // Inner html
        el.innerHTML = html
    }
}