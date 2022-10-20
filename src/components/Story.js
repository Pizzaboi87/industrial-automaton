import React from "react";

const Story = () => {
    return (
        <div className="story">
          <div className="square">
            <div>
              <img className="owner" src="../images/owner.jpg" title="Aryn Dro Thul - CEO" alt="CEO" />
            </div>
          
            <p>Industrial Automaton was formed over 850 years before the rise of the Empire with the merger of Industrial Intelligence (InInt) and Automata Galactica (AG) Soon after Industrial Automaton became a vastly wealthy company, and vied for control of the droid market with fellow manufacturing giant Cybot Galactica. These rival companies were known as the "Big Two" of droid production. IA was known for its high-precision merchandise and deep discounts, and was ruthless enough to survive during the reign of the Galactic Empire. The company was also one of the first Contributing Sponsors of the Corporate Sector Authority. IA maintained factories in many locations, including Rordis City on Nubia.</p>
          </div>

          <p>Industrial Automaton came to monopolize the droid market through production of its most popular creation; the R-series astromech droids. While early models were deemed a critical failure, IA's R2-series astro-droid became beloved across the galaxy. The success of the R2 led to further R-series models, including the R4 units often used as navigators by Jedi starfighter pilots, and, during the era of the New Republic, the advanced R7 and R8 models. While these designs proved successful, others were not so well received; Industrial Automaton was forced to cancel production of its R5-series droids after poor sales, and later limited the warranty on astromech booster rockets after a series of injuries caused by falling droids.</p>

          <figure>
            <iframe title="r2d2" className="video" width="560" height="315" src="https://www.youtube.com/embed/-jr4GWlPZhc?start=223&amp;end=346" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              <figcaption>Learn more from our product video!
            </figcaption>
          </figure>

          <p>Despite these minor setbacks, Industrial Automaton remained a constant presence in the droid market, thanks not only to its astromech designs, but also to the rest of its varied production line. Industrial Automaton created protocol droids such as the LOM-series and the SE4 servant droid, labor droids including ASPs and FLR Loggers, and security droids in the form of Mark IVs and Hound-W2 SPD units. In addition to its droids designs, IA produced a number of automated devices, including targeting computers, that were powered by droid brains.</p>

          <p>Prior to the Dark Nest Crisis, Industrial Automaton produced the R9-series astromech, though during the conflict, the company was purchased by Bornaryn Trading. Learning from the positive and negative experiences of the previous owner, as well as adding our own knowledge, we are confident that our products will continue to be a valuable part of the galaxy. Because we not just make droids. We make <em>Machines For The Future!</em></p>

          <p className="ceo">Aryn Dro Thul - CEO</p>
        </div>
    )
}

export default Story;