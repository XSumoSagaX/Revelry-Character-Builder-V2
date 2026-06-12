const abilities = [
  ["strength", "Strength", "Lifting, heavy weapons, force, endurance under load."],
  ["dexterity", "Dexterity", "Flexibility, nimbleness, speed. Adds 5 ft. movement per point."],
  ["intellect", "Intellect", "General knowledge, learned skills, worldly experience. Adds Expertises."],
  ["willpower", "Willpower", "Determination, constitution, arcane capacity. Adds Stress."],
  ["awareness", "Awareness", "Perception, reading creatures, survival instincts."],
  ["charisma", "Charisma", "Charm, persuasion, deception, presence."]
];

const heritages = [
  { name: "Cobble", tags: "Elemental, speaks Tremor", summary: "Stone-born protectors with terrain knowledge and natural armor.", features: ["Born from the Earth: Expertise in Mountainous Terrain, Forested Terrain, and Cobble Culture; gain 1 Armor Slot.", "In Their Element: while stationary, you are indistinguishable from rock."] },
  { name: "Tempest", tags: "Elemental, between worlds", summary: "Mist and lightning humanoids who thrive in storms.", features: ["Stormborne: Expertise in Hazardous Weather Conditions and innate Electricity Element.", "In Their Element: rain does not obscure your vision; storms increase speed and Stealth."] },
  { name: "Human", tags: "Adaptable", summary: "Bold, curious, and flexible adventurers.", features: ["Resourceful: gain 2 additional Ability Points during creation.", "Flexible: gain one additional Expertise of your choice."] },
  { name: "Elf", tags: "Attuned", summary: "Long-lived, keen-sensed people with deep cultural training.", features: ["Knowledgeable: gain two cultural Expertises and a rank in Knowledge.", "Well Trained: start with two additional Gear Expertises."] },
  { name: "Treeborn", tags: "Faetouched", summary: "Twilight elves rooted in bark, leaf, and memory.", features: ["Knowledgeable: gain two cultural Expertises and a rank in Knowledge.", "Intertwined in Nature: gain innate access to the Nature Element."] },
  { name: "Dwarf", tags: "Stout", summary: "Dense, resilient craftsfolk who ignore cumbersome armor limits.", features: ["Craftsman: gain a rank in Crafting and ignore Cumbersome on armor.", "Honed Skills: gain an additional Expertise.", "Stout: movement speed is 25 ft."] },
  { name: "Lizardfolk", tags: "Arcane-made", summary: "Serpentine survivors with occult ties and climbing prowess.", features: ["Arcane Creation: advantage against arcane effects and on climbing Athletics.", "Occult: Expertise in Serpentine Culture and the Serpentine Cult."] },
  { name: "Giant", tags: "Towering", summary: "Long-limbed powerhouses with extra reach.", features: ["Endurance: gain an additional Serious Injury Slot.", "Extended Reach: melee or touch ranges gain 5 ft."] },
  { name: "Automation", tags: "Constructed", summary: "Sentient crafted beings with purposeful design and plating.", features: ["Purposeful Design: one starting Experience reflects who made you and why; increase it by +1.", "Metallic Plating: gain 1 Armor Slot."] },
  { name: "Dragonhearted", tags: "Draconic", summary: "Scale-armored descendants with elemental breath.", features: ["Breath Weapon: choose an Element; innate Willpower weapon dealing 1d8 at 10 ft.", "Chromatic Scales: gain +1 Charisma."] },
  { name: "Faerie", tags: "Faewild-born", summary: "Nature-touched tricksters with Luckbender magic.", features: ["Luckbender: once per session, reroll an ally's Action Roll within 10 ft.", "From the Faewilds: gain Arcana and Faewilds Expertise.", "One With Nature: choose an environment for Stealth advantage."] },
  { name: "Faun", tags: "Goatfolk", summary: "Leaping wanderers with powerful kicks.", features: ["Leap: clear 15 ft. gaps without an Athletics Test.", "Kick: spend Hope after a melee hit to kick away for damage and movement."] },
  { name: "Fungril", tags: "Mycelial", summary: "Fungal people linked by memory and decay.", features: ["Fungril Network: speak across distance through a natural mycelial array.", "Death Cycle: mark Stress to extract a sensory memory from a recent corpse."] },
  { name: "Galapa", tags: "Shelled", summary: "Turtlefolk with heavy natural protection.", features: ["Shell of Protection: gain 3 Armor Slots, but cannot wear armor.", "Slow Tread: base movement is 20 ft.", "Slow and Steady: mark Stress in combat to attack with advantage."] },
  { name: "Goblin", tags: "Keen-sensed", summary: "Small, alert people with uncanny danger instincts.", features: ["Surefooted: ignore disadvantage on Acrobatics Tests.", "Dangersense: once per short rest, force an enemy attack reroll."] },
  { name: "Halfling", tags: "Attuned wanderers", summary: "Lucky, magnetic-hearted travelers.", features: ["Youthful Spirit: give everyone in your party a Valor Token at session start.", "Little Lucky: reroll a 1 and take the new result."] },
  { name: "Inferis", tags: "Demon-descended", summary: "Horned heirs of the Circles Below, hard to frighten.", features: ["Dread Visage: advantage on Intimidation.", "Fearless: immune to the Fear condition."] },
  { name: "Katari", tags: "Feline", summary: "Agile catfolk with retracting claws.", features: ["Feline Instincts: advantage on Acrobatics.", "Retracting Claws: innate Light unarmed weapon using Dexterity or Strength, 1d8 Slashing."] },
  { name: "Orc", tags: "Tusked", summary: "Muscular survivors whose defenses spike under pressure.", features: ["Resilient: when all Stress and Serious Injury slots are filled, Physical Defense increases by 4.", "Tusks: innate Light unarmed weapon using Strength or Dexterity, 1d8 Piercing."] },
  { name: "Ampha", tags: "Amphibian", summary: "Frogfolk with long tongues and water mastery.", features: ["Long Tongue: grab within 10 ft.; tongue is a Medium reach weapon.", "Amphibious: breathe and move underwater easily."] },
  { name: "Simiah", tags: "Primate", summary: "Prehensile, nimble climbers.", features: ["Prehensile Tail: you cannot be flanked.", "Nimble: increase Dexterity by +1 during creation.", "Natural Climber: advantage on Acrobatics."] },
  { name: "Aetheris", tags: "Celestial-descended", summary: "Radiant souls who can call on divine presence.", features: ["Hallowed Soul: when rolling with Hope, you may clear Stress instead of gaining Hope.", "Divine Call: once per short rest, gain advantage to command or intimidate, but Stealth suffers."] },
  { name: "Gnome", tags: "Arcane-sensing", summary: "Small, strong arcane trackers with nimble hands.", features: ["Nimble Fingers: spend 2 Hope to reroll Dexterity.", "Arcane Sense: sense arcane creatures and track them with advantage."] }
];

const communities = [
  ["Highborne", "Amiable, candid, conniving", "Privilege", "Advantage to consort with nobles, negotiate prices, or leverage reputation."],
  ["Loreborne", "Direct, eloquent, inquisitive", "Well-Read", "Advantage regarding the history, culture, or politics of prominent people and places."],
  ["Orderborne", "Ambitious, benevolent, stoic", "Dedicated", "Record three sayings or values; embody one once per short rest for advantage."],
  ["Ridgeborne", "Bold, hardy, stubborn", "Steady", "Advantage to traverse cliffs, navigate harsh environments, and survive; gain a Stress Slot."],
  ["Seaborne", "Candid, cooperative, weathered", "Know the Tide", "Failed action rolls build +1 tokens you can spend before later rolls."],
  ["Slyborne", "Clever, formidable, shrewd", "Scoundrel", "Advantage to negotiate with criminals, detect lies, or find a safe hiding place."],
  ["Underborne", "Composed, innovative, resourceful", "Low-Light Living", "In low light or shadow, advantage to hide, investigate, or perceive details."],
  ["Wanderborne", "Mirthful, reliable, unorthodox", "Nomadic Pack", "Once per session, pull a useful common item from your pack."],
  ["Wildborne", "Hardy, nurturing, vibrant", "Lightfoot", "Naturally silent movement and advantage to move unheard."],
  ["Duneborne", "Desert-forged", "Oasis", "Once per rest, clear Stress or a Treated Injury on allies within 10 ft."],
  ["Freeborne", "Liberated", "Unbound", "Once per session, change an action roll with Fear into a roll with Hope."],
  ["Frostborne", "Of snow and ice", "Long Winter", "Repair All Armor can also repair an ally's armor up to half their slots."],
  ["Hearthborne", "Humble origins", "Close-Knit", "When you Help an Ally, spend 2 Hope so they roll with advantage as well."],
  ["Reborne", "The forgotten past", "Found Family", "Once per session, spend Hope to use an ally's community ability; they gain Hope."],
  ["Warborne", "Ravaged by war", "Brave Face", "Once per rest, mark 2 Stress instead of Armor to reduce an incoming injury."]
].map(([name, tags, feature, summary]) => ({ name, tags, feature, summary }));

const traits = [
  ["Scholar", "Core", "Flexible Specialist", "Choose one non-equipment Expertise and two Cognitive Skills; count as trained in them."],
  ["Ambassador", "Core", "Silver Tongue", "Choose two Cultural Expertises and one Intuition Skill; gain advantage in fitting negotiations."],
  ["Leader", "Core", "Decisive Command", "Gain a command die and spend Hope to add it to an ally's test or attack."],
  ["Mercenary", "Core", "Contracted Hunter", "Choose a Marked Target after rest and gain advantage to learn about them."],
  ["Warrior", "Core", "Vigilant Stance", "Begin with stances, including a stance that improves Perception and Physical Defense."],
  ["Spellcaster", "Core", "Kyren Initiate", "Craft spells from Elements and Components using Willpower and Arcana."],
  ["Scholar", "Tier 1", "Field Medicine", "Treat allies with Medicine and gain advantage on Medicine Tests to treat Injuries."],
  ["Scholar", "Tier 1", "Analyst", "Predict a target's next move and help allies seize openings."],
  ["Scholar", "Tier 1", "Peak Efficiency", "Downtime projects advance faster for you and resting allies."],
  ["Ambassador", "Tier 1", "Steadfast Challenge", "Use social pressure to disorient a target and weaken their next test."],
  ["Ambassador", "Tier 1", "Well Dressed", "Presentable gear grants an early social edge; gain Fashion Expertise."],
  ["Ambassador", "Tier 1", "Street Performer", "Distract foes or rally allies with performance-fueled dice."],
  ["Leader", "Tier 1", "Valiant Intervention", "Spend Hope to act on the opponent's turn and draw attention from allies."],
  ["Leader", "Tier 1", "Courage", "When you fail with Fear, gain Hope."],
  ["Leader", "Tier 1", "Rallying Command", "Your command also clears Stress and lets allies move."],
  ["Mercenary", "Tier 1", "Ranged Skirmisher", "Land ranged hits and keep pressure with extra fire."],
  ["Mercenary", "Tier 1", "Wayfinder", "Find direct paths and drain Fear from your Marked Target."],
  ["Mercenary", "Tier 1", "Fatal Thrust", "Exploit surprise with Light weapons that bypass Armor reduction."],
  ["Warrior", "Tier 1", "Ironstance", "Learn a stance that punishes missed melee attacks."],
  ["Warrior", "Tier 1", "Shield Master", "Protect allies, form a wall, and shove enemies back."],
  ["Warrior", "Tier 1", "Heavy Weapons Training", "Create space with heavy weapons and charge with momentum."],
  ["Spellcaster", "Tier 1", "Spiritual Channeler", "Gain Life Force and Radiant magic plus prayer dice."],
  ["Spellcaster", "Tier 1", "Dark Arts", "Gain Shadow magic and hit harder while Vulnerable."],
  ["Spellcaster", "Tier 1", "Elemental Summoner", "Call elemental allies and expand your spellcasting identity."]
].map(([archetype, tier, name, summary]) => ({ archetype, tier, name, summary }));

const equipment = [
  ["Dagger", "weapon", "1d8 Piercing, One-Handed", "Light weapon. Expertise unlocks Offhand attacks."],
  ["Rapier", "weapon", "1d6 Piercing, One-Handed", "Light weapon. Expertise unlocks Defensive guarding."],
  ["Short Sword", "weapon", "1d6 Rending, One-Handed", "Medium weapon. Expertise unlocks Offhand attacks."],
  ["Short Bow", "weapon", "1d6 Piercing, Range 60/100 ft.", "Medium ranged weapon with Reload."],
  ["Mace / Hammer", "weapon", "2d8 Bludgeoning", "Medium weapon. Expertise unlocks Impact."],
  ["Longsword", "weapon", "2d6 Rending, Two-Handed", "Heavy weapon. Expertise can remove Two-Handed."],
  ["Pike", "weapon", "2d6 Piercing, Reach 15 ft.", "Heavy weapon with close-range drawback."],
  ["Scythe", "weapon", "1d6 + 1d8 + 1d10 Rending", "Heavy reach weapon with sweeping potential."],
  ["Revolver", "weapon", "1d6 Piercing, 6 rounds", "Exotic firearm. Fanning with Expertise."],
  ["Buckler", "shield", "+1 Armor Slot", "Small shield with a Guard penalty for enemies."],
  ["Heater Shield", "shield", "+2 Armor Slots", "One-handed shield with Cumbersome and speed penalty."],
  ["Pavise Shield", "shield", "+3 Armor Slots", "Heavy protective shield with a bigger speed penalty."],
  ["Uniform", "armor", "Presentable", "Clothing that can unlock social and trait benefits."],
  ["Leather Armor", "armor", "+1 Armor Slot", "Simple armor with no drawback."],
  ["Chainmail Armor", "armor", "+2 Armor Slots", "Cumbersome 3, -5 ft. speed; Expertise removes Cumbersome."],
  ["Plate Armor", "armor", "+3 Armor Slots", "Cumbersome 4, -10 ft. speed; Expertise lowers Cumbersome."],
  ["Spellbook / Arcane Focus", "arcane", "One-Handed", "Free action for adding Components or Elements to prepared spells."],
  ["Ring of Elemental Resonance", "arcane", "Wearable", "Add a known Element to a spell as a free action."],
  ["Radiance Crystal", "arcane", "One-Handed", "Add Light and Radiant components as a free action."],
  ["Charm of Arcane Stability", "arcane", "Wearable", "Advantage on Concentration Tests for spells."],
  ["Conduit Stone", "arcane", "Wearable", "Stores a spell of up to 5 components for later casting."]
].map(([name, type, stats, summary]) => ({ name, type, stats, summary }));

const steps = ["Concept", "Abilities", "Stats", "Heritage", "Community", "Traits", "Equipment", "Expertises", "Experiences", "Review"];
const state = {
  step: 0,
  mode: "beginner",
  abilities: Object.fromEntries(abilities.map(([key]) => [key, 0])),
  selectedHeritages: [],
  community: "",
  traits: [],
  equipment: [],
  expertises: ["", ""]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function formData() {
  const form = new FormData($("#character-form"));
  return Object.fromEntries(form.entries());
}

function abilityTotal() {
  return Object.values(state.abilities).reduce((sum, value) => sum + Number(value), 0);
}

function abilityPointTotal() {
  return state.selectedHeritages.includes("Human") ? 12 : 10;
}

function adjustedAbilities() {
  const result = { ...state.abilities };
  if (state.selectedHeritages.includes("Dragonhearted")) result.charisma += 1;
  if (state.selectedHeritages.includes("Simiah")) result.dexterity += 1;
  return result;
}

function derived() {
  const a = adjustedAbilities();
  const armorSlots = 0
    + (state.selectedHeritages.includes("Cobble") ? 1 : 0)
    + (state.selectedHeritages.includes("Automation") ? 1 : 0)
    + (state.selectedHeritages.includes("Galapa") ? 3 : 0)
    + state.equipment.reduce((sum, name) => {
      const item = equipment.find((entry) => entry.name === name);
      const match = item?.stats.match(/\+(\d) Armor/);
      return sum + (match ? Number(match[1]) : 0);
    }, 0);
  let movement = 30 + a.dexterity * 5;
  if (state.selectedHeritages.includes("Dwarf")) movement = 25 + a.dexterity * 5;
  if (state.selectedHeritages.includes("Galapa")) movement = 20 + a.dexterity * 5;
  if (state.equipment.includes("Chainmail Armor")) movement -= 5;
  if (state.equipment.includes("Plate Armor")) movement -= 10;
  if (state.equipment.includes("Heater Shield")) movement -= 5;
  if (state.equipment.includes("Pavise Shield")) movement -= 10;
  return {
    physical: 10 + a.strength + a.dexterity,
    cognitive: 10 + a.intellect + a.willpower,
    intuition: 10 + a.awareness + a.charisma,
    movement: Math.max(5, movement),
    stress: 3 + a.willpower + (state.community === "Ridgeborne" ? 1 : 0),
    armorSlots,
    seriousSlots: 2 + (state.selectedHeritages.includes("Giant") ? 1 : 0),
    expertiseTotal: 2 + a.intellect + (state.selectedHeritages.includes("Human") ? 1 : 0) + (state.selectedHeritages.includes("Dwarf") ? 1 : 0)
  };
}

function renderSteps() {
  $("#step-track").innerHTML = steps.map((label, index) => `
    <li><button type="button" class="${index === state.step ? "active" : ""}" data-jump="${index}">${index + 1}. ${label}</button></li>
  `).join("");
  $("#progress-fill").style.width = `${((state.step + 1) / steps.length) * 100}%`;
  $$(".wizard-step").forEach((step) => step.classList.toggle("active", Number(step.dataset.step) === state.step));
  $("#prev-step").disabled = state.step === 0;
  $("#next-step").textContent = state.step === steps.length - 1 ? "Finish" : "Next";
}

function renderAbilities() {
  $("#points-total").textContent = abilityPointTotal();
  $("#points-used").textContent = abilityTotal();
  $("#ability-grid").innerHTML = abilities.map(([key, label, help]) => `
    <article class="ability-card">
      <header><strong data-tip="${help}">${label}</strong><span>${help}</span></header>
      <div class="counter">
        <button type="button" data-ability="${key}" data-delta="-1">-</button>
        <strong>${state.abilities[key]}</strong>
        <button type="button" data-ability="${key}" data-delta="1">+</button>
      </div>
    </article>
  `).join("");
  const valid = abilityTotal() === abilityPointTotal() && Object.values(state.abilities).every((value) => value <= 3);
  const validation = $("#ability-validation");
  validation.className = `validation ${valid ? "good" : "warn"}`;
  validation.textContent = valid ? "Ability spread is ready." : "Spend every point and keep level 1 abilities at 3 or lower.";
}

function renderDerived() {
  const d = derived();
  $("#derived-cards").innerHTML = [
    ["Physical Defense", d.physical, "Strength + Dexterity + 10"],
    ["Cognitive Defense", d.cognitive, "Intellect + Willpower + 10"],
    ["Intuition Defense", d.intuition, "Awareness + Charisma + 10"],
    ["Movement", `${d.movement} ft.`, "30 ft. base, adjusted by Dexterity and gear"],
    ["Stress Slots", d.stress, "3 plus Willpower, with some bonuses"],
    ["Armor Slots", d.armorSlots, "Natural armor plus worn armor and shields"]
  ].map(([name, value, note]) => `<article class="stat-card"><span>${name}</span><b>${value}</b><small>${note}</small></article>`).join("");
}

function card(item, selected, action, detail = "") {
  return `
    <article class="choice-card ${selected ? "selected" : ""}" role="button" tabindex="0" data-action="${action}" data-name="${item.name}">
      <small>${item.tags || item.archetype || item.type}</small>
      <strong>${item.name}</strong>
      <p>${item.summary || item.feature}</p>
      ${detail}
    </article>
  `;
}

function renderChoices() {
  const heritageQuery = $("#heritage-search").value.toLowerCase();
  const maxHeritages = $("[name='mixedHeritage']").checked ? 2 : 1;
  if (state.selectedHeritages.length > maxHeritages) state.selectedHeritages = state.selectedHeritages.slice(0, maxHeritages);
  $("#heritage-grid").innerHTML = heritages
    .filter((item) => `${item.name} ${item.tags} ${item.summary}`.toLowerCase().includes(heritageQuery))
    .map((item) => card(item, state.selectedHeritages.includes(item.name), "heritage", `<details><summary>Features</summary><p>${item.features.join("<br>")}</p></details>`))
    .join("");

  const communityQuery = $("#community-search").value.toLowerCase();
  $("#community-grid").innerHTML = communities
    .filter((item) => `${item.name} ${item.tags} ${item.feature} ${item.summary}`.toLowerCase().includes(communityQuery))
    .map((item) => card(item, state.community === item.name, "community", `<details><summary>${item.feature}</summary><p>${item.summary}</p></details>`))
    .join("");

  const traitQuery = $("#trait-search").value.toLowerCase();
  const traitFilter = $("#trait-filter").value;
  $("#trait-grid").innerHTML = traits
    .filter((item) => (traitFilter === "all" || item.archetype === traitFilter) && `${item.name} ${item.archetype} ${item.tier} ${item.summary}`.toLowerCase().includes(traitQuery))
    .map((item) => card({ name: item.name, tags: `${item.archetype} - ${item.tier}`, summary: item.summary }, state.traits.includes(item.name), "trait"))
    .join("");

  const equipmentQuery = $("#equipment-search").value.toLowerCase();
  const equipmentFilter = $("#equipment-filter").value;
  $("#equipment-grid").innerHTML = equipment
    .filter((item) => (equipmentFilter === "all" || item.type === equipmentFilter) && `${item.name} ${item.type} ${item.stats} ${item.summary}`.toLowerCase().includes(equipmentQuery))
    .map((item) => card({ name: item.name, tags: `${item.type} - ${item.stats}`, summary: item.summary }, state.equipment.includes(item.name), "equipment"))
    .join("");
}

function renderExpertises() {
  const d = derived();
  $("#expertise-total").textContent = d.expertiseTotal;
  $("#expertise-count").textContent = state.expertises.filter(Boolean).length;
  $("#expertise-list").innerHTML = state.expertises.map((value, index) => `
    <div class="stack-item">
      <input value="${escapeHtml(value)}" data-expertise-index="${index}" placeholder="Weapon Crafting, High Society, Wildland Folklore..." />
      <button class="ghost-button small" type="button" data-remove-expertise="${index}">Remove</button>
    </div>
  `).join("");
}

function renderSheet() {
  const data = formData();
  const d = derived();
  const a = adjustedAbilities();
  const heritageLabel = state.selectedHeritages.length ? state.selectedHeritages.join(" / ") : "Unchosen";
  const traitsLabel = state.traits.length ? state.traits : ["None yet"];
  const equipmentLabel = state.equipment.length ? state.equipment : ["None yet"];
  const expertisesLabel = state.expertises.filter(Boolean).length ? state.expertises.filter(Boolean) : ["None yet"];
  const experiences = [data.experience1, data.experience2].filter(Boolean);
  $("#character-sheet").innerHTML = `
    <section class="sheet-title">
      <h3>${escapeHtml(data.name || "Unnamed Hero")}</h3>
      <p>${escapeHtml(data.concept || data.vibe || "A legend waiting for a first impossible choice.")}</p>
    </section>
    <section class="sheet-block"><h4>Identity</h4><p><b>Heritage:</b> ${heritageLabel}<br><b>Community:</b> ${state.community || "Unchosen"}<br><b>Goal:</b> ${escapeHtml(data.goal || "Unwritten")}<br><b>Fear:</b> ${escapeHtml(data.fear || "Unwritten")}<br><b>Bond:</b> ${escapeHtml(data.bond || "Unwritten")}</p></section>
    <section class="sheet-block"><h4>Abilities</h4><div class="pill-row">${abilities.map(([key, label]) => `<span class="pill">${label} ${a[key]}</span>`).join("")}</div></section>
    <section class="sheet-block"><h4>Defenses</h4><div class="pill-row"><span class="pill">Physical ${d.physical}</span><span class="pill">Cognitive ${d.cognitive}</span><span class="pill">Intuition ${d.intuition}</span><span class="pill">Movement ${d.movement} ft.</span><span class="pill">Stress ${d.stress}</span><span class="pill">Armor ${d.armorSlots}</span><span class="pill">Serious ${d.seriousSlots}</span></div></section>
    <section class="sheet-block"><h4>Traits</h4><div class="pill-row">${traitsLabel.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}</div></section>
    <section class="sheet-block"><h4>Equipment</h4><div class="pill-row">${equipmentLabel.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}${data.uniqueItem ? `<span class="pill">${escapeHtml(data.uniqueItem)}</span>` : ""}</div></section>
    <section class="sheet-block"><h4>Expertises</h4><div class="pill-row">${expertisesLabel.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}</div></section>
    <section class="sheet-block"><h4>Experiences</h4><div class="pill-row">${(experiences.length ? experiences : ["None yet"]).map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}</div></section>
  `;
  $("#review-panel").innerHTML = $("#character-sheet").innerHTML;
}

function renderAll() {
  document.body.classList.toggle("advanced", state.mode === "advanced");
  renderSteps();
  renderAbilities();
  renderDerived();
  renderChoices();
  renderExpertises();
  renderSheet();
}

function updateSelection(action, name) {
  if (action === "heritage") {
    const mixed = $("[name='mixedHeritage']").checked;
    if (state.selectedHeritages.includes(name)) {
      state.selectedHeritages = state.selectedHeritages.filter((item) => item !== name);
    } else {
      state.selectedHeritages = mixed ? [...state.selectedHeritages, name].slice(-2) : [name];
    }
  }
  if (action === "community") state.community = name;
  if (action === "trait") {
    state.traits = state.traits.includes(name) ? state.traits.filter((item) => item !== name) : [...state.traits, name].slice(-3);
  }
  if (action === "equipment") {
    state.equipment = state.equipment.includes(name) ? state.equipment.filter((item) => item !== name) : [...state.equipment, name];
  }
}

function validateStep() {
  if (state.step === 1) return abilityTotal() === abilityPointTotal() && Object.values(state.abilities).every((value) => value <= 3);
  if (state.step === 3) return state.selectedHeritages.length > 0;
  if (state.step === 4) return Boolean(state.community);
  if (state.step === 5) return state.traits.length === 3;
  return true;
}

function save() {
  const payload = { state, fields: formData() };
  localStorage.setItem("revelry-character", JSON.stringify(payload));
  toast("Character saved in this browser.");
}

function load() {
  const raw = localStorage.getItem("revelry-character");
  if (!raw) return toast("No saved character found yet.");
  const payload = JSON.parse(raw);
  Object.assign(state, payload.state);
  Object.entries(payload.fields || {}).forEach(([key, value]) => {
    const field = document.querySelector(`[name="${key}"]`);
    if (field && field.type === "checkbox") field.checked = value === "on";
    else if (field) field.value = value;
  });
  renderAll();
  toast("Loaded your saved character.");
}

function exportJson() {
  const payload = encodeURIComponent(JSON.stringify({ state, fields: formData() }, null, 2));
  const blob = new Blob([decodeURIComponent(payload)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${(formData().name || "revelry-character").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function inspire() {
  const seeds = [
    ["Veyra Cinderglass", "ember-eyed oathbreaker with a brass reliquary", "Steal back the saint-bell that holds their sibling's voice.", "Becoming useful only as a weapon.", "The tavern crew who hid them after the failed rebellion."],
    ["Marn of the Hollow Tide", "saltcloak medic with glowing kelp tattoos", "Prove that mercy can be more terrifying than revenge.", "The sea calling in a dead friend's voice.", "A patched field journal full of names they still owe."],
    ["Tallow Ren", "smiling duelist with a spellbook chained to one wrist", "Win freedom for a city that would rather forget them.", "Being remembered as a coward.", "A rival who always arrives one scene too late."]
  ];
  const [name, vibe, goal, fear, bond] = seeds[Math.floor(Math.random() * seeds.length)];
  Object.entries({ name, vibe, goal, fear, bond, concept: `${name} is a ${vibe} chasing a legend with teeth.` }).forEach(([key, value]) => {
    $(`[name="${key}"]`).value = value;
  });
  renderSheet();
}

function toast(message) {
  const node = $("#toast");
  node.textContent = message;
  node.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => node.classList.remove("show"), 2400);
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function setupParticles() {
  const canvas = $("#ember-field");
  const ctx = canvas.getContext("2d");
  const pointer = { x: innerWidth / 2, y: innerHeight / 2 };
  const particles = Array.from({ length: 74 }, () => ({
    x: Math.random() * innerWidth,
    y: Math.random() * innerHeight,
    r: Math.random() * 2.4 + 0.6,
    vx: (Math.random() - 0.5) * 0.18,
    vy: -Math.random() * 0.45 - 0.08,
    hue: Math.random() > 0.25 ? "242,169,59" : "66,215,200"
  }));
  function resize() {
    canvas.width = innerWidth * devicePixelRatio;
    canvas.height = innerHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  }
  function tick() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const p of particles) {
      const dx = (pointer.x - p.x) * 0.0008;
      p.x += p.vx + dx;
      p.y += p.vy;
      if (p.y < -10) p.y = innerHeight + 10;
      if (p.x < -10) p.x = innerWidth + 10;
      if (p.x > innerWidth + 10) p.x = -10;
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.hue},${0.18 + p.r / 10})`;
      ctx.shadowColor = `rgba(${p.hue},0.65)`;
      ctx.shadowBlur = 12;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  addEventListener("resize", resize);
  addEventListener("pointermove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
  });
  resize();
  tick();
}

function setupEvents() {
  $("#step-track").addEventListener("click", (event) => {
    const button = event.target.closest("[data-jump]");
    if (!button) return;
    state.step = Number(button.dataset.jump);
    renderAll();
  });
  $("#next-step").addEventListener("click", () => {
    if (!validateStep()) return toast("This step needs one more choice before the legend can move on.");
    if (state.step < steps.length - 1) state.step += 1;
    renderAll();
  });
  $("#prev-step").addEventListener("click", () => {
    state.step = Math.max(0, state.step - 1);
    renderAll();
  });
  $("#ability-grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-ability]");
    if (!button) return;
    const key = button.dataset.ability;
    const delta = Number(button.dataset.delta);
    const next = state.abilities[key] + delta;
    if (next < 0 || next > 3) return;
    if (delta > 0 && abilityTotal() >= abilityPointTotal()) return;
    state.abilities[key] = next;
    renderAll();
  });
  document.body.addEventListener("click", (event) => {
    if (event.target.closest("summary")) return;
    const choice = event.target.closest("[data-action]");
    if (!choice) return;
    updateSelection(choice.dataset.action, choice.dataset.name);
    renderAll();
  });
  document.body.addEventListener("keydown", (event) => {
    if (!["Enter", " "].includes(event.key)) return;
    const choice = event.target.closest("[data-action]");
    if (!choice) return;
    event.preventDefault();
    updateSelection(choice.dataset.action, choice.dataset.name);
    renderAll();
  });
  $("#character-form").addEventListener("input", (event) => {
    if (event.target.matches("[data-expertise-index]")) state.expertises[Number(event.target.dataset.expertiseIndex)] = event.target.value;
    renderSheet();
    if (["heritage-search", "community-search", "trait-search", "trait-filter", "equipment-search", "equipment-filter"].includes(event.target.id)) renderChoices();
  });
  $("#character-form").addEventListener("change", (event) => {
    if (event.target.name === "mixedHeritage") renderAll();
    if (["trait-filter", "equipment-filter"].includes(event.target.id)) renderChoices();
  });
  $("#add-expertise").addEventListener("click", () => {
    state.expertises.push("");
    renderExpertises();
  });
  $("#expertise-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-expertise]");
    if (!button) return;
    state.expertises.splice(Number(button.dataset.removeExpertise), 1);
    renderExpertises();
    renderSheet();
  });
  $(".mode-toggle").addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode]");
    if (!button) return;
    state.mode = button.dataset.mode;
    $$(".mode-toggle button").forEach((node) => node.classList.toggle("active", node === button));
    renderAll();
  });
  $("#save-button").addEventListener("click", save);
  $("#load-button").addEventListener("click", load);
  $("#export-json").addEventListener("click", exportJson);
  $("#export-pdf").addEventListener("click", () => window.print());
  $("#seed-button").addEventListener("click", inspire);
}

function setupReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("revealed");
    });
  }, { threshold: 0.16 });
  $$("[data-reveal]").forEach((node) => observer.observe(node));
}

function init() {
  $("#trait-filter").innerHTML += [...new Set(traits.map((item) => item.archetype))]
    .map((name) => `<option value="${name}">${name}</option>`).join("");
  setupEvents();
  setupReveals();
  setupParticles();
  renderAll();
}

init();
