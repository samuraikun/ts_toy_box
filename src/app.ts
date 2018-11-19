import * as c3 from "c3";

const chart = c3.generate({
  bindto: "#chart",
  data: {
    type: "donut",
    // tslint:disable-next-line:object-literal-sort-keys
    columns: [["good", 50], ["bad", 50]]
  },
  donut: {
    title: "Preact fast?"
  }
});

setTimeout(() => {
  chart.load({
    columns: [["good", 30], ["bad", 30], ["best", 30]]
  });
}, 3000);

setTimeout(() => {
  chart.unload({
    ids: "best"
  });
}, 5000);
