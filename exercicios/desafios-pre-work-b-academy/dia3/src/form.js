const nameInput = document.querySelector('[data-js="name"]')
const colorsSelection = document.querySelector('[data-js="colors"')
const printColors = document.querySelector('[data-js="print-colors"')

const capitalize = (str) => {
    return str.map(word => {
      const lowerCaseWords = ['de', 'da', 'do', 'dos']
      if (lowerCaseWords.includes(word.toLowerCase())) {
        return word.toLowerCase()
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      }
    }).join(' ')
}

const createColor = (colors) => {
    printColors.innerHTML = ''
    colors.forEach(el => {
        const div = document.createElement('div')
        div.classList.add('colors')
        div.classList.add(el.color)

        printColors.prepend(div)
    })
}

nameInput.addEventListener('input', (e) => {
    const value = capitalize(e.target.value.split(' '))
    e.target.value = value
    console.log(value)
})

colorsSelection.addEventListener('change', (e) => {
    const colors = [...e.target.options].map(el => {
        return {
            color: el.value,
            selected: el.selected
        }
    })

    createColor(colors.filter(color => color.selected == true))
})

