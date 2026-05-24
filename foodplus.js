// Sandboxels Mod: Culinary Craft (Crash-Proof Version)
try {
    // Safely borrow physics behaviors from existing vanilla elements
    var liquidPhysics = elements.water ? elements.water.behavior : null;
    var powderPhysics = elements.sand ? elements.sand.behavior : null;

    // 1. MEAT SYSTEM
    elements.raw_beef = {
        color: "#b03a2e",
        category: "food",
        state: "solid",
        density: 1060,
        tempHigh: 140,
        stateHigh: "cooked_steak",
        tempLow: -18,
        stateLow: "frozen_meat"
    };

    elements.cooked_steak = {
        color: "#5c2818",
        category: "food",
        state: "solid",
        density: 1040,
        tempHigh: 400,
        stateHigh: "ash"
    };

    elements.frozen_meat = {
        color: "#8cbaaa",
        category: "food",
        state: "solid",
        density: 1000,
        tempHigh: 0,
        stateHigh: "raw_beef"
    };

    // 2. NEW CHOCOLATE VARIANT
    elements.chocolate_bar = {
        color: "#4a2711",
        category: "food",
        state: "solid",
        density: 1300,
        tempHigh: 42,
        stateHigh: "liquid_chocolate"
    };

    elements.liquid_chocolate = {
        color: "#5c3317",
        behavior: liquidPhysics,
        category: "food",
        state: "liquid",
        density: 1200,
        tempLow: 18,
        stateLow: "chocolate_bar",
        tempHigh: 220,
        stateHigh: "ash"
    };

    // 3. PASTA & RAMEN
    elements.raw_noodles = {
        color: "#f7dc6f",
        behavior: powderPhysics,
        category: "food",
        state: "solid",
        density: 1100,
        reactions: {
            "water": { elem1: "cooked_noodles", elem2: null },
            "broth": { elem1: "ramen_soup", elem2: "ramen_soup" }
        }
    };

    elements.cooked_noodles = {
        color: "#fcf3cf",
        category: "food",
        state: "solid",
        density: 1050,
        tempHigh: 250,
        stateHigh: "ash"
    };

    elements.broth = {
        color: "#d4ac0d",
        behavior: liquidPhysics,
        category: "food",
        state: "liquid",
        density: 1010,
        tempHigh: 100,
        stateHigh: "steam"
    };

    elements.ramen_soup = {
        color: "#9a7d0a",
        behavior: liquidPhysics,
        category: "food",
        state: "liquid",
        density: 1030,
        tempHigh: 100,
        stateHigh: "steam"
    };

    // 4. BREAKFAST & SAUCES
    elements.pancake_batter = {
        color: "#fef9e7",
        behavior: liquidPhysics,
        category: "food",
        state: "liquid",
        density: 1150,
        tempHigh: 95,
        stateHigh: "pancake"
    };

    elements.pancake = {
        color: "#e59866",
        category: "food",
        state: "solid",
        density: 600,
        tempHigh: 280,
        stateHigh: "ash"
    };

    elements.tomato_sauce = {
        color: "#922b21",
        behavior: liquidPhysics,
        category: "food",
        state: "liquid",
        density: 1050,
        tempHigh: 100,
        stateHigh: "steam",
        reactions: {
            "cooked_noodles": { elem1: "spaghetti", elem2: "spaghetti" }
        }
    };

    elements.spaghetti = {
        color: "#cd6155",
        category: "food",
        state: "solid",
        density: 1060,
        tempHigh: 250,
        stateHigh: "ash"
    };

    // Force the game interface to display the items if pasted into console
    if (typeof updateAllElements === "function") {
        updateAllElements();
    }

} catch (error) {
    console.error("Mod failed to load cleanly:", error);
}
