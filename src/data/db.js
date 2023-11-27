import NasGor from "../assets/images/nasgor-food.svg";
import SeafoodPasta from "../assets/images/pastaUdang-food.svg";
import CurryClams from "../assets/images/kerang-food.svg";
import Salad from "../assets/images/salad-food.svg";
import CurryFish from "../assets/images/fish-food.svg";
import SyrupMarjan from "../assets/images/syrup-drink.svg";
import FruitJuice from "../assets/images/jusBuah-drink.svg";
import CocaCola from "../assets/images/cocktail-drink.svg";
import CappucinoCoffee from "../assets/images/coffee-drink.svg";
import EsTeh from "../assets/images/esteh-drink.svg";

export const dataMenu = {
  data: {
    results: [
      {
        id: 1,
        image: NasGor,
        title: "Nasi Gorang Gila",
        description:
          "A signature flavorful fried rice loaded with a medley of ingredients that gives it a reddish-orange hue and intense heat. It starts with rice stir-fried in hot oil with diced onions, garlic, scallions, red and green chilies, then mixed with an umami-rich shrimp paste, sweet soy sauce, topped with shredded omelet ribbons. Finally garnished with optional fresh cucumber slices, tomato wedges, crispy crackers, and a drizzle of piquant sambal chili paste for that signature “crazy” spicy kick.",
        price: 15000,
        category: "food",
      },

      {
        id: 2,
        image: CappucinoCoffee,
        title: "Cappucino Coffee",
        description:
          "A warm, comforting coffee drink with rich milky foam. Espresso shots extracted from darkly roasted Arabica beans form the base, frothed together with steamed milk in equal ratio so flavors shine through. Topped with a light dusting of cinnamon or cocoa powder. Enjoyed in the morning or as an afternoon pick-me-up. Variations use chocolate syrup or spices like cardamom, creating refreshing flavor combinations not found elsewhere.",
        price: 35000,
        category: "drink",
      },
      {
        id: 3,
        image: CurryClams,
        title: "Curry Clams",
        description:
          "A delightful Malay-inspired gulai bursting with the sweet, briny flavors of fresh cockles. It starts by stir-frying a fragrant base of shallots, garlic, turmeric, ginger, lemongrass and galangal. Coconut milk is then poured into the spice mix and stewed until the flavors infuse fully. Kaffir lime leaves add zesty aroma as the broth gently simmers. Finally, cockles are added and cooked briefly till just opened. Ladled steaming hot over rice, it is heavenly comfort food.",
        price: 50000,
        category: "food",
      },
      {
        id: 4,
        image: Salad,
        title: "Salad",
        description:
          "A light, healthy and versatile dish consisting of mixed vegetables like cucumbers, cherry tomatoes, shredded cabbage, lettuce or other greens topped with dressings like thousand island, ranch or vinaigrette. Crisp vegetables provide refreshing crunch and texture contrast, balanced by salty dressings, cheese or meat sides like grilled chicken or steak. An easy way to increase vegetable intake given its variety and customizations possible.",
        price: 25000,
        category: "food",
      },
      {
        id: 5,
        image: SyrupMarjan,
        title: "Syrup Marjan",
        description:
          "A thick crimson-red concentrated syrup produced through reduction of fresh pomegranate juice with sugar. Valued for its beautiful color, sweet-tart taste and antioxidant benefits. Often drizzled over shaved ice desserts, used as topping over chilled sago pearls, added to chilled fruit juices, or mixed into milkshakes and smoothies. The bright pinkish red tones and sweet-sour flavor provides visual appeal and exciting taste contrast in various desserts and beverages.",
        price: 15000,
        category: "drink",
      },
      {
        id: 6,
        image: CurryFish,
        title: "Curry Fish",
        description:
          "This traditional Indonesian fish curry starts with fresh chunks of reef fish like grouper or snapper simmered in a rich, intricately-spiced coconut milk broth. The golden curry is first bloomed with aromatics like lemongrass, kaffir lime leaves, turmeric, garlic and shallots to release its exotic fragrance. Chili, coriander, ginger, and galangal are also added for layers of flavor. Vegetables like tomato, green chili peppers, and sometimes potatoes are common inclusions. The fish is gently cooked until just tender before adding roasted coconut milk. Best enjoyed with a side of steamed rice.",
        price: 85000,
        category: "food",
      },
      {
        id: 7,
        image: FruitJuice,
        title: "Fruit Juice",
        description:
          "Chilled, sweetened fruit juices are made by liquefying and straining the pulp of fruits like orange, watermelon or mango mixed with ice water or milk. Other recipes include avocado, starfruit, jackfruit or pineapple juice mixed with syrups like palm sugar or rose syrup. They provide the perfect way to cool down in hot weather while getting vitamins from raw blended fruits. Most street vendors press and strain juices on order from fresh produce for maximum nutrition and flavors.",
        price: 10000,
        category: "drink",
      },
      {
        id: 8,
        image: CocaCola,
        title: "Coca Cola",
        description:
          "The classic carbonated cola soft drink loved globally, best enjoyed ice-cold. It starts with carbonated water, combined with a top secret recipe including caramel color, natural plant extracts, phosphoric acid for tang, lime-leaf oil compounds, vanilla, orange, lemon, nutmeg, coriander and neroli flavors, cinnamon, cloves and a high dose of caffeine. This combination of flavors creates a balanced, sweet, slightly spiced soda with distinctive fizzy effervescence and uplifting caffeine kick that is instantly recognizable from the first sip.",
        price: 8000,
        category: "drink",
      },
      {
        id: 9,
        image: EsTeh,
        title: "Es Teh",
        description:
          "A thirst-quenching drink made by first decocting CTC black tea leaves to extract deep, rich flavor and dark caramel notes. Sweetened hot tea concentrate is then chilled over ice cubes in tall glasses to make a refreshing iced tea. Condensed or evaporated milk are sometimes swirled in for added creaminess. Mint leaves, sliced lemon, or fruit purees can also be added as delicious variations to uplift this classic Indonesian drink.",
        price: 5000,
        category: "drink",
      },
      {
        id: 10,
        image: SeafoodPasta,
        title: "Shrimp Pasta",
        description:
          "A tasty fusion of Italian pasta combined with Asian wok-fried shrimp sauce. Cooked linguine or spaghetti is tossed with a vibrant stir-fry of plump shrimp, garlic, onion and mushrooms, all enveloped in a rich tomato and vegetable sauce. Fresh parsley adds a final flourish of flavor. It brings the best of both continents onto one plate for a satisfying and unique meal.",
        price: 30000,
        category: "food",
      },
    ],
  },
};

export const dataUser = {
  data: {
    results: [
      {
        id: 1,
        fullname: "Medhurst Smitham",
        position: "Help Desk Operator",
        image: "https://robohash.org/hicveldicta.png",
        comment:
          "The pomegranate syrup we tried was pure bottled ruby red ambrosia! Spooning some over our mountain of fluffy shaved ice already produced such a stunning dessert. But mixed into drinks or drizzled over other sweets, it added gorgeous hues and sweet-tart excitement that dazzled our tastebuds. We're hooked and can't wait to try it in more items!",
      },
      {
        id: 2,
        fullname: "Sheldon Quigley",
        position: "Senior Cost Accountant",
        image: "https://robohash.org/doloremquesintcorrupti.png",
        comment:
          "It may be thousands of miles from Italy, but the cappuccino here could give those premier Italian coffeehouses a run for their money! Frothed to a luxurious foam, the smooth milky coffee topped with cocoa powder was the perfect mid-day indulgence with friends. Rich, comforting, slightly sweet and impossible to resist.",
      },
      {
        id: 3,
        fullname: "Terrill Hills",
        position: "Mechanical System Engineer",
        image: "https://robohash.org/consequunturautconsequatur.png",
        comment:
          "The salad offered a lively medley of garden crisp veggies, juicy cherry tomatoes and tangy dressings, allowing us to taste produce at its freshest. We loved customizing each salad bowl with selected greens, meat and dressings for a perfectly personalized meal. Healthy eating never felt or tasted this good! We'll be back.",
      },
      {
        id: 4,
        fullname: "Miles Cumerata",
        position: "Designer",
        image: "https://robohash.org/facilisdignissimosdolore.png",
        comment:
          "The iced tea quenched my thirst instantly while rejuvenating my senses with its aromatic tea flavors. Sweetened with a touch of condensed milk and a slice of lemon, it proved the perfect afternoon refresher. I could feel a slight caffeine lift yet it was still smooth enough to slowly savor.",
      },
      {
        id: 5,
        fullname: "Mavis Schultz",
        position: "Web Developer",
        image: "https://robohash.org/adverovelit.png",
        comment:
          "What captured me was the kaleidoscopic colors and flavors of the fruit juices. We tried orange, mango, avocado and my favorite - the green medley of melon, apple and spinach. So pulpy and refreshing! You can evidently taste fruits harvested at ripeness. My only complaint is that the glasses finished too fast!",
      },
      {
        id: 6,
        fullname: "Alison Reichert",
        position: "Civil Engineer",
        image: "https://robohash.org/laboriosamfacilisrem.png",
        comment:
          "Ice-cold Coke just hits different here in its classic hourglass bottle serving. The fizziness and effervescence is unparalleled, gently tickling the nose while the first sip already evokes smiles and nostalgia. Paired perfectly with the local dishes, the sweet caramel flavors balance the meal's heat and spice beautifully. An iconic beverage just never gets old!",
      },
      {
        id: 7,
        fullname: "Oleta Abbot",
        position: "Sales Associate",
        image: "https://robohash.org/cupiditatererumquos.png",
        comment:
          "Creamy homestyle pasta meets smoky Asian wok flavors in this East-meets-West shrimp pasta fusion. Al dente pasta is tossed in a moreish garlic, shrimp and mushroom sauce that lingers long after the last strand is swallowed. I think the dash of parsley brings the dish together beautifully. Carbs never tasted this satisfyingly good! Molto bene!",
      },
      {
        id: 8,
        fullname: "Ewell Mueller",
        position: "Clinical Specialist",
        image: "https://robohash.org/quiaharumsapiente.png",
        comment:
          "Whoa! True to its name, this crazy fried rice totally blew my senses with its explosion of flavors. The rice is first infused with a savory shrimp paste before being fried with a myriad of spices and herbs. I broke a sweat from the enormous heat, but kept going back for more. It was just so addictive! The cool cucumber slices balanced out the burning tongue. 5 blazing stars 🌶️🌶️🌶️🌶️🌶️",
      },
      {
        id: 9,
        fullname: "Demetrius Corkery",
        position: "Community Outreach",
        image: "https://robohash.org/excepturiiuremolestiae.png",
        comment:
          "The cockle curry struck a perfect balance between the briny seafood sweetness and creamy coconut-milk based gravy. Hints of kaffir lime, lemongrass and garlic shone through the well balanced flavors. You can taste the freshness of every ingredient. I finished the entire plate greedily with steamed rice despite initial plans to just sample it. An amazing discovery!",
      },
      {
        id: 10,
        fullname: "Eleanora Price",
        position: "Software Enginner",
        image: "https://robohash.org/aliquamcumqueiure.png",
        comment:
          "The fish gulai curry was an incredibly rich and sublime experience - complex layers of flavors that mingled superbly with the tender fish chunks and veggies. You can tell high quality spices were used by the curry's beautiful aroma. Expertly cooked, the fish flakes apart easily. I relished every morsel with the rice, mopping up the last drops of curry with satisfaction. Worth every penny for this royal dining experience!",
      },
    ],
  },
};
