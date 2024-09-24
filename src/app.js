let pronoun = ["the", "our", "your", "my"];
let adj = ["great", "big", "small", "winner"];
let noun = ["jogger", "racoon", "apple", "shop"];
let ext = [".com", ".org", ".net", ".pe"];

function domainNameGenerator() {
  let newDomain = "";
  let numerador = 0;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          newDomain = pronoun[l] + adj[k] + noun[j] + ext[i];
          numerador += 1;
          console.log(numerador + ". " + newDomain);
        }
      }
    }
  }
}

domainNameGenerator();
