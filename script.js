const stepAnimation = () => {
  const sprite = document.querySelector('#sprite')
  sprite.setAttribute('class', 'sprite-idle-right')
  document.addEventListener('keydown', (e)=>{
    console.log(e)

    if(e.code === 'ArrowRight') {
      sprite.setAttribute('class', 'sprite-run-right')
    }

    if(e.code === 'ArrowLeft') {
      sprite.setAttribute('class', 'sprite-run-left')
    }

    if(e.code ==='KeyZ' && sprite.getAttribute('class') === 'sprite-idle-right'){
      sprite.setAttribute('class', 'sprite-attack-right')
    }

    if(e.code ==='KeyZ' && sprite.getAttribute('class') === 'sprite-idle-left'){
      sprite.setAttribute('class', 'sprite-attack-left')
    }

    if(e.code ==='KeyX' && sprite.getAttribute('class') === 'sprite-idle-right'){
      sprite.setAttribute('class', 'sprite-attack-2-right')
    }

    if(e.code ==='KeyX' && sprite.getAttribute('class') === 'sprite-idle-left'){
      sprite.setAttribute('class', 'sprite-attack-2-left')
    }
  })

  document.addEventListener('keyup', (e)=>{
    console.log(e)
    if(e.key === 'ArrowRight'){
      sprite.setAttribute('class', 'sprite-idle-right')
    }
    if(e.key === 'ArrowLeft'){
      sprite.setAttribute('class', 'sprite-idle-left')
    }

    if(e.code ==='KeyX' && sprite.getAttribute('class') === 'sprite-attack-2-right'){
      sprite.setAttribute('class', 'sprite-idle-right')
    }
    
    if(e.code ==='KeyX' && sprite.getAttribute('class') === 'sprite-attack-2-left'){
      sprite.setAttribute('class', 'sprite-idle-left')
    }

    if(e.code ==='KeyZ' && sprite.getAttribute('class') === 'sprite-attack-right'){
      sprite.setAttribute('class', 'sprite-idle-right')
    }

    if(e.code ==='KeyZ' && sprite.getAttribute('class') === 'sprite-attack-left'){
      sprite.setAttribute('class', 'sprite-idle-left')
    }

    
  })
}
stepAnimation()