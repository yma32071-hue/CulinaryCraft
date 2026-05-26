// JS Of Sandboxels Mod
const foodCategory = "food";

// ==========================================
// 1. NEW UNIQUE ELEMENT DEFINITIONS
// ==========================================

// Baby Milk Powder (From your video)
elements.baby_milk_powder = {
    color: "#b5b0a3",
    behavior: behaviors.POWDER, 
    category: foodCategory,
    desc: "Formula powder. Mix with water to make native milk.",
    tempHigh: 150,
    stateHigh: "ash",
};

// Strawberry Powder
elements.strawberry_powder = {
    color: "#ff6b8b",
    behavior: behaviors.POWDER,
    category: foodCategory,
    desc: "Sweet pink powder that flavors liquids.",
    tempHigh: 140,
    stateHigh: "ash"
};

// Strawberry Milk (The result of mixing)
elements.strawberry_milk = {
    color: "#ffb3c1",
    behavior: behaviors.LIQUID,
    category: foodCategory,
    desc: "Delicious, creamy strawberry milk!",
    tempHigh: 100,
    stateHigh: "steam",
    viscosity: 1.5
};

// Boba Pearls
elements.boba_pearls = {
    color: "#2b1d12",
    behavior: behaviors.POWDER, // Drops like little balls
    category: foodCategory,
    desc: "Chewy tapioca pearls for making bubble tea.",
    tempHigh: 200,
    stateHigh: "charcoal",
    density: 1100
};

// Boba Milk Tea (The result of mixing)
elements.boba_milk_tea = {
    color: "#cc9966",
    behavior: behaviors.LIQUID,
    category: foodCategory,
    desc: "Sweet milk tea with chewy pearls embedded inside.",
    tempHigh: 100,
    stateHigh: "steam"
};

// Cake Batter
elements.cake_batter = {
    color: "#f5e6ca",
    behavior: behaviors.MUD,
    category: foodCategory,
    desc: "Sweet batter. Heat it up to bake a cake!",
    tempHigh: 110,
    stateHigh: "cake" // Turns into our custom cake element when heated
};

// Custom Cake
elements.cake = {
    color: "#d4a373",
    behavior: behaviors.SUPPORT,
    category: foodCategory,
    desc: "A freshly baked, fluffy sponge cake.",
    tempHigh: 200,
    stateHigh: "ash",
    burn: 10,
    burnTime: 30
};


// ==========================================
// 2. MIXING WITH NATIVE BASE-GAME ELEMENTS
// ==========================================

// 1. Baby Milk Powder + Native Water = Native Milk
elements.baby_milk_powder.reactions = {
    "water": { elem1: "milk", elem2: null }
};

// 2. Strawberry Powder + Native Milk = Strawberry Milk
elements.strawberry_powder.reactions = {
    "milk": { elem1: "strawberry_milk", elem2: null }
};

// 3. Boba Pearls + Native Tea = Boba Milk Tea
elements.boba_pearls.reactions = {
    "tea": { elem1: "boba_milk_tea", elem2: null },
    "milk": { elem1: "boba_milk_tea", elem2: null }
};

// 4. Native Sugar + Native Egg = Cake Batter 
// (This lets you make the batter using vanilla game items!)
elements.sugar.reactions = {
    "egg": { elem1: "cake_batter", elem2: null }
};