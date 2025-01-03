import React, { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const superDazzlingAwards = [
    { award: "Ali Ibn Abi Talib (RA) Award", prize: "3 Students + 1 Teacher" },
    { award: "Omar Khayyam Award", prize: "2 Students + 1 Teacher" },
    { award: "Al - Khwarizmi Award", prize: "1 Student + 1 Teacher" },
  ];

  const cashAwards = [
    {
      students: "801 and above",
      award: "Abu Nasr al-Farabi Award",
      cash: "25,000",
    },
    {
      students: "701-800",
      award: "Abu Ja'far al-Khazin Award",
      cash: "20,000",
    },
    {
      students: "601-700",
      award: "Ibn Ahmad al-Sarakhsi Award",
      cash: "18,000",
    },
    { students: "501-600", award: "Abu Nasr al-Farabi Award", cash: "16,000" },
    { students: "401-500", award: "Ahmad Ibn Yusuf Award", cash: "14,000" },
    { students: "301-400", award: "Abu Kamil Award", cash: "12,000" },
    { students: "201-300", award: "Abu Sahl al-Kuhi Award", cash: "10,000" },
    { students: "101-200", award: "Abu Nasr Mansur Award", cash: "8,000" },
  ];

  return (
    <>
      {/* <button
        className="bg-blue-200 text-black active:bg-blue-500 
        font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}>
        Fill Details
      </button> */}
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-50">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                <div className="flex flex-col max-h-[80vh] overflow-y-auto scrollbar-hide">
                  <div className="p-6">
                    <h1 className="text-xl p-2 rounded-md font-bold mb-4 text-white bg-purple-500">
                      Innovative | Inventive Learning – KSF Pakistan Awards
                    </h1>
                    <p className="mb-2 text-sm">
                      We, Innovative | Inventive Learning – KSF Pakistan, are
                      pleased to announce awards to celebrate and honor
                      excellence in the Kangaroo Contests across Pakistan. These
                      awards will be presented to schools and institutions that
                      demonstrate the highest aggregate student participation
                      across all three of our contests: IKMC, IBIC and IKLC.
                    </p>
                    <h2 className="text-xl font-semibold mb-2 text-purple-600">
                      Criteria for the Super Dazzling Awards:
                    </h2>
                    <p className="mb-2 text-sm">
                      The school that achieves the highest aggregate
                      participation (maximum number of participating students)
                      across all three contests will be honored with the
                      following prestigious Super Dazzling Awards:
                    </p>
                    <table className="w-full mb-3 border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 text-purple-600 p-2">
                            Super Dazzling Award
                          </th>
                          <th className="border border-gray-300 text-purple-600 p-2">
                            Air Ticket to A European Country
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {superDazzlingAwards.map((item, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300  p-2">
                              {item.award}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.prize}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <p className="mb-4 text-sm italic">
                      (Please note: The country and time of the trip will be
                      decided by our board.)
                    </p>

                    <p className="mb-4 text-sm">
                      In addition to the contest, we are delighted to introduce
                      the SPECIAL RECOGNITION CASH AWARDS for Coordinators who
                      play a pivotal role in motivating students for the IKLC
                      2024. The recognition award amounts are as follows:
                    </p>

                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 text-purple-600 p-2">
                            No. of Students
                          </th>
                          <th className="border border-gray-300 text-purple-600 p-2">
                            Award Category
                          </th>
                          <th className="border border-gray-300 text-purple-600 p-2">
                            Cash Award
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cashAwards.map((item, index) => (
                          <tr key={index}>
                            <td className="border border-gray-300 p-2">
                              {item.students}
                            </td>
                            <td className="border border-gray-300 p-2">
                              {item.award}
                            </td>
                            <td className="border border-gray-300 p-2">
                              Rs. {item.cash}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-red-500 text-white rounded-md background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
