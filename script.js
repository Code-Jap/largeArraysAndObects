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
    //console.log(typeof newLi)
    return newLi;
  });
  /*
  for (i = 0; i < countries.length; i++) {
    console.log(typeof countries)
    unorderedList.appendChild(countries[i])
  }
  */

  countries.forEach((li) => {
    unorderedList.appendChild(li);
  });
};

const showCapricornWomen = (data) => {
  
  const allWomen = data.filter((person) => person.gender === "female");
  // console.log("Only the women:", women);

  const olderWomen = allWomen.filter((person) => person.age > 30);
  // console.log("Only the women older than 30:", olderWomen);
const birthdayDates = olderWomen.map((women) => women.birthday.dmy)

const birthday = birthdayDates.map((day) => {
  const birthdayDate = new Date(day);
  
  console.log(birthdayDate)
})



 console.log(olderWomen)

  const womenName = olderWomen.map((women) => women.name);
  const sortedWomen = womenName.sort();
  
  console.log(sortedWomen);
  olderWomen.map((women) => {
    const newLi = document.createElement("li");
    const newImage = document.createElement("img");

    const womenName = olderWomen.map((women) => women.name)
    const womenLastName = olderWomen.map((women) => women.surname)
 //console.log(womenName)
    const sortedWomenName = womenName.sort
    newImage.src = women.photo;
 //   console.log(women.photo)
  
    newLi.innerHTML = `${sortedWomenName} ${womenLastName} `;
   
    newLi.appendChild(newImage);

    return newLi;
  });
  sortedWomen.forEach(li => {
    unorderedList.appendChild(li);
  });
  //console.log(capricornOlderWomen)
};
//showCapricornWomen(randomPersonData);


const resetAll = () => {
  unorderedList.innerHTML = "";
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


/*
const womenName = olderWomen.map((women) => women.name);
const sortedWomen = womenName.sort();

console.log(sortedWomen);
sortedWomen.forEach((women) => {
  const newLi = document.createElement("li");
  const newImage = document.createElement("img");

  newImage.src = women.photo;
  const firstName = womenName;

  
  newLi.innerHTML = `${firstName}`;
  newLi.appendChild(newImage);

  return newLi;
});
sortedWomen.forEach((li) => {
  unorderedList.append(li);
  */