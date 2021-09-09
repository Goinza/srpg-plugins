import { downloadPlugin } from "/js/zipper.js"

document.getElementById("automatic-stats").addEventListener("click", function() {
    let fileName = "Automatic Stats for Enemy Units.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Automatic%20Stats%20for%20Enemy%20Units/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Automatic%20Stats%20for%20Enemy%20Units/enemy-alias.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Automatic%20Stats%20for%20Enemy%20Units/enemy-calculator.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Automatic%20Stats%20for%20Enemy%20Units/enemy-error.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("combat-arts").addEventListener("click", function() {
    let fileName = "Combat Arts.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/ca-command.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/ca-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/ca-error.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/ca-eventcommand.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/ca-menu.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/ca-other.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/ca-window.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Combat%20Art/config.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("custom-window").addEventListener("click", function() {
    let fileName = "Custom Unit Menu Window.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/_config.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/base-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/classtype-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/combatart-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/custom-window.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/growth-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/inventory-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/null-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/races-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/skills-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/spells-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/states-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/stats-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/support-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/traits-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/weapontype-interaction.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Custom%20Unit%20Menu%20Window/z-alias.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("damage-formula").addEventListener("click", function() {
    let fileName = "Damage Formula for Weapons.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Damage%20Formula%20for%20Weapons/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Damage%20Formula%20for%20Weapons/custom-damage.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Damage%20Formula%20for%20Weapons/error-damage.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("enemy-display").addEventListener("click", function() {
    let fileName = "Enemy Display.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Enemy%20Range%20Display/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Enemy%20Range%20Display/config-range.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Enemy%20Range%20Display/enemy-range-mark.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Enemy%20Range%20Display/enemy-range-object.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Enemy%20Range%20Display/enemy-range-recolor.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("gba-formula").addEventListener("click", function() {
    let fileName = "GBA Battle Formula.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/FE%20GBA%20Battle%20Formula/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/FE%20GBA%20Battle%20Formula/exp-formula.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/FE%20GBA%20Battle%20Formula/fegba-formula.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/FE%20GBA%20Battle%20Formula/formula-settings.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("hp-cost").addEventListener("click", function() {
    let fileName = "HP Cost for Weapons and Items.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/HP%20Cost%20for%20Weapons%20and%20Items/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/HP%20Cost%20for%20Weapons%20and%20Items/error-hpcost.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/HP%20Cost%20for%20Weapons%20and%20Items/hpcost-alias.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/HP%20Cost%20for%20Weapons%20and%20Items/hpcost-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/HP%20Cost%20for%20Weapons%20and%20Items/hpcost-ui.js"))    
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("hybrid-weapon").addEventListener("click", function() {
    let fileName = "Hybrid Weapons.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Hybrid%20Weapons/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Hybrid%20Weapons/hybrid-alias.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Hybrid%20Weapons/hybrid-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Hybrid%20Weapons/hybrid-error.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("class-skill").addEventListener("click", function() {
    let fileName = "Learnable Skills by Class"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Learnable%20Skills%20by%20Class/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Learnable%20Skills%20by%20Class/class-skill-alias.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Learnable%20Skills%20by%20Class/error-skill.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Learnable%20Skills%20by%20Class/skill-granter.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("neutral-faction").addEventListener("click", function() {
    let fileName = "Neutral Faction.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/%24Example%20assets.zip"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/_settings.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/eventcommand-neutralaffiliation.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/filter-control-calls.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/filter-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-blockers.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-charchip.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-constants.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-error.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-motion.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-music.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-turn.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/neutral-ui.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/objective-window.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/player-to-neutral-calls.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/turn-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Neutral%20Faction/unitmenu-cycling.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("range-modifiers").addEventListener("click", function() {
    let fileName = "Range Modifiers.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Range%20Modifiers/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Range%20Modifiers/range-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Range%20Modifiers/range-errors.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Range%20Modifiers/range-modifiers.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("nerfed-brave").addEventListener("click", function() {
    let fileName = "Restricted Weapon Attack Count.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Restricted%20Weapon%20Attack%20Count/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Restricted%20Weapon%20Attack%20Count/nerfed-brave.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("skills-pack").addEventListener("click", function() {
    let fileName = "Skills Pack.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/buff-staff.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/critical-factor.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/extra-healing.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/live-to-serve.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/skills-error.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/unitcommand-skills.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Skills%20Pack/wary-fighter.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("traits").addEventListener("click", function() {
    let fileName = "Traits System.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/config-traits.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/trait-alias.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/trait-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/trait-error.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/trait-eventcommand.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/trait-item.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Trait%20System/trait-window.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("weapon-ranks").addEventListener("click", function() {
    let fileName = "Weapon Ranks System.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapon%20Ranks/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapon%20Ranks/alias-functions.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapon%20Ranks/rank-config-options.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapon%20Ranks/ranks-parameters.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapon%20Ranks/weapon-rank-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapon%20Ranks/weapon-rank-error.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapon%20Ranks/window-weapon-ranks.js"))
    downloadPlugin(fileName, filesToZip)
})

document.getElementById("original-data").addEventListener("click", function() {
    let fileName = "Weapons and Items as Original Data.zip"
    let filesToZip = []
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/%24readme.txt"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/_config.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/ballista-alias.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/ballista-command.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/ballista-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/error-skill.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/magic-alias.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/magic-control.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/magic-eventcommand.js"))
    filesToZip.push(fetch("https://raw.githubusercontent.com/Goinza/Plugins-for-SRPG-Studio/master/Weapons%20and%20Items%20as%20Original%20Data/magic-window.js"))
    downloadPlugin(fileName, filesToZip)
})