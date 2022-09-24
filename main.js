const overBarWed = document.getElementsByClassName('bar3')
const overBarThu = document.getElementsByClassName('bar4')
const barMoney = document.querySelectorAll('.bar_money')

overBarWed[0].addEventListener('mouseenter', () => {
    barMoney[0].classList.add('show_money')
})

overBarWed[0].addEventListener('mouseleave', () => {
    barMoney[0].classList.remove('show_money')
})

overBarThu[0].addEventListener('mouseenter', () => {
    barMoney[1].classList.add('show_money')
})

overBarThu[0].addEventListener('mouseleave', () => {
    barMoney[1].classList.remove('show_money')
})