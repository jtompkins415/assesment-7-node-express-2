
const timeWord = (hours, minutes) => {
    const words = [
        "", "one", "two", "three", "four", "five", "six", "seven",
        "eight", "nine", "ten", "eleven", "twelve", "thirteen", 
        "fourteen", "quarter", "sixteen", "seventeen", "eighteen",
        "nineteen", "twenty", "twenty one", "twenty two", 
        "twenty three", "twenty four", "twenty five", "twenty six",
        "twenty seven", "twenty eight", "twenty nine", "half",
      ];
    
      if (minutes === 0) {
        return `${words[hours]} o' clock`;
      } else if (1 <= minutes && minutes <= 30) {
        let str;
        if (minutes >= 10) str = minutes !== 15 && minutes !== 30 ? " minutes" : "";
        else str = " minute";
        return `${words[minutes]}${str} past ${words[hours]}`;
      } else {
        const str1 = 60 - minutes !== 15 ? " minutes" : "";
        const str2 = hours < 12 ? words[hours + 1] : words[1];
        return `${words[60 - minutes]}${str1} to ${str2}`;
      }

}

export default timeWord