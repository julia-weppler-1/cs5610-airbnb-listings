function MainModule(listingsID = "#listings") {
  const me = {};

  const listingsElement = document.querySelector(listingsID);
  let currentListings = [];
  let currentView = "normal";

  function getListingCodeNormal(listing) {
    const amenities = JSON.parse(listing.amenities).join(", ");
    return `<div class="col-4">
    <div class="listing card h-100">
      <img
        src="${listing.picture_url}"
        class="card-img-top"
        alt="AirBNB Listing"
      />
      <div class="card-body">
        <h5 class="card-title">${listing.name}</h5>
        <div>${listing.price}</div>
        <div>
          <img
            src="${listing.host_picture_url}"
            alt="${listing.host_name}"
            class="host-photo"
          />
          ${listing.host_name}
        </div>
        <p class="card-text description">${listing.description}</p>
        <div class="amenities small text-muted">${amenities}</div>
      </div>
    </div>
  </div>
  `;
  }

  function getListingCodeCompact(listing) {
    return `<div class="col-3 mb-3">
      <div class="listing-compact position-relative overflow-hidden rounded">
        <img
          src="${listing.picture_url}"
          alt="${listing.name}"
          class="img-fluid w-100 compact-img"
        />
        <div class="listing-compact-overlay">
          <div class="text-white small fw-bold mb-1">${listing.name}</div>
          <div class="text-white-50 compact-host">Host: ${listing.host_name}</div>
          <div class="text-white fw-bold compact-price">${listing.price}</div>
        </div>
      </div>
    </div>
    `;
  }

  function redraw(listings) {
    currentListings = listings;
    listingsElement.className = "row";
    const cardFn =
      currentView === "normal" ? getListingCodeNormal : getListingCodeCompact;
    listingsElement.innerHTML = listings.map(cardFn).join("\n");
  }

  function setView(view) {
    currentView = view;
    document.querySelectorAll(".view-toggle-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.view === view);
    });
    redraw(currentListings);
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();
    me.redraw(listings.slice(0, 50));
  }

  document.querySelectorAll(".view-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  me.redraw = redraw;
  me.loadData = loadData;
  me.setView = setView;

  return me;
}

const main = MainModule();
main.loadData();
