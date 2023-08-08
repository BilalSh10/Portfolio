import { Bs1SquareFill, Bs2SquareFill } from "react-icons/bs";

const Education = () => {
  return (
    <div className="flex flex-col items-center pb-24 phone:pb-8">
      <h1 className="font-bold text-7xl text-gray-900 p-8 phone:text-3xl phone:p-2">Education</h1>
        <div className="flex flex-row gap-20 mr-24 phone:mr-0 phone:ml-4 phone:gap-0">
            <div className="flex flex-col items-center justify-start gap-4  mt-14">
                <Bs1SquareFill style={{color: '#BD2F1F'}} size={26}/>
                <hr className="w-0.5 h-56 bg-gray-500 rounded-xl"/>
                <Bs2SquareFill style={{color: '#BD2F1F'}} size={26}/>
            </div>
            <div className="flex flex-col gap-10 items-center p-12">
                <div className="flex flex-col justify-center items-start">
                    <h1 className="font-bold text-xl phone:text-lg">
                        BSc. Software Engineering
                    </h1>
                    <p className="font-medium text-gray-600 phone:text-sm">
                        08/2018 – 08/2023 | Azrieli College of Engineering Jerusalem, Israel
                    </p>
                    <p className="font-medium phone:text-sm">
                    Relevant courses included Data structures, Algorithms, <br/>
                    Intro to Software Development, distribution systems, <br/>
                    object-oriented programming, Web development, and Data Bases.
                    </p>
                </div>

                <div className="flex flex-col justify-center items-start mr-28 phone:mr-0">
                    <h1 className="font-bold text-xl phone:text-lg">
                        Python course
                    </h1>
                    <p className="font-medium text-gray-600 phone:text-sm">
                        09/2020 – 01/2021 | John Bryce (extracurricular), Israel
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education