const nameInput = document.querySelector('[data-js="name"]')

const capitalize = (str) => {
    return str.map(word => {
      const lowerCaseWords = ['de', 'da', 'do', 'dos']
      if (lowerCaseWords.includes(word.toLowerCase())) {
        return word.toLowerCase()
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1)
      }
    }).join(' ')
}

nameInput.addEventListener('input', (e) =>{
    const value = capitalize(e.target.value.split(' '))
    e.target.value = value
    console.log(value)
})