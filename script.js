const cars = JSON.parse(localStorage.getItem("item")) ? JSON.parse(localStorage.getItem("item")) :
[
  {
    Brand: "Nissan",
    Model: "Skyline R34",
    Type: "Tuner/Sport",
    Traction: "RWD",
    image: "https://i.postimg.cc/HLpr42n4/Nissan-Skyline-R34.jpg",
    Description: " A beauty of Japanese engineering made to get around any corner",
    Price: "€95,000"
  },
  {
    Brand: "Chevrolet",
    Model: "Camaro SS",
    Type: "Muscle",
    Traction: "RWD",
    image: "https://i.postimg.cc/mDjGsYyj/Chevrolet-Camaro-SS.jpg",
    Description: " An American Muscle car, sshhh transforms into a robot",
    Price: "€175,000"
  },
  {
    Brand: "Toyota",
    Model: "Supra Mk4",
    Type: " Tuner/Sport",
    Traction: "FWD",
    image: "https://i.postimg.cc/zDn3M6hS/Toyota-Supra-Mk4.jpg",
    Description: " Is that a SUPPRRRAAA!!! Yes, yes it is. Wanna go for a drive?",
    Price: "€70,000"
  },
  {
    Brand: "Land Rover",
    Model: "Evoque",
    Type: "SUV",
    Traction: "AWD",
    image: "https://i.postimg.cc/3xhNYBX5/Land-Rover-Evoque.jpg",
    Description: " Look a Land Rover, reminds me of someone I know",
    Price: "€85,000"
  },
  {
    Brand: "Audi",
    Model: "R8",
    Type: " Convertible",
    Traction: "RWD",
    image: "https://i.postimg.cc/rs92qSGg/Audi-R8.jpg",
    Description: " Famously used by Tony Stark in the movie Iron Man",
    Price: "€180,000"
  },
  {
    Brand: "Bentley",
    Model: "Continetal GT",
    Type: "Cabriolet",
    Traction: "AWD",
    image: "https://i.postimg.cc/XqPcGPgv/Bentley-Continental-GT.jpg",
    Description: " Driven by Tyga and peeks the interest of Lihle",
    Price: "€290,000"
  },
  {
    Brand: "BMW",
    Model: "M3 GTR E46",
    Type: "Tuner/Sport",
    Traction: "RWD",
    image: "https://i.postimg.cc/x8P8BNXV/BMW-M3-GTR-E46.jpg",
    Description: " The iconic Need for Speed Most Wanted model BMW",
    Price: "€185,000"
  },
  {
    Brand: "Tesla",
    Model: "3",
    Type: "Sedan",
    Traction: "AWD",
    image: "https://i.postimg.cc/JhGG2h3G/Tesla-3.jpg",
    Description: " A Tesla, not much to say really except that it's a Tesla",
    Price: "€500,000"
  },
  {
    Brand: "Chevrolet",
    Model: "Corvette-C7",
    Type: "Sport",
    Traction: "RWD",
    image: "https://i.postimg.cc/SNXHTF3D/Corvette-C7.jpg",
    Description: " A concept from Chevrolet which aimed to create a sports muscle car ",
    Price: "€175,000"
  },
  {
    Brand: "Ferrari",
    Model: "458 Italia",
    Type: "Exotic",
    Traction: "RWD",
    image: "https://i.postimg.cc/WtR8YKqH/Ferrari-458-Italia.jpg",
    Description: " The iconic 458 Ferrari Italia, pure Italian bliss",
    Price: "€300,000"
  },
  {
    Brand: "Ford Shelby",
    Model: "Mustang-GT",
    Type: "Muscle",
    Traction: "RWD",
    image: "https://i.postimg.cc/441pDYk3/Ford-Shelby-Mustang-GT.jpg",
    Description: " A mix of Ford's classic Mustang GT with a bit of Shelby style",
    Price: "€200,000"
  },
  {
    Brand: "Honda",
    Model: "S2000",
    Type: "Spyder",
    Traction: "FWD",
    image: "https://i.postimg.cc/0Nxk1yq8/Honda-S2000.jpg",
    Description: " A convertible Japanese dream, you'll be sure to turn heads",
    Price: "€55,000"
  },
  {
    Brand: "Lamborghini",
    Model: "Huracán",
    Type: "Hypercar",
    Traction: "RWD",
    image: "https://i.postimg.cc/9QHVyQ0G/Lamborghini-Hurcan.jpg",
    Description: " An Italian Hypercar with a slick design and intimidating speed",
    Price: "€365,000"
  },
  {
    Brand: "Porsche",
    Model: "GT2 RS",
    Type: " Exotic",
    Traction: "RWD",
    image: "https://i.postimg.cc/TYVmVhQx/Porsche-GT2-RS.jpg",
    Description: " A raring sports car that can deliver speeds like you've never seen before",
    Price: "€195,000"
  },
  {
    Brand: "Mazda",
    Model: "RX7",
    Type: "Tuner/Sport",
    Traction: "FWD",
    image: "https://i.postimg.cc/dVnsvKQr/Mazda-RX7.jpg",
    Description: " A slick and reliable Japanese classic, a drift machine",
    Price: "€35,000"
  },
  {
    Brand: "MClaren",
    Model: "P1",
    Type: "Hypercar",
    Traction: "RWD",
    image: "https://i.postimg.cc/tgM9Ztxg/MClaren-P1.jpg",
    Description: " A British Hypercar, a beauty in both style and performance",
    Price: "€250,000"
  },
  {
    Brand: "Mercedes-Benz",
    Model: "AMG G-Wagon",
    Type: "SUV",
    Traction: "AWD",
    image: "https://i.postimg.cc/X7k3c0Cm/Mercedes-Benz-AMG-G-Wagon.jpg",
    Description: " Popular among many, considered the classiest SUV in the world",
    Price: "€375,000"
  },
  {
    Brand: "Mercedes-Benz",
    Model: "SLS AMG",
    Type: "Exotic",
    Traction: "RWD",
    image: "https://i.postimg.cc/nL66fdmq/Mercedes-Benz-SLS-AMG.jpg",
    Description: " A German masterpiece of beautiful design with a really throaty engine",
    Price: "€220,000"
  },
  {
    Brand: "Mini Cooper",
    Model: "One S",
    Type: "Convertible",
    Traction: "FWD",
    image: "https://i.postimg.cc/ZYLDwYw8/Mini-Cooper-1-S.jpg",
    Description: " A classic Mini Cooper One S, you really can't go wrong with this",
    Price: "€27,000"
  },
  {
    Brand: "Mitshubishi",
    Model: "Lancer Evoultion VIII",
    Type: "Tuner/Sport",
    Traction: "RWD",
    image: "https://i.postimg.cc/66Hf78Hm/Mitshubishi-Lancer-Evo-VIII.jpg",
    Description: " The eigth edition of the Lancer Evolution series",
    Price: "€45,000"
  },
];

function showItems(item) {
  document.querySelector("#cars").innerHTML = "";
  cars.forEach((car, i) => {
    document.querySelector("#cars").innerHTML += `
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header"><h2>Showroom Window</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body"><p>Would you like to book a listing for this vehicle ?
          </div>
          <div class="modal-footer">Confirm booking or cancel
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-outline-danger">Book Listing</button>
          </div>
        </div>
      </div>
    </div>




  <div class="card mt-2 mb-2 ms-2 me-2 shadow-lg p-3 rounded" style="width: 21rem;">
    <img src="${car.image}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal" style="height: 18rem; width:19rem;">
    <div class="card-body">
    <h2 class="card-title">${car.Brand}</h2>
    <p>${car.Description}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fa-solid fa-car"></i> ${car.Model}</li>
      <li class="list-group-item"><i class="fa-solid fa-car-rear"></i> ${car.Type}</li>
      <li class="list-group-item"><i class="fa-solid fa-gear"></i> ${car.Traction}</li>
      </ul>
    <div class="card-footer d-flex mt-3">
    <h3>${car.Price}</h3><br>
  </div>
    </div>
    </div>
    </div>
    `
    
  });
  console.log(cars)
}
localStorage.setItem("cars",JSON.stringify(cars));
showItems(cars);



filter = () => {
  let FilterOption = document.querySelector("#filcars").value;
  if (FilterOption !== "all") {
      console.log(FilterOption);
      document.querySelector("#cars").innerHTML = "";
      let specificView = cars.filter((car) => car.Brand == FilterOption);
      specificView.forEach((car) => {
          document.querySelector("#cars").innerHTML += `
          <div class="card mt-2 mb-2 ms-2 me-2 shadow-lg p-3 rounded" style="width: 21rem;">
          <img src="${car.image}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal" style="height: 18rem; width:19rem;">
          <div class="card-body">
          <h2 class="card-title">${car.Brand}</h2>
          <p>${car.Description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fa-solid fa-car"></i> ${car.Model}</li>
            <li class="list-group-item"><i class="fa-solid fa-car-rear"></i> ${car.Type}</li>
            <li class="list-group-item"><i class="fa-solid fa-gear"></i> ${car.Traction}</li>
            </ul>
          <div class="card-footer d-flex mt-3">
          <h3>${car.Price}</h3><br>
        </div>
          </div>
          </div>
          </div>
      `;
          console.log(specificView);
      });
  } else {
      display();
  }
};

filter1 = () => {
  let FilterOption = document.querySelector("#class").value;
  if (FilterOption !== "all") {
      console.log(FilterOption);
      document.querySelector("#cars").innerHTML = "";
      let specificView = cars.filter((car) => car.Type == FilterOption);
      specificView.forEach((car) => {
          document.querySelector("#cars").innerHTML += `
          <div class="card mt-2 mb-2 ms-2 me-2 shadow-lg p-3 rounded" style="width: 21rem;">
          <img src="${car.image}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal" style="height: 18rem; width:19rem;">
          <div class="card-body">
          <h2 class="card-title">${car.Brand}</h2>
          <p>${car.Description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fa-solid fa-car"></i> ${car.Model}</li>
            <li class="list-group-item"><i class="fa-solid fa-car-rear"></i> ${car.Type}</li>
            <li class="list-group-item"><i class="fa-solid fa-gear"></i> ${car.Traction}</li>
            </ul>
          <div class="card-footer d-flex mt-3">
          <h3>${car.Price}</h3><br>
        </div>
          </div>
          </div>
          </div>
      `;
          console.log(specificView);
      });
  } else {
      display();
  }
};

filter2 = () => {
  let FilterOption = document.querySelector("#track").value;
  if (FilterOption !== "all") {
      console.log(FilterOption);
      document.querySelector("#cars").innerHTML = "";
      let specificView = cars.filter((car) => car.Traction == FilterOption);
      specificView.forEach((car) => {
          document.querySelector("#cars").innerHTML += `
          <div class="card mt-2 mb-2 ms-2 me-2 shadow-lg p-3 rounded" style="width: 21rem;">
          <img src="${car.image}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal" style="height: 18rem; width:19rem;">
          <div class="card-body">
          <h2 class="card-title">${car.Brand}</h2>
          <p>${car.Description}</p>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fa-solid fa-car"></i> ${car.Model}</li>
            <li class="list-group-item"><i class="fa-solid fa-car-rear"></i> ${car.Type}</li>
            <li class="list-group-item"><i class="fa-solid fa-gear"></i> ${car.Traction}</li>
            </ul>
          <div class="card-footer d-flex mt-3">
          <h3>${car.Price}</h3><br>
        </div>
          </div>
          </div>
          </div>
      `;
          console.log(specificView);
      });
  } else {
      display();
  }
};