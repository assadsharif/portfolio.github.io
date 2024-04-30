const generateRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const collectiveWisdom = {
  signInfo: ["star", "moon", "galaxy", "sun", "comet"],
  fortuneOutput: ["terrible luck", "bad luck", "good luck", "great luck"],
  advice: ["go out and eat something", "dont read anything", "trust on me"],
};

let personalWisdom = [];

for (let prop in collectiveWisdom) {
  let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);
  switch (prop) {
    case "signInfo":
      personalWisdom.push(
        `Your sign right now is a "${collectiveWisdom[prop][optionIdx]}".`
      );
      break;
    case "fortuneOutput":
      personalWisdom.push(
        `You are having: "${collectiveWisdom[prop][optionIdx]}".`
      );
      break;
    case "advice":
      personalWisdom.push(
        `You should: "${collectiveWisdom[prop][optionIdx]}".`
      );
      break;
    default:
      personalWisdom.push("There is not enough info.");
  }
}

function formatWisdom(wisdom) {
  // Add some ASCII here?
  // Add in more symbols to the array? like emojies or what not?
  const formatted = personalWisdom.join("\n");
  console.log(formatted);
}

formatWisdom(personalWisdom);
console.log(formatWisdom);
