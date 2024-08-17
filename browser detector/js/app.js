window.addEventListener('load', () => {
    let userAgent = navigator.userAgent
    let userBrowser = null

    if (userAgent.match(/edg/i)) {
        userBrowser = 'edge'
    } else if (userAgent.match(/firefox/i)) {
        userBrowser = 'firefox'
    } else if (userAgent.match(/opr/i)) {
        userBrowser = 'opera'
    } else if (userAgent.match(/chrome/i)) {
        userBrowser = 'chrome'
    } else if (userAgent.match(/safari/i)) {
        userBrowser = 'safari'
    }

    console.log('Your Browser:', userBrowser);

    let userBrowserImageElem = document.querySelector(`.${userBrowser}`)

    if (userBrowserImageElem) {
        userBrowserImageElem.style.opacity = '1'
    }



})