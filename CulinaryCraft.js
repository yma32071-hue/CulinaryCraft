// Sandboxels Mod: Culinary Craft Update (Delayed Load Fix)
window.addEventListener('load', function() {
    if (window.elements) {
        
        // 1. MEAT SYSTEM
        elements.raw_beef = {
            color: "#b03a2e",
            behavior: behaviors.SOLID,
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
            behavior: behaviors.SOLID,
            category: "food",
            state: "solid",
            density: 1040,
            tempHigh: 400,
            stateHigh: "ash"
        };

        elements.frozen_meat = {
            color: "#8cbaaa",
            behavior: behaviors.SOLID,
            category: "food",
            state: "solid",
            density: 1000,
            tempHigh: 0,
            stateHigh: "raw_beef"
        };

        // 2. CHOCOLATE MECHANICS
        elements.chocolate_bar = {
            color: "#4a2711",
            behavior: behaviors.SOLID,
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

        // 3. PASTA & RAMEN REACTION CHAIN
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
            behavior: behaviors.SOLID,
            category: "food",
            state: "solid",
            density: 1050,
            tempHigh: 250,
            stateHigh: "ash"
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
            behavior: behaviors.SOLID,
            category: "food",
            state: "solid",
            density: 600,
            tempHigh: 280,
            stateHigh: "ash"
        };

        // Force Sandboxels to rebuild the UI menus to show the new items
        if (typeof updateAllElementS === "function") updateAllElementS();
    }
});