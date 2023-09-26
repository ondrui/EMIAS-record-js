//import fetch from 'node-fetch';
import axios from "axios";

// EMIAS ----------------------------------------------------------
const url =
  "https://www.mos.ru/api/doctor-record/v1/doctors?appointmentId%5B0%5D=623811271098&omsNumber%5B0%5D=5050320833000938&birthDate%5B0%5D=1976-09-16";

const cookie =
  "session-cookie=17881263b3a749f91e76753ebeb261f582e42b4ee983b71ba7d9033d4a38ced3e3505933387288e80f5a1da8a9543d2f; mos_id=Cg+IA2URMQi4s0mVZX6RAgA=; SL_G_WPT_TO=ru; _ym_uid=1666790955427187628; _ym_d=1695625479; tmr_lvid=99a5d9aa663bf9021703aa9a0b142bc3; tmr_lvidTS=1695625478945; ACS-SESSID=8o2l182f5h867itlpbgi9bk0k3; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1; das_d_tag2=3bce4b6b-d889-4582-81b7-1a8c8bbdf092; das_d_tag2_legacy=3bce4b6b-d889-4582-81b7-1a8c8bbdf092; ghur=h894JTEOazI2yeOtcI2dp97Ecb1wZ0XaiVJCkt6oWPc|; sbp_sid=000000000000000000000000000000000000; at=1; oxxfghcd=1255933c-db75-4b8d-9998-c7ccff6e7023#3#2592000000#5000#600000#81540; oxxfghcd_legacy=1255933c-db75-4b8d-9998-c7ccff6e7023#3#2592000000#5000#600000#81540; oxxfgh=1255933c-db75-4b8d-9998-c7ccff6e7023%233%232592000000%235000%23600000%2381540; uwyii=b68022d4-09d1-2280-9d37-c24219c727d7; _ym_isad=2; Ltpatoken2=DCGMArNSYe3ZjtYgIi8KEcUL5Vh4rqFrmN+PpcXUdAUbzZIlECKCCspERVc+7NOokVul2xBNzisv1fE0Wr2UW35CFDx7H3uWjn3XkVV7auwoLzbnakLigmXJfdFqPa5VofATuudLqpucWxMOpH0jOLrhYR/jAYhRmAq5PcrWWhFslz7mhbF6lZwOqG9+6Qykober4oT61FjFbUetj7hKFchZl5X7sPZB/2E25QXv1s55A0Gb5nq32ydEteb4xsmVgeyaKxcnUP4aGxTA66EFCnlP1fyJnHne7CXusaq3eBKraRlcR9KEG08aAjZFZUskFg/8TgrOZyCnxqdxO5WhBw==; tmr_detect=0%7C1695710657302; acst=tP_NIF94kLubiO98ES0r1dfhGPbM_qJxVnQMqobHIwYzOTlkMGM4OS1jMjEwLTQ4NzktYjNlNS0xMDk2NGNkZTk1YWM";
let i = 1;

var config = {
  method: "get",
  url: url,
  headers: {
    Cookie: cookie,
  },
};

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
