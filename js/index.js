let Peru = document.getElementById('Peru');

Peru.addEventListener("click",function(e){

    Swal.fire({
        title: 'Perú Campeón...!!!😁 ',
        width: 600,
        padding: '3em',
        color: '#716add',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })

})


let Uruguay = document.getElementById('Uruguay');

Uruguay.addEventListener("mousemove",function(e){
    
    let x =  Math.round(Math.random() * 93);
    let y =  Math.round(Math.random() * 93);

    Uruguay.style.left = x +"%";
    Uruguay.style.top = y +"%";

})
