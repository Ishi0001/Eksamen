document.querySelectorAll('.projekt-boks').forEach(boks => {
    boks.addEventListener('mouseenter', () => {
      boks.style.transform = 'scale(1.05)';
      boks.style.transition = 'transform 0.3s ease';
      boks.style.boxShadow = '0 0 20px 5px pink';
    });
  
    boks.addEventListener('mouseleave', () => {
      boks.style.transform = 'scale(1)';
      boks.style.boxShadow = 'none';
    });
   
  });

  document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.05)';
    });
  
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });