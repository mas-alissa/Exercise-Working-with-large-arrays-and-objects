const countryList = document.getElementById("countryList");
const ulItem = document.getElementById("container");
const capricornWomenBtn = document.getElementById("capricornWomenBtn");
const creditCardBtn = document.getElementById("creditCardBtn");

//Countries list

countryList.addEventListener("click", function () {
    ulItem.innerHTML = "";
    newName.innerHTML = "";
    list.innerHTML = "";
    h3Text.innerHTML = "";
    forImg.innerHTML = "";
    const countries = randomPersonData.map(item => item.region);
    let newArray = [];

    countries.forEach(item => {

        if (newArray.indexOf(item) == -1) {
            newArray.push(item);
        }
    })

    newArray.sort().forEach(item => {
        const newLi = document.createElement("li");
        newLi.innerText = item;
        ulItem.appendChild(newLi);
    })
})

// Capricorn Women

capricornWomenBtn.addEventListener("click", function () {
    ulItem.innerHTML = "";
    newName.innerHTML = "";
    list.innerHTML = "";
    h3Text.innerHTML = "";
    forImg.innerHTML = "";
    const filterFemale = randomPersonData.filter(item => item.gender === "female");
    const biggerThen30 = filterFemale.filter(item => item.age > 30)

    const capricornWomen = biggerThen30.filter(item => {
        const birthday = item.birthday.mdy;
        const date = new Date(birthday);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        if (month == 12 && day >= 22 || month == 1 && day <= 20) {
            return item

        }
    });

    capricornWomen.sort((a,b) => {
        if(a.name < b.name){
            return -1;
        } else if(a.name > b.name){
            return 1
        } else {
            return 0
        }
    }).forEach(item => {
        const newLi = document.createElement("li");
        const newImg = document.createElement("img");
        newImg.src = item.photo;
        newLi.innerText = item.name + " " + item.surname;
        ulItem.appendChild(newLi);
        ulItem.appendChild(newImg);
    })
})

// Old credit card 

const date = new Date();
const huidigemaand = date.getMonth() + 1;

const huidigeJaar = date.getFullYear();
const volgendeJaar = date.getFullYear() + 1;

const huidigeJaarToString = huidigeJaar.toString();
const volgendeJaarToString = volgendeJaar.toString();

const tweeDigitSnijden = huidigeJaarToString.slice(2, 4);

const tweeDigitSnijdenVolgendeJaar = volgendeJaarToString.slice(2, 4);

creditCardBtn.addEventListener("click", function () {
    ulItem.innerHTML = "";
    newName.innerHTML = "";
    list.innerHTML = "";
    h3Text.innerHTML = "";
    forImg.innerHTML = "";
    const filterData = randomPersonData.filter(item => {
        ulItem.innerHTML = "";
        if (huidigemaand < 11) {
            if (item.credit_card.expiration === huidigemaand + 1 + "/" + tweeDigitSnijden || item.credit_card.expiration === huidigemaand + 2 + "/" + tweeDigitSnijden) {
                return item;
            }
        } else if (huidigemaand == 11) {
            if (item.credit_card.expiration === huidigemaand + 1 + "/" + tweeDigitSnijden || item.credit_card.expiration === ((huidigemaand + 2) - 12) + "/" + tweeDigitSnijdenVolgendeJaar) {
                return item
            }
        } else if (huidigemaand == 12) {
            if (item.credit_card.expiration === huidigemaand + 1 - 12 + "/" + tweeDigitSnijdenVolgendeJaar || item.credit_card.expiration === (huidigemaand + 2 - 12) + "/" + tweeDigitSnijdenVolgendeJaar) {
                return item;
            }
         
        }
    });
    if(huidigemaand == 11){
        filterData.sort((a, b) => {
            if (b.credit_card.expiration < a.credit_card.expiration) {
                return -1;
            } else if (a.credit_card.expiration > b.credit_card.expiration) {
                return 1;
            } else {
                return 0
            }
        });
    } else {
        filterData.sort((a, b) => {
            if (b.credit_card.expiration > a.credit_card.expiration) {
                return -1;
            } else if (a.credit_card.expiration < b.credit_card.expiration) {
                return 1;
            } else {
                return 0
            }
        });
    }
    
    filterData.forEach(item => {
        const newLI = document.createElement("li");
        const newLIPhone = document.createElement("li");
        const newLICreditCardNumber = document.createElement("li");
        const newLIexpriationDate = document.createElement("li");
        const brOne = document.createElement("br");
        const brTwee = document.createElement("br");
        newLI.innerHTML = "Full Name :" + item.name + " " + item.surname;
        newLIPhone.innerHTML = "Phone number :" + item.phone;
        newLICreditCardNumber.innerHTML = "Credit card number :" + item.credit_card.number;
        newLIexpriationDate.innerHTML = "Expiration date :" + item.credit_card.expiration;
        newLIexpriationDate.appendChild(brOne);
        newLIexpriationDate.appendChild(brTwee);
        ulItem.appendChild(newLI);
        ulItem.appendChild(newLIPhone);
        ulItem.appendChild(newLICreditCardNumber);
        ulItem.appendChild(newLIexpriationDate);


    })

})

// how many people for each country

const mostPeopleBtn = document.getElementById("mostPeopleBtn");

mostPeopleBtn.addEventListener("click", function () {
    ulItem.innerHTML = "";
    newName.innerHTML = "";
    list.innerHTML = "";
    h3Text.innerHTML = "";
    forImg.innerHTML = "";

    const allCountries = randomPersonData.map(item => item.region);

    let counterCountries = allCountries.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;

        return obj;
    }, [])

    let sortData = Object.entries(counterCountries).sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < sortData.length; i++) {
        const newLi = document.createElement("li");
        newLi.innerHTML = sortData[i];
        ulItem.appendChild(newLi)
    }
})



//countries with buttons
const listOfBtn = document.getElementById("listOfBtn");


listOfBtn.addEventListener("click", function () {
    ulItem.innerHTML = "";
    newName.innerHTML = "";
    list.innerHTML = "";
    forImg.innerHTML = "";

    const allCountries = randomPersonData.map(item => item.region)
    const newArray = [];
    for (let i = 0; i < allCountries.length; i++) {
        if (newArray.indexOf(allCountries[i]) == -1) {
            newArray.push(allCountries[i]);
        }
    }

    const h3Text = document.getElementById("h3Text");

    for (let i = 0; i < newArray.sort().length; i++) {
        const newBtn = document.createElement("button");
        newBtn.innerHTML = newArray[i];
        newBtn.addEventListener("click", function () {
            let y = randomPersonData.filter(item => item.region === this.innerHTML);
            let sum = y.map(item => item.age);
            let avarage = sum.reduce((acc, elem) => Math.round(acc + elem / sum.length), 0);
            h3Text.innerHTML = "The average person in " + this.innerHTML + " is " + avarage + " years old";
        })
        ulItem.appendChild(newBtn);

    }


});

const matchMaking = document.getElementById("matchMaking");
const newName = document.getElementById("newName");
matchMaking.addEventListener("click", function () {
    ulItem.innerHTML = "";
    newName.innerHTML = "";
    forImg.innerHTML = "";
    list.innerHTML = "";
    const adults = randomPersonData.filter(person => person.age >= 18).sort((a, b) => { if (b.name > a.name) { return -1 } else if (b.name < a.name) { return 1 } else { return 0 } });
    adults.forEach(person => {


        //console.log(birthday);
        const newLi = document.createElement("li");
        const newLi1 = document.createElement("li");
        const newLi2 = document.createElement("li");
        const newLi3 = document.createElement("li");
        const newLi4 = document.createElement("li");
        const newImg = document.createElement("img");
        const newImg1 = document.createElement("img");

        const newBtn = document.createElement("button");
        newBtn.innerHTML = "find matches";
        const list = document.getElementById("list");

        newBtn.addEventListener("click", function () {
            const forImg = document.getElementById("forImg")
            ulItem.innerHTML = "";
            h3Text.innerHTML = "";
            forImg.innerHTML = "";
            newName.innerHTML = person.name + " " + person.surname;
            const newIm = document.createElement("img");
            newIm.src = `${check(person.birthday.mdy)}`
            forImg.appendChild(newIm)
            checkNu(person.birthday.mdy, person.name)
            // console.log(person.birthday.mdy);

        })


        function checkNu(birthday, nameValue) {
            console.log(birthday);
            randomPersonData.filter(item => {
                const myDate = new Date(item.birthday.mdy);
                const myDay = myDate.getDate();
                const myMonth = myDate.getMonth() + 1;
                const newDate = new Date(birthday);
                const newDay = newDate.getDate();
                const newMonth = newDate.getMonth() + 1;
                if (newMonth == 12 && newDay >= 22 || newMonth == 1 && newDay <= 19) {
                    if (myMonth == 12 && myDay >= 22 || myMonth == 1 && myDay <= 19) {
                        console.log(item);

                        return item;
                    }
                } else if (newMonth == 1 && newDay >= 20 || newMonth == 2 && newDay <= 18) {
                    if (myMonth == 1 && myDay >= 20 || myMonth == 2 && myDay <= 18) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 2 && newDay >= 19 || newMonth == 3 && newDay <= 20) {
                    if (myMonth == 2 && myDay >= 19 || myMonth == 3 && myDay <= 20) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 3 && newDay >= 21 || newMonth == 4 && newDay <= 19) {
                    if (myMonth == 3 && myDay >= 21 || myMonth == 4 && myDay <= 19) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 4 && newDay >= 20 || newMonth == 5 && newDay <= 20) {
                    if (myMonth == 4 && myDay >= 20 || myMonth == 5 && myDay <= 20) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 5 && newDay >= 21 || newMonth == 6 && newDay <= 20) {
                    if (myMonth == 5 && myDay >= 21 || myMonth == 6 && myDay <= 20) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 6 && newDay >= 21 || newMonth == 7 && newDay <= 23) {
                    if (myMonth == 6 && myDay >= 21 || myMonth == 7 && myDay <= 23) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 7 && newDay >= 24 || newMonth == 8 && newDay <= 22) {
                    if (myMonth == 7 && myDay >= 24 || myMonth == 8 && myDay <= 22) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 8 && newDay >= 23 || newMonth == 9 && newDay <= 22) {
                    if (myMonth == 8 && myDay >= 23 || myMonth == 9 && myDay <= 22) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 9 && newDay >= 23 || newMonth == 10 && newDay <= 22) {
                    if (myMonth == 9 && myDay >= 23 || myMonth == 10 && myDay <= 22) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 10 && newDay >= 23 || newMonth == 11 && newDay <= 22) {
                    if (myMonth == 10 && myDay >= 23 || myMonth == 11 && myDay <= 22) {
                        console.log(item);
                        return item;
                    }
                } else if (newMonth == 11 && newDay >= 23 || newMonth == 12 && newDay <= 21) {
                    if (myMonth == 11 && myDay >= 23 || myMonth == 12 && myDay <= 21) {
                        console.log(item);
                        return item;
                    }
                }

            }).filter(item => item.name !== nameValue).forEach(item => {
                const newElement = document.createElement("li");
                newElement.innerHTML = item.name + " " + item.birthday.dmy;
                const newImage = document.createElement("img");
                newImage.src = `${check(item.birthday.mdy)}`;
                newElement.appendChild(newImage)
                list.appendChild(newElement)
            })

        }




        newLi4.appendChild(newBtn);

        const newBr1 = document.createElement("br")
        const newBr2 = document.createElement("br")

        newLi.innerHTML = person.name + " " + person.surname;
        newLi1.innerHTML = person.region;
        newLi2.innerHTML = person.age;
        newImg1.src = `${check(person.birthday.mdy)}`
        newLi3.innerHTML = person.birthday.dmy + " ";
        newLi3.appendChild(newImg1)
        newImg.classList.add("size");
        newImg.src = person.photo;


        ulItem.appendChild(newLi);
        ulItem.appendChild(newLi1);
        ulItem.appendChild(newLi2);
        ulItem.appendChild(newLi3);
        ulItem.appendChild(newLi4);
        ulItem.appendChild(newBr1);
        ulItem.appendChild(newBr2);
        ulItem.appendChild(newImg);


    })

    //console.log(adults);
})


function check(birthday) {
    const capricornImg = "zodiac signs/Capricorn.png";
    const aquarianImg = "zodiac signs/Aquarian.png";
    const piscean = "zodiac signs/Pisceang.png";
    const arian = "zodiac signs/Arian.png";
    const taurean = "zodiac signs/Taurean.png";
    const geminian = "zodiac signs/Geminian.png";
    const cancerian = "zodiac signs/Cancerian.png";
    const leo = "zodiac signs/Leo.png";
    const virgin = "zodiac signs/Virgin.png";
    const libran = "zodiac signs/Libran.png";
    const scorpio = "zodiac signs/Scorpio.png";
    const sagittarian = "zodiac signs/Sagittarian.png";

    const date = new Date(birthday);
    const day = date.getDate();
    const month = date.getMonth() + 1;

    if (month == 12 && day >= 22 || month == 1 && day <= 19) {
        return capricornImg;
    } else if (month == 1 && day >= 20 || month == 2 && day <= 18) {
        return aquarianImg;
    } else if (month == 2 && day >= 19 || month == 3 && day <= 20) {
        return piscean;
    } else if (month == 3 && day >= 21 || month == 4 && day <= 19) {
        return arian;
    } else if (month == 4 && day >= 20 || month == 5 && day <= 20) {
        return taurean;
    } else if (month == 5 && day >= 21 || month == 6 && day <= 20) {
        return geminian;
    } else if (month == 6 && day >= 21 || month == 7 && day <= 23) {
        return cancerian;
    } else if (month == 7 && day >= 24 || month == 8 && day <= 22) {
        return leo;
    } else if (month == 8 && day >= 23 || month == 9 && day <= 22) {
        return virgin;
    } else if (month == 9 && day >= 23 || month == 10 && day <= 22) {
        return libran;
    } else if (month == 10 && day >= 23 || month == 11 && day <= 22) {
        return scorpio;
    } else if (month == 11 && day >= 23 || month == 12 && day <= 21) {
        return sagittarian;
    }
}