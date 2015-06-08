'use strict'

var $ = window.jQuery
var page = window.page

var homeTemplate = `<section class="Layout">
        <section class="Layout-antagonist">
          <div class="Card Card--antagonist">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--antagonist">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--antagonist">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--antagonist">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--antagonist">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
        </section>
        <section class="Layout-main">
          <div class="Layout-status"> 
            <div class="Status">
              <h3 class="Status-player">Jeduan</h3>
              <p class="Status-points">100000</p>
            </div>
            <div class="Status">
              <h3 class="Status-player">Leonidas</h3>
              <p class="Status-points">100000</p>
            </div>
          </div>
          <div class="Layout-battle">
            <div class="Battle">
              <div class="Battle-antagonist">
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
              </div>
              <div class="Battle-player">
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
                <div class="Card ">
                  <div class="Card-container">
                    <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
                    <div class="Card-description">Wolverine es muy poderoso</div>
                    <div class="Card-attack">500 puntos de ataque</div>
                  </div>
                  <div class="Card-backface"> </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Layout-phases">
            <div class="Phases">
              <p>OMG ese ataque fue muy fuerte, le quitaste 300 puntos.</p>
            </div>
          </div>
        </section>
        <section class="Layout-player">
          <div class="Card Card--player">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--player">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--player">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--player">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
          <div class="Card Card--player">
            <div class="Card-container">
              <h2 class="Card-name">Wolverine</h2><img src="./public/images/wolverine.jpg" alt="wolverine" class="Card-image">
              <div class="Card-description">Wolverine es muy poderoso</div>
              <div class="Card-attack">500 puntos de ataque</div>
            </div>
            <div class="Card-backface"> </div>
          </div>
        </section>
      </section>`;

var signinTemplate = `<label>Ingresa tu nombre</label>
    <input type="text" id="firstName" name="firstName" tabindex="1" placeholder="gvilarino, juan, etc..." class="Signin-name-input"/>
    <button tabindex="2" class="Signin-button">Comenzar</button>`;

// ya tenemos page

page('/', restrict, home)
page('/battle', battle)
page('/avengers', avengers)
page('/signin', signin)
page('*', function(){
  $('body').text('Not found!')
})


function restrict(ctx, next) {
  if (!window.user) return page('/signin');

  next();
}

function home(ctx, next) {
  $('.container').html($(homeTemplate));
}

function battle(ctx, next) {
  console.log('Page navigating to: BATTLE')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/battle'
}

function avengers(ctx, next) {
  console.log('Page navigating to: AVENGER')
  console.log('Context :' + JSON.stringify(ctx))
  // window.location = '/avengers'
}

function signin(ctx, next) {
  $('.container').html(signinTemplate);
  $('.Signin-button').on('click', function (event) {
    event.preventDefault();
    var username = $('.Signin-name-input')[0].value;
    if (!username) return alert('Ingresa un nombre válido');
    window.user = { username: username };
    page('/');
  });
}

page({hashbang: true});