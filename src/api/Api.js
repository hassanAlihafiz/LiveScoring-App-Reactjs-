const API_KEY = "Lxjenw9nr8YpE5fzVXSj0Z4vFRE3";

const getMatches = () => {
  const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("ERROR", err));
};

//load Specific Match Details
const MatchDetails = (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((err) => console.log("ERROR", err));
};

export { getMatches, MatchDetails };
