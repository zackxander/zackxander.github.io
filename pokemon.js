const NORMAL = "NORMAL";
const FIRE = "FIRE";
const WATER = "WATER";
const GRASS = "GRASS";
const ELECTRIC = "ELECTRIC";
const ICE = "ICE";
const FIGHTING = "FIGHTING";
const POISON = "POISON";
const GROUND = "GROUND";
const FLYING = "FLYING";
const PSYCHIC = "PSYCHIC";
const BUG = "BUG";
const ROCK = "ROCK";
const GHOST = "GHOST";
const DRAGON = "DRAGON";
const DARK = "DARK";
const STEEL = "STEEL";
const FAIRY = "FAIRY";

const ALL_TYPES = [
  NORMAL,
  FIRE,
  WATER,
  GRASS,
  ELECTRIC,
  ICE,
  FIGHTING,
  POISON,
  GROUND,
  FLYING,
  PSYCHIC,
  BUG,
  ROCK,
  GHOST,
  DRAGON,
  DARK,
  STEEL,
  FAIRY,
];

const TABLE = {
  NORMAL: {
    ROCK: 0.5,
    GHOST: 0,
    STEEL: 0.5,
  },
  FIRE: {
    FIRE: 0.5,
    WATER: 0.5,
    GRASS: 2,
    ICE: 2,
    BUG: 2,
    ROCK: 0.5,
    DRAGON: 0.5,
    STEEL: 2,
  },
  WATER: {
    FIRE: 2,
    WATER: 0.5,
    GRASS: 0.5,
    GROUND: 2,
    ROCK: 2,
    DRAGON: 0.5,
  },
  GRASS: {
    FIRE: 0.5,
    WATER: 2,
    GRASS: 0.5,
    POISON: 0.5,
    GROUND: 2,
    FLYING: 0.5,
    BUG: 0.5,
    ROCK: 2,
    DRAGON: 0.5,
    STEEL: 0.5,
  },
  ELECTRIC: {
    WATER: 2,
    GRASS: 0.5,
    ELECTRIC: 0.5,
    GROUND: 0,
    FLYING: 2,
    DRAGON: 0.5,
  },
  ICE: {
    FIRE: 0.5,
    WATER: 0.5,
    GRASS: 2,
    ICE: 0.5,
    GROUND: 2,
    FLYING: 2,
    DRAGON: 2,
    STEEL: 0.5,
  },
  FIGHTING: {
    NORMAL: 2,
    ICE: 2,
    POISON: 0.5,
    FLYING: 0.5,
    PSYCHIC: 0.5,
    BUG: 0.5,
    ROCK: 2,
    GHOST: 0,
    DARK: 2,
    STEEL: 2,
    FAIRY: 0.5,
  },
  POISON: {
    GRASS: 2,
    POISON: 0.5,
    GROUND: 0.5,
    ROCK: 0.5,
    GHOST: 0.5,
    STEEL: 0,
    FAIRY: 2,
  },
  GROUND: {
    FIRE: 2,
    GRASS: 0.5,
    ELECTRIC: 2,
    POISON: 2,
    FLYING: 0,
    BUG: 0.5,
    ROCK: 2,
    STEEL: 2,
  },
  FLYING: {
    GRASS: 2,
    ELECTRIC: 0.5,
    FIGHTING: 2,
    BUG: 2,
    ROCK: 0.5,
    STEEL: 0.5,
  },
  PSYCHIC: {
    FIGHTING: 2,
    POISON: 2,
    PSYCHIC: 0.5,
    DARK: 0,
    STEEL: 0.5,
  },
  BUG: {
    FIRE: 0.5,
    GRASS: 2,
    FIGHTING: 0.5,
    POISON: 0.5,
    FLYING: 0.5,
    PSYCHIC: 2,
    GHOST: 0.5,
    DARK: 2,
    STEEL: 0.5,
    FAIRY: 0.5,
  },
  ROCK: {
    FIRE: 2,
    ICE: 2,
    FIGHTING: 0.5,
    GROUND: 0.5,
    FLYING: 2,
    BUG: 2,
    STEEL: 0.5,
  },
  GHOST: {
    NORMAL: 0,
    PSYCHIC: 2,
    GHOST: 2,
    DARK: 0.5,
  },
  DRAGON: {
    DRAGON: 2,
    STEEL: 0.5,
    FAIRY: 0,
  },
  DARK: {
    FIGHTING: 0.5,
    PSYCHIC: 2,
    GHOST: 2,
    DARK: 0.5,
    FAIRY: 0.5,
  },
  STEEL: {
    FIRE: 0.5,
    WATER: 0.5,
    ELECTRIC: 0.5,
    ICE: 2,
    ROCK: 2,
    STEEL: 0.5,
    FAIRY: 2,
  },
  FAIRY: {
    FIRE: 0.5,
    FIGHTING: 2,
    POISON: 0.5,
    DRAGON: 2,
    DARK: 2,
    STEEL: 0.5,
  },
};

function getEffectiveness(attackerType, defenderType) {
  if (!TABLE[attackerType]) {
    throw new Error("No such attacker");
  }
  const val = TABLE[attackerType][defenderType];
  return typeof val === "undefined" ? 1 : val;
}

const attacker = document.getElementById("attacker");
const defender = document.getElementById("defender");
const effectiveness = document.getElementById("effectiveness");

function chicken() {
  effectiveness.textContent = getEffectiveness(
    attacker.options[attacker.selectedIndex].value,
    defender.options[defender.selectedIndex].value
  );
}

chicken();
