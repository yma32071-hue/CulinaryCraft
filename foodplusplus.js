// foodplusplus.js - CulinaryCraft Sandboxels Mod

// This loader function ensures Sandboxels is 100% ready before injecting your elements
function initFoodPlusPlus() {
    if (typeof elements === "undefined" || typeof behaviors === "undefined") {
        setTimeout(initFoodPlusPlus, 50);
        return;
    }

    // ==========================================
    // 1. CUSTOM ELEMENT DEFINITIONS
    // ==========================================

    // Baby Milk Powder (From your original video)
    elements.baby_milk_powder = {
        color: "#b5b0a3",
        behavior: behaviors.POWDER, 
        category: "food",
        desc: "Formula powder. Mix with water to make fresh milk.",
        tempHigh: 150,
        stateHigh: "ash"
    };

    // Strawberry Powder
    elements.strawberry_powder = {
        color: "#ff6b8b",
        behavior: behaviors.POWDER,
        category: "food",
        desc: "Sweet pink powder used to flavor milk.",
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
        viscosity: 3
    };

    // Boba Pearls
    elements.boba_pearls = {
        color: "#2b1d12",
        behavior: behaviors.POWDER, 
        category: "food",
        desc: "Chewy tapioca pearls.",
        tempHigh: 200,
        stateHigh: "ash"
    };

    // Boba Milk Tea
    elements.boba_milk_tea = {
        color: "#cc9966",
        behavior: behaviors.LIQUID,
        category: "food",
        desc: "Sweet milk tea mixed with boba.",
        tempHigh: 100,
        stateHigh: "steam"
    };

    // Cake Batter
    elements.cake_batter = {
        color: "#f5e6ca",
        behavior: behaviors.LIQUID,
        category: "food",
        desc: "Sweet cake batter. Bake it with heat!",
        viscosity: 80, // Makes it thick and sluggish
        tempHigh: 110,
        stateHigh: "baked_cake" 
    };

    // Baked Cake (Using a unique name to avoid base-game collision)
    elements.baked_cake = {
        color: "#d4a373",
        category: "food", 
        desc: "A freshly baked, fluffy sponge cake.",
        tempHigh: 200,
        stateHigh: "ash",
        burn: 10,
        burnTime: 30
    };

    // ==========================================
    // 2. MIXING & REACTION RECIPES
    // ==========================================

    // Baby Milk Powder + Water = Native Milk
    elements.baby_milk_powder.reactions = {
        "water": { elem1: "milk", elem2: null }
    };

    // Strawberry Powder + Native Milk = Strawberry Milk
    elements.strawberry_powder.reactions = {
        "milk": { elem1: "strawberry_milk", elem2: null }
    };

    // Boba Pearls + Native Milk = Boba Milk Tea
    elements.boba_pearls.reactions = {
        "milk": { elem1: "boba_milk_tea", elem2: null }
    };

    // Native Sugar + Native Egg = Cake Batter
    if (elements.sugar && elements.egg) {
        elements.sugar.reactions = {
            "egg": { elem1: "cake_batter", elem2: null }
        };
    }

    console.log("CulinaryCraft: foodplusplus.js loaded successfully!");
}

// Run the script initialization
initFoodPlusPlus();
