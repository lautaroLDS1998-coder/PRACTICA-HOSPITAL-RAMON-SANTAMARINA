let d = document
let Ls = localStorage

export default function dark(btn, classDark) {
    let $btnLight = d.querySelector(btn);

    let $darkAtribute = d.querySelectorAll('[data-dark]')
    
    // let $btnLight = d.querySelector('.button-theme');
    // console.log($darkAtribute)


    let moon = '🌜',
        sun ='☀️'

    
    // FUNCIONES PARA LLAMAR
let light = () => {
$darkAtribute.forEach(element => {
  element.classList.add(classDark)
    $btnLight.textContent = sun
    Ls.setItem('theme','dark')
});
}

let dark = () => {
    $darkAtribute.forEach(element => {
        element.classList.remove(classDark);
        $btnLight.textContent = moon
        Ls.setItem('theme','light')
    })
}

    
    
        d.addEventListener('click', e => {
            if (e.target.matches(btn)) {
                // e.preventDefault()
            // console.log($btnLight.textContent)

            // $svgBTNdark.classList.remove('none')
            if ($btnLight.textContent === moon) {
                light()
                
                
                
                // console.log($btnLight.textContent)
                // si está el sol de contenido
            } else {
                dark()
                
            }
            }
            // si 
        // if 
        // $svgBTNdark.classList.remove('none')

        })
    
    
    d.addEventListener('DOMContentLoaded', e => {
        // console.log(Ls.getItem('theme'))
        if (Ls.getItem('theme') === '') {
           Ls.setItem('theme', 'light')
        } 
        if (Ls.getItem("theme") === "light") {
            dark();
        }
        if (Ls.getItem('theme') === 'dark') {
            light();
        }
    })

}
