addLayer("up", {
    name: "Up Quarks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: -1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#0914e3",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Up Quarks", // Name of prestige currency
    baseResource: "Gluons", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        let mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "u", description: "u: Reset for Up Quarks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    upgrades: {
        11: {
        title: "Up duplications",
        description: "Adds +1 base to Gluon gain",
        cost: new Decimal(2),
        },
        12: {
        title: "Up acceleration",
        description: "Up Quarks boosts gluon gain",
        cost: new Decimal(15),
        effect() {
        return player.points.add(1).pow(0.15)
        },
        },
    },
    layerShown(){return true}
})
addLayer("charm", {
    name: "Charm Quarks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#e81414",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Charm Quarks", // Name of prestige currency
    baseResource: "Gluons", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "c: Reset for Charm Quarks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
     upgrades: {
        11: {
        title: "Charm duplications",
        description: "Adds +1 base to Gluon gain",
        cost: new Decimal(2),
        },
        12: {
        title: "Gluonology",
        description: "Doubles Gluon gain",
        cost: new Decimal(10),
        },
        13: {
        title: "Gluonology²",
        description: "Triples Gluon gain",
        cost: new Decimal(250),
        },
    },
    layerShown(){return true}
})
addLayer("top", {
    name: "Top Quarks", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "Q", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#19e012",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Top Quarks", // Name of prestige currency
    baseResource: "Gluons", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "t", description: "t: Reset for Top Quarks", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
     upgrades: {
        11: {
        title: "Top duplications",
        description: "Adds +1 base to Gluon gain",
        cost: new Decimal(2),
        },
        12: {
        title: "No inflation here",
        description: "Makes Charm Quarks cheaper",
        cost: new Decimal(15),
        },
    },
    layerShown(){return true}
})
addLayer("p", {
    name: "Subatomical Formation", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#9e9e9e",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Particles", // Name of prestige currency
    baseResource: "Gluons", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.75, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "p: Reset for Particles", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true}
})