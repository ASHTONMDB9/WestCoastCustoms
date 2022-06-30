const cars = JSON.parse(localStorage.getItem("item")) ? JSON.parse(localStorage.getItem("item")) :
[
  {
    Brand: "Nissan",
    Model: "Skyline R34",
    Type: "Tuner/Sport Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/HLpr42n4/Nissan-Skyline-R34.jpg",
    Description: " A beauty of Japanese engineering",
    Price: "€95,000"
  },
  {
    Brand: "Chevrolet",
    Model: "Camaro SS",
    Type: "Muscle Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/mDjGsYyj/Chevrolet-Camaro-SS.jpg",
    Description: " An American Muscle car that also transforms into a robot",
    Price: "€175,000"
  },
  {
    Brand: "Toyota",
    Model: "Supra Mk4",
    Type: " Tuner/Sport Coupe",
    Traction: "FWD",
    image: "https://i.postimg.cc/zDn3M6hS/Toyota-Supra-Mk4.jpg",
    Description: " Is that a SUPPRRRAAA!!!",
    Price: "€70,000"
  },
  {
    Brand: "Land Rover",
    Model: "Evoque",
    Type: "Sport SUV",
    Traction: "AWD",
    image: "https://i.postimg.cc/3xhNYBX5/Land-Rover-Evoque.jpg",
    Description: " Look a Land Rover",
    Price: "€85,000"
  },
  {
    Brand: "Audi",
    Model: "R8",
    Type: "Sport Convertible Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/rs92qSGg/Audi-R8.jpg",
    Description: " Famously used by Robert Downey Jr in his role as Tony Stark",
    Price: "€180,000"
  },
  {
    Brand: "Bentley",
    Model: "Continetal GT",
    Type: "Exotic Cabriolet Coupe",
    Traction: "AWD",
    image: "https://i.postimg.cc/XqPcGPgv/Bentley-Continental-GT.jpg",
    Description: " Driven by many idols such as J Cole, Post Malone, Tyga and peeks the interest of Lihle",
    Price: "€290,000"
  },
  {
    Brand: "BMW",
    Model: "M3 GTR E46",
    Type: "Exoctic Tuner/Sport Coupe",
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
    Description: " A Tesla, not much to say really",
    Price: "€500,000"
  },
  {
    Brand: "Chevrolet",
    Model: "Corvette-C7",
    Type: " Muscle Sport Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/SNXHTF3D/Corvette-C7.jpg",
    Description: " A concept from Chevrolet which aimed to create a sports muscle car. They succeeded and came up with the Corvette ",
    Price: "€175,000"
  },
  {
    Brand: "Ferrari",
    Model: "458 Italia",
    Type: "Exotic Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/WtR8YKqH/Ferrari-458-Italia.jpg",
    Description: " The iconic 458 Ferrari Italia",
    Price: "€300,000"
  },
  {
    Brand: "Ford Shelby",
    Model: "Mustang-GT",
    Type: "Muscle Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/441pDYk3/Ford-Shelby-Mustang-GT.jpg",
    Description: " A mix of Ford's classic Mustang GT with a bit of Shelby style and performance",
    Price: "€200,000"
  },
  {
    Brand: "Honda",
    Model: "S2000",
    Type: " Spyder Tuner/Sport Coupe",
    Traction: "FWD",
    image: "https://i.postimg.cc/0Nxk1yq8/Honda-S2000.jpg",
    Description: " A convertible Japanese dream",
    Price: "€55,000"
  },
  {
    Brand: "Lamborghini",
    Model: "Huracán",
    Type: "Exotic Hypercar Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/9QHVyQ0G/Lamborghini-Hurcan.jpg",
    Description: " An Italian Hypercar with a slick design and intimidating speed",
    Price: "€365,000"
  },
  {
    Brand: "Porsche",
    Model: "GT2 RS",
    Type: " Exotic Sport Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/TYVmVhQx/Porsche-GT2-RS.jpg",
    Description: " A raring sports car that can deliver",
    Price: "€195,000"
  },
  {
    Brand: "Mazda",
    Model: "RX7",
    Type: "Tuner/Sport Coupe",
    Traction: "FWD",
    image: "https://i.postimg.cc/dVnsvKQr/Mazda-RX7.jpg",
    Description: " A slick and reliable Japanese classic",
    Price: "€35,000"
  },
  {
    Brand: "MClaren",
    Model: "P1",
    Type: "Exotic Hypercar Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/tgM9Ztxg/MClaren-P1.jpg",
    Description: " A British Hypercar",
    Price: "€250,000"
  },
  {
    Brand: "Mercedes-Benz",
    Model: "AMG G-Wagon",
    Type: "Exotic Sport SUV",
    Traction: "AWD",
    image: "https://i.postimg.cc/X7k3c0Cm/Mercedes-Benz-AMG-G-Wagon.jpg",
    Description: " Popular among many, considered the classiest SUV in the world",
    Price: "€375,000"
  },
  {
    Brand: "Mercedes-Benz",
    Model: "SLS AMG",
    Type: "Exotic Sport Coupe",
    Traction: "RWD",
    image: "https://i.postimg.cc/nL66fdmq/Mercedes-Benz-SLS-AMG.jpg",
    Description: " A German masterpiece of beautiful design with a really throaty engine",
    Price: "€220,000"
  },
  {
    Brand: "Mini Cooper",
    Model: "One S",
    Type: "Convertible Coupe",
    Traction: "FWD",
    image: "https://i.postimg.cc/ZYLDwYw8/Mini-Cooper-1-S.jpg",
    Description: " A classic Mini Cooper",
    Price: "€27,000"
  },
  {
    Brand: "Mitshubishi",
    Model: "Lancer Evoultion VIII",
    Type: "Tuner/Sport Coupe",
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
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header"><p>${car.Brand}</p>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <p>${car.Model}</p>}
          <p>${car.Type}</p>
          <p>${car.Traction}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-outline-danger">Book</button>
          </div>
        </div>
      </div>
    </div>




  <div class="card mt-2 mb-2 ms-2 me-2 shadow-lg p-3 rounded" style="width: 21rem;">
    <img src="${car.image}" class="card-img-top" data-bs-toggle="modal" data-bs-target="#exampleModal" style="height: 18rem;">
    <div class="card-body">
    <h2 class="card-title">${car.Brand}</h2>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i class="fa-solid fa-car"></i> ${car.Model}</li>
      <li class="list-group-item"><i class="fa-solid fa-car-rear"></i> ${car.Type}</li>
      <li class="list-group-item"><i class="fa-solid fa-gear"></i> ${car.Traction}</li>
      <li class="list-group-item"><i class="fa-solid fa-gear"></i> ${car.Description}</li>
      </ul>
    <div class="card-footer d-flex mt-3">
    <h3>${car.Price}</h3>
  </div>
    </div>
    </div>
    </div>
    `
    
  });
  console.log(cars)
}
localStorage.setItem("cars",JSON.stringify(cars));
showItems(cars)