const StarWarsCharacter = {
  characters: [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "Rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 18,
      name: "Wedge Antilles",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      homeworld: "corellia",
    },
    {
      id: 19,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 20,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      id: 21,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ],
};

document.getElementById("Star").style.display = "none";

const Star = `
<div>
${StarWarsCharacter.characters.map(
  (item) => `

  <div class="container">
  <div class="row">
  <div  class="list-group list-group-flush">
   <div class="card" style="width: 18rem;">
  <img src="${item.pic}" class="card-img-top" alt="Star Wars">
  <div class="card-body">
    <h5 class="card-title">CHARACTER NAME: ${item.name}</h5>
    <p class="card-text"> HOMEWORLD: ${item.homeworld} </p>
  </div>
</div>
  </div>
  </div>
 
</div>
    `
)}
</div>
`;

document.getElementById("Star").innerHTML = Star;

function handle_onClick() {
  let Button = document.getElementById("Button");
  let starWars = document.getElementById("Star");

  if (Button.innerHTML === "Karakterleri Sakla") {
    Button.innerHTML = "Karakterleri Gönder";
  } else {
    Button.innerHTML = "Karakterleri Sakla";
  }

  if (starWars.style.display === "none") {
    starWars.style.display = "block";
  } else {
    starWars.style.display = "none";
  }

  Button.classList.toggle("ButtonStyle");
}

// for (let i = 0; i < StarWarsCharacter.characters.length; i++) {
//   const a = StarWarsCharacter.characters[i].homeworld;
//   let HomeworldInCharacter = [];
//   HomeworldInCharacter.push(a);
//   console.log(HomeworldInCharacter);

//   console.log("a" + a);

//   function result(a) {
//     return a.filter((item, index) => a.indexOf(item) === index);
//   }

//   console.log(result(a));

//   console.log(b + " " + "b");
//   console.log(HomeworldInCharacter + "karakter");
//}

let homeworldsRaw = [
  StarWarsCharacter.characters.map((item) => item.homeworld),
  (null || undefined) ?? "other",
];

document.getElementById("karaterhome").innerHTML = homeworldsRaw;
console.log(homeworldsRaw);

let homeworldsUnique = [
  ...new Set(StarWarsCharacter.characters.map((x) => x.homeworld)),
];

console.log(homeworldsUnique);
