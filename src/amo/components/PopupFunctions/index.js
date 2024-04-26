

export const prevButtonHandler = (currentIndex, setCurrentIndex, setCountdown) => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 5) % 5);
    setCountdown(10);
  };
  
  export const closePopup = (currentIndex) => {
    const popups = document.querySelectorAll('.popup');
    if (popups[currentIndex]) {
      popups[currentIndex].style.display = 'none';
    }
  };