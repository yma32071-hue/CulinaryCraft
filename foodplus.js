// Sandboxels Mod: Culinary Craft (Universal Load Fix)
(function culMod() {
    // If the game isn't fully ready yet, wait 100ms and try again
    if (typeof elements === 'undefined' || typeof behaviors === 'undefined') {
        setTimeout(culMod, 100);
        return;
    }

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

    // 2. CHOCOLATE MECHANICS
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
        behavior: behaviors.LIQUID,
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
        behavior: behaviors.POWDER,
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
        behavior: behaviors.LIQUID,
        category: "food",
        state: "liquid",
        density: 1010,
        tempHigh: 100,
        stateHigh: "steam"
    };

    elements.ramen_soup = {
        color: "#9a7d0a",
        behavior: behaviors.LIQUID,
        category: "food",
        state: "liquid",
        density: 1030,
        tempHigh: 100,
        stateHigh: "steam"
    };

    // 4. BREAKFAST & SAUCES
    elements.pancake_batter = {
        color: "#fef9e7",
        behavior: behaviors.LIQUID,
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
        behavior: behaviors.LIQUID,
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

    // Refresh the game user interface so everything displays perfectly
    if (typeof updateAllElements === "function") updateAllElements();
})();