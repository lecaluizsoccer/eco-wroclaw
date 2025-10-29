export const inicioHtml = [
  {
    id: "inicio",
    html: `
                    <!-- section 1 -->

        <section class="main-section section-1">
            <div class="section-div section-div1">
                <div class="div-title">
                    <i class="fa-solid fa-leaf"></i>
                    <h1>EcoWrocław</h1>
                </div>
                <p>Welcome to EcoWrocław! Together, we can build a more sustainable city
                    through small daily actions.
                </p>
            </div>
        </section>
                             <!-- section 2 -->

        <section class="main-section section-2">
            <h1>Sustainable Practices in Wrocław</h1>
            <h2>Conscious consumption for a better future</h2>
        </section>

                            <!-- section 3 -->

        <section class="main-section section-3">
            <div class="section3-div">
                <div>
                    <i class="fa-solid fa-lightbulb"></i>
                    <h3>Practical Tips</h3>
                </div>
                <p>Discover easy ways to live more sustainably</p>
            </div>

            <div class="section3-div">
                <div>
                    <i class="fa-solid fa-bullseye"></i>
                    <h3>Daily Challenges</h3>
                </div>
                <p>Complete small actions that make a big difference</p>
            </div>

            <div class="section3-div">
                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>Eco Points</h3>
                </div>
                <p>Find recycling spots and sustainable markets</p>
            </div>
         </section>

`,
  },

  {
    id: "dicas",
    html: `
    <div class="dicas-container">

                    <!-- SECTION 1 -->

            <section class="main-section section-1">
                <div class="section-div section-div1 section1-dicas">
                    <div class="div-title dicas-title">
                        <div class="leaf">🌿</div>
                        <h1>Sustainable Tips</h1>
                    </div>
                    <p>Practices for a more eco-friendly lifestyle in Wrocław
                    </p>
                </div>
            </section>

                    <!-- SECTION 2 -->

            <section class="main-section section-3 section2-dicas">

                <div class="section3-div section2-dicas-div">
                    <div>
                        <i class="fa-solid fa-recycle recyle-icon"></i>
                        <h3>Efficient Recycling</h3>
                    </div>
                    <p>Wrocław has color-coded containers for waste separation: blue for paper, yellow for plastic and metal, green for glass, and brown for biodegradable waste.</p>
                </div>

                <div class="section3-div section2-dicas-div">
                    <div>
                        <i class="fa-solid fa-person-biking"></i>
                        <h3>Sustainable Mobility</h3>
                    </div>
                    <p>Use the WRM shared bike system or MPK public transport to reduce emissions.</p>
                </div>

                <div class="section3-div section2-dicas-div">
                    <div>
                        <i class="fa-solid fa-lightbulb"></i>
                        <h3>Energy Saving</h3>
                    </div>
                    <p>Replace bulbs with LEDs, only run the washing machine when full, and take advantage of natural light during the day.</p>
                </div>
                <div class="section3-div section2-dicas-div">
                    <div>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <h3>Conscious Shopping</h3>
                    </div>
                    <p>Prefer local and seasonal products. Visit farmers' markets in Wrocław such as Rynek or Hala Targowa.</p>
                </div>

                <div class="section3-div section2-dicas-div">
                    <div>
                        <i class="fa-solid fa-droplet"></i>
                        <h3>Water Conservation</h3>
                    </div>
                    <p>Turn off the tap while brushing your teeth, fix leaks, and use the toilet efficiently.</p>
                </div>

                <div class="section3-div section2-dicas-div">
                    <div>
                        <i class="fa-solid fa-seedling"></i>
                        <h3>Composting</h3>
                    </div>
                    <p>Turn organic waste into plant fertilizer. Wrocław provides collection points for biodegradable waste.</p>
                </div>
            </section>  
                <!-- section 3 -->
        
        
            <section class="main-section section-2 section2-dicas-div dicas-photo">
                <h3 class="dicas-text">"Sustainability starts with small daily actions"</h3>
            </section>
   
        </div>
    `,
  },

  {
    id: "desafios",
    html: `
   <!-- Section 1 -->

        <section class="main-section section-1">
            <div class="section-div section-div1">
                <div class="div-title">
                    <div class="bullseye">🎯</div>
                    <h1>Sustainable Challenges</h1>
                </div>
                <p>Complete daily actions and track your progress.</p>
            </div>
        </section>

                        <!-- Section 2 -->

        <section class="main-section section-3 desafios-section2">

            <div class="section3-div desafios-section2-div progress-bar">
                <h3>Your Progress</h3>
                <p class="test-progress">0 of 6 challenges completed</p>
                <div class="bar">
                    <div class="inner-bar"></div>
                </div>
            </div>

                <div class="section3-div desafios-section2-div">
                    <div>
                        <input type="checkbox" class="fa-solid checkbox-class" id="checkbox-1">
                        <h3>Use public transport</h3>
                    </div>
                    <p>Go to work or school using bus, tram, or bike today</p>
                </div>

                <div class="section3-div desafios-section2-div">
                    <div>
                        <input type="checkbox" class="fa-solid checkbox-class" id="checkbox-2">
                        <h3>Separate recyclable waste</h3>
                    </div>
                    <p>Organize your waste into plastic, paper, glass, and organic</p>
                </div>

                <div class="section3-div desafios-section2-div">
                    <div>
                        <input type="checkbox" class="fa-solid checkbox-class" id="checkbox-3">
                        <h3>Reduce plastic use</h3>
                    </div>
                    <p>Use a reusable bottle instead of disposable bottles</p>
                </div>

                <div class="section3-div desafios-section2-div">
                    <div>
                        <input type="checkbox" class="fa-solid checkbox-class" id="checkbox-4">
                        <h3>Save energy</h3>
                    </div>
                    <p>Turn off lights and appliances when not in use</p>
                </div>

                <div class="section3-div desafios-section2-div">
                    <div>
                        <input type="checkbox" class="fa-solid checkbox-class" id="checkbox-5">
                        <h3>Buy local</h3>
                    </div>
                    <p>Visit a local market for organic products</p>
                </div>

                <div class="section3-div desafios-section2-div">
                    <div>
                        <input type="checkbox" class="fa-solid checkbox-class" id="checkbox-6">
                        <h3>Avoid food waste</h3>
                    </div>
                    <p>Plan your meals and use leftovers creatively</p>
                </div>

        </section>
  
  `,
  },

  {
    id: "mapa",
    html: `
    <!-- section 2 -->

            <section class="main-section section-1">
                <div class="section-div section-div1">
                    <div class="div-title">
                        <h1>📍 Eco Points in Wroclaw</h1>
                    </div>
                    <p>locations for sustainable recycling</p>
                </div>
            </section>
    
            <section class="main-section section-2 mapa-photo">
                <h1>Sustainable Wrocław</h1>
            </section>
                          <!-- section 3 -->

    
            <section class="main-section section-3 section2-dicas">

                <div class="section3-div section2-dicas-div mapa-sec3">
                    <div class="mapa-cards">
                        <h3>PSZOK Wroclaw - Fabryczna</h3>
                        <a href="https://www.google.com/maps/search/PSZOK+Wroc%C5%82aw+-+Fabryczna+ul.+Szcz%C4%99%C5%9Bliwa+30+Wroc%C5%82aw/@51.1360349,16.9526061,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank"><i class="fa-solid fa-location-dot location-icon"></i></a>
                    </div>

                    <p>ul. Szczesliwa 30</p>
                    <p class="mapa-botton-text">Selective Collection Point</p>
   
                </div>

                <div class="section3-div section2-dicas-div mapa-sec3">
                    <div class="mapa-cards">
                        <h3>PSZOK Wroclaw - Krzyki</h3>
                        <a href="https://www.google.com/maps/search/PSZOK%20Wroc%C5%82aw%20-%20Krzyki%20ul.%20Rac%C5%82awicka%2056%20Wroc%C5%82aw" 
                        target="_blank"><i class="fa-solid fa-location-dot location-icon"></i></a>
                        
                    </div>
                    <p>ul. Raclawicka 56</p>
                    <p class="mapa-botton-text">Selective Collection Point</p>
                </div>

                <div class="section3-div section2-dicas-div mapa-sec3">
                    <div class="mapa-cards">
                        <h3>Hala Targowa</h3>
                        <a href="https://www.google.com/maps/search/Hala%20Targowa%20Pl.%20Dominika%C5%84ski%20Wroc%C5%82aw" 
                        target="_blank"><i class="fa-solid fa-location-dot location-icon"></i></a>
                        
                    </div>
                    <p>Pl. Dominikanski</p>
                    <p class="mapa-botton-text">Local Products Market</p>
                </div>

                <div class="section3-div section2-dicas-div mapa-sec3">
                    <div class="mapa-cards">
                        <h3>Rynek - Farmers Market</h3>
                        <a href="https://www.google.com/maps/search/Rynek%20-%20Feira%20de%20Agricultores%20Rynek%20(pra%C3%A7a%20central)%20Wroc%C5%82aw" 
                        target="_blank"><i class="fa-solid fa-location-dot location-icon"></i></a>
                        
                    </div>
                    <p>Rynek (central square)</p>
                    <p class="mapa-botton-text">Organic Market</p>
                </div>

                <div class="section3-div section2-dicas-div mapa-sec3">
                    <div class="mapa-cards">
                        <h3>Interactive Map</h3>
                    </div>
                    <div class="card-text">
                      <p>See all points on the city map</p>
                      <a href="https://www.google.com/maps/search/PSZOK+Wroc%C5%82aw" 
                      target="_blank"><h4><span class="location-pin">📍</span>Open in Google Maps</h4></a>
                    </div>
                </div>

            </section>  
    `,
  },

  {
    id: "sobre",
    html: `
          <!-- section 1 -->

        <section class="main-section section-1">
            <div class="section-div section-div1">
                <div class="div-title">
                    <i class="fa-solid fa-info"></i>
                    <h1>About Wrocław</h1>
                </div>
                <p>Our commitment to sustainability</p>
            </div>
        </section>

                         <!-- Section 2 -->

        <section class="main-section section-3 desafios-section2">

            <div class="section3-div desafios-section2-div sobre-div mission">
                <h4>Mission</h4>
                <p>EcoWroclaw is an initiative to promote sustainable practices and conscious consumption in the city of Wrocław. We believe small daily actions
                  can generate significant positive impacts on the environment.
                </p>
                <p>Through practical tips, motivational challenges, and information about selective collection points and eco-friendly fairs, we aim to make it easier
                  for all city residents to adopt a more sustainable lifestyle.
                </p>
            </div>

            <div id="sobre-div" class="section3-div desafios-section2-div sobre-div">
                <p>🎯 SDG 12 - Responsible Consumption and Production</p>
                <p>This project is aligned with the UN Sustainable Development Goal 12, which aims to "ensure sustainable consumption and production patterns."</p>
                <p>Main targets:</p>
                <ul class="sobre-ul">
                  <li class="sobre-li">Substantially reduce waste generation through prevention, reduction, recycling, and reuse</li>
                  <li class="sobre-li">Achieve sustainable management and efficient use of natural resources</li>
                  <li class="sobre-li">Encourage companies to adopt sustainable practices</li>
                  <li class="sobre-li">Promote sustainable public procurement practices</li>
                  <li class="sobre-li">Ensure people have relevant information on sustainable development</li>
                </ul>
            </div>

            <div class="section3-div desafios-section2-div sobre-div">
                <h4>How it Works</h4><br>

                <h4>💡 Sustainable Tips</h4>
                <p>Check practical and specific tips for Wrocław on recycling, transport, energy saving, and more.</p><br>

                <h4>🎯 Daily Challenges</h4>
                <p>Complete small sustainable actions. Your progress is saved locally in the browser.</p><br>

                <h4>📍 Local Map</h4>
                <p>Find selective collection points (PSZOK) and local and organic product markets in Wrocław.</p><br>
            </div>

            <div class="section3-div desafios-section2-div sobre-div last-div">
              <div>
                <p class="final-text">Together, we can make Wrocław a greener and more sustainable city! 🌱</p>
              </div>
            </div>

          </section>
    `,
  },
];

export const ecoHints = [
  {
    hint: "If all people recycled, we could reduce CO2 emissions by up to 700 million tons per year.",
  },
  {
    hint: "Turn off lights when leaving a room — it can cut household energy use by up to 10%.",
  },
  {
    hint: "Use a reusable water bottle to save up to 1,500 plastic bottles per person annually.",
  },
  {
    hint: "Planting a single tree can absorb around 48 pounds of CO2 every year.",
  },
  {
    hint: "Switch to LED bulbs — they use 75% less energy and last 25 times longer than incandescent bulbs.",
  },
  {
    hint: "Unplug chargers and electronics when not in use to avoid ‘phantom’ energy loss.",
  },
  {
    hint: "Try a meat-free day once a week — it can reduce your carbon footprint by 2.5 tons per year.",
  },
  {
    hint: "Use public transportation or carpool to reduce CO2 emissions and traffic congestion.",
  },
  {
    hint: "Composting food scraps reduces landfill waste and produces natural fertilizer.",
  },
  {
    hint: "Buy local and seasonal produce to cut transportation emissions and support nearby farmers.",
  },
  {
    hint: "Use cloth bags instead of plastic — one reusable bag can replace hundreds of disposables each year.",
  },
  {
    hint: "Collect rainwater for watering plants and gardens instead of using tap water.",
  },
  {
    hint: "Air-dry clothes when possible — it saves energy and makes them last longer.",
  },
  {
    hint: "Fix leaky faucets — one drip per second can waste over 3,000 gallons of water annually.",
  },
  {
    hint: "Donate or repair old electronics instead of throwing them away to reduce e-waste.",
  },
  {
    hint: "Take shorter showers — reducing by just 2 minutes saves up to 10 gallons of water.",
  },
  {
    hint: "Support renewable energy providers or install solar panels if possible.",
  },
  {
    hint: "Reduce paper usage by going digital with bills, notes, and documents.",
  },
  {
    hint: "Recycle batteries properly — they contain toxic materials harmful to the environment.",
  },
  {
    hint: "Avoid fast fashion — choose quality clothes that last longer and have lower environmental impact.",
  },
  {
    hint: "Use natural cleaning products to reduce water pollution and indoor toxins.",
  },
  {
    hint: "Insulate your home to save energy and lower heating/cooling costs.",
  },
  {
    hint: "Buy second-hand furniture or clothes to extend product life cycles and reduce waste.",
  },
  {
    hint: "Support brands that use sustainable materials and ethical production practices.",
  },
  {
    hint: "Bike or walk for short trips — it’s healthy and emits zero carbon.",
  },
  {
    hint: "Grow herbs or vegetables at home to reduce packaging waste and food transport emissions.",
  },
  { hint: "Avoid single-use plastics like straws, cutlery, and plates." },
  {
    hint: "Use refill stations for detergents and cleaning products to minimize packaging.",
  },
  { hint: "Reduce food waste — plan meals and use leftovers creatively." },
  { hint: "Join or support a local environmental cleanup initiative." },
  {
    hint: "Educate others — small collective changes create big global impact.",
  },
];

function updateProgress(count) {
  return count;
}
