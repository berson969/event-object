const dropDown = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');

const savedValue = localStorage.getItem('dropdownValue');
if (savedValue) {
    dropDown.textContent = savedValue;
}

dropDown.addEventListener('click', () => {
    dropDownList.classList.toggle('dropdown__list_active')

});

const dropDownLinks = dropDownList.querySelectorAll('.dropdown__link')

dropDownLinks.forEach( (dropDownItem) => {
    dropDownItem.addEventListener('click', () => {
        dropDown.textContent = dropDownItem.textContent
        localStorage.setItem('dropdownValue', dropDown.textContent)
        dropDownList.classList.remove('dropdown__list_active')
    })
});

document.addEventListener('click', (event) => {
    const isDropdown = event.target.closest('.dropdown');

    if (!isDropdown) {
        dropDownList.classList.remove('dropdown__list_active');
    }
});