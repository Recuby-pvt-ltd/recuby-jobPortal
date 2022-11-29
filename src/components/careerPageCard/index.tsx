import { useState } from "react";

const JobCard = () => {
  const [isJobModalVisible, setIsJobModalVisible] = useState(false);
  const [isApplyJobModalVisible, setIsApplyJobModalVisible] = useState(false);
  return (
    <>
      <div className="border-[1px] border-[#ddd] m-8 py-8 px-4 relative before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-[#2b8aac]">
        <p>INDIA | NOIDA</p>
        <p
          className="text-[#2B8AAC]"
          onClick={() => setIsJobModalVisible(true)}
        >
          Recruiter
        </p>
        <p>Talent Acquisition</p>
        <p
          className="text-[#2B8AAC]"
          onClick={() => setIsApplyJobModalVisible(true)}
        >
          Apply
        </p>
      </div>
      {isJobModalVisible && (
        <div
          className="w-screen left-0 h-screen fixed top-0 before:w-screen before:left-0 before:h-screen before:fixed before:top-0 before:bg-black before:opacity-70 z-[100]"
          onClick={() => {
            setIsJobModalVisible(false);
          }}
        >
          <div
            className="shadow-lg w-96 bg-white z-[200] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-4 pt-4 pb-6 rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <p>INDIA | NOIDA</p>
            <div className="my-8">
              <p className="text-xl">Designation: Recruiter</p>
              <p className="text-sm">Required Experience 4 - 6 years</p>
            </div>
            <p className="text-sm my-6">Department: Talent Acquisition</p>
            <p className="text-sm px-4">
              Responsibilities:
              <ul className="list-disc">
                <li className="">
                  To manage end to end recruitment life cycle from sourcing till
                  validation i.e. job portals; social networking sites;
                  headhunting & mapping of target companies to understand the
                  available talent pool, referencing, joining of candidates etc.
                </li>
                <li> Solely responsible for complete account management.</li>
                <li>
                  Responsible for revenue generation and promoting employer
                  brand
                </li>
              </ul>
            </p>
          </div>
        </div>
      )}
      {isApplyJobModalVisible && (
        <div
          className="w-screen left-0 h-screen fixed top-0 before:w-screen before:left-0 before:h-screen before:fixed before:top-0 before:bg-black before:opacity-70 z-[100]"
          onClick={() => {
            setIsApplyJobModalVisible(false);
          }}
        >
          <div
            className="shadow-lg w-96 bg-white z-[200] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] px-4 pt-4 pb-6 rounded-lg"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <form action="">
              <div className="my-4">
                <label htmlFor="name">Your Name</label>
                <input
                  className="border-gray-200 border-2 w-full"
                  type="text"
                  name="name"
                />
              </div>

              <div className="my-4">
                <label htmlFor="email">Your Email</label>
                <input
                  className="border-gray-200 border-2 w-full"
                  type="email"
                  name="email"
                />
              </div>

              <div className="my-4">
                <label htmlFor="subject">Subject</label>
                <input
                  className="border-gray-200 border-2 w-full"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="my-2">
                <p>Gender:</p>
                <div className="flex space-x-5 text-sm">
                  <div>
                    <label className="p-4" htmlFor="male">
                      Male
                    </label>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked
                    />
                  </div>

                  <div>
                    <label className="p-4" htmlFor="female">
                      Female
                    </label>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                    />
                  </div>
                </div>
              </div>

              <div className="my-4">
                <label htmlFor="contact-number">Contact Number</label>
                <input
                  type="text"
                  name="contact-number"
                  className="border-gray-200 border-2 w-full"
                />
              </div>

              <div className="my-4">
                <label htmlFor="apply-for">Apply For</label>
                <input
                  type="text"
                  name="apply-for"
                  className="border-gray-200 border-2 w-full"
                />
              </div>
              <div className="my-4">
                <label htmlFor="total-experience">Total Experience</label>
                <input
                  type="text"
                  name="total-experience"
                  className="border-gray-200 border-2 w-full"
                />
              </div>
              <div className="my-4">
                <label htmlFor="resume">Resume</label>
                <input type="file" name="resume" className="w-full" />
              </div>

              <div className="my-4">
                <label htmlFor="message">Message</label>
                <textarea name="message" className="w-full" />
              </div>

              <button
                type="submit"
                className="text-white bg-[#2b8aac] px-12 py-2 rounded-full w-60 font-semibold "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default JobCard;
