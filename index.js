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


// RZD ----------------------------

// var data =
//   '{"Origin":"2014370","Destination":"2000000","DepartureDate":"2022-06-18T00:00:00","TimeFrom":0,"TimeTo":24,"CarGrouping":"DontGroup","GetByLocalTime":true,"SpecialPlacesDemand":"StandardPlacesAndForDisabledPersons"}';

// var config = {
//   method: 'post',
//   url: 'https://ticket.rzd.ru/apib2b/p/Railway/V1/Search/TrainPricing?service_provider=B2B_RZD',
//   headers: {
//     'Content-Type': 'text/plain',
//     Cookie:
//       'JSESSIONID=FE3596916CAD55A41A39AE4B573B78C1; LANG_SITE=ru; SL_GWPT_Show_Hide_tmp=1; SL_G_WPT_TO=ru; SL_wptGlobTipTmp=1; TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6Im9uZHJ1aSIsImVtYWlsIjoib25kcnVpQHlhbmRleC5ydSIsInBob25lIjoic2I4U3dCZTlrNGZiY052eEsvVURsbE9ERjZ2Q2p3NDE1VGxEUDFBL01zSTdhcWgyWkt5b1laMkpqc1JVWDJjOHNNZnRIQ2lHejYzWktEbk51MjZqVGJOb2NqOU54QzB0YzNvS0o4Y2RRN01XZXhqSW1OYkVETzV5NDFYM3QzVzI3STVMc2g0WnAwUHJ6eEdNRlE2ZGRUM3Q1MFpRVjRWbStIUVJQWFhjRFU4alBGN0RvRDhsTUlxUnJmMkxKZFRoQ2w5ZjJDOWl0MGpMa1V5T2IwRGIrQTJ0SGtJck1JVHl3eEJ0S2x6ZWIxWjY2OEt1UkgrbUZKQmRFdUVPbnRGNVhCRFNEWjgwQU9COVBmdHhsbDFWRldRTEt1QTFsQlQ1LzNaaXlwMHJ2UE5wVzV5bmthSFBXYkc0UnNtK2dESjJjNjg1a0dJUFd3Mi9jTDhtTG5aU3NKWGlTQkJxeGRPTTFoVXJvN0h3ME9zeU1wcHZzK2lpL0U4RzZjcUpTeFZpcDVUa1dvSCtTSVR5eGpaeFF5WDBDN1pnVVZESVdJbGpXT1RhQURGVlMxOG9Zazh1NUUvZ3g5SEZUZjNNNXVub1VJcThPamtoZlErN29udzRyODNLMXUvclowNVorUW5YTjJpQXpXS2Jlb3dMNjkrbFI4ckRqMkMxNnp6eGFzVjlrdWg5TWxOdzRHdW9IVXRocTdSRU8xNnIxcHhFQzhzWWpWcU5DR0I5TXpTMHROWXZHZjlqT1RnNDlVUGJDUmZiRDVkeXpCN0xzQnlaSjdOYTRuWmg5Tk5QQzEyaTJiby9hbms1ZHo1dGVpWT0iLCJ1c2VyX2lkIjoxNDY1NDc1NywiYWN0aXZlIjp0cnVlLCJzZXNzaW9uS2V5IjoiQXV0aF9zdmMtN2RkNDFkNjMwZTI2MGUwYmM2NzFjM2FlYThkNzkxZGRkYWUxZTliNzBhNjhmYTlmNGQ0NTUyMDEzZDU0YWQ0NyIsImNvcnBvcmF0ZSI6ZmFsc2UsImZpbHRlcl9jYXJyaWVycyI6W10sImV4cCI6MTY1NTU0ODU5OX0.bqBOA3FyycsrAdUpwQEi3Ey7IWdipGHsAo6ceZKFzoU; metrika_enabled=1; session-cookie=16f96214fd10fcd919dbb0b26940ac72f4c49afd3a207acb86347333506f1a5f5189a7f80e6517b2c0b282d5707c1c14',
//   },
//   data: data,
// };

// const url =
//   'https://www.mos.ru/api/mss-facade/v1/doctor-record/doctors?appointmentId%5B0%5D=449154276398&omsNumber%5B0%5D=3168940871000013&birthDate%5B0%5D=1950-11-28';

// const cookie =
//   'ACS-SESSID=q2ki6fe352p0mbdst7l6nrfc9i; SL_GWPT_Show_Hide_tmp=1; SL_G_WPT_TO=ru; SL_wptGlobTipTmp=1; acst=IKwFTa0xubEvMYkO4cCxYZqGVY9DC9Ip-cdCYbFXH4thNDQ5NzdjNy1mNzgzLTQ1M2EtOTJmZC1kOTZiYTg3M2NhMzM; session-cookie=16f60dd54b924d0c6c0d4db06940ac722820638644e314ffe61835d1e78ee27423112f5e9d184a4d37e21ef5246f4792';
//let i = 1;

// var config = {
//   method: 'get',
//   url: url,
//   headers: {
//     Cookie: cookie,
//   },
// };

// axios(config)
//   .then(function (response) {
//     const { Trains } = response.data;
//     Trains.map((item) => {
//       console.log(item.DisplayTrainNumber, item.DepartureDateTime);
//       item.CarGroups.map((item) => {
//         if (item.CarType === 'Sedentary') {
//           console.log(item.CarType, item.TotalPlaceQuantity);
//         }
//       });
//     });
//     let now = new Date();
//     console.log(now);
//     console.log(`_____________ 0 __________________`);
//     //console.log(Trains);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// setInterval(() => {
//   axios(config)
//     .then(function (response) {
//       const { Trains } = response.data;
//       Trains.map((item) => {
//         console.log(item.DisplayTrainNumber, item.DepartureDateTime);
//         item.CarGroups.map((item) => {
//           if (item.CarType === 'Sedentary') {
//             console.log(item.CarType, item.TotalPlaceQuantity);
//           }
//         });
//       });
//       let now = new Date();
//       console.log(now);
//       console.log(`_____________ ${i++} __________________`);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }, 100000);

// axios(config)
//   .then(function (response) {
//     const { Trains } = response.data;
//     Trains.map((item) => {
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
