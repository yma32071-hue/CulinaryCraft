elements.baby_milk_powder = {
    color: "#b5b0a3",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1|M2",
    ],
    category: "food",
    desc: "Formula powder. Mix with water to make fresh milk.",
    tempHigh: 150,
    stateHigh: "ash",
    reactions: {
        "water": { elem1: "milk", elem2: null }
    }
},
elements.strawberry_powder = {
    color: "#ff6b8b",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1|M2",
    ],
    category: "food",
    desc: "Sweet pink powder used to flavor milk.",
    tempHigh: 140,
    stateHigh: "ash",
    reactions: {
        "milk": { elem1: "strawberry_milk", elem2: null }
    }
},
elements.strawberry_milk = {
    color: "#ffb3c1",
    behavior: [
        "XX|XX|XX",
        "M2|XX|M2",
        "M1|M1|M1",
    ],
    category: "food",
    desc: "Delicious, creamy strawberry milk!",
    tempHigh: 100,
    stateHigh: "steam",
    viscosity: 3
},
elements.boba_pearls = {
    color: "#2b1d12",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M2|M1|M2",
    ],
    category: "food",
    desc: "Chewy tapioca pearls.",
    tempHigh: 200,
    stateHigh: "ash",
    reactions: {
        "milk": { elem1: "boba_milk_tea", elem2: null },
        "strawberry_milk": { elem1: "boba_milk_tea", elem2: null }
    }
},
elements.boba_milk_tea = {
    color: "#cc9966",
    behavior: [
        "XX|XX|XX",
        "M2|XX|M2",
        "M1|M1|M1",
    ],
    category: "food",
    desc: "Sweet milk tea mixed with boba.",
    tempHigh: 100,
    stateHigh: "steam"
},
elements.cake_batter = {
    color: "#f5e6ca",
    behavior: [
        "XX|XX|XX",
        "M2|XX|M2",
        "M1|M1|M1",
    ],
    category: "food",
    desc: "Sweet cake batter. Bake it with heat!",
    viscosity: 80, 
    tempHigh: 110,
    stateHigh: "baked_cake" 
},
elements.baked_cake = {
    color: "#d4a373",
    behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "XX|XX|XX",
    ],
    category: "food", 
    desc: "A freshly baked, fluffy sponge cake.",
    tempHigh: 200,
    stateHigh: "ash",
    burn: 10,
    burnTime: 30
}
