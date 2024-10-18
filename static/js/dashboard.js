function toggleMenu(){
    const menu = document.querySelector('.sub_wrap')
    menu.classList.toggle('hide');

    document.addEventListener('click', () => {
        const menuBtn = document.querySelector('.menuBar');
        const menu = document.querySelector('.sub_wrap');

        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.classList.add('hide');
            }
        });

    document.activeElement('click', e => {
        if(!menu.contains(e.target) && e.target !== menuBtn) {
            menu.classList.add('hide');
        }
    })
}

const selectedLinks = document.querySelectorAll('.link-item');

selectedLinks.forEach(navLinkEl => {
    navLinkEl.addEventListener('click', () => {
            document.querySelector('.active')?.classList.remove('active');
            navLinkEl.classList.add('active');
        });
});

document.addEventListener("DOMContentLoaded", function() {

    const list = document.querySelector('.list');
    const list2 = document.querySelector('.list2');

    // Initially hide .list2 and show .list
    list.style.display = 'block';
    list2.style.display = 'none';
});

function changeContent() {
    const main = document.querySelector('.main')
    const list = document.querySelector('.list');
    const list2 = document.querySelector('.list2');

    // Toggle visibility between .list and .list2
    if (list.style.display === 'block') {
        list.style.display = 'none';
        list2.style.display = 'block';
        main.style.background = 'var(--clr-light)';
    } else {
        list.style.display = 'block';
        list2.style.display = 'none';
        main.style.background = 'var(--clr-darkest)';
    }
}

// Function to calculate the age based on the birthdate
function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    // Adjust the age if the current date hasn't reached the birthday yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

// Function to handle birthdate change event
function handleDateChange(event) {
    const birthDateValue = event.target.value;
    let ageField;

    // Check which input triggered the event and update the respective age field
    if (event.target.id === 'PntBdate') {
        ageField = document.getElementById('PntAge');
    } else if (event.target.id === 'DbDate') {
        ageField = document.getElementById('DAge');
    }

    if (birthDateValue) {
        const age = calculateAge(birthDateValue);
        ageField.value = age + ' yrs old'; // Update the age field
    } else {
        ageField.value = 'None'; // Clear the age field if no birthdate is entered
    }
}

// Add event listeners for both 'PntBdate' and 'DbDate' elements
document.getElementById('PntBdate').addEventListener('change', handleDateChange);
document.getElementById('DbDate').addEventListener('change', handleDateChange);

const yearDropdown = document.getElementById('yearDropdown');
const currentYear = 3000;

for (let i = currentYear; i >= 1900; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearDropdown.appendChild(option);
}