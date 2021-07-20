const loader = new Loader({
  apiKey: "AIzaSyDh2BkK23_KbpbNx0ccK30ETddsmt66ikQ",
  version: "weekly",
});

export const map = loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -2.19616, lng: -79.88621 },
    zoom: 4,
  });
});
