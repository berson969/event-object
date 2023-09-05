const navTabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');


for (const index in navTabs) {
    navTabs[index].addEventListener('click', () => {

        navTabs.forEach((navTab, i) => {
            navTab.classList.remove('tab_active')
            tabContents[i].classList.remove('tab__content_active')
        })
        navTabs[index].classList.add('tab_active');
        tabContents[index].classList.add('tab__content_active');
    })
}