// JavaScript function to show/hide form sections
function showFormSection(sectionNumber) {
    // Hide all form sections
    var sections = document.querySelectorAll('.form-section');
    sections.forEach(function(section) {
      section.classList.remove('active');
    });

    // Show the selected form section
    var selectedSection = document.getElementById('section' + sectionNumber);
    selectedSection.classList.add('active');

    document.getElementById("myElement").addEventListener("click", function() {
      this.classList.toggle("selected");
  });
  
  }
    
  