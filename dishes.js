// Shared menu data + dish illustrations, used by index.html (iPad) and print.html (laminate).
const DISHES = [
  {
    id: "gallo-pinto",
    name: "Gallo Pinto",
    sub: "Rice & red beans, fried together",
    tag: "Plato nacional",
    tagEn: "National dish",
    meta: ["Savory", "Vegetarian", "Breakfast staple"],
    description:
      "Nicaragua's national dish: white rice and small red beans fried together with onion, sweet pepper and garlic until every grain of rice turns a toasty reddish-brown. The beans' cooking broth is what gives it its color and flavor. It is eaten morning, noon and night, usually with fried sweet plantains (maduros), a fried egg, fresh cuajada cheese and a warm corn tortilla.",
    culture: [
      "The name means \"spotted rooster\", after the speckled look of the beans scattered through the rice. In Nicaragua it is made with red beans, which sets it apart from versions elsewhere in Central America.",
      "Gallo pinto is on the table in almost every Nicaraguan home every single day, rich or poor, city or countryside. Because it is cheap, filling and made from two crops grown all over the country, it has become a symbol of national identity: a \"real nica\" grows up on gallo pinto.",
      "Neighbouring Costa Rica also claims the dish, and the friendly rivalry over who made it first is a running joke between the two countries. Both nations have even cooked giant record-breaking pots of it to prove their claim."
    ],
    recipe: {
      serves: "4–6",
      time: "25 min",
      ingredients: [
        "2 cups cooked white rice (day-old rice works best)",
        "1½ cups cooked small red beans, plus ½ cup of their broth",
        "1 small onion, finely diced",
        "½ sweet (bell) pepper, finely diced",
        "2 cloves garlic, minced",
        "2–3 tbsp vegetable oil",
        "Salt to taste"
      ],
      steps: [
        "Heat the oil in a large frying pan over medium heat. Fry the onion, sweet pepper and garlic until soft and fragrant, about 3 minutes.",
        "Add the beans with their broth. Fry, stirring, until most of the liquid has cooked down and the oil turns reddish, about 5 minutes.",
        "Add the cold rice and fold it into the beans, breaking up any clumps.",
        "Keep frying and turning for 5–8 minutes until the rice has absorbed the color and some bits get lightly crispy. Season with salt.",
        "Serve hot with maduros, a fried egg, cuajada cheese or a tortilla."
      ]
    }
  },
  {
    id: "salpicon",
    name: "Salpicón",
    sub: "Minced beef with sour orange & herbs",
    tag: "Comida casera",
    tagEn: "Home cooking",
    meta: ["Savory", "Served cool", "Family meal"],
    description:
      "A fresh, zesty dish of beef that is boiled until tender, chopped very finely, then tossed with diced onion, sweet pepper and herbs and soaked in the juice of sour orange (naranja agria) or lime. It is served cool or at room temperature, usually alongside white rice and crispy fried green plantain slices (tajadas).",
    culture: [
      "Salpicón is classic Nicaraguan home cooking. It grew out of the habit of making a big pot of beef soup and then using the cooked meat for a second meal, so nothing goes to waste.",
      "Because it is served cool and stays fresh in the tropical heat, it is a favourite for lunches, family get-togethers, birthdays and fiestas, where it can be made ahead and shared from a big bowl.",
      "The sour orange used to season it is a tree grown in many Nicaraguan backyards, and its sharp, bright juice is one of the signature flavors of the country's cooking."
    ],
    recipe: {
      serves: "6",
      time: "1 hr 30 min",
      ingredients: [
        "1 lb beef (flank, brisket or round)",
        "1 large onion: half for boiling, half finely diced",
        "3 cloves garlic",
        "1 sweet (bell) pepper, finely diced",
        "A handful of fresh cilantro or mint (hierbabuena), chopped",
        "Juice of 2 sour oranges (or 3 limes)",
        "Salt and pepper to taste"
      ],
      steps: [
        "Put the beef in a pot with half the onion, the garlic and a big pinch of salt. Cover with water and simmer for about 1 hour, until very tender.",
        "Remove the beef (save the broth for soup) and let it cool completely.",
        "Chop the beef into very small pieces, or pulse it briefly in a food processor until finely minced.",
        "Mix the beef with the diced onion, sweet pepper and herbs.",
        "Pour the sour orange or lime juice over it, season with salt and pepper, and stir well. Let it rest 30 minutes so the flavors soak in.",
        "Serve cool with white rice and tajadas."
      ]
    }
  },
  {
    id: "pinolillo",
    name: "Pinolillo",
    sub: "Toasted corn & cacao drink",
    tag: "Bebida típica",
    tagEn: "Traditional drink",
    meta: ["Drink", "Served cold", "Corn & cacao"],
    description:
      "A thick, earthy and refreshing drink made from corn and cacao that are toasted and ground into a fine powder with cinnamon and clove. The powder is stirred into cold water or milk and sweetened with sugar. It tastes like a cross between hot chocolate and toasted cornbread, and is traditionally sipped from a jícara, a cup carved from a dried gourd.",
    culture: [
      "Pinolillo is so tied to Nicaragua that Nicaraguans proudly call themselves \"pinoleros\", the people of pinol. You will hear the word in songs, poems and patriotic sayings.",
      "Its roots go back to the Indigenous peoples of the region long before the Spanish arrived: the word comes from the Náhuatl \"pinolli\", meaning ground toasted corn, and cacao was so valuable it was once used as money.",
      "It is served in homes, at markets and at every fiesta, and drinking it from a traditional jícara connects each glass to centuries of Nicaraguan history."
    ],
    recipe: {
      serves: "About 20 glasses of powder",
      time: "40 min",
      ingredients: [
        "1 lb dried white corn kernels (maíz)",
        "¼ lb raw cacao beans (or 3 tbsp unsweetened cocoa powder)",
        "1 cinnamon stick",
        "4 whole cloves",
        "To serve: cold water or milk, sugar and ice"
      ],
      steps: [
        "Toast the corn in a dry, heavy pan over medium heat, stirring constantly, until golden-brown and fragrant, about 15–20 minutes.",
        "Toast the cacao beans in the same way for about 10 minutes, then peel off their thin shells.",
        "Briefly toast the cinnamon and cloves for 1 minute.",
        "Let everything cool, then grind it all together into a fine powder (a strong blender or grain mill works). Store in a sealed jar.",
        "To serve: stir 2–3 tablespoons of powder into 1 cup of cold water or milk, sweeten with sugar and add ice. Stir again before each sip."
      ]
    }
  },
  {
    id: "cajetas",
    name: "Cajetas de Coco",
    sub: "Sweet coconut candies",
    tag: "Dulce tradicional",
    tagEn: "Traditional sweet",
    meta: ["Sweet", "Dessert", "Coconut"],
    description:
      "Chewy, golden coconut sweets made by slowly cooking freshly grated coconut with sugar, milk and a stick of cinnamon until it turns thick and sticky. The mixture is then rolled into small balls or cut into squares. They are sweet, a little caramel-like, and full of real coconut texture.",
    culture: [
      "Cajetas belong to Nicaragua's long tradition of homemade sweets (dulces típicos). Towns near Masaya, especially Diriomo, are famous for families who have made and sold them for generations.",
      "They are a must at fiestas patronales (patron saint festivals), during Semana Santa and at La Purísima in December, when families share sweets with neighbours who visit to sing at their altars.",
      "Coconut grows all along Nicaragua's Caribbean coast, where it flavours everything from rice to bread, so cajetas de coco bring together ingredients and traditions from both sides of the country."
    ],
    recipe: {
      serves: "About 24 pieces",
      time: "45 min",
      ingredients: [
        "2 cups freshly grated coconut (or unsweetened shredded)",
        "1½ cups sugar (or grated rapadura / brown sugar)",
        "1 cup milk",
        "1 cinnamon stick",
        "A pinch of salt"
      ],
      steps: [
        "Put the coconut, sugar, milk, cinnamon and salt in a heavy pot over medium heat.",
        "Cook, stirring often, as the sugar melts and the mixture bubbles. Lower the heat as it thickens so it does not burn.",
        "Keep stirring for 25–30 minutes until it is thick, golden and pulls away from the sides of the pot in one mass.",
        "Remove the cinnamon stick. Let the mixture cool until you can handle it.",
        "Roll into small balls with lightly oiled hands, or press into a greased pan and cut into squares once set. Let them cool completely before serving."
      ]
    }
  },
  {
    id: "pio-quinto",
    name: "Pío Quinto",
    sub: "Custard-soaked sponge cake (alcohol-free)",
    tag: "Postre navideño",
    tagEn: "Christmas dessert",
    meta: ["Sweet", "Alcohol-free", "Dessert"],
    description:
      "Soft sponge cake soaked in a sweet cinnamon syrup, covered in a thick, creamy custard (manjar) and dusted with ground cinnamon, often with raisins or prunes on top. The traditional syrup is made with rum; ours is the virgin version, using extra vanilla and cinnamon in place of the rum so everyone can enjoy it.",
    culture: [
      "Pío Quinto is Spanish for Pius the Fifth, a 16th-century pope. Nobody is quite sure why the dessert carries his name, and many Nicaraguan families have their own story to explain it.",
      "It is a star of the December holidays, from La Purísima to Christmas and New Year, and is also served at birthdays, weddings and other big family celebrations.",
      "Recipes are handed down from grandmothers, and it is always made a day ahead so the cake can soak up the syrup and custard. Eating it cold from the fridge is part of the tradition."
    ],
    recipe: {
      serves: "12",
      time: "1 hr + 4 hrs chilling",
      ingredients: [
        "1 plain sponge or pound cake (about 9×13 in), sliced",
        "Syrup: 1 cup water, ¾ cup sugar, 1 cinnamon stick, 1 tbsp vanilla extract (in place of rum)",
        "Custard: 4 cups milk, ¾ cup sugar, ⅓ cup cornstarch, 4 egg yolks, 1 cinnamon stick, 1 tsp vanilla, pinch of salt",
        "Topping: ground cinnamon, plus raisins or chopped prunes (optional)"
      ],
      steps: [
        "Syrup: simmer the water, sugar and cinnamon stick for 10 minutes. Take it off the heat, stir in the vanilla and let it cool.",
        "Arrange the cake slices in a deep dish and spoon the syrup evenly over them.",
        "Custard: whisk the cornstarch and egg yolks into 1 cup of the milk. Heat the remaining milk with the sugar, cinnamon stick and salt until steaming.",
        "Whisk the yolk mixture into the hot milk and stir constantly over medium-low heat until thick, 5–8 minutes. Remove the cinnamon stick and stir in the vanilla.",
        "Pour the warm custard over the cake. Sprinkle with ground cinnamon and raisins or prunes.",
        "Cover and chill at least 4 hours, ideally overnight, before serving cold."
      ]
    }
  }
];

// Photo slot: shows images/<id>.jpg once it exists, otherwise a labelled placeholder.
function photo(d) {
  return `<div class="photo"><span>Photo<br>images/${d.id}.jpg</span><img src="images/${d.id}.jpg" alt="${d.name}" decoding="sync" onerror="this.parentNode.classList.add('missing');this.remove()"></div>`;
}

// Spanish tag with its English translation beside it.
function tags(d) {
  return `<span class="tags"><span class="tag">${d.tag}</span><span class="tag en">${d.tagEn}</span></span>`;
}
