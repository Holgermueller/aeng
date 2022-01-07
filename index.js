$(document).ready(() => {
  const quotes = [
    {
      id: "1",
      quoteText:
        "When you start to doubt yourself the real world will eat you alive.",
      speaker: "Henry Rollins",
    },
    {
      id: "2",
      quoteText:
        "Strength is the product of struggle, you must do what others don't to achieve what others won't",
      speaker: "Henry Rollins",
    },
    {
      id: "3",
      quoteText: "You need a little bit of insanity to do great things.",
      speaker: "Henry Rollins",
    },
    {
      id: "4",
      quoteText:
        "No such thing as spare time, no such thing as free time, no such thing as down time. All you got is life time. Go.",
      speaker: "Henry Rollins",
    },
    {
      id: "5",
      quoteText:
        "Do not waste time with normal people. They are a plague and will only slow you down.",
      speaker: "Henry Rollins",
    },
    {
      id: "6",
      quoteText:
        "Being an artist is dragging your innermost feelings out, giving a piece of yourself, no matter inwhich art form, in which medium.",
      speaker: "Henry Rollins",
    },
    {
      id: "7",
      quoteText: "It's sad when someone you know becomes someone you knew.",
      speaker: "Henry Rollins",
    },
    {
      id: "8",
      quoteText:
        "I believe that one defines oneself by reinventionn. To not be like your parents. To not be like your friends. To be yourself. To cut yourself out of stone.",
      speaker: "Henry Rollins",
    },
  ];

  function loadRandomQuote() {
    let quoteToDisplay = quotes[Math.floor(Math.random() * quotes.length)];

    $("#text").text('"' + quoteToDisplay.quoteText + '"');

    $("#author").text("- " + quoteToDisplay.speaker);
  }
  loadRandomQuote();

  $(document).on("click", "#new-quote", () => {
    let quoteToDisplay = quotes[Math.floor(Math.random() * quotes.length)];

    $("#text").text('"' + quoteToDisplay.quoteText + '"');

    $("#author").text("- " + quoteToDisplay.speaker);
  });

  $(document).on("click", "#tweet-quote", () => {
    let quoteToShare = $("#text").text().replace(/\s/g, "+");
    let authorToShare = $("#author").text().replace(/\s/g, "+");

    let tweetURL =
      "https://twitter.com/intent/tweet?text=" +
      quoteToShare +
      " -" +
      authorToShare;

    $("#tweet-quote").attr("href", tweetURL);
  });
});
