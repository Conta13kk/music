const linkDownload = document.getElementById('linkDownload');
const progresso = document.getElementById('progresso');

linkDownload.addEventListener('click', () => {
    let valorProgresso = 0;
    const intervalo = setInterval(() => {
        valorProgresso += 10;
        progresso.value = valorProgresso;
        if (valorProgresso === 100) {
            clearInterval(intervalo);
            alert('Download concluído!');
        }
    }, 100);
});


function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';
  
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 5}s`;
  
  document.body.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 8000);
}


setInterval(createHeart, 300);
