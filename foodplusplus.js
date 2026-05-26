// Ensure the elements object exists
if (typeof elements === "undefined") {
    var elements = {};
}

// ==========================================
// 1. ELEMENT DEFINITIONS
// ==========================================

// Baby Milk Powder
elements.baby_milk_powder = {
    color: "#b5b0a3",
    behavior: behaviors.POWDER, 
    category: "food",
    desc: "Formula powder. Mix with water to make milk.",
    tempHigh: 150,
    stateHigh: "ash"
};

// Strawberry Powder
elements.strawberry_powder = {
    color: "#ff6b8b",
    behavior: behaviors.POWDER,
    category: "food",
    desc: "Sweet pink powder that flavors liquids.",
    tempHigh: 140,
    stateHigh: "ash"
};

// Strawberry Milk
elements.strawberry_milk = {
    color: "#ffb3c1",
    behavior: behaviors.LIQUID,
    category: "food",
    desc: "Delicious, creamy strawberry milk!",
    tempHigh: 100,
    stateHigh: "steam",
    viscosity: 5
};

// Boba Pearls
elements.boba_pearls = {
    color: "#2b1d12",
    behavior: behaviors.POWDER, 
    category: "food",
    desc: "Chewy tapioca pearls for making bubble tea.",
    tempHigh: 200,
    stateHigh: "ash",
    density: 1100
};

// Boba Milk Tea
elements.boba_milk_tea = {
    color: "#cc9966",
    behavior: behaviors.LIQUID,
    category: "food",
    desc: "Sweet milk tea.",
    tempHigh: 100,
    stateHigh: "steam"
};

// Cake Batter
elements.cake_batter = {
    color: "#f5e6ca",
    behavior: behaviors.LIQUID, // Sluggish liquid behavior
    category: "food",
    desc: "Sweet batter. Heat it up to bake a cake!",
    viscosity: 100,             // Makes it thick and slow like batter
    tempHigh: 110,
    stateHigh: "cake" 
};

// Custom Cake
elements.cake = {
    color: "#d4a373",
    category: "food", // No behavior means it stays solid like a wall/bread
    desc: "A freshly baked, fluffy sponge cake.",
    tempHigh: 200,
    stateHigh: "ash",
    burn: 10,
    burnTime: 30
};


// ==========================================
// 2. MIXING & REACTION RECIPES
// ==========================================

// 1. Baby Milk Powder + Water = Milk
elements.baby_milk_powder.reactions = {
    "water": { elem1: "milk", elem2: null }
};

// 2. Strawberry Powder + Milk = Strawberry Milk
elements.strawberry_powder.reactions = {
    "milk": { elem1: "strawberry_milk", elem2: null }
};

// 3. Boba Pearls + Milk = Boba Milk Tea
elements.boba_pearls.reactions = {
    "milk": { elem1: "boba_milk_tea", elem2: null }
};

// 4. Sugar + Egg = Cake Batter
elements.sugar.reactions = {
    "egg": { elem1: "cake_batter", elem2: null }
};
