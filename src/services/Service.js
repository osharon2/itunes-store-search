const API_URL = "https://itunes.apple.com";
export function searchByRequests(term, media) {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/search?term=${term}&media=${media}`).then(response => {
      response
        .json()
        .then(response => {
          resolve(response.results);
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
}
export function lookUpById(id) {
  return new Promise((resolve, reject) => {
    fetch(`${API_URL}/lookup?id=${id}`).then(response => {
      response
        .json()
        .then(response => {
          resolve(response.results[0]);
        })
        .catch(err => {
          console.log(err);
        });
    });
  });
}
