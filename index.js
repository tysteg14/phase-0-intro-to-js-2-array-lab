const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}

console.log(cats)


beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
  }
   console.log(cats);

   beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyRemoveLastCat(index) {
    cats.pop(2)
    return cats;
  }

  console.log(cats);

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function destructivelyRemoveFirstCat(index) {
    cats.shift(0);
    return cats;
  }

  console.log(cats)

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function appendCat(name) {
    let newCats = [...cats, "Broom"]
    return newCats
  }
  
  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function prependCat(name) {
    let newCats = ["Arnold", ...cats];
    return newCats;
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });


  function removeLastCat(index) {
    let newCats = cats.slice(0, -1)
    return newCats;
  }

  beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });

  function removeFirstCat() {
    let newCats = cats.slice(1);
    return newCats;
  }




   

  