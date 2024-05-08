document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form values
    const formData = new FormData(event.target);
    const userImgFile = formData.get('user-img');
    const name = formData.get('name');
    const rollNo = formData.get('roll-no');
    const section = formData.get('section');
    const course = formData.get('course');
    const address = formData.get('address');
    const contact = formData.get('contact');
  
    // Check if a file is selected
    if (!userImgFile) {
      alert('Please select an image file.');
      return;
    }
  
    // Check if the selected file is an image
    if (!userImgFile.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }
  
    // Read the image file as data URL
    const reader = new FileReader();
    reader.onload = function(event) {
      const userImg = event.target.result;
  
      // Create card element
      const cardContainer = document.getElementById('card-container');
      const card = document.createElement('div');
      card.classList.add('card');
  
      // Card content
      card.innerHTML = `
        <div class="shape1"></div>
        <div class="shape2"></div>
        <img src="${userImg}" alt="User Image" class="user-img">
        <div class="info">
          <h2 class="name">${name}</h2>
          <p class="details">Roll No: <span class="roll-no">${rollNo}</span></p>
          <p class="details">Section: <span class="section">${section}</span></p>
          <p class="details">Course: <span class="course">${course}</span></p>
          <p class="details">Address: <span class="address">${address}</span></p>
          <p class="details">Contact: <span class="contact">${contact}</span></p>
        </div>
      `;
  
      // Hide form container and show card container
      const formContainer = document.querySelector('.form-container');
      formContainer.style.display = 'none';
      cardContainer.innerHTML = ''; // Clear previous card
      cardContainer.appendChild(card);
    };
  
    // Read the selected file as data URL
    reader.readAsDataURL(userImgFile);
  });
  