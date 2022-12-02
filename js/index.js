const HOME = document.getElementById("home");
const CONTENEDOR = document.getElementById("contenedor");
const NAVABOUT = document.getElementById("navAbout");
const NAVCONTACTO = document.getElementById("navContacto");
let menus = [HOME, NAVABOUT, NAVCONTACTO];
menus.forEach((btn) =>
  btn.addEventListener("click", () => {
    CONTENEDOR.innerHTML = `
        <div class="row">
                <div class="col-6 p-4">
                    <h1 class="fw-bolder animate__animated animate__fadeInDown">no es solo <br> Comida, es una <br> Experiencia.</h1>
                <div class="d-flex mt-4 gap-4">
                    <button class="btn btn-danger rounded-pill px-5 py-2" id="menuBtn">Menu</button>
                    <button class="btn bg-white rounded-pill px-5 py-2 border reserva" id="reservaBtn">Reservar</button>
                </div>
                <div class="mt-4">
                    <span class="fw-bold">Reseñas:</span>
                    <div class="d-flex estrellas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                </div>
                </div>
                <div class="col-6">
                    <img src="img/359-3597252_free-food-plate-png-food-plate-above-png.png" class="foto animate__animated animate__fadeInDown" alt="plato principal">
                </div>
            </div>
            <div class="row mt-5" id="menu">
                <div class="col-lg-4 text-center">
                    <img src="img/1.png" alt="plato" class="bd-placeholder-img rounded-circle" width="140" height="140">
                    <h2 class="fw-normal">Pasta</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, quo!</p>
                    <p>$350</p>
                </div>
                <div class="col-lg-4 text-center">
                    <img src="img/us0GiFWHJOLlHg.png" alt="plato" class="bd-placeholder-img rounded-circle" width="140" height="140">
            
                    <h2 class="fw-normal">Pâtes au thon</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, deserunt!</p>
                    <p>$599</p>
                </div>
                <div class="col-lg-4 text-center">
                    <img src="img/139399-food-nutrition-top-view-plate.png" alt="plato" class="bd-placeholder-img rounded-circle" width="140" height="140">
            
                    <h2 class="fw-normal">Seafood</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, ipsa?</p>
                    <p>$499</p>
                </div>
            </div>
            <hr class="m-5">
            <div class="row" id="about">
              <div class="col">
              <P class="fw-bold fs-2">Sobre Nosotros</P>
            </div>
            </div>
            <div class="row">
              <div class="col-12 col-lg-6 aus">
                <img src="img/Hotel-Eden-La-Terrazza-scaled-e1600071873644.webp" alt="" class="rounded">
              </div>
              <div class="col-12 col-lg-5 align-self-center m-md-0 mt-4">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eum rerum ex voluptas libero blanditiis dolor autem nesciunt perferendis aliquid, velit, architecto harum. Accusantium, quia.
                  <br>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt esse distinctio incidunt officia nihil cumque.</p>
              </div>
            </div>
            <hr class="m-5">
        `;
    menu();
    btnReserva();
    document.getElementById("home").classList.add("active");
    document.getElementById("navMenu").classList.remove("active");
  })
);
function btnReserva() {
  const RESERVAS = document.getElementById("reservaBtn");
  const CONTENEDOR = document.getElementById("contenedor");
  RESERVAS.addEventListener("click", () => {
    CONTENEDOR.innerHTML = `
        <h2 class="text-danger text-center">Reserva una mesa</h2>
            <div class="d-flex justify-content-center">
            <form action="" class="booking__content" id="booking">
              <div class="row">
                <div class="col-lg-5 col-12">
                  <label for="dia">Fecha <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg></label>
                  <input type="date" name="fecha" id="dia" class="form-control" required>
                </div>
                <div class="col-lg-4 col-12">
                  <label for="hora">Hora <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg></label>
                  <input type="time" name="hora" id="hora" class="form-control" required>
                </div>
                <div class="col-lg-3 col-12">
                  <label for="personas">Invitados <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg></label>
                  <input type="number" name="personas" id="pesonas" class="form-control" min="1" value="1" required>
                </div>
              </div>
              <div class="row mt-lg-4 my-2">
                <div class="col-12">
                  <label for="email">Email <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg></label>
                  <input type="email" name="email" id="email" class="form-control" placeholder="Ingresa tu email" required>
                </div>
              </div>
              <button class="btn btn-success p-2 my-4">Confirmar reserva</button>
            </form>
          </div>
          <hr class="m-5">
        `;
  });
}
function menu() {
  const MENU = document.getElementById("menuBtn");
  const NAVMENU = document.getElementById("navMenu");
  let menus = [MENU, NAVMENU];

  menus.forEach((btn) => {
    btn.addEventListener("click", () => {
      CONTENEDOR.innerHTML = `
        <div class="animate__animated animate__fadeInDown">
        <div class="row">
        <div class="col">
        <h2 class="text-center">F<span class="text-danger">oo</span>dy Menu</h2>
        </div>
    </div>
    <div class="row my-4">
        <div class="col-lg-6 col-12">
        <h3 class="text-danger">Plato principal</h3>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$40</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$70</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$55</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        <h3 class="mt-4 text-danger">Postres</h3>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$70</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$70</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        </div>
        <div class="col-lg-6 col-12">
        <h3 class="text-danger">Ensaladas</h3>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$70</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$70</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        <h3 class="mt-4 text-danger">Bebidas</h3>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$70</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        <div class="d-flex menu-item">
            <span>super delicious zuppa toscana</span>
            <span class="underline"></span>
            <span>$70</span>
        </div>
        <p class="menu-detail">chicken + rice + sausage + spinach</p>
        </div>
    </div>
    </div>
        `;
      document.getElementById("home").classList.remove("active");
      NAVMENU.classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  menu();
  btnReserva();
  if (localStorage.getItem("user")) {
    document.getElementById("userName").innerHTML = `<div class="dropdown">
        <a class="btn btn-danger rounded-pill px-4 py-2 dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        ${localStorage.getItem("user")}
        </a>
      
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" id="cerrar">Cerrar Sesion</a></li>
        </ul>
      </div>`;
    document.getElementById("cerrar").addEventListener("click", () => {
      localStorage.removeItem("user");
      document.getElementById("userName").innerHTML = `
        <button class="btn btn-danger rounded-pill px-4 py-2" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar Sesión</button>
        `;
    });
  }
});

const LOGIN = document.getElementById("login");
const inputName = document.getElementById("floatingInput");
LOGIN.addEventListener("click", (e) => {
  localStorage.setItem("user", inputName.value);
});
