import config from "../conf/index.js";


async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  console.log(cities);
  console.log(config);
  

  //Updates the DOM with the cities
  cities.forEach((key) => {
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
  try{
    let response= await fetch("http://13.126.33.209:8082/cities");
    let result=await response.json();
    return result;
  }
  catch(e){
    return null;
  }

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let ele=document.createElement("div");
  ele.className="col-sm-12 col-md-6 col-lg-3 my-4";
  ele.innerHTML=
                      `<a href="pages/adventure/?city=${id}" id="${id}">
                      <div class="tile">
            <img src="${image}"/>
           <div class="tile-text">
            <h5>${city}</h5>
            <p>${description}</p>
           </div>
          </div>
                      </a>`;
  document.getElementById("data").appendChild(ele);                    

}

export { init, fetchCities, addCityToDOM };
