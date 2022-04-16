//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "নদীর এপার কহে ছাড়িয়া নিশ্বাস, ওপারেতে সর্বসুখ আমার বিশ্বাস। নদীর ওপার বসি দীর্ঘশ্বাস ছাড়ে; কহে, যাহা কিছু সুখ সকলি ওপারে।",
      author: "রবীন্দ্রনাথ ঠাকুর"
    },
    {
      quote:
        "মানুষ মরে গেলে পচে যায়, বেঁচে থাকলে বদলায়, কারণে-অকারণে বদলায়",
      author: "মুনীর চৌধুরী"
    },
    {
      quote:
        "ঈশ্বর আমাকে আমার বন্ধুদের থেকে বাঁচান। আমি নিজেকে আমার শত্রুদের হাত থেকে রক্ষা করতে সমর্থ।",
      author: "ক্লাউডে লুইস হেক্টর "
    },
    {
      quote: "কোন কিছুর মূল্য ততখানিই, যতখানি জীবন তুমি তার জন্যে দিতে প্রস্তুত।",
      author: "ডেভিড থ্রুয়েও"
    },
    {
      quote: 
      "হায় আছারী...... হায় আছারী......",
      author: "সিদি সাদ্দাম হোসেন মুন্সীগঞ্জী"
    },
    {
      quote:
        "আপনি যদি কোডিংয়ে ভালো হতে চান, তাহলে অন্যের কোড চুরি করে এডিট করুন।",
      author: "ইফতেখার শুভ"
    }
  ];

 const btn = document.querySelector("button");
 const text =  document.querySelector("#quote");
 const author = document.querySelector(".author");
 btn.addEventListener("click", function() {
     let index = Math.floor(Math.random() * quotes.length);
     text.textContent = quotes[index].quote;
     author.textContent = quotes[index].author;

 })
})();
