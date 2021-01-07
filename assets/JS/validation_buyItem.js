$(document)
    .ready(function () {
        let itemNumber = document.getElementById('itemNumber')
        let itemName = document.getElementById('item')
        let cost = document.getElementById('cost')
        let delivery = document.getElementById('deliveryDays')

        if(JSON.parse(localStorage.getItem('items')=== null)){
            //No data
        }else{
            JSON.parse(localStorage.getItem('items')).map(data=>{
                itemNumber.innerHTML = data.length
                itemName.innerHTML = data.item
                cost.innerHTML = data.cost
                delivery = "4 - 5 days"
            })
        }
    });

