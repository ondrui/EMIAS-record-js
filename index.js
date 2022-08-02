//import fetch from 'node-fetch';
import axios from 'axios';

const url =
  'https://www.mos.ru/api/doctor-record/v1/doctors?omsNumber%5B0%5D=7792289788001374&birthDate%5B0%5D=2017-07-11&specialityId=712&appointmentId%5B0%5D=464349210548';

const cookie =
  'ACS-SESSID=sotsaiejtif4lif6f8hubp5ktk; PHPSESSID=p17pcsuo658dtu6dl1iu5dvtkc; SL_GWPT_Show_Hide_tmp=1; SL_G_WPT_TO=ru; SL_wptGlobTipTmp=1; acst=dkAEyvMLsZMTxmA69ihvhKUQ6fbFztELCewYeei9Y4hhY2UyMjFmMi0zMDUwLTQ0MWMtOGIzOS04MjJiNWFhYmY1OWM; session-cookie=170406cea1a1c22bf54eb0b26940ac72e3859778e5e4523e1f81b5fb3c54f1c703682bce776bb94d6e2368006f9cdc32';
let i = 1;

var config = {
  method: 'get',
  url: url,
  headers: {
    Cookie: cookie,
  },
};

// axios(config)
//   .then(function (response) {
//     const { list } = response.data.data;
//     list.map((item) => {
//       item.complex_resource.length
//         ? console.log(item.name, item.complex_resource)
//         : console.log(item.name, ` - no data!`);
//     });
//     let now = new Date();
//     console.log(now);
//     console.log(`_____________ 0 __________________`);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// setInterval(() => {
//   axios(config)
//     .then(function (response) {
//       const { list } = response.data.data;
//       list.map((item) => {
//         item.complex_resource.length
//           ? console.log(item.name, item.complex_resource)
//           : console.log(item.name, ` - no data!`);
//       });
//       let now = new Date();
//       console.log(now);
//       console.log(`_____________ ${i++} __________________`);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }, 150000);

//-------------------------------------------------
//-------------------------------------------------
//-------------------------------------------------

axios(config)
  .then(function (response) {
    const { list } = response.data.data;
    list.map((item) => {
      item.complex_resource[0].room
        ? console.log(item.name, item.complex_resource)
        : console.log(item.name, ` - no data!`);
    });
    let now = new Date();
    console.log(now);
    console.log(`_____________ 0 __________________`);
  })
  .catch(function (error) {
    console.log(error);
  });

setInterval(() => {
  axios(config)
    .then(function (response) {
      const { list } = response.data.data;
      list.map((item) => {
        item.complex_resource[0].room
          ? console.log(item.name, item.complex_resource)
          : console.log(item.name, ` - no data!`);
      });
      let now = new Date();
      console.log(now);
      console.log(`_____________ ${i++} __________________`);
    })
    .catch(function (error) {
      console.log(error);
    });
}, 60000);
