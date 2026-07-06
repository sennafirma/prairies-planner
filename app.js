const source = {
  daily: {
    do: [
      "Check the week's on-site events at reception or in the Riviera Villages app.",
      "Book or check the boat to Saint-Tropez before the day gets busy.",
      "Go to Port Grimaud market early on Thursday or Sunday.",
      "Choose one lazy on-site day: beach, pool, no car.",
      "Walk the beach before 9:00 for quiet light and cooler air.",
      "Try one water activity if conditions are good.",
      "Reserve a beach or resort restaurant if you want a low-effort dinner.",
      "Ask reception whether fireworks, concerts, or night markets are happening this week."
    ],
    explore: [
      "Port Grimaud canals by water taxi or electric boat.",
      "Grimaud medieval village and castle viewpoint.",
      "Saint-Tropez by boat: old port, La Citadelle, Place des Lices.",
      "The church/viewpoint in Port Grimaud.",
      "A local vineyard or inland village if the coast is too crowded.",
      "Evening walk in Port Grimaud after the heat drops."
    ],
    know: [
      "Port Grimaud was built from marshland from 1966 onward by architect Francois Spoerry.",
      "Port Grimaud is known as the Little Venice of Provence.",
      "The campsite is a beach base facing Saint-Tropez, so boats often beat cars.",
      "The market rhythm matters: Thursday/Sunday mornings are prime Port Grimaud market windows.",
      "The old Grimaud village gives the historical context that Port Grimaud does not.",
      "In peak season, plan around heat and traffic more than distance."
    ]
  },
  views: {
    agenda: {
      title: "Simple Agenda Shape",
      kicker: "Leave room for beach time",
      cards: [
        {
          label: "First move",
          title: "Arrival reset",
          text: "Photograph the resort map, ask for weekly events, check market days, and save the accommodation pin in maps.",
          type: "anchor",
          tags: ["Arrival", "Low effort"]
        },
        {
          label: "Market morning",
          title: "Port Grimaud",
          text: "Go Thursday or Sunday morning from April to October. Use it for fruit, bread, cheese, picnic supplies, and small gifts.",
          type: "anchor",
          tags: ["Thursday", "Sunday", "Morning"]
        },
        {
          label: "Boat day",
          title: "Saint-Tropez without the car",
          text: "Treat Saint-Tropez as a boat outing: old port, La Citadelle, Place des Lices, tarte tropezienne, then boat back.",
          type: "anchor",
          tags: ["Boat", "Half day"]
        },
        {
          label: "Quiet day",
          title: "Beach, pool, no car",
          text: "Pick at least one day where the plan is simply beach before crowds, pool, casual lunch, and an easy dinner.",
          type: "nearby",
          tags: ["Rest", "On site"]
        }
      ]
    },
    do: {
      title: "Things To Do",
      kicker: "Shortlist",
      cards: [
        {
          label: "Must do",
          title: "Port Grimaud canals",
          text: "Walk, water taxi, or electric boat through the canal town known as the Little Venice of Provence.",
          type: "anchor",
          tags: ["Canals", "Easy"]
        },
        {
          label: "Must do",
          title: "Grimaud village",
          text: "Old streets, castle ruins, windmill, and a viewpoint over the gulf and inland hills.",
          type: "anchor",
          tags: ["History", "View"]
        },
        {
          label: "Nearby",
          title: "Water activities",
          text: "Tourism pages list windsurfing, water skiing, scuba diving, and beach activities. Check availability on arrival.",
          type: "nearby",
          tags: ["Beach", "Check locally"]
        },
        {
          label: "Avoid",
          title: "Peak-hour car trips",
          text: "Driving into Saint-Tropez at peak hour can turn distance into logistics. Boat first, car only when it makes sense.",
          type: "context",
          tags: ["Traffic", "Summer"]
        }
      ]
    },
    food: {
      title: "Food And Markets",
      kicker: "Practical rhythm",
      cards: [
        {
          label: "Market",
          title: "Port Grimaud morning",
          text: "Thursday and Sunday mornings from April to October according to Grimaud Tourism. Go early for heat and crowds.",
          type: "anchor",
          tags: ["Fruit", "Bread", "Picnic"]
        },
        {
          label: "Try",
          title: "Tarte tropezienne",
          text: "Best paired with a Saint-Tropez boat day or a slow coffee stop near the old port.",
          type: "nearby",
          tags: ["Sweet", "Saint-Tropez"]
        },
        {
          label: "Easy",
          title: "Beach lunch",
          text: "Heat-friendly default: salad, fruit, cold drinks, ice cream, and water in the accommodation.",
          type: "nearby",
          tags: ["Simple", "Hot days"]
        },
        {
          label: "Check",
          title: "Resort restaurants",
          text: "Regional listings mention beach and pool-side options. Confirm opening days and booking needs when on site.",
          type: "context",
          tags: ["Book ahead", "On site"]
        }
      ]
    },
    history: {
      title: "Local Context",
      kicker: "Why the place feels this way",
      cards: [
        {
          label: "Port Grimaud",
          title: "Modern canal town",
          text: "Built from marshland from 1966 onward by architect Francois Spoerry, mixing canal access with Provençal materials and color.",
          type: "context",
          tags: ["1966", "Architecture"]
        },
        {
          label: "Grimaud",
          title: "Older hill village",
          text: "The medieval village, castle, windmill, vineyards, beaches, and Port Grimaud all sit inside one commune.",
          type: "context",
          tags: ["Medieval", "Viewpoint"]
        },
        {
          label: "Saint-Tropez",
          title: "Close by water",
          text: "It is nearby across the bay, but summer road traffic can make it feel farther. That is why the boat is part of the plan.",
          type: "context",
          tags: ["Bay", "Boat"]
        },
        {
          label: "Mental map",
          title: "Beach base, canal town, old village",
          text: "Les Prairies is the base, Port Grimaud is the playful canal town, and Grimaud village is the historical root.",
          type: "anchor",
          tags: ["Orientation"]
        }
      ]
    },
    packing: {
      title: "Packing Prompts",
      kicker: "Public-safe checklist",
      cards: [
        {
          label: "Heat",
          title: "Beach and sun",
          text: "Swimwear, sunscreen, after-sun, hats, sunglasses, beach towels if needed, water bottles, and light sun cover.",
          type: "nearby",
          tags: ["Beach", "Sun"]
        },
        {
          label: "Campsite",
          title: "Small practical things",
          text: "Laundry bag, detergent tabs, drying clips, reusable shopping bags, first aid, mosquito repellent, chargers, power bank, torch.",
          type: "nearby",
          tags: ["Practical"]
        },
        {
          label: "Outings",
          title: "Walk and boat ready",
          text: "Comfortable shoes, small day bag, thin layer for boat wind or evenings, and enough phone storage for photos.",
          type: "anchor",
          tags: ["Walking", "Boat"]
        },
        {
          label: "Verify privately",
          title: "Booking-dependent items",
          text: "Linen, towels, final cleaning, kid equipment, and barbecue rules depend on the booking. Keep those details outside this public app.",
          type: "context",
          tags: ["Private", "Check"]
        }
      ]
    }
  },
  links: [
    ["Riviera Villages resort page", "https://en.riviera-villages.com/Les-Prairies-de-la-Mer/Le-Resort"],
    ["Grimaud Tourism accommodation page", "https://www.visitgrimaud.co.uk/plan/accommodations/les-prairies-de-la-mer-grimaud-en-3018011/"],
    ["Port Grimaud history and activities", "https://www.visitgrimaud.co.uk/discover/port-grimaud-a-unique-lakeside-town/"],
    ["Golfe de Saint-Tropez Tourism", "https://www.golfe-saint-tropez-information.com/en/villages-stations/grimaud"],
    ["Provence-Alpes-Cote d'Azur Tourism listing/events", "https://provence-alpes-cotedazur.com/en/plan-your-stay/accommodation/all-accommodation/campings/les-prairies-de-la-mer-grimaud-en-2855072/"],
    ["France Today 48h Port Grimaud guide", "https://francetoday.com/travel/48-hours-in-port-grimaud-var/"]
  ]
};

const suggestionEl = document.querySelector("#dailySuggestion");
const contentEl = document.querySelector("#content");
const linkEl = document.querySelector("#officialLinks");
const tabs = [...document.querySelectorAll(".tab")];

const dayIndex = () => {
  const start = new Date("2026-01-01T00:00:00");
  const today = new Date();
  return Math.floor((today - start) / 86400000);
};

const pick = (items, offset = 0) => items[(dayIndex() + offset) % items.length];

function renderDaily() {
  const items = [
    ["Do", pick(source.daily.do)],
    ["Explore", pick(source.daily.explore, 2)],
    ["Know", pick(source.daily.know, 4)]
  ];

  suggestionEl.innerHTML = items.map(([label, text]) => `
    <article class="suggestion">
      <strong>${label}</strong>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderView(name) {
  const view = source.views[name];
  contentEl.innerHTML = `
    <div class="section-head">
      <div>
        <p class="eyebrow">${view.kicker}</p>
        <h2>${view.title}</h2>
      </div>
    </div>
    <div class="card-grid">
      ${view.cards.map(card => `
        <article class="item-card" data-type="${card.type}">
          <div>
            <strong>${card.label}</strong>
            <h3>${card.title}</h3>
          </div>
          <p class="meta">${card.text}</p>
          <div class="chip-row">
            ${card.tags.map(tag => `<span class="chip">${tag}</span>`).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderLinks() {
  linkEl.innerHTML = source.links.map(([label, href]) => `
    <a href="${href}" rel="noreferrer" target="_blank">
      <span>${label}</span>
      <span>Open</span>
    </a>
  `).join("");
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(button => button.classList.toggle("is-active", button === tab));
    renderView(tab.dataset.view);
  });
});

renderDaily();
renderView("agenda");
renderLinks();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}
