// import React from "react";
// import { nasaClient } from "../shared/api/client";
// import { useQuery } from "@tanstack/react-query";

// const Asteroids = () => {
//   const key = "1PdtwsjpLnFGtrU9oSg8ZcvUcMFZuuVb9hOWBdk4";
//   const query = useQuery({
//     queryKey: ["earthObject"],
//     staleTime: 1000,
//     gcTime: 1000,
//     queryFn: async () => {
//       const res = await nasaClient.GET("/neo/rest/v1/feed", {
//         params: {
//           query: {
//             start_date: "2025-12-24",
//             end_date: "2025-12-25",
//             api_key: key,
//           },
//         },
//       });
//       if (res.error) {
//         throw new Error(res.error.message);
//       }

//       return res.data;
//     },
//   });
//   console.log(query.data);

//   if (query.isFetching)
//     //fetchstatus
//     return <span>loading</span>;
//   if (query.error) return <span>error</span>;
//   return (
//     <div>
//       {query.data &&
//         Object.entries(query.data.near_earth_objects).map((group, index) => (
//           <ul key={index}>
//             <h3>{group[0]}</h3>
//             {group[1].map((el) => (
//               <li key={el.id}>
//                 <p>{el.name}</p>
//               </li>
//             ))}
//           </ul>
//         ))}
//     </div>
//   );
// };

// export default Asteroids;
