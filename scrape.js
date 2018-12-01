#!/usr/bin/env node
/**
 * @flow
 * @format
 */

const rp = require("request-promise");
const $ = require("cheerio");
const fs = require("fs");

const options = {
  uri: `https://pokemondb.net/pokedex/`,
  transform: function(body) {
    return $.load(body);
  }
};

const output = {};

async function req(number) {
  const opt = {
    ...options,
    uri: `https://pokemondb.net/pokedex/${number}`
  };
  return rp(opt)
    .then($response => {
      const entry = {
        name: $response("h1").text(),
        number: parseInt(
          $response("strong")
            .first()
            .text(),
          10
        ),
        types: $response(".vitals-table")
          .first()
          .find(".type-icon")
          .map((_, el) =>
            $(el)
              .text()
              .toLowerCase()
          )
          .get(),
        affinities: (function iife() {
          return $response(".type-table")
            .slice(0, 2)
            .find("td")
            .map((_, el) => {
              const $el = $(el);
              const textToPercentage = {
                "4": "400",
                "2": "200",
                "½": "50",
                "¼": "25",
                "0": "0"
              };
              return {
                type: $el
                  .attr("title")
                  .split(" ")[0]
                  .toLowerCase(),
                value: textToPercentage[$el.text()]
              };
            })
            .get()
            .filter(tuple => tuple.value)
            .reduce((acc, val) => {
              acc[val.type] = val.value;
              return acc;
            }, {});
        })()
      };

      output[String(entry.number)] = entry;
    })
    .catch(err => {
      console.log(err);
    });
}

(async function foo() {
  for (let i of [...Array(151).keys()]) {
    await req(i + 1);
  }
  fs.writeFileSync("foobar.js", JSON.stringify(output));
})();
