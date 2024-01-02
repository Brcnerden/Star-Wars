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

const fillCharactersContanier = (arr) => {
  let characterHTML = "";
  arr.map((item) => {
    characterHTML += createCharactersCardHtml(
      item.pic,
      item.name,
      item.homeworld
    );
  });
  document.getElementById("Star").innerHTML = characterHTML;
};

let filteredHomeworld = null;

const createCharactersCardHtml = (pic, name, homeworld) => `
             
                <div>
                  <div class="list-group list-group-flush p-5">
                    <div class="card" style="width: 18rem">
                      <img src="${pic}" class="card-img-top" style="max-height:375px " alt="Star Wars" />
                      <div class="card-body">
                        <div class="card-title">CHARACTER NAME: ${name}</div>
                        <p class="card-text">HOMEWORLD: ${homeworld}</p>
                      </div>
                    </div>
                  </div>
                </div>
              

    `;

fillCharactersContanier(StarWarsCharacter.characters);

function handle_onClick() {
  let Button = document.getElementById("Button");
  let starWars = document.getElementById("Star");

  if (Button.innerHTML === "Karakterleri Sakla") {
    Button.innerHTML = "Karakterleri Gönder";
  } else {
    Button.innerHTML = "Karakterleri Sakla";
  }

  starWars.classList.toggle("d-none");

  Button.classList.toggle("ButtonStyle");
}

let homeworldsRaw = StarWarsCharacter.characters.map(
  (item) => item.homeworld || "other"
);

let homeworldsUnique = homeworldsRaw.filter(
  (item, pos) => homeworldsRaw.indexOf(item) == pos
);

let homeworldsLowercase = homeworldsUnique.map((item) => item.toLowerCase());

const homeworlds = homeworldsLowercase;

const createRadioInputHtml = (item) =>
  `
   <div>
      <div class="form-check">
        <input
          class="form-check-input "
          type="radio"
          name="flexRadioDefault"
          checked
          data-home="${item}"
          id="flexRadioDefault-${item}"
        />
        <label class="form-check-label text-white bg-dark" for="flexRadioDefault-${item}">${item}</label>
      </div>
    </div>
`;

let radioInputHTML = "";

homeworlds.map((item) => {
  radioInputHTML += createRadioInputHtml(item);
});

document.getElementById("characterHome").innerHTML = radioInputHTML;

let radioButtons = document.getElementsByClassName("form-check-input");

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", function () {
    filteredHomeworld = this.getAttribute("data-home");
    let homeFilterd = StarWarsCharacter.characters.filter(
      (item) => filteredHomeworld === item.homeworld
    );
    fillCharactersContanier(homeFilterd);
  });
}

const handle_reset_filter = () => {
  filteredHomeworld = null;
  fillCharactersContanier(StarWarsCharacter.characters);
};
