const listDays = document.getElementsByClassName('content_card_graph_day')
const moneyDays = document.getElementsByClassName('over_money')

// Getting data from local json file
const dataRequest = async () => {
    try {
        const URL = './data.json'
        const response = await fetch(URL)
        const data = await response.json()
        // console.log(data)
        // Looping through matrix
        data.forEach((item, index) => {
            // Generate color bar and text for each day in the DOM
            listDays[index].innerHTML = `
            <div class="over_money bar_money">$${item.amount}</div>
            <div class="content_card_graph_bar bar${index + 1}"></div>
            ${item.day}
            `
            // Loop over array to display money data on mouseover
            for (let index = 0; index < listDays.length; index++) {

                listDays[index].addEventListener('mouseenter', () => {
                    moneyDays[index].classList.add('show_money')
                })
                listDays[index].addEventListener('mouseleave', () => {
                    moneyDays[index].classList.remove('show_money')
                })

            }

        });

        // Getting current date (Day)
        const fecha = new Date()
        const thisDay = fecha.getDay()
        const graphBars = document.querySelectorAll('.content_card_graph_bar')

        // Applying color styling to the bar that corresponds to today
        graphBars.forEach((item, index) => {
            if (thisDay != 0) {
                graphBars[thisDay - 1].classList.add('color_this_day')
            } else {
                graphBars[6].classList.add('color_this_day')
            }
        });

        // Applying color styling to the bar that corresponds to today (Switch mode)
        // switch (thisDay) {
        //     case 0:
        //         graphBars[6].classList.add('color_this_day')
        //         break;
        //     case 1:
        //         graphBars[0].classList.add('color_this_day')
        //         break;
        //     case 2:
        //         graphBars[1].classList.add('color_this_day')
        //         break;
        //     case 3:
        //         graphBars[2].classList.add('color_this_day')
        //         break;
        //     case 4:
        //         graphBars[3].classList.add('color_this_day')
        //         break;
        //     case 5:
        //         graphBars[4].classList.add('color_this_day')
        //         break;
        //     case 6:
        //         graphBars[5].classList.add('color_this_day')
        //         break;

        //     default:
        //         break;
        // }

    } catch (error) {
        console.log(error)
    }
}

// Call to function
dataRequest()






