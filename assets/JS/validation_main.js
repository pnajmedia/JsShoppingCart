$(document)
    .ready(function () {
        
        //Add clicked item to Cart   
        let adToCart = document.getElementsByClassName('adCart');
        console.log('Clikced items',adToCart)
        let items = [];
        for (i = 0; i<=adToCart.length; i++) {
            adToCart[i].addEventListener('click', function (e) {
                if (typeof (Storage) !== 'undefined') {
                    let item = {
                        'id': 'OrderId_' + i + 1,
                        'item': e.target.parentElement.children[1].children[0].innerText,
                        'cost': e.target.parentElement.children[2].children[0].innerText,
                        'image': e.target.parentElement.childNodes[1].firstElementChild.attributes[0].value,
                        'count': 1
                    }
                    if (localStorage.getItem('items') === null) {
                        localStorage.setItem('items', JSON.stringify(item));
                        items.push(item);
                        console.log('Array added items',items)
                        window.location.reload();
                    } else {
                        const locaItems = JSON.parse(localStorage.getItem('items'));
                        // console.log('Items in store',locaItems);
                        locaItems.map(data => {
                            if (item.id == data.id) {
                                item.count = data.count + 1;
                            } else {
                                console.log('False');
                            }
                        });
                        localStorage.setItem('items', JSON.stringify(item));
                        items.push(data);
                        window.location.reload();
                    }
                }else{
                    console.log('Unfortunately, your local storage is not working');
                }
            });
        }

        //Adding to Cart
        const iconShop = document.getElementById('shopCount')
        const no = 0;
        JSON.parse(localStorage.getItem('items')).map(data=>{
            no = no + data.count
        });
        iconShop.innerHTML = no; 
    });