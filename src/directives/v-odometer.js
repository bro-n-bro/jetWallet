export const vOdometer = {
    mounted(el, number) {
        if (number) {
            // Get array
            let numberArr = number.value.toFixed(18).split('')

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
        let numberArr = number.value.toFixed(18).split(''),
            oldNumberArr = number.oldValue?.toFixed(18).split('') || [],
            maxLength = Math.max(numberArr.length, oldNumberArr.length)

        // Pad arrays with empty strings to maximum length
        numberArr = numberArr.concat(Array(maxLength - numberArr.length).fill(''))
        oldNumberArr = oldNumberArr.concat(Array(maxLength - oldNumberArr.length).fill(''))

        // Generate html
        el.innerHTML = numberArr.map((char, i) => `
            <div class="digit">
                <span class="new">${char}</span>
                <span class="old">${oldNumberArr[i]}</span>
            </div>
        `).join('')
    }
}