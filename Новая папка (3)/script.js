/* ================================
   DOKIDOKI — GAME LOGIC
================================ */

const SAVE_KEY = "dokidoki_save_v1";

const PETS = [
  {
    id: "dog",
    name: "Собака",
    species: "Собака",
    emoji: "🐶",
    hp: 110,
    attack: 14,
    defense: 8,
    speed: 10,
    skill: "Верность",
    skillDesc: "Иногда восстанавливает здоровье после победы.",
    color: "#f7d6b8"
  },
  {
    id: "cat",
    name: "Кошка",
    species: "Кошка",
    emoji: "🐱",
    hp: 95,
    attack: 16,
    defense: 6,
    speed: 14,
    skill: "Ловкость",
    skillDesc: "Выше шанс увернуться от атаки.",
    color: "#f6c9d8"
  },
  {
    id: "hamster",
    name: "Хомяк",
    species: "Хомяк",
    emoji: "🐹",
    hp: 80,
    attack: 9,
    defense: 7,
    speed: 18,
    skill: "Запасы",
    skillDesc: "Чаще находит монеты в данжах.",
    color: "#ffe3b3"
  },
  {
    id: "dragon",
    name: "Дракон",
    species: "Дракон",
    emoji: "🐉",
    hp: 150,
    attack: 24,
    defense: 14,
    speed: 8,
    skill: "Огненное дыхание",
    skillDesc: "Наносит дополнительный урон на арене.",
    color: "#ffd0c2"
  },
  {
    id: "bat",
    name: "Летучая мышь",
    species: "Летучая мышь",
    emoji: "🦇",
    hp: 85,
    attack: 13,
    defense: 5,
    speed: 20,
    skill: "Эхолокация",
    skillDesc: "Лучше видит секреты в пещере.",
    color: "#d5ccf5"
  },
  {
    id: "rat",
    name: "Крыса",
    species: "Крыса",
    emoji: "🐀",
    hp: 75,
    attack: 11,
    defense: 6,
    speed: 16,
    skill: "Хитрость",
    skillDesc: "Иногда удваивает награду за мини-игру.",
    color: "#d7e3d0"
  },
  {
    id: "bunny",
    name: "Кролик",
    species: "Кролик",
    emoji: "🐰",
    hp: 90,
    attack: 10,
    defense: 9,
    speed: 17,
    skill: "Прыжок",
    skillDesc: "Быстрее проходит испытания в данже.",
    color: "#f4d9e6"
  },
  {
    id: "fox",
    name: "Лиса",
    species: "Лиса",
    emoji: "🦊",
    hp: 100,
    attack: 17,
    defense: 8,
    speed: 15,
    skill: "Смекалка",
    skillDesc: "Получает больше опыта за мини-игры.",
    color: "#ffd9b0"
  },
  {
    id: "panda",
    name: "Панда",
    species: "Панда",
    emoji: "🐼",
    hp: 130,
    attack: 12,
    defense: 16,
    speed: 7,
    skill: "Терпение",
    skillDesc: "Снижает урон от болезней.",
    color: "#e7e3d8"
  },
  {
    id: "unicorn",
    name: "Единорог",
    species: "Единорог",
    emoji: "🦄",
    hp: 120,
    attack: 18,
    defense: 12,
    speed: 13,
    skill: "Исцеление",
    skillDesc: "Может иногда вылечить болезнь без лекарства.",
    color: "#e3d3f7"
  }
];

const ILLNESSES = {
  fever: {
    name: "Жар",
    icon: "🌡️",
    cure: "feverCure",
    damage: 6,
    text: "Питомцу жарко и тяжело дышать."
  },
  poisoning: {
    name: "Отравление",
    icon: "🧪",
    cure: "poisonCure",
    damage: 8,
    text: "Питомец чувствует себя плохо после странной ягоды."
  },
  cold: {
    name: "Простуда",
    icon: "🤧",
    cure: "coldCure",
    damage: 4,
    text: "Питомец чихает и хочет спать."
  }
};

const SHOP_ITEMS = [
  {
    id: "apple",
    name: "Яблоко",
    emoji: "🍎",
    price: 10,
    type: "food",
    hunger: 18,
    mood: 4,
    desc: "Вкусный и полезный перекус."
  },
  {
    id: "berry",
    name: "Ягоды",
    emoji: "🫐",
    price: 15,
    type: "food",
    hunger: 12,
    mood: 10,
    desc: "Сладкие ягоды для настроения."
  },
  {
    id: "cake",
    name: "Торт",
    emoji: "🍰",
    price: 30,
    type: "food",
    hunger: 35,
    mood: 20,
    desc: "Особенное угощение."
  },
  {
    id: "feverCure",
    name: "Лекарство от жара",
    emoji: "🌡️",
    price: 35,
    type: "medicine",
    cure: "fever",
    desc: "Снижает жар и восстанавливает силы."
  },
  {
    id: "poisonCure",
    name: "Противоядие",
    emoji: "🧪",
    price: 45,
    type: "medicine",
    cure: "poisoning",
    desc: "Лечит отравление."
  },
  {
    id: "coldCure",
    name: "Лекарство от простуды",
    emoji: "🍵",
    price: 25,
    type: "medicine",
    cure: "cold",
    desc: "Тёплый чай от простуды."
  },
  {
    id: "energyPotion",
    name: "Зелье энергии",
    emoji: "⚡",
    price: 50,
    type: "battle",
    heal: 40,
    desc: "Восстанавливает здоровье в бою."
  }
];

const LOCATIONS = [
  {
    id: "home",
    name: "Домик",
    emoji: "🏡",
    desc: "Уютное место, где питомец отдыхает и восстанавливается.",
    danger: 0
  },
  {
    id: "village",
    name: "Деревня",
    emoji: "🏘️",
    desc: "Тихая деревня с магазином, жителями и небольшими заданиями.",
    danger: 1
  },
  {
    id: "forest",
    name: "Лес",
    emoji: "🌲",
    desc: "Мягкий лес, полный ягод, тайн и слабых монстров.",
    danger: 2
  },
  {
    id: "cave",
    name: "Пещера",
    emoji: "🕳️",
    desc: "Тёмная пещера с сокровищами и опасными существами.",
    danger: 3
  }
];

const ENEMIES = [
  { name: "Слизень", emoji: "👾", hp: 45, attack: 8 },
  { name: "Лесной дух", emoji: "🌿", hp: 60, attack: 11 },
  { name: "Каменный краб", emoji: "🦀", hp: 75, attack: 14 },
  { name: "Теневой кот", emoji: "🐈‍⬛", hp: 65, attack: 16 },
  { name: "Пещерный голем", emoji: "🗿", hp: 95, attack: 18 }
];

const ARENA_ENEMIES = [
  { name: "Мяу-воин", emoji: "😿", hp: 70, attack: 12 },
  { name: "Волк-защитник", emoji: "🐺", hp: 90, attack: 15 },
  { name: "Хитрый енот", emoji: "🦝", hp: 80, attack: 14 },
  { name: "Дикий кабан", emoji: "🐗", hp: 100, attack: 17 },
  { name: "Тёмный дракончик", emoji: "🐲", hp: 120, attack: 20 }
];

/* ================================
   STATE
================================ */

let state = {
  started: false,
  petId: null,
  petName: "",
  coins: 120,
  xp: 0,
  level: 1,
  day: 1,
  hour: 8,
  location: "home",
  isNight: false,
  inventory: {},
  pet: {
    hunger: 80,
    mood: 80,
    health: 110,
    maxHealth: 110,
    illness: null,
    sleeping: false,
    attack: 14,
    defense: 8,
    speed: 10
  },
  storyProgress: {
    village: false,
    forest: false,
    cave: false
  },
  stats: {
    mathWins: 0,
    dungeonWins: 0,
    arenaWins: 0
  }
};

let selectedPetId = null;
let currentModal = null;

/* ================================
   HELPERS
================================ */

const $ = id => document.getElementById(id);

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPetData() {
  return PETS.find(pet => pet.id === state.petId) || PETS[0];
}

function getXpNeeded() {
  return 100 + (state.level - 1) * 60;
}

function getAttack() {
  return state.pet.attack + Math.floor(state.level * 2);
}

function getDefense() {
  return state.pet.defense + Math.floor(state.level * 1.5);
}

function getSpeed() {
  return state.pet.speed + Math.floor(state.level * 1.2);
}

function saveGame() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadGame() {
  const raw = localStorage.getItem(SAVE_KEY);

  if (!raw) return false;

  try {
    const saved = JSON.parse(raw);
    state = { ...state, ...saved };
    return Boolean(state.started && state.petId);
  } catch (error) {
    return false;
  }
}

function showToast(text, icon = "✨") {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span><span>${text}</span>`;

  $("toastRoot").appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 20);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

function openModal(html) {
  currentModal = html;
  $("modalRoot").innerHTML = `
    <div class="modal-backdrop">
      <div class="modal-card">
        ${html}
      </div>
    </div>
  `;
}

function closeModal() {
  currentModal = null;
  $("modalRoot").innerHTML = "";
}

function addCoins(amount) {
  state.coins += amount;
  updateTopbar();
  saveGame();
}

function addXp(amount) {
  state.xp += amount;

  while (state.xp >= getXpNeeded()) {
    state.xp -= getXpNeeded();
    state.level++;
    state.pet.maxHealth += 10;
    state.pet.health = state.pet.maxHealth;
    state.pet.attack += 2;
    state.pet.defense += 1;
    state.pet.speed += 1;

    showToast(`Питомец достиг ${state.level} уровня!`, "🎉");
  }

  updateTopbar();
  updatePetPanel();
  saveGame();
}

function changePetStats(changes) {
  if (changes.hunger !== undefined) {
    state.pet.hunger = clamp(state.pet.hunger + changes.hunger);
  }

  if (changes.mood !== undefined) {
    state.pet.mood = clamp(state.pet.mood + changes.mood);
  }

  if (changes.health !== undefined) {
    state.pet.health = clamp(
      state.pet.health + changes.health,
      0,
      state.pet.maxHealth
    );
  }

  updatePetPanel();
  saveGame();
}

/* ================================
   SCREENS
================================ */

function showScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("is-active");
  });

  $(screenId).classList.add("is-active");
}

function goToStart() {
  showScreen("screenStart");
  $("btnContinue").disabled = !loadGame();
}

function goToSelect() {
  renderPetGrid();
  showScreen("screenSelect");
}

function goToGame() {
  showScreen("screenGame");
  updateAll();
}

/* ================================
   PET SELECTION
================================ */

function renderPetGrid() {
  $("petGrid").innerHTML = PETS.map(pet => `
    <button
      class="pet-card ${selectedPetId === pet.id ? "is-selected" : ""}"
      data-select-pet="${pet.id}"
      type="button"
    >
      <span class="pet-card-emoji" style="background:${pet.color}">
        ${pet.emoji}
      </span>

      <strong>${pet.name}</strong>
      <small>${pet.skill}</small>

      <span class="pet-card-stats">
        ❤️ ${pet.hp} · ⚔️ ${pet.attack} · 🛡️ ${pet.defense}
      </span>
    </button>
  `).join("");
}

function selectPet(petId) {
  selectedPetId = petId;
  renderPetGrid();

  const pet = PETS.find(item => item.id === petId);
  $("btnStartGame").disabled = false;

  showToast(`Выбран: ${pet.name}`, pet.emoji);
}

function startNewGame() {
  if (!selectedPetId) {
    showToast("Сначала выбери питомца", "⚠️");
    return;
  }

  const pet = PETS.find(item => item.id === selectedPetId);
  const customName = $("petNameInput").value.trim();

  state = {
    started: true,
    petId: pet.id,
    petName: customName || pet.name,
    coins: 120,
    xp: 0,
    level: 1,
    day: 1,
    hour: 8,
    location: "home",
    isNight: false,
    inventory: {
      apple: 2,
      coldCure: 1
    },
    pet: {
      hunger: 80,
      mood: 80,
      health: pet.hp,
      maxHealth: pet.hp,
      illness: null,
      sleeping: false,
      attack: pet.attack,
      defense: pet.defense,
      speed: pet.speed
    },
    storyProgress: {
      village: false,
      forest: false,
      cave: false
    },
    stats: {
      mathWins: 0,
      dungeonWins: 0,
      arenaWins: 0
    }
  };

  saveGame();
  goToGame();
  showToast(`${state.petName} поселился у тебя дома!`, pet.emoji);
}

function continueGame() {
  if (!loadGame()) {
    showToast("Сохранение не найдено", "⚠️");
    return;
  }

  goToGame();
  showToast("Прогресс загружен", "💾");
}

/* ================================
   TOPBAR
================================ */

function updateTopbar() {
  $("coinText").textContent = state.coins;
  $("levelText").textContent = `Ур. ${state.level}`;
  $("dayText").textContent = `День ${state.day} · ${String(state.hour).padStart(2, "0")}:00`;

  $("dayIco").textContent = state.isNight ? "🌙" : "☀️";

  const itemCount = Object.values(state.inventory).reduce(
    (sum, count) => sum + count,
    0
  );

  $("invBadge").textContent = itemCount;
}

/* ================================
   PET PANEL
================================ */

function getEmotion() {
  const pet = state.pet;

  if (pet.sleeping) {
    return { text: "Сон", emoji: "😴" };
  }

  if (pet.illness) {
    return { text: ILLNESSES[pet.illness].name, emoji: "🤒" };
  }

  if (pet.health <= state.pet.maxHealth * 0.3) {
    return { text: "Слабость", emoji: "😵" };
  }

  if (pet.hunger < 35) {
    return { text: "Голод", emoji: "🍽️" };
  }

  if (pet.mood < 35) {
    return { text: "Грусть", emoji: "😢" };
  }

  if (pet.mood > 80 && pet.hunger > 70) {
    return { text: "Радость", emoji: "😊" };
  }

  return { text: "Спокойствие", emoji: "🙂" };
}

function createBar(label, value, max, color) {
  const percent = Math.round((value / max) * 100);

  return `
    <div class="bar">
      <div class="bar-top">
        <span>${label}</span>
        <span>${value}/${max}</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${percent}%; background:${color}"></div>
      </div>
    </div>
  `;
}

function updatePetPanel() {
  const petData = getPetData();
  const emotion = getEmotion();

  $("petName").textContent = state.petName;
  $("petSpecies").textContent = petData.species;
  $("emotionBadge").textContent = `${emotion.emoji} ${emotion.text}`;

  $("miniPet").innerHTML = `
    <div class="mini-pet-face" style="background:${petData.color}">
      ${petData.emoji}
    </div>
  `;

  $("statBars").innerHTML = `
    ${createBar("❤️ Здоровье", state.pet.health, state.pet.maxHealth, "#f8a8b8")}
    ${createBar("🍽️ Сытость", state.pet.hunger, 100, "#f5c98a")}
    ${createBar("😊 Настроение", state.pet.mood, 100, "#a8d8c4")}
  `;

  $("petMeta").innerHTML = `
    <div><span>⚔️ Атака</span><b>${getAttack()}</b></div>
    <div><span>🛡️ Защита</span><b>${getDefense()}</b></div>
    <div><span>💨 Скорость</span><b>${getSpeed()}</b></div>
    <div><span>✨ Опыт</span><b>${state.xp}/${getXpNeeded()}</b></div>
  `;

  $("skillCard").innerHTML = `
    <div class="skill-title">✨ ${petData.skill}</div>
    <p>${petData.skillDesc}</p>
  `;

  if (state.pet.illness) {
    const illness = ILLNESSES[state.pet.illness];

    $("illnessCard").innerHTML = `
      <div class="illness-title">${illness.icon} ${illness.name}</div>
      <p>${illness.text}</p>
      <small>Нужно лекарство: ${SHOP_ITEMS.find(item => item.id === illness.cure).name}</small>
    `;

    $("illnessCard").classList.add("is-sick");
  } else {
    $("illnessCard").innerHTML = `
      <div class="illness-title">💚 Здоров</div>
      <p>Сейчас болезней не обнаружено.</p>
    `;

    $("illnessCard").classList.remove("is-sick");
  }
}

/* ================================
   STAGE
================================ */

function getLocationData() {
  return LOCATIONS.find(location => location.id === state.location);
}

function updateStage() {
  const location = getLocationData();
  const petData = getPetData();

  $("placeChip").textContent = `${location.emoji} ${location.name}`;
  $("timeChip").textContent = state.isNight ? "🌙 Ночь" : "☀️ День";

  $("stageScene").className = `stage-scene scene-${state.location} ${state.isNight ? "is-night" : ""}`;

  $("petWrap").innerHTML = `
    <div class="stage-pet ${state.pet.sleeping ? "is-sleeping" : ""}">
      ${petData.emoji}
    </div>
  `;

  let bubble = "Какой хороший день!";

  if (state.pet.sleeping) {
    bubble = "Хр-р-р...";
  } else if (state.pet.illness) {
    bubble = ILLNESSES[state.pet.illness].text;
  } else if (state.pet.hunger < 35) {
    bubble = "Я голоден...";
  } else if (state.pet.mood < 35) {
    bubble = "Мне немного грустно...";
  } else if (state.location === "forest") {
    bubble = "В лесу так красиво!";
  } else if (state.location === "cave") {
    bubble = "Здесь немного страшно...";
  } else if (state.location === "village") {
    bubble = "В деревне пахнет свежим хлебом!";
  }

  $("bubble").textContent = bubble;

  $("stageAmbient").innerHTML = state.isNight
    ? `<span class="star">✦</span><span class="star">✧</span><span class="star">✦</span>`
    : `<span class="cloud">☁️</span><span class="cloud">☁️</span>`;
}

function updateLocations() {
  $("locationList").innerHTML = LOCATIONS.map(location => `
    <button
      class="location-card ${state.location === location.id ? "is-active" : ""}"
      data-location="${location.id}"
      type="button"
    >
      <span class="location-emoji">${location.emoji}</span>
      <span class="location-copy">
        <strong>${location.name}</strong>
        <small>${location.desc}</small>
      </span>
    </button>
  `).join("");
}

function updateTip() {
  const tips = [
    "Корми питомца, чтобы он не грустил.",
    "Если питомец заболел, купи нужное лекарство в магазине.",
    "Мини-игры дают монеты и опыт.",
    "Ночью питомец быстрее устаёт.",
    "В пещере можно найти редкие награды.",
    "У каждого питомца свой навык."
  ];

  $("tipBox").innerHTML = `
    <div class="tip-title">💡 Совет</div>
    <p>${tips[random(0, tips.length - 1)]}</p>
  `;
}

function updateAll() {
  updateTopbar();
  updatePetPanel();
  updateStage();
  updateLocations();
  updateTip();
}

/* ================================
   ACTIONS
================================ */

function feedPet(itemId = null) {
  const foodItems = SHOP_ITEMS.filter(item => item.type === "food");
  const ownedFood = foodItems.filter(item => state.inventory[item.id]);

  if (!ownedFood.length) {
    openModal(`
      <h2>Нет еды</h2>
      <p>В рюкзаке нет угощений. Купи их в магазине.</p>
      <button class="btn btn-primary" data-modal-action="open-shop">Открыть магазин</button>
      <button class="btn btn-ghost" data-modal-action="close">Закрыть</button>
    `);
    return;
  }

  const item = itemId
    ? SHOP_ITEMS.find(product => product.id === itemId)
    : ownedFood[0];

  useInventoryItem(item.id);
  showToast(`${state.petName} съел ${item.name}`, item.emoji);
}

function playWithPet() {
  if (state.pet.sleeping) {
    showToast("Питомец спит", "😴");
    return;
  }

  changePetStats({
    mood: 18,
    hunger: -6,
    health: -2
  });

  addXp(12);
  showToast("Вы весело поиграли!", "🎾");
}

function sleepPet() {
  state.pet.sleeping = !state.pet.sleeping;

  if (state.pet.sleeping) {
    changePetStats({
      health: 25,
      mood: 8,
      hunger: -8
    });

    showToast(`${state.petName} уснул`, "😴");
  } else {
    showToast(`${state.petName} проснулся`, "☀️");
  }

  updateAll();
}

function healPet() {
  const illness = state.pet.illness;

  if (!illness) {
    showToast("Питомец здоров", "💚");
    return;
  }

  const cureId = ILLNESSES[illness].cure;

  if (!state.inventory[cureId]) {
    const cure = SHOP_ITEMS.find(item => item.id === cureId);

    openModal(`
      <h2>Нужно лекарство</h2>
      <p>У тебя нет «${cure.name}».</p>
      <button class="btn btn-primary" data-modal-action="open-shop">Купить в магазине</button>
      <button class="btn btn-ghost" data-modal-action="close">Закрыть</button>
    `);

    return;
  }

  useInventoryItem(cureId);
  showToast("Питомец вылечен!", "💊");
}

function nextTime() {
  state.hour += 2;

  if (state.hour >= 24) {
    state.hour = 0;
    state.day++;
  }

  state.isNight = state.hour >= 20 || state.hour < 6;

  const illnessDamage = state.pet.illness
    ? ILLNESSES[state.pet.illness].damage
    : 0;

  changePetStats({
    hunger: -7,
    mood: -4,
    health: -illnessDamage
  });

  if (!state.pet.illness && Math.random() < 0.18) {
    const illnessKeys = Object.keys(ILLNESSES);
    state.pet.illness = illnessKeys[random(0, illnessKeys.length - 1)];

    showToast("Питомец заболел!", "🤒");
  }

  if (state.pet.health <= 0) {
    state.pet.health = Math.floor(state.pet.maxHealth * 0.3);
    state.pet.hunger = 50;
    state.pet.mood = 50;
    state.pet.illness = null;

    showToast("Питомец отдохнул и немного восстановился", "💤");
  }

  updateAll();
}

/* ================================
   INVENTORY
================================ */

function useInventoryItem(itemId) {
  if (!state.inventory[itemId]) return false;

  const item = SHOP_ITEMS.find(product => product.id === itemId);

  if (item.type === "food") {
    changePetStats({
      hunger: item.hunger,
      mood: item.mood
    });
  }

  if (item.type === "medicine" && state.pet.illness === item.cure) {
    state.pet.illness = null;
    changePetStats({
      health: 25,
      mood: 10
    });
  }

  state.inventory[itemId]--;

  if (state.inventory[itemId] <= 0) {
    delete state.inventory[itemId];
  }

  updateAll();
  return true;
}

function openInventory() {
  const items = Object.entries(state.inventory);

  const html = items.length
    ? items.map(([itemId, count]) => {
        const item = SHOP_ITEMS.find(product => product.id === itemId);

        return `
          <div class="inventory-item">
            <span>${item.emoji} ${item.name} ×${count}</span>
            <button class="btn btn-soft btn-sm" data-use-item="${item.id}">
              Использовать
            </button>
          </div>
        `;
      }).join("")
    : `<p class="muted">Рюкзак пуст. Загляни в магазин!</p>`;

  openModal(`
    <h2>🎒 Рюкзак</h2>
    <div class="inventory-list">${html}</div>
    <button class="btn btn-ghost" data-modal-action="close">Закрыть</button>
  `);
}

/* ================================
   SHOP
================================ */

function openShop() {
  const items = SHOP_ITEMS.map(item => `
    <div class="shop-item">
      <div class="shop-item-info">
        <span class="shop-item-emoji">${item.emoji}</span>
        <div>
          <strong>${item.name}</strong>
          <small>${item.desc}</small>
        </div>
      </div>

      <button
        class="btn btn-primary btn-sm"
        data-buy-item="${item.id}"
        ${state.coins < item.price ? "disabled" : ""}
      >
        ${item.price} 🪙
      </button>
    </div>
  `).join("");

  openModal(`
    <h2>🛍️ Магазин</h2>
    <p class="muted">Монет: ${state.coins}</p>
    <div class="shop-list">${items}</div>
    <button class="btn btn-ghost" data-modal-action="close">Закрыть</button>
  `);
}

function buyItem(itemId) {
  const item = SHOP_ITEMS.find(product => product.id === itemId);

  if (state.coins < item.price) {
    showToast("Недостаточно монет", "🪙");
    return;
  }

  state.coins -= item.price;
  state.inventory[itemId] = (state.inventory[itemId] || 0) + 1;

  updateTopbar();
  openShop();
  showToast(`Куплено: ${item.name}`, item.emoji);
}

/* ================================
   MINI-GAME: MATH
================================ */

function startMathGame() {
  const level = state.level;
  const operations = level < 3 ? ["+"] : level < 6 ? ["+", "-"] : ["+", "-", "×"];

  const operation = operations[random(0, operations.length - 1)];
  const limit = 8 + level * 4;

  let a = random(2, limit);
  let b = random(2, limit);
  let answer;

  if (operation === "+") {
    answer = a + b;
  } else if (operation === "-") {
    if (b > a) [a, b] = [b, a];
    answer = a - b;
  } else {
    a = random(2, 4 + Math.floor(level / 2));
    b = random(2, 4 + Math.floor(level / 2));
    answer = a * b;
  }

  openModal(`
    <h2>🧮 Уравнения</h2>
    <p class="muted">Уровень сложности: ${state.level}</p>

    <div class="math-question">
      ${a} ${operation} ${b} = ?
    </div>

    <input id="mathInput" type="number" placeholder="Ответ">
    <button class="btn btn-primary" id="mathCheck">Проверить</button>
    <p id="mathFeedback" class="muted"></p>
    <button class="btn btn-ghost" data-modal-action="close">Закрыть</button>
  `);

  $("mathCheck").addEventListener("click", () => {
    const userAnswer = Number($("mathInput").value);

    if (userAnswer === answer) {
      let coins = 15 + state.level * 4;
      let xp = 20 + state.level * 5;

      if (getPetData().id === "rat" && Math.random() < 0.25) {
        coins *= 2;
      }

      if (getPetData().id === "fox") {
        xp += 10;
      }

      state.stats.mathWins++;
      addCoins(coins);
      addXp(xp);

      $("mathFeedback").textContent = `Верно! +${coins} монет, +${xp} опыта.`;
      showToast("Уравнение решено!", "🧮");

      setTimeout(() => {
        closeModal();
        startMathGame();
      }, 1200);
    } else {
      $("mathFeedback").textContent = "Неверно. Попробуй ещё раз!";
    }
  });
}

/* ================================
   MINI-GAME: DUNGEON
================================ */

function startDungeonGame() {
  const pet = getPetData();
  const rooms = 5;
  let room = 1;
  let reward = 0;

  function renderRoom() {
    const enemy = ENEMIES[random(0, ENEMIES.length - 1)];
    const enemyHp = enemy.hp + state.level * 8;

    openModal(`
      <h2>🗝️ Данж · комната ${room}/${rooms}</h2>
      <p class="muted">${getLocationData().name}</p>

      <div class="battle-card">
        <div class="battle-side">
          <span class="battle-emoji">${pet.emoji}</span>
          <strong>${state.petName}</strong>
          <small>❤️ ${state.pet.health}/${state.pet.maxHealth}</small>
        </div>

        <span class="battle-vs">VS</span>

        <div class="battle-side">
          <span class="battle-emoji">${enemy.emoji}</span>
          <strong>${enemy.name}</strong>
          <small>❤️ <span id="enemyHp">${enemyHp}</span></small>
        </div>
      </div>

      <div class="battle-actions">
        <button class="btn btn-primary" id="dungeonAttack">Атаковать</button>
        <button class="btn btn-soft" id="dungeonSearch">Осмотреться</button>
      </div>

      <p id="dungeonFeedback" class="muted"></p>
      <button class="btn btn-ghost" data-modal-action="close">Выйти</button>
    `);

    $("dungeonAttack").addEventListener("click", () => {
      const damage = getAttack() + random(2, 10);
      const currentHp = Number($("enemyHp").textContent) - damage;

      $("enemyHp").textContent = Math.max(0, currentHp);
      $("dungeonFeedback").textContent = `Ты нанёс ${damage} урона!`;

      if (currentHp <= 0) {
        const coins = 12 + state.level * 5;
        reward += coins;

        if (pet.id === "hamster" && Math.random() < 0.3) {
          reward += coins;
        }

        room++;

        if (room > rooms) {
          state.stats.dungeonWins++;
          addCoins(reward);
          addXp(45 + state.level * 8);

          openModal(`
            <h2>🏆 Данж пройден!</h2>
            <p>Ты собрал ${reward} монет.</p>
            <button class="btn btn-primary" data-modal-action="close">Отлично!</button>
          `);

          showToast("Данж пройден!", "🏆");
        } else {
          showToast("Враг побеждён!", "⚔️");
          setTimeout(renderRoom, 700);
        }
      }
    });

    $("dungeonSearch").addEventListener("click", () => {
      const found = random(3, 12 + state.level * 2);
      reward += found;
      addCoins(found);

      $("dungeonFeedback").textContent = `Ты нашёл ${found} монет!`;
      showToast(`Найдено ${found} монет`, "🪙");
    });
  }

  renderRoom();
}

/* ================================
   MINI-GAME: ARENA
================================ */

function startArenaGame() {
  const pet = getPetData();
  const enemy = ARENA_ENEMIES[random(0, ARENA_ENEMIES.length - 1)];

  let enemyHealth = enemy.hp + state.level * 10;
  let playerHealth = state.pet.health;
  let turn = 1;

  function renderArena() {
    openModal(`
      <h2>⚔️ Арена</h2>
      <p class="muted">Ход ${turn}</p>

      <div class="battle-card">
        <div class="battle-side">
          <span class="battle-emoji">${pet.emoji}</span>
          <strong>${state.petName}</strong>
          <small>❤️ <span id="playerHp">${playerHealth}</span>/${state.pet.maxHealth}</small>
        </div>

        <span class="battle-vs">VS</span>

        <div class="battle-side">
          <span class="battle-emoji">${enemy.emoji}</span>
          <strong>${enemy.name}</strong>
          <small>❤️ <span id="arenaEnemyHp">${enemyHealth}</span></small>
        </div>
      </div>

      <div class="battle-actions">
        <button class="btn btn-primary" id="arenaAttack">Атака</button>
        <button class="btn btn-soft" id="arenaDefend">Защита</button>
        <button class="btn btn-soft" id="arenaHeal">Зелье</button>
      </div>

      <p id="arenaFeedback" class="muted"></p>
      <button class="btn btn-ghost" data-modal-action="close">Выйти</button>
    `);

    $("arenaAttack").addEventListener("click", () => {
      let damage = getAttack() + random(3, 12);

      if (pet.id === "dragon" && Math.random() < 0.3) {
        damage += 10;
      }

      enemyHealth -= damage;
      $("arenaEnemyHp").textContent = Math.max(0, enemyHealth);

      $("arenaFeedback").textContent = `Ты нанёс ${damage} урона!`;

      if (enemyHealth <= 0) {
        state.stats.arenaWins++;

        const coins = 30 + state.level * 8;
        addCoins(coins);
        addXp(50 + state.level * 10);

        if (pet.id === "dog" && Math.random() < 0.3) {
          changePetStats({ health: 15 });
        }

        openModal(`
          <h2>🏆 Победа!</h2>
          <p>${state.petName} победил ${enemy.name}!</p>
          <p>Награда: ${coins} монет.</p>
          <button class="btn btn-primary" data-modal-action="close">Отлично!</button>
        `);

        showToast("Победа на арене!", "🏆");
        return;
      }

      setTimeout(enemyTurn, 700);
    });

    $("arenaDefend").addEventListener("click", () => {
      const heal = 8 + getDefense();
      playerHealth = Math.min(state.pet.maxHealth, playerHealth + heal);

      $("playerHp").textContent = playerHealth;
      $("arenaFeedback").textContent = `Ты восстановил ${heal} здоровья.`;

      setTimeout(enemyTurn, 700);
    });

    $("arenaHeal").addEventListener("click", () => {
      if (!state.inventory.energyPotion) {
        $("arenaFeedback").textContent = "Нет зелья энергии.";
        return;
      }

      state.inventory.energyPotion--;
      playerHealth = Math.min(
        state.pet.maxHealth,
        playerHealth + SHOP_ITEMS.find(item => item.id === "energyPotion").heal
      );

      $("playerHp").textContent = playerHealth;
      $("arenaFeedback").textContent = "Зелье использовано!";

      setTimeout(enemyTurn, 700);
    });

    function enemyTurn() {
      let damage = enemy.attack + random(1, 8) - Math.floor(getDefense() / 3);
      damage = Math.max(3, damage);

      if (pet.id === "cat" && Math.random() < 0.25) {
        $("arenaFeedback").textContent = "Ты уклонился от атаки!";
      } else {
        playerHealth -= damage;
        $("playerHp").textContent = Math.max(0, playerHealth);
        $("arenaFeedback").textContent = `Противник нанёс ${damage} урона!`;
      }

      turn++;

      if (playerHealth <= 0) {
        state.pet.health = Math.max(10, Math.floor(state.pet.maxHealth * 0.25));

        openModal(`
          <h2>😵 Поражение</h2>
          <p>${state.petName} устал, но обязательно станет сильнее.</p>
          <button class="btn btn-primary" data-modal-action="close">Продолжить</button>
        `);

        updateAll();
        return;
      }

      renderArena();
    }
  }

  renderArena();
}

/* ================================
   MENU
================================ */

function openMenu() {
  openModal(`
    <h2>⚙️ Меню</h2>

    <div class="menu-list">
      <button class="btn btn-soft" data-menu-action="save">💾 Сохранить игру</button>
      <button class="btn btn-soft" data-menu-action="rename">✏️ Переименовать питомца</button>
      <button class="btn btn-soft" data-menu-action="reset">🗑️ Начать заново</button>
      <button class="btn btn-ghost" data-modal-action="close">Закрыть</button>
    </div>
  `);
}

function renamePet() {
  const newName = prompt("Введите новое имя питомца:", state.petName);

  if (newName && newName.trim()) {
    state.petName = newName.trim().slice(0, 16);
    updateAll();
    showToast("Имя изменено", "✏️");
  }
}

function resetGame() {
  if (!confirm("Точно начать игру заново? Прогресс будет удалён.")) return;

  localStorage.removeItem(SAVE_KEY);
  location.reload();
}

/* ================================
   EVENTS
================================ */

document.addEventListener("click", event => {
  const target = event.target.closest("[data-select-pet], [data-action], [data-location], [data-minigame], [data-buy-item], [data-use-item], [data-modal-action], [data-menu-action]");

  if (!target) return;

  if (target.dataset.selectPet) {
    selectPet(target.dataset.selectPet);
  }

  if (target.dataset.action) {
    const action = target.dataset.action;

    if (action === "feed") feedPet();
    if (action === "play") playWithPet();
    if (action === "sleep") sleepPet();
    if (action === "heal") healPet();
  }

  if (target.dataset.location) {
    const locationId = target.dataset.location;
    const location = LOCATIONS.find(item => item.id === locationId);

    state.location = locationId;

    if (locationId !== "home" && !state.storyProgress[locationId]) {
      state.storyProgress[locationId] = true;
      addXp(25);
      showToast(`Открыта локация: ${location.name}`, location.emoji);
    }

    updateAll();
    showToast(`Вы перешли: ${location.name}`, location.emoji);
  }

  if (target.dataset.minigame) {
    const game = target.dataset.minigame;

    if (game === "math") startMathGame();
    if (game === "dungeon") startDungeonGame();
    if (game === "arena") startArenaGame();
  }

  if (target.dataset.buyItem) {
    buyItem(target.dataset.buyItem);
  }

  if (target.dataset.useItem) {
    useInventoryItem(target.dataset.useItem);
    openInventory();
  }

  if (target.dataset.modalAction) {
    const action = target.dataset.modalAction;

    if (action === "close") closeModal();
    if (action === "open-shop") openShop();
  }

  if (target.dataset.menuAction) {
    const action = target.dataset.menuAction;

    if (action === "save") {
      saveGame();
      showToast("Игра сохранена", "💾");
    }

    if (action === "rename") {
      closeModal();
      renamePet();
    }

    if (action === "reset") {
      resetGame();
    }
  }
});

$("btnNewGame").addEventListener("click", goToSelect);
$("btnBackStart").addEventListener("click", goToStart);
$("btnContinue").addEventListener("click", continueGame);
$("btnStartGame").addEventListener("click", startNewGame);

$("btnInventory").addEventListener("click", openInventory);
$("btnShop").addEventListener("click", openShop);
$("btnMenu").addEventListener("click", openMenu);
$("btnRename").addEventListener("click", renamePet);

$("brandBtn").addEventListener("click", () => {
  if (state.started) {
    goToGame();
  } else {
    goToStart();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* ================================
   START
================================ */

function initGame() {
  const hasSave = loadGame();

  $("btnContinue").disabled = !hasSave;
  $("heroArt").innerHTML = `
    <div class="hero-pets">
      <span>🐶</span>
      <span>🐱</span>
      <span>🐹</span>
      <span>🐉</span>
      <span>🦇</span>
      <span>🦊</span>
    </div>
  `;

  if (hasSave && state.started) {
    goToGame();
  } else {
    goToStart();
  }
}

initGame();