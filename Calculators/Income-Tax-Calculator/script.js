document.querySelector('#btn').addEventListener('click', function () {
    const income0 = parseInt(document.querySelector('#my-income').value)
    const travel = parseInt(document.querySelector('#travel').value)
    const house = parseInt(document.querySelector('#house').value)
    const health = parseInt(document.querySelector('#health').value)
    var tax = document.querySelector('#show-tax')

    console.log(income0)
    console.log(travel)
    console.log(health)
    console.log(house)

    console.log(`health=${health}, travel= ${travel}, house= ${house}`)

    if (travel > 500) {
        var total = travel + income0
    }
    else (
        total = income0
    )

    if (health > 300) {
        var total1 = total + health
    } else (
        total1 = total
    )

    if (house > 1000) {
        var income = total1 + house
    } else (
        income = total1
    )

    console.log("this is income : " + income)

    if (income <= 3000) {
        tax.innerHTML = 0
    } else if (income > 3000 && income <= 6000) {
        tax.innerHTML = 0.05 * income
    } else if
        (income > 6000 && income <= 10000) {
        tax.innerHTML = 0.15 * income
    } else if
        (income > 10000 && income <= 20000) {
        tax.innerHTML = 0.25 * income
    } else if
        (income > 20000) {
        tax.innerHTML = 0.30 * income
    }

})