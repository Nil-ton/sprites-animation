const stepAnimation = () => {
  const sprite = document.querySelector('#sprite')

  document.addEventListener('keydown', (e)=>{
    console.log(e)

    if(e.code === 'ArrowRight') {
      sprite.setAttribute('class', 'sprite-run-right')
    }

    if(e.code === 'ArrowLeft') {
      sprite.setAttribute('class', 'sprite-run-left')
    }

    if(e.code ==='KeyZ'){
      sprite.setAttribute('class', 'sprite-attack')
    }

    if(e.code ==='KeyX'){
      sprite.setAttribute('class', 'sprite-attack-2')
    }
  })
}
stepAnimation()