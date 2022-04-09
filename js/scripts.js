/*!
* Start Bootstrap - The Big Picture v5.0.5 (https://startbootstrap.com/template/the-big-picture)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-the-big-picture/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
"use strict";

 (function() {

   const pc = [
       "Rocket League", "Grand Theft Auto V", "Star Wars Battlefront 2",
       "Halo The Master Chief Collection", "Fortnite", "Valheim", "Lego Star Wars The Complete Saga",
       "Star Wars the Force Unleashed", "Deus Ex", "Roblox", "Minecraft", "Metro Exodus", "Apex Legends",
       "Titanfall 2", "Star Wars Jedi Fallen Order", "Fall Guys Ultimate Knockout", "Doom",
       "The Elder Scrolls V Skyrim", "Slime Rancher", "No Man's Sky", "Little Nightmares",
       "Need for Speed Heat", "The Witcher", "Left 4 Dead 2", "Among Us", "Dying Light",
       "Batman Arkham Asylum", "Outer Wilds", "Red Dead Redemption 2", "Detriot Become Human",
       "The Outer Wilds", "Far Cry 3", "Assassin's Creed Odyssey", "Watch_Dogs",
       "Dark Souls", "Sonic Mania", "The Forest", "Lego Marvel's Avengers", "Rust",
       "Subnautica", "Horizon Zero Dawn", "Forza Horizon 4", "Marvel's Avengers",
       "Back 4 Blood", "Sea of Thieves", "Forza Horizon 5", "Cyberpunk 2077",
       "Guardians of the Galaxy"
    ]

    const playstation = [
        "Marvel's Spider-Man", "Marvel's Spider-Man: Miles Morales", "The Last of Us",
        "Resident Evil 7 Biohazard", "Fallout 4", "Until Dawn", "Call of Duty: Black Ops 3",
        "inFAMOUS Second Son", "Ratchet & Clank"
    ]

    const xbox = [
        "Halo Infinite", "Grand Theft Auto: San Andreas", "Exo One", "Gears of War",
        "SSX", "Rainbow Six Siege", "Mass Effect Legendary Edition", "Rainbow Six Extraction",
        "Gang Beasts", "Grand Theft Auto IV", "Midnight Club Los Angeles"
    ]

    const nintendo = [
        "Super Smash Bros. Ultimate", "Super Mario Bros. U Deluxe", "Mario Cart 8 Deluxe",
        "Super Mario 3D World + Bowser's Fury", "The Legend of Zelda: Breath of the Wild",
        "Super Mario Party"
    ]

    const BASE_URL = "https://api.rawg.io/api/games?search="

    const API_KEY = "&key=ed51b3b6df6e4ebea25c5dfce00a6552"

   window.addEventListener("load", init);

   function init() {
        id("get-game").addEventListener("click", getGameNames)
   }

   function getGameNames() {
        let pcGame = pc[Math.floor(pc.length * Math.random())];
        let ps5Game = playstation[Math.floor(playstation.length * Math.random())];
        let xseriesGame= xbox[Math.floor(xbox.length * Math.random())];
        let switchGame = nintendo[Math.floor(nintendo.length * Math.random())];
        fetchInfo(pcGame, "pc");
        fetchInfo(ps5Game, "playstation");
        fetchInfo(xseriesGame, "xbox");
        fetchInfo(switchGame, "switch");
   }

   function fetchInfo(name, platform) {
    let url = BASE_URL + name + API_KEY;
    fetch(url)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(result => {
        createCards(result, platform);
      })
      .catch(console.error);
  }

  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  function createCards(results, platform) {
    createTitles(platform);
    let info = results.results[0];
    let name = info.name;
    let image = info.background_image
    let newDiv = gen("div");
    newDiv.classList.add("col-md-4")
    newDiv.id ="platform-card"
    let newImage = gen("img");
    newImage.src = image;
    newImage.alt = name;
    newImage.classList.add("card-img-top", "img-thumbnail", "img-fluid");
    let newDiv2 = gen("div");
    newDiv2.classList.add("card-body");
    let h3 = gen("h3");
    h3.classList.add("card-title");
    h3.textContent = name;
    newDiv2.appendChild(newImage);
    newDiv2.appendChild(h3);
    newDiv.appendChild(newDiv2);
    id(platform).appendChild(newDiv);
  }

  function createTitles(platform) {
    id(platform).innerHTML = "";
    let h2 = gen("h2");
    h2.classList.add("p-1");
    let img = gen("img");
    img.classList.add("p-1");
    img.width = "50";
    img.height = "50";
    let div = gen("div");
    div.classList.add("w-100");
    if (platform == "pc") {
        h2.textContent = "PC Game";
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png";
        img.alt = "Steam logo";
    } else if (platform == "playstation") {
        h2.textContent = "Playstation Game";
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
        img.alt = "Playstation logo";
    } else if (platform == "xbox") {
        h2.textContent = "Xbox Game";
        img.src = "https://compass-ssl.xbox.com/assets/56/72/5672b413-1b6a-4307-b1df-e4ff5311ee8d.svg?n=03958693_App-Icon-0_120x120.svg";
        img.alt = "Xbox logo";
    } else if (platform == "switch") {
        h2.textContent = "Switch Game";
        img.src = "https://seeklogo.com/images/N/nintendo-switch-logo-38D4F5C7E7-seeklogo.com.png";
        img.alt = "Switch logo";
    }
    id(platform).appendChild(h2);
    id(platform).appendChild(img);
    id(platform).appendChild(div);
  }

   function id(idName) {
     return document.getElementById(idName);
   }

   function gen(tagName) {
     return document.createElement(tagName);
   }
 })();