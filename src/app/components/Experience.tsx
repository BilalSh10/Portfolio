import { Bs1SquareFill, Bs2SquareFill } from "react-icons/bs";

const Experience = () => {
  return (
    <div className="flex flex-col items-center pb-24 phone:pb-14">
      <h1 className="font-bold text-7xl text-gray-900 p-8 phone:text-3xl phone:p-2">Experience</h1>
        <div className="flex flex-row gap-10 phone:ml-4 phone:gap-0">
            <div className="flex flex-col items-center justify-start gap-4 mt-14">
                <Bs1SquareFill style={{color: '#BD2F1F'}} size={26}/>
                <hr className="w-0.5 h-24 phone:h-56 bg-gray-500 rounded-xl"/>
                <Bs2SquareFill style={{color: '#BD2F1F'}} size={26}/>
            </div>
            <div className="flex flex-col gap-10 items-center p-12">
                <div className="flex flex-col justify-center items-start">
                <h1 className="font-bold text-xl phone:text-lg">
                    Sales agent, <span className="text-red-600 phone:text-base">Golan Telecom.</span>
                </h1>
                <p className="font-medium text-gray-600 phone:text-sm">
                    08/2022 – 03/2023 | Jerusalem, Israel
                </p>
                <p className="font-medium phone:text-sm">
                    • Handled customer complaints with empathy and composure.
                    <br />
                    • Answered calls, responded to emails and spoke with clients
                    face-to-face.
                    <br />• Proactively participated in meetings and helped create new
                    practices.
                </p>
                </div>

                <div className="flex flex-col justify-center items-start ml-10 phone:ml-0">
                    <h1 className="font-bold text-xl phone:text-lg">
                        Volunteer social service,{" "}
                        <span className="text-red-600 phone:text-base"> Jerusalem municipality.</span>
                    </h1>
                    <p className="font-medium text-gray-600 phone:text-sm">
                        12/2020 – 12/2021 | Jerusalem, Israel
                    </p>
                    <p className="font-medium phone:text-sm">
                        • Handled customer complaints with empathy and composure.
                        <br />
                        • Processed a range of documentation and entered information into
                        databases.
                        <br />• Answered calls, responded to emails and spoke with clients
                        face-to-face.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;
