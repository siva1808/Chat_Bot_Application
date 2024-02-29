import moment from "moment";

export const analyze = (text) => {
  if (
    text.includes("hi") ||
    text.includes("hai") ||
    text.includes("hello") ||
    text.includes("Hi") ||
    text.includes("Hai") ||
    text.includes("Hello") ||
    text.includes("hii")
  )
    return "Hi, how can i help you?";
  else if (text.includes("date")) return moment().format("MMMM Do YYYY");
  else if (text.includes("time")) return moment().format("h:mm:ss a");
  else if (text.includes("google link")) return "https://www.google.com";
  else if (text.includes("intrest")) return "Bank intrest rate is 8.7";
  else if (text.includes("thank you")) return "Thanks for contacting.";
  else if (text.includes("your name")) return "I am your chat-bot😊.";
  else if (
    text.includes("love you") ||
    text.includes("i lov u") ||
    text.includes("I love you") ||
    text.includes("Love You")
  )
    return "Aww, thank you! That's really sweet of you to say.😍";

  return "I can't get you. Can you rephrase the message";
};
