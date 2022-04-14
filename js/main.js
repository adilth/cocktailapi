//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//add event listener to which in input
document.querySelector("button").addEventListener("click", getDrink);

// just sample get what in input
function getDrink() {
  let drink = document.querySelector("input").value;
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
  let fixDrink = (str) =>
    str
      .split("")
      .filter((x) => x !== " ")
      .join("");
  fetch(url + drink)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.drinks);
      refresh(data.drinks);
    })
    .catch((err) => {
      console.log(`there is a error ${err}`);
    });
}
let timeout;
// function firstRe() {
//   clearInterval(interval);
//   interval = setInterval(refresh, 3000);
// }
function refresh(drinks) {
  // clearInterval();
  let counter = 0;
  timeout = setInterval(function () {
    if (drinks[counter].strDrink !== null) {
      document.querySelector(".name").innerHTML = drinks[counter].strDrink;
    }
    if (drinks[counter].strDrink !== null) {
      document.querySelector("img").src = drinks[counter].strDrinkThumb;
    }
    if (drinks[counter].strDrink !== null) {
      document.querySelector(".info").innerHTML =
        drinks[counter].strInstructions;
    }
    let ingredientsC = 1;
    if (drinks[counter].strDrink !== null) {
      let keyIng = `strIngredient${ingredientsC}`;
      let ingredients = drinks[counter];
      let ingredientsName = ingredients[keyIng];
      ingredientsC++;
      //create the list
      let ul = document.querySelector(".ingre");
      let li = document.createElement("li");
      li.appendChild(document.createTextNode(ingredientsName));
      ul.appendChild(li);
    }
    if (counter == drinks.length - 1) {
      clearInterval(timeout);
    }
    counter++;
  }, 2000);
}
// url of the api
// const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;

//fech API data
/*function getDrink() {
  //get the value in the input
  let drink = document.querySelector("input").value;
  let fixDrink = (str) =>
    str
      .split("")
      .filter((x) => x !== " ")
      .join("");
  fetch(url + drink)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      suffleArray(data.drinks);
      //remove all
      const removeList = document.querySelectorAll("li");
      for (const element of removeList) {
        element.remove;
      }

      //figure out how many ingredients are in drinks
      let ingredientsC = 1;
      //loop to the item and add them
      do {
        let keyIng = `strIngredient${ingredientsC}`;
        let ingredients = data.drinks[0];
        let ingredientsName = ingredients[keyIng];

        ingredientsC++;

        //create the list
        let ul = document.querySelector(".ingre");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(ingredientsName));
        ul.appendChild(li);
      } while (data.drinks[0][`strIngredient${ingredientsC}`] != null);
      {
        console.log(data.drinks);
        //get the info that we need
        document.querySelector(".name").innerHTML = data.drinks[0].strDrink;
        document.querySelector("img").src = data.drinks[0].strDrinkThumb;
        document.querySelector(".info").innerHTML =
          data.drinks[0].strInstructions;
      }
    })
    .catch((err) => {
      console.log(`there is a error ${err}`);
    });
}
//suffle array for drinks
function suffleArray(arr) {
  //length of the arr
  let currenIndex = arr.length,
    randomIndex;
  //while there remain ekement to shuffle
  while (currenIndex != 0) {
    randomIndex = Math.floor(Math.random() * currenIndex);
    currenIndex--;

    //and swap it
    [arr[currenIndex], arr[randomIndex]] = [arr[randomIndex], arr[currenIndex]];
  }
  return arr;
}
*/
