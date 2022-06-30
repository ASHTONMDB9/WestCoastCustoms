const cars = JSON.parse(localStorage.getItem("item")) ? JSON.parse(localStorage.getItem("item")) :
[
  {
    Id: "1",
    Brand: "Nissan",
    Model: "Skyline R34",
    Type: "Tuner/Sport",
    Nationality: "Japan",
    Traction: "RWD",
    image: "https://i.postimg.cc/HLpr42n4/Nissan-Skyline-R34.jpg",
    Description: " A beauty of Japanese engineering made to get around any corner",
    Price: "€95,000"
  },
  {
    Id: "2",
    Brand: "Chevrolet",
    Model: "Camaro SS",
    Type: "Muscle",
    Nationality: "America",
    Traction: "RWD",
    image: "https://i.postimg.cc/mDjGsYyj/Chevrolet-Camaro-SS.jpg",
    Description: " An American Muscle car, sshhh transforms into a robot",
    Price: "€175,000"
  },
  {
    Id: "3",
    Brand: "Toyota",
    Model: "Supra Mk4",
    Type: " Tuner/Sport",
    Nationality: "Japan",
    Traction: "FWD",
    image: "https://i.postimg.cc/zDn3M6hS/Toyota-Supra-Mk4.jpg",
    Description: " Is that a SUPPRRRAAA!!! Yes, yes it is. Wanna go for a drive?",
    Price: "€70,000"
  },
  {
    Id: "4",
    Brand: "Land Rover",
    Model: "Evoque",
    Type: "SUV",
    Nationality: "America",
    Traction: "AWD",
    image: "https://i.postimg.cc/3xhNYBX5/Land-Rover-Evoque.jpg",
    Description: " Look a Land Rover, reminds me of someone I know",
    Price: "€85,000"
  },
  {
    Id: "5",
    Brand: "Audi",
    Model: "R8",
    Type: " Convertible",
    Nationality: "Germany",
    Traction: "RWD",
    image: "https://i.postimg.cc/rs92qSGg/Audi-R8.jpg",
    Description: " Famously used by Tony Stark in the movie Iron Man",
    Price: "€180,000"
  },
  {
    Id: "6",
    Brand: "Bentley",
    Model: "Continetal GT",
    Type: "Cabriolet",
    Nationality: "British",
    Traction: "AWD",
    image: "https://i.postimg.cc/XqPcGPgv/Bentley-Continental-GT.jpg",
    Description: " Driven by Tyga and peeks the interest of Lihle",
    Price: "€290,000"
  },
  {
    Id: "7",
    Brand: "BMW",
    Model: "M3 GTR E46",
    Type: "Tuner/Sport",
    Nationality: "Germany",
    Traction: "RWD",
    image: "https://i.postimg.cc/x8P8BNXV/BMW-M3-GTR-E46.jpg",
    Description: " The iconic Need for Speed Most Wanted model BMW",
    Price: "€185,000"
  },
  {
    Id: "8",
    Brand: "Tesla",
    Model: "3",
    Type: "Sedan",
    Nationality: "America",
    Traction: "AWD",
    image: "https://i.postimg.cc/JhGG2h3G/Tesla-3.jpg",
    Description: " A Tesla, not much to say really except that it's a Tesla",
    Price: "€500,000"
  },
  {
    Id: "9",
    Brand: "Chevrolet",
    Model: "Corvette-C7",
    Type: "Sport",
    Nationality: "America",
    Traction: "RWD",
    image: "https://i.postimg.cc/SNXHTF3D/Corvette-C7.jpg",
    Description: " A concept from Chevrolet which aimed to create a sports muscle car ",
    Price: "€175,000"
  },
  {
    Id: "10",
    Brand: "Ferrari",
    Model: "458 Italia",
    Type: "Exotic",
    Nationality: "Italy",
    Traction: "RWD",
    image: "https://i.postimg.cc/WtR8YKqH/Ferrari-458-Italia.jpg",
    Description: " The iconic 458 Ferrari Italia, pure Italian bliss",
    Price: "€300,000"
  },
  {
    Id: "11",
    Brand: "Ford Shelby",
    Model: "Mustang-GT",
    Type: "Muscle",
    Nationality: "America",
    Traction: "RWD",
    image: "https://i.postimg.cc/441pDYk3/Ford-Shelby-Mustang-GT.jpg",
    Description: " A mix of Ford's classic Mustang GT with a bit of Shelby style",
    Price: "€200,000"
  },
  {
    Id: "12",
    Brand: "Honda",
    Model: "S2000",
    Type: "Spyder",
    Nationality: "Japan",
    Traction: "FWD",
    image: "https://i.postimg.cc/0Nxk1yq8/Honda-S2000.jpg",
    Description: " A convertible Japanese dream, you'll be sure to turn heads",
    Price: "€55,000"
  },
  {
    Id: "13",
    Brand: "Lamborghini",
    Model: "Huracán",
    Type: "Hypercar",
    Nationality: "Italy",
    Traction: "RWD",
    image: "https://i.postimg.cc/9QHVyQ0G/Lamborghini-Hurcan.jpg",
    Description: " An Italian Hypercar with a slick design and intimidating speed",
    Price: "€365,000"
  },
  {
    Id: "14",
    Brand: "Porsche",
    Model: "GT2 RS",
    Type: " Exotic",
    Nationality: "Germany",
    Traction: "RWD",
    image: "https://i.postimg.cc/TYVmVhQx/Porsche-GT2-RS.jpg",
    Description: " A raring sports car that can deliver speeds like you've never seen before",
    Price: "€195,000"
  },
  {
    Id: "15",
    Brand: "Mazda",
    Model: "RX7",
    Type: "Tuner/Sport",
    Nationality: "Japan",
    Traction: "FWD",
    image: "https://i.postimg.cc/dVnsvKQr/Mazda-RX7.jpg",
    Description: " A slick and reliable Japanese classic, a drift machine",
    Price: "€35,000"
  },
  {
    Id: "16",
    Brand: "MClaren",
    Model: "P1",
    Type: "Hypercar",
    Nationality: "British",
    Traction: "RWD",
    image: "https://i.postimg.cc/tgM9Ztxg/MClaren-P1.jpg",
    Description: " A British Hypercar, a beauty in both style and performance",
    Price: "€250,000"
  },
  {
    Id: "17",
    Brand: "Mercedes-Benz",
    Model: "AMG G-Wagon",
    Type: "SUV",
    Nationality: "Germany",
    Traction: "AWD",
    image: "https://i.postimg.cc/X7k3c0Cm/Mercedes-Benz-AMG-G-Wagon.jpg",
    Description: " Popular among many, considered the classiest SUV in the world",
    Price: "€375,000"
  },
  {
    Id: "18",
    Brand: "Mercedes-Benz",
    Model: "SLS AMG",
    Type: "Exotic",
    Nationality: "Germany",
    Traction: "RWD",
    image: "https://i.postimg.cc/nL66fdmq/Mercedes-Benz-SLS-AMG.jpg",
    Description: " A German masterpiece of beautiful design with a really throaty engine",
    Price: "€220,000"
  },
  {
    Id: "19",
    Brand: "Mini Cooper",
    Model: "One S",
    Type: "Convertible",
    Nationality: "British",
    Traction: "FWD",
    image: "https://i.postimg.cc/ZYLDwYw8/Mini-Cooper-1-S.jpg",
    Description: " A classic Mini Cooper One S, you really can't go wrong with this",
    Price: "€27,000"
  },
  {
    Id: "20",
    Brand: "Mitshubishi",
    Model: "Lancer Evoultion VIII",
    Type: "Tuner/Sport",
    Nationality: "Japan",
    Traction: "RWD",
    image: "https://i.postimg.cc/66Hf78Hm/Mitshubishi-Lancer-Evo-VIII.jpg",
    Description: " The eigth edition of the Lancer Evolution series",
    Price: "€45,000"
  },
];


const carsContainer = document.querySelector("#carTable");



function showItems(cars) {
  document.querySelector("#carTable").innerHTML = "";
  cars.forEach((car) => {
    console.log(car)
    document.querySelector("#carTable").innerHTML += `
    <tr>
        <td scope="col">${car.Id}</td>
        <td scope="col">${car.Brand}</td>
        <td scope="col"> ${car.Type}</td>
        <td scope="col">${car.Nationality}</td>
        <td scope="col"> ${car.Traction}</td>
    <tr>
    `  
  });

}




localStorage.setItem("cars",JSON.stringify(cars));
showItems(cars);



//Add function//
function addItem() {
    const newCars = {
      Brand: document.querySelector("#Brand").value,
      Description: document.querySelector("#Description").value,
      Price: document.querySelector("#Price").value,
      Traction: document.querySelector("#Traction").value,
      Model: document.querySelector("#Model").value,
      Type: document.querySelector("#Type").value,
      Nationality: document.querySelector("#Nationality").value,
      image: document.querySelector("#image ").value,
      Id: cars.length,
    };
    cars.push(newCars);
    localStorage.setItem("cars", JSON.stringify(cars));
    showItems(cars);
  }

  document.querySelector("#addCar").addEventListener("click", addItem());