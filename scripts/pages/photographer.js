// Fonction pour récupérer l'ID du photographe à partir de l'URL
export async function getPhotographerIdFromURL() {
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const params = new URLSearchParams(url.search);
  return params.get("id");
}
