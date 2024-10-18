const image = document.querySelector('.img_user'),
input = document.querySelector('#Uprofpic');

input.addEventListener("change", () => {
    image.src = URL.createObjectURL(input.files[0])
})

const fileInput = document.getElementById('Uprofpic');
const userImg = document.getElementById('userImg');

// Handle file input change event
fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        const file = this.files[0];

        // Create a file reader to preview the image
        const reader = new FileReader();
        reader.onload = function(e) {
            userImg.src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});