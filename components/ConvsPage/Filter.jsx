// "use client";
// import { apiFilterOpenCalls } from "@/app/api/Convocatorias/filterOpenCalls";
// import { useState, useRef } from "react";
// import CardConvocatorias from "./CardConvocatorias";


// function Filter({ token }) {
//   // const convocatoria_nombre = useRef();
//   const convocatoria_pais = useRef();
//   const convocatoria_idioma = useRef();
//   const convocatoria_universidad = useRef();
//   const convocatoria_fecha = useRef();

//   const [my_calls, set_my_calls] = useState();

//   async function handleFilterSumbit(event) {
//     event.preventDefault();

//     // const conv_nombre = convocatoria_nombre.current.value;
//     const conv_pais = convocatoria_pais.current.value;
//     const conv_idioma = convocatoria_idioma.current.value;
//     const conv_universidad = convocatoria_universidad.current.value;

//     // console.log(conv_nombre);
//     console.log(conv_pais);
//     console.log(conv_idioma);
//     console.log(conv_universidad);
//     /**
//      * 987654321carlos */

//     const params = new URLSearchParams({
//       university_name: conv_universidad,
//       country: conv_pais,
//       language: conv_idioma,
//     });

//     // fetch(`http://127.0.0.1:8000/call/open/${params}`, {
//     //   method: "GET",
//     //   headers: {
//     //     Authorization: `Bearer ${token}`,
//     //   },
//     // }).then((response) => {
//     //   if (!response.ok) {
//     //     throw new Error('Eroorrr')
//     //   }

//     //   set_my_calls(response.data);
//     // }).catch((error) => {
//     //   console.log(error)
//     // }); 
//     //   const getterCalls = await fetch('/',{
//     //     method:"GET",
//     //     country: conv_pais,
//     //     language: conv_idioma,
//     //     name_university: conv_universidad,
//     //     headers : {
//     //       'Authorization' : `Bearer ${token}`
//     //     },
//     //   })
//     //   console.log('gegter calls')
//     //   set_my_calls(getterCalls);
//     // }
//     // apiFilterOpenCalls.getFilterOpenCalls(conv_pais, conv_pais, conv_universidad, token).then((response) => {
//     //   set_my_calls(response.data);

//     // }).catch((error) => {
//     //   console.log(error)
//     // })
//     // try {
//     //   const calls = await apiFilterOpenCalls.getFilterOpenCalls(conv_pais, conv_idioma, conv_universidad, token);
//     //   set_my_calls(calls);
//     // } catch(error)
//     // {
//     //   console.log(error)
//     // }
//   }

//   return (
//     <>
//       <form
//         onSubmit={handleFilterSumbit}
//         className="overflow-hidden flex items-center justify-between mx-auto max-w-[1580px] max-h-[1024px] border-2 border-gray-10 p-5 shadow-lg rounded-xl"
//       >
//         <h2 className="block font-bold">Buscar Convocatorias:</h2>
//         <div className="flex items-center justify-between gap-3">
//           {/* <input
//             ref={convocatoria_nombre}
//             type="text"
//             placeholder="Nombre"
//             className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
//           /> */}
//           <input
//             ref={convocatoria_pais}
//             type="text"
//             placeholder="País"
//             className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
//           />

//           <input
//             ref={convocatoria_idioma}
//             type="text"
//             placeholder="Idioma"
//             className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
//           />
//           <input
//             ref={convocatoria_universidad}
//             type="text"
//             placeholder="Nombre universidad"
//             className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
//           />

//           {/* <select
//             ref={convocatoria_universidad}
//             placeholder="value 0"
//             className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1 bg-white"
//           >
//             <option value="Null">Estado</option>
//             <option value="Abierta">Abierta</option>
//             <option value="Cerrada">Cerrada</option>
//           </select> */}

//           {/* <input
//             ref={convocatoria_fecha}
//             type="date"
//             datatype="DD-MM-YYYY"
//             className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
//           /> */}
//         </div>

//         <div className="w-40">
//           <button
//             type="submit"
//             className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
//           >
//             Filtrar
//           </button>
//         </div>
//       </form>

//       <div className="grid grid-cols-3 w-full gap-6">
//         {my_calls?.map((call) => (
//           <CardConvocatorias
//             key={call.university_name}
//             admin={admin}
//             id={call.university_name}
//             available_slots={call.language}
//             description={call.deadline}
//             university_id={call.university_name}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Filter;
