const { Botometer } = require("botometer");
 
const botometer = new Botometer({
  consumerKey: "aB7JYAQGSJ0N8RSeUepRnpkpo",
  consumerSecret: "K9GriFk0iTsGihEODTpHhtqCeZoeuj4suwFskn2ghuecjrfeps",
  accessToken: "1569307940443545602-szyycVG6K3az9evyWmxQeomjJo6Dnb",
  accessTokenSecret: "J73I10obcpBX4QiDmW2H315JW4TF8w06rxVWwxSxdQlhM",
  rapidApiKey: "ae92546582mshacaa08852bc7c87p135209jsn655208c2edca",
  supressLogs: false, // Not required. Defaults to true
});
 
async function run() {
  const results = await botometer.getScores(["@aandreyluiz"]);
 
  console.log(results);
}
 
run();