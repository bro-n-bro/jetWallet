document.addEventListener('DOMContentLoaded', function () {
	// Is there support for touch events or is this an apple device
	if (!is_touch_device() && !navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
		document.documentElement.classList.add('custom_scroll')
	}


	// Set scrollbar width
	document.documentElement.style.setProperty('--scroll_width', widthScroll() + 'px')


	// Mob. version
	fakeResize = false
	fakeResize2 = true

	if (document.body.clientWidth < 375) {
		document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
	}
})



const setHeight = items => {
	let maxheight = 0

	items.forEach(el => {
		if (el.offsetHeight > maxheight) maxheight = el.offsetHeight
	})

	items.forEach(el => el.style.height = maxheight + 'px')
}


const is_touch_device = () => !!('ontouchstart' in window)


const widthScroll = () => {
	let div = document.createElement('div')

	div.style.overflowY = 'scroll'
	div.style.width = '50px'
	div.style.height = '50px'
	div.style.visibility = 'hidden'

	document.body.appendChild(div)

	let scrollWidth = div.offsetWidth - div.clientWidth
	document.body.removeChild(div)

	return scrollWidth
}