let modInfo = {
	name: "The Last Tree",
	author: "Deltatron3",
	pointsName: "Gluons",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (1), // Used for hard resets and new players
	offlineLimit: 2,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.0",
	name: "Literally nothing",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>v0.0</h3><br>
		- Added things.<br>
		- Added stuff.`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	if (hasUpgrade('up', 11)) gain = gain.add(1)
	if (hasUpgrade('charm', 11)) gain = gain.add(1)
	if (hasUpgrade('top', 11)) gain = gain.add(1)
	if (hasUpgrade('charm', 12)) gain = gain.times(2)
	if (hasUpgrade('charm', 14)) gain = gain.times(3)
	if (hasUpgrade('p', 11)) gain = gain.times(2)
	if (hasUpgrade('p', 12)) gain = gain.times(5)
    if (hasUpgrade('up', 12)) gain = gain.times(upgradeEffect('up', 12))
	if (hasUpgrade('charm', 13)) gain = gain.times(upgradeEffect('charm', 13))
	if (hasUpgrade('top', 14)) gain = gain.times(upgradeEffect('top', 14))
	if (hasUpgrade('p', 14)) gain = gain.times(upgradeEffect('p', 14))
	if (hasMilestone('p', 0)) gain = gain.times(milestoneEffect('p', 0))
	if (player.points.gte(1e30)) gain = gain.pow(0.9)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}