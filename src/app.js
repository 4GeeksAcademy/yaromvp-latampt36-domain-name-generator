let pronoun = ["the", "our", "your", "my"];
let adj = ["great", "big", "small", "winner"];
let noun = ["jogger", "racoon", "apple", "shop"];
let ext = [".com", ".org", ".net", ".pe"];

function domainNameGenerator() {
  let newdomain = "";
  let index = 0;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          newdomain = pronoun[l] + adj[k] + noun[j] + ext[i];
          index += 1;
          console.log(index + ". " + newdomain);
        }
      }
    }
  }
}

domainNameGenerator();
