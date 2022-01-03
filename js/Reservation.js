

function remove_fuel() {
    for (let i = 1; i < form.fuel.length; i++) {
        form.fuel.options[i].innerText = '';
    }
}
let gearBox;
form.vehicle.addEventListener('change', function () {
    let index = form.vehicle.selectedIndex;
    let fuel;

    // choose what is index of vehicle
    switch (index) {
        case 0:
            remove_fuel();
            break;
        case 1:
            remove_fuel();
            fuel = ['Electrique', 'Essence'];
            gearBox = 'none';
            break;
        case 2:
            remove_fuel();
            fuel = ['Hybirde', 'Essence', 'Diesel'];
            gearBox = 'manual';
            break;
        case 3:
            remove_fuel();
            fuel = ['Electrique', 'Hybirde', 'Essence', 'Diesel'];
            gearBox = 'manual';
            break;
        case 4:
            remove_fuel();
            fuel = ['Diesel'];
            gearBox = 'manual';
            break;
        case 5:
            remove_fuel();
            fuel = ['Hybirde', 'Essence', 'Diesel'];
            gearBox = 'Automatique';
            break;
        case 6:
            remove_fuel();
            fuel = ['Diesel'];
            gearBox = 'Automatique';
            break;
        case 7:
            remove_fuel();
            fuel = ['Diesel', 'Essence'];
            gearBox = 'manual';
            break;
    }

    // fill fuel and gearBox
    for (let i = 0; i < fuel.length; i++) {
        form.fuel.options[i + 1].innerText = fuel[i];
    }
    form.gearBox.options[1].innerText = gearBox;


});



document.querySelector("#select-submit").addEventListener('click', function (event) {
    event.preventDefault();

    // get value of select tags
    let cars = document.querySelector("#select > select:nth-child(3)").value;
    let carfuel = document.querySelector("#select > select:nth-child(4)").value;
    let day = document.querySelector("#number").value;
    let price;
    console.log(cars);
    console.log(carfuel);
    console.log(gearBox);

    // calcule boite de vittes none de motorbike
    if (gearBox == 'none') {
        if (cars == 'motorbike') {
            if (carfuel == 'Electrique') {
                price = (10 * 0.05) + 10;
            }
            if (carfuel == 'Essence') {
                price = (10 * 0.14) + 10;
            }
        }
    }
    // calcule boite de vittes auto
    if (gearBox == 'Automatique') {
        // calcule berlin
        if (cars == 'berlin') {
            if (carfuel == 'Hybirde') {
                price = ((20 * 0.19) + (20 * 0.09)) + 20;
            }
            if (carfuel == 'Essence') {
                price = ((20 * 0.19) + (20 * 0.14)) + 20;
            }
            if (carfuel == 'Diesel') {
                price = ((20 * 0.19) + (20 * 0.21)) + 20;
            }
        }
        // calcule truck
        if (cars == 'truck') {
            if (carfuel == 'Diesel') {
                price = ((250 * 0.19) + (250 * 0.21)) + 250;
            }
        }
    }
    // calcule boite de vittes manual
    if (gearBox == 'manual') {
        // calcule compact
        if (cars == 'compact') {
            if (carfuel == 'Hybirde') {
                price = 14 + (14 * 0.09);
            }
            if (carfuel == 'Essence') {
                price = 14 + (14 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 14 + (14 * 0.21);
            }
        }
        // calcule citadin
        if (cars == 'citadin') {
            if (carfuel == 'Hybirde') {
                price = 12 + (12 * 0.09);
            }
            if (carfuel == 'Essence') {
                price = 12 + (12 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 12 + (12 * 0.21);
            }
            if (carfuel == 'Electrique') {
                price = 12 + (12 * 0.05);
            }
        }
        // calcule Utility
        if (cars == 'Utility') {
            if (carfuel == 'Diesel') {
                price = 16 + (16 * 0.21);
            }
        }
        // calcule construction machine
        if (cars == 'construction machine') {
            if (carfuel == 'Diesel') {
                price = 900 + (900 * 0.21);
            }
            if (carfuel == 'Essence') {
                price = 900 + (900 * 0.14);
            }
        }
    }

    price = price * day;
    // console.log(price);
    alert( `Price: ${price} € `);


});
