const image = document.querySelector('[data-js="image"]')
const brand = document.querySelector('[data-js="brand"]')
const year = document.querySelector('[data-js="year"]')
const id = document.querySelector('[data-js="id"]')
const colorCar = document.querySelector('[data-js="color-car"]')
const button = document.querySelector('[data-js="button"]')
const table = document.querySelector('[data-js="table"]')

button.addEventListener("click", e => {
    e.preventDefault()
    const fields = [image, brand, year, id, colorCar]
    const row = document.createElement('tr')
    
    fields.forEach(el => {
        const value = el.value
        const col = document.createElement('th')
        col.textContent  = value
        
        el.value = ''
        row.appendChild(col)
    })
    table.appendChild(row)
    image.focus()
})