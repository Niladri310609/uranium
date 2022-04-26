const axios = require("axios");

let getsessions = async function (req, res) {
  try {
    let district_id = req.query.district_id;
    let date = req.query.date;
    console.log(`query params are: ${district_id} ${date}`);
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
////////////////////////////////////////////////////////////////////////////////////////////
const getTemp = async function (req, res) {
  try {
    let q = req.query.q;
    let appid = req.query.appid;
    console.log(`query params are: ${q} ${appid}`);
    let options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${appid}`,
    };
    let result = await axios(options);
    console.log(result);

    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
///////////////////////////////////////////////////////////////////////////////////////////////////
const getcity = async function (req, res) {
  try {
    let key = req.query.key;

    let e = [];
    let a = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    for (let i = 0; i < a.length; i++) {
      let data = a[i];

      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${data}&appid=${key}`,
      };
      let result = await axios(options);
      let m = {
        city: `${data}`,
        temp: `${result.data.main.temp}`,
      };
      e.push(m);
    }
    let n = e.sort(function (a, b) {
      return a.temp - b.temp;
    });

    res.status(200).send({ msg: n, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};
//////////////////////////////////////////////////////////////////////////////////////////
const getmeme = async function (req, res) {
  try {
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let template_id = req.query.template_id;
    let username = req.query.username;
    let password = req.query.password;

    var options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getsessions = getsessions;
module.exports.getTemp = getTemp;
module.exports.getcity = getcity;
module.exports.getmeme = getmeme;
