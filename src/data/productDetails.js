const productDetails = [
    {
        id: "modal0",
        title: "R1 Series - Astromech Droid",
        img: "../images/r1_series.jpg",
        price: "Price: 6.000 credit",
        details: [
            <p>A part of the R-series of astromech droids, also known as the R1 reactor drone, is tall compared to later R-units, standing 1.94 meters in height. It moves slowly on a single foot and some, though not all, features a long antenna atop their dome.</p>,

            <p>R1 units have a single red photoreceptor and black, blue, or gray plating. They are so large that they can only be used on the biggest of starships. R1 units were the first droids to be able to communicate in droidspeak, though they were far less personable than later R-units. They were equipped with a pair of arms tipped with manipulators and a holoprojector.</p>
        ]
    },
    {
        id: "modal1",
        title: "R2 Series - Astromech Droid",
        img: "../images/r2_series.jpg",
        price: "Price: 5.000 credit",
        details: [
            <p>R2 series astromech droids, also known as R2 units, are a very popular series of astromech droids produced by Industrial Automaton. They are the most popular line of all the R-series. They stood at around 1 meter in height, sported a distinctive domed head, and were programmed to perform a variety of tasks. The R2 series is a major success for Industrial Automaton, and many later models of astromech were based on the R2 series, though none had the same success.</p>,

            <p>R2-D2 was a notable example of this model. Although the R2 series was used prior to the Clone Wars, they were still considered to be new during the Age of the Empire. According to C1-10P, a C1-series astromech droid, the greatest flaw in R2 units' programming was compassion.</p>
        ]
    },
    {
        id: "modal2",
        title: "R3 Series - Astromech Droid",
        img: "../images/r3_series.jpg",
        price: "Price: 8.000 credit",
        details: [
            <p>The R3-series astromech droid was part of the line of R-series astromech droids manufactured by Industrial Automaton. Thanks to their Intellex V processors, R3 astromechs had faster processing abilities than the more common R2 units. Some R3 series astromechs, such as R3-S1, had transparent domes while others like R3-S6 had an opaque dome. Some R3 units, such as R3-A3, also had conical heads rather than domes.</p>,

            <p>The R3 Astromech unit is an upgraded version of the wildly popular R2 model specifically designed to meet the needs of military groups, public and private. The chassis of the R3 remained unchanged from its predecessor, but its signature transparisteel dome showcased its many improved processing units and extended the range of its sensors. To better serve its intended purposes, the engineers installed a small holdout blaster to help the droid avoid capture.</p>,

            <p>The model also comes with upgraded astronavigation processors that were originally advertised to hold more hyperlane information than any other droid at the time, but most who work with the droids note no major difference. These improvements, however, came at a cost. Several of the mechanical limbs that had made the R2 so popular with mechanics had to be sacrificed. While the droid was not as handy repairing starfighters on the fly, it has found a home on the bridges, navigation, and data analysis stations of frigates and capital ships in all corners of the galaxy.</p>
        ]
    },
    {
        id: "modal3",
        title: "R4 Series - Astromech Droid",
        img: "../images/r4_series.jpg",
        price: "Price: 12.000 credit",
        details: [
            <p>Following the major success of the R2 droid series, Industrial Automaton quickly dominated the droid market, introducing several new astromech droids. Having released the R3 with governments and military in mind, Industrial Automaton designers decided to create the R4 Series specifically for the largely untapped demographic of outer rim pilots. Designed to work in garages, repairing modified speeders and common civilian starcrafts, the R4-series has met with great success since its debut, becoming popular with a variety of organizations and consumers.</p>,

            <p>We have focused on the three most important characteristics a droid needs to be successful in the harsh environments on the Rim: durability, simplicity and affordability. In order to facilitate these requirements, many features found in previous designs were eliminated. Several gadgets, such as a miniature fire extinguisher and display screen, were eliminated to help lower production costs. The R4's computer was designed with a larger amount of space between components, requiring a larger conical dome to house it. Despite the larger head, designers were forced to omit many tools normally found there, and relocate the holo-projector to the top. The R4 units are also impractical for starfighter support purposes as the droid's astrogation buffer can only hold one set of coordinates.</p>,

            <p>Despite the numerous cost cutting measures in its design, the R4 has become a favorite of many consumers due to its durability. It is capable of sustaining a lot of minor damage common in industrial environments that would hamper most other R-series droids. The R4 has also been found to far exceed its expectations for operational span: weather endurance, personality matrix stability, and retention of battery life. Its Intellex VI computer was upgraded from the R3's design and was specially engineered to work with repulsor crafts and commonly available star crafts. Modified R4s remain particularly popular with the Jedi Order, as their durability makes them ideal matches for Jedi missions.</p>
        ]
    },
    {
        id: "modal4",
        title: "R5 Series - Astromech Droid",
        img: "../images/r5_series.jpg",
        price: "Price: 10.000 credit",
        details: [
            <p>R5 units were built to be cheaper than the previously more popular R-series droids. The initial assumption was that customers would prefer "cheap" over "well built". To achieve this reduction of cost, the astromech was redesigned using cheaper, bulkier parts in place of the more miniaturized versions. In many cases programming and items that were deemed superfluous were simply dropped from the unit. Unfortunately, patchwork programming and cheap parts has caused the R5 to be known as a droid plagued with a number of technical glitches and a less-than-stellar personality.</p>,

            <p>As would be expected from a redesign in programming and a reworking of the inner components, the R5 line of astromechs has reduced functionality in some areas when compared to the bulk of the R-series. Most notably the droid has no ability to handle computer operations. Designers hoped that the droid's enhanced ship repair functions would offset this drawback, which for some it has. Additionally, the larger components, especially in the head section of the droid, gives the droid a higher profile and therefore a higher chance of being hit in combat when plugged into a starfighter.</p>,

            <p>Despite their drawbacks, many R5 astromechs saw service during the Clone Wars alongside the other R-series astromechs. As with the more popular R2 series, R5s were plugged into fighter craft to help with repairs and navigating. They also saw service in larger capital ships, though usually in the hangar sections of the craft, taking care of repair and maintenance.</p>,

            <p>Many R5s still see service in the current civil war raging across the galaxy, often being used as repair and maintenance droids. Occasionally a fighter pilot will use an R5 as his primary astromech because he deems the reduced cost to outweigh any potential drawback. Regardless of the usage, the droids are thousands of credits cheaper than the most popular R-series droids, which is what designers were aiming for.</p>
        ]
    },
    {
        id: "modal5",
        title: "R6 Series - Astromech Droid",
        img: "../images/r6_series.jpg",
        price: "Price: 14.000 credit",
        details: [
            <p>The R6 series had many things in common with the older yet still popular R2 series, which goes to show what Industrial Automaton's engineers had in mind. Originally IA planned on releasing their military model that would be made exclusively for FreiTek's E-wing escort starfighter. But as the E-wing project would take some years before fruition IA felt it an opportune time to reach out to civilian buyers once more. With a winning design and eager consumers IA made sure the R6 would sell by giving their shelf models a somewhat auspicious price tag. It was more expensive than the R5 and R4-series, which also had less dynamic goals in mind, but was less expensive than the price of the R2 series upon its original release.</p>,

            <p>In the time before Grand Admiral Thrawn introduced his campaign to retake the galaxy in the name of the Galactic Empire, the R6 was said to be "selling like QuickSnacks." Although R2-series astromech droid had better sales than the R6, the latter still was a profitable model and was competitive in terms of sale with the former.</p>,

            <p>Though the conical-frustum style of the head was like that of the R5 (which might have given consumers a scare at first glance) rather than the classic dome, that was where the similarities ended. The R6 had the same kind of "do it all" attitude in its programming and array of gadgets reminiscent of the veteran R2 units, but with updates to key systems such as its sensor package and processor. The standard R6 could store 12 hyperspace jump coordinates in its astrogation buffer and had many of the tools and compartments that were found lacking on earlier models that were not intended for serious space service. Though the R6 offered little in the way of innovation it supplied the demand left hollow in loyal IA consumers.</p>
        ]
    },
    {
        id: "modal6",
        title: "R7 Series - Astromech Droid",
        img: "../images/r7_series.jpg",
        price: "Price: 11.000 credit",
        details: [
            <p>The R7-series was designed specifically for use with the Rebel Alliance/New Republic E-wing escort starfighter.</p>,

            <p>Development of the R7-series was a corporate secret, occurring during the media blitz that surrounded production of the R6-series astromech droid. The R7 unit featured two fixed, wheeled legs and a third retractable leg, and was heavily shielded against electrical discharges. These droids were primarily used aboard E-wing starfighters, and required significant modification to work effectively with X-wing or Y-wing starfighters. A typical R7 unit could hold up to fifteen hyperspace jump coordinates in its astrogation buffer and survive a near miss from an ion cannon. A pirated version of the R7's advanced droid brain was also incorporated into the Imperial XR-85 tank droid.</p>
        ]
    },
    {
        id: "modal7",
        title: "R8 Series - Astromech Droid",
        img: "../images/r8_series.jpg",
        price: "Price: 12.000 credit",
        details: [
            <p>The R8 was designed to have the piloting power of the R7s without focusing on just the antiquated E-wing, as well as having the usefulness, versatility, and most of all, customizability of the previous R-series droids. The R8 was better with repairs, navigation, and piloting than any other R-series droid, and provided far-superior software customizability. Additionally, in times of emergency, the R8 was capable of piloting small craft (and mid-sized craft if so programmed) with a great deal of skill directly from its astromech socket or while connected to a computer terminal, though dynamic piloting and intuitive thinking was still a stretch. Similarly, to the interest of smugglers, pirates, and others, an R8 was capable of manning the weaponry of smaller ships, with capabilities possibly even matching an organic crew member.</p>,

            <p>Externally, the R8 resembled any R-series droid. In keeping with the "return to their roots" slogan, the R8 head was once again dome shaped, like that of the R2-series. Instead of the metal shell of previous models, the head and body of R8 droids were frosted plasteel, with "gel"-style plasteel coloring for aesthetic purposes.</p>
        ]
    },
    {
        id: "modal8",
        title: "R9 Series - Astromech Droid",
        img: "../images/r9_series.jpg",
        price: "Price: 9.000 credit",
        details: [
            <p>As a part of the R-series of astromech droids, the R9-series is the latest in Industrial Automaton's line of R-series astromech droids and the first created during the rule of the Galactic Federation of Free Alliances. Industrial Automaton's R9-series is similar to its previous R-series models, but R9 droids were notorious for self-enhancing their preservation routines, even if it meant hiding data from their owners - according to the user feedback, now we corrected the issue with this type of droid.</p>,
    
            <p>Pilots in the New Jedi Order used R9-series astromechs as in-flight navigators and mechanics aboard. Jaina Solo flew with an R9 unit named Sneaker in a Jedi StealthX when spying on the secret Corellian fleet during the Second Galactic Civil War and later with one called Rowdy a few years after the war's end.</p>
        ]
    }
]

export default productDetails;