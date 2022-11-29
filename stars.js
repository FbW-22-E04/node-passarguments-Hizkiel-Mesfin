module.exports = function (num = 10, str = "hi") {
  let stars = "";
  for (let i = 0; i < num; i++) {
    stars += "*";
  }

  console.log(stars);
  console.log(str);
  console.log(stars);
};
