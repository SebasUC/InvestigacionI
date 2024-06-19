const tabHeaderContainer = document.querySelector('.tab-header-container')
const tabContainer = document.querySelector('.tab-container')
let activeHeader = tabHeaderContainer.querySelector('.is-active')

function subscribeToHeaderClick() {
    tabHeaderContainer.querySelectorAll('*').forEach(header => {
        header.addEventListener('click', () => onHeaderClick(header))
    })
}

function onHeaderClick(header) {
    console.log(activeHeader)
    activeHeader.classList.remove('is-active')
    header.classList.add('is-active')
    
    activeHeader = header
    refreshActiveTab()
}

function refreshActiveTab() {
    tabHeaderContainer.querySelectorAll('.tab-header').forEach(child => {
        const tabNumber = child.dataset.tab
        console.log(tabNumber)
        const tab = getTabForHeader(tabNumber)

        if (child.classList.contains('is-active')) {
            tab.style.display = 'flex'
        } else {
            tab.style.display = 'none'
        }
    })
}

function getTabForHeader(tabId) {
    return document.querySelector(`.tab-${tabId}`)
}

refreshActiveTab()
subscribeToHeaderClick()