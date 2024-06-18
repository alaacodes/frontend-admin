// 'use client'
// import { useEffect, useState } from "react"
// import { CourseData } from "../type/course"
// import { db } from "@/lib/db"
// import { getCourseTitles } from "@/actions/course"
// import { set } from "zod"
// import { Button } from "@/components/ui/button"

// const UserTable = ()=> {
//     const [parentFilter, setParentFilter] = useState("")
//     const [courses, setCourses] = useState(false)
//     const [courseChapter, setChapter] = useState(false)
//     const [quiz, setQuiz] = useState(false)
//     const [quizTitle, setQuizTitle] = useState(false)
//     const [clearFilter, setClearFilter] = useState(false)
//     const [createdAt, setCreatedAt]= useState(false)
//     const [quizPercentage, setQuizPercentage] = useState(false)

//     const handleParentFilter = (target: string) => {
//       if(target ==="createdAt"){
//         handleClearFilter()
//         setCreatedAt(true)
//       }
//       if(target==="Course"){
//         handleClearFilter()
//         setCourses(true)
//         console.log(courses + "course");

//       }if(target === "quiz"){
//         handleClearFilter()
//         setQuiz(true)
//       }if(target === "all"){
//         handleClearFilter()
//       }
//       setParentFilter(target)
//       setClearFilter(true)
//       console.log(" helelo there "+ target);
//     }
//     const handleChapter =(chapter: string)=>{
//       setChapter(true)
//       console.log("chapter :"+ chapter);

//     }
//     const handleQuizFilter = (quizTitle: string)=>{
//         if(quizTitle === "percentage"){
//           setQuizPercentage(true)
//         }else{
//           setQuizTitle(true)
//           setQuizPercentage(false)
//         }
//     }

//     const handleClearFilter = ()=>{
//         setQuiz(false)
//         setChapter(false)
//         setCourses(false)
//         setCreatedAt(false)
//         setQuizPercentage(false)
//         setQuizTitle(false)
//         setClearFilter(false)
//     }
//     // useEffect(() => {
//     //   const fetchData = async () => {
//     //     if (parentFilter === "Course") {
//     //       try {
//     //         const fetchCourses = await getCourseTitles();
//     //         // Check if fetchCourses is successful and contains courseTitles
//     //         if ('courseTitles' in fetchCourses) {
//     //           const courseTitles = fetchCourses.courseTitles;
//     //           setCourses(courseTitles);
//     //         } else {
//     //           // Handle error case
//     //           console.log("There was an error getting course titles: " + fetchCourses.error);
//     //         }
//     //       } catch (error) {
//     //         console.log("There was an error getting course titles: " + error);
//     //         // Handle error if necessary
//     //       }
//     //     }
//     //   };

//     //   fetchData();
//     // }, [parentFilter]);

//     return (
//       <>
//           <div className=" flex justify-between border  w-full p-8 mt-16 ">
//             <div className="flex-row">
//             <select onChange={(e)=>handleParentFilter(e.target.value)} className="p-2 m-1 flex-row border rounded outline-none">
//                 <option  value="all">All Candidate</option>
//                 <option  value="createdAt">User Created At</option>
//                 <option  value="Course">Course</option>
//                 <option  value="quiz">Quiz</option>
//             </select>
//             <select onChange={(e)=>handleChapter(e.target.value)} className={`p-2 m-1  border ${courses ? 'flex-row': 'hidden'}  rounded outline-none`}>
//                 <option  value="Chapters ">courses 1</option>
//                 <option onClick={e=>handleParentFilter("courses 1")} value="courses ">courses 2</option>
//                 <option onClick={e=>handleParentFilter("courses 1")} value="courses ">courses 3</option>
//                 <option onClick={e=>handleParentFilter("courses 1")} value="courses ">courses 4</option>
//                 <option onClick={e=>handleParentFilter("courses 1")} value="courses ">courses 5</option>
//             </select>
//             <select className={`p-2 m-1  border ${courseChapter ? 'flex-row': 'hidden'}  rounded outline-none`}>
//                 <option  value="Chapters ">Chapters 1</option>
//                 <option  value="Chapters ">Chapters 2</option>
//                 <option  value="Chapters ">Chapters 3</option>
//                 <option  value="Chapters ">Chapters 4</option>
//                 <option  value="Chapters ">Chapters 5</option>
//             </select>

//             {/* user created at  */}
//             <div className={`p-2 m-1 ${createdAt ? 'flex-row ': 'hidden'} border rounded outline-none w-64`}>
//                 <select  className="p-2 flex-row border rounded">
//                     <option  value="Before ">Before</option>
//                     <option  value="after ">after</option>
//                     <option  value="On ">On</option>
//                 </select>

//                 <input className="p-2 flex-row " type="date" name="date" id="" />
//             </div>
//             {/* end of user created at  */}
//             {/* quiz filter */}
//             <select onChange={(e)=>handleQuizFilter(e.target.value)} className={`p-2 m-1  border ${quiz ? 'flex-row': 'hidden'}  rounded outline-none`}>
//                 <option  value="Select a Quiz">Select a Quiz</option>
//                 <option  value="quiz ">quiz 2</option>
//                 <option  value="quiz ">quiz 3</option>
//                 <option  value="quiz ">quiz 4</option>
//                 <option  value="quiz ">quiz 5</option>
//             </select>
//               <select onChange={e=>handleQuizFilter(e.target.value)}  className={`${quizTitle? 'p-2 flex-row border rounded': 'hidden'}`}>
//                       <option  value="Chapters ">Select </option>
//                       <option  value="Passed">Passed</option>
//                       <option  value="Passed">Failed</option>
//                       <option  value="percentage">Percentage</option>
//                 </select>

//                   <input placeholder="Enter a number eg 90" className={`${quizPercentage? 'p-2 m-1 border flex-row rounded outline-none': 'hidden'}`} type="number" name="date" id="" />

//             {/* end of filter */}
//             </div>
//             <Button onClick={handleClearFilter}  className={`${clearFilter ? 'bg-gray-500': 'hidden'}`}>Clear Filter</Button>
//           </div>
//           <div className="flex flex-col">
//           <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
//               <div className="overflow-hidden">
//                 <table
//                   className="min-w-full text-left text-sm font-light text-surface dark:text-white">
//                   <thead
//                     className="border-b border-neutral-200 font-medium dark:border-white/10">
//                     <tr>
//                       <th scope="col" className="px-6 py-4">#</th>
//                       <th scope="col" className="px-6 py-4">Name</th>
//                       <th scope="col" className="px-6 py-4">Email</th>
//                       <th scope="col" className="px-6 py-4">Quiz</th>
//                       <th scope="col" className="px-6 py-4">Join On</th>

//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b border-neutral-200 dark:border-white/10">
//                       <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
//                       <td className="whitespace-nowrap px-6 py-4">Mark</td>
//                       <td className="whitespace-nowrap px-6 py-4">@Otto</td>
//                       <td className="whitespace-nowrap px-6 py-4">mdo</td>
//                       <td className="whitespace-nowrap px-6 py-4">02-04-2024</td>
//                     </tr>
//                     <tr className="border-b border-neutral-200 dark:border-white/10">
//                       <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
//                       <td className="whitespace-nowrap px-6 py-4">Jacob</td>
//                       <td className="whitespace-nowrap px-6 py-4">@Thornton</td>
//                       <td className="whitespace-nowrap px-6 py-4">fat</td>
//                       <td className="whitespace-nowrap px-6 py-4">02-04-2024</td>
//                     </tr>
//                     <tr className="border-b border-neutral-200 dark:border-white/10">
//                       <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
//                       <td className="whitespace-nowrap px-6 py-4">Larry</td>
//                       <td className="whitespace-nowrap px-6 py-4">@Wild</td>
//                       <td className="whitespace-nowrap px-6 py-4">twitter</td>
//                       <td className="whitespace-nowrap px-6 py-4">02-04-2024</td>
//                     </tr>
//                     <tr className="border-b border-neutral-200 dark:border-white/10">
//                       <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
//                       <td className="whitespace-nowrap px-6 py-4">02-04-2024</td>
//                       <td className="whitespace-nowrap px-6 py-4">02-04-2024</td>
//                       <td className="whitespace-nowrap px-6 py-4">02-04-2024</td>
//                       <td className="whitespace-nowrap px-6 py-4">02-04-2024</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     )
// }

// export default UserTable
