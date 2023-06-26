let d = document


export default function dark(btn, classDark) {
    let $btnLight = d.querySelector(btn);

    let $darkAtribute = d.querySelectorAll('[data-dark]')
    
    // let $btnLight = d.querySelector('.button-theme');
    console.log($darkAtribute)


    let moon = '🌜',
        sun ='☀️'

        d.addEventListener('click', e => {
            if (e.target.matches(btn)) {
                // e.preventDefault()
            console.log($btnLight.textContent)

            // $svgBTNdark.classList.remove('none')
            if ($btnLight.textContent === moon) {
                
                $darkAtribute.forEach(element => {
                    element.classList.add(classDark)
                    $btnLight.textContent = sun
                });
                
                
                console.log($btnLight.textContent)
                // si está el sol de contenido
            } else {
                $darkAtribute.forEach(element => {
                    element.classList.remove(classDark)
                    $btnLight.textContent = moon
                })
                
            }
            }
            // si 
        // if 
        // $svgBTNdark.classList.remove('none')

    })

}
