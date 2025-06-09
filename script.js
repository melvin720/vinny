window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const skillsPosition = skillsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
  
    if (skillsPosition < screenHeight - 100) {
      document.querySelectorAll('.fill').forEach(bar => {
        bar.style.width = bar.getAttribute('style').split('width: ')[1];
      });
    }
  });