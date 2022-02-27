const countryButton = document.querySelector("#countryButton");
const womenButton = document.querySelector("#womenButton");
const unorderedList = document.querySelector("#listItems");

const showCountries = (data) => {
  const countryArray = data.map((person) => person.region);
  // console.log(countryArray);
  const countries = countryArray.sort();
  console.log(countries);
  countries.forEach((country) => {
    const newLi = document.createElement("li");
    const countryName = country;

    newLi.innerHTML = countryName;

    unorderedList.appendChild(newLi);
    return newLi;
  });
};

const showCapricornWomen = (data) => {
  const capricorn = data.map((person) => {
    const birthdayDate = new Date(person.birthday.mdy);
    const month = birthdayDate.getMonth() + 1; // Get the month
    //  console.log(month)
    const day = birthdayDate.getDate(); // Get the day
    //  console.log(day)
    if ((month === 11 && day >= 22) || (month === 1 && day <= 18)) {
      return "capricorn";
    } else {
      return null;
    }
  });
  console.log(capricorn);

  const allWomen = data.filter((person) => {
    return person.gender === "female" && person.age > 30; // && capricorn  === 'capricorn'
  });


  console.log(allWomen);

 const womenName = allWomen.map((person) => person.name);
// console.log(womenName);
const womenLastName = allWomen.map((person) => person.surname);
//console.log(womenLastName)

const sortedWomen = womenName.sort()
//console.log(sortedWomen)

  
  allWomen.forEach((women) => {
    const newLi = document.createElement("li");
    const newImage = document.createElement("img");

    
    const womenName = allWomen.map((women) => women.name);
const womenLastName = allWomen.map((women) => women.surname);
   // console.log(womenName)
    const sortedWomenName = womenName.sort();
    newImage.src = women.photo;
    

    newLi.innerHTML = sortedWomenName;

    newLi.appendChild(newImage);
    unorderedList.appendChild(newLi);

    return newLi;
  });
};

const resetAll = () => {
  // unorderedList.innerHTML = "";
  while (unorderedList.firstChild) {
    unorderedList.removeChild(unorderedList.firstChild);
  }
};

countryButton.addEventListener("click", () => {
  resetAll();
  showCountries(randomPersonData);
});

womenButton.addEventListener("click", () => {
  resetAll();
  showCapricornWomen(randomPersonData);
});
//olderWomen[0].birthday.dmy
