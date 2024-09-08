import { useState } from "react";
import { Heading, Text } from "../../Components/Text";

const faqData = [
  {
    question: "What mostly people want to ask no.1?",
    answer:
      "Lovely to look at and easy-to-use, Project gives teams a visual overview of what’s coming up next.",
  },
  {
    question: "What mostly people want to ask no.2?",
    answer:
      "Lovely to look at and easy-to-use, Project gives teams a visual overview of what’s coming up next.",
  },
  {
    question: "What mostly people want to ask no.3?",
    answer:
      "Lovely to look at and easy-to-use, Project gives teams a visual overview of what’s coming up next.",
  },
  {
    question: "What mostly people want to ask no.4?",
    answer:
      "Lovely to look at and easy-to-use, Project gives teams a visual overview of what’s coming up next.",
  },
];

const Questions = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="pt-10 px-3 pb-20 flex flex-col items-center">
      <Heading
        content="Frequently Ask Question"
        customClass="w-full text-center text-[38px] midDevice:text-[24px]"
      />
      <Text
        content="Be a self-service superhero by providing your customers with an FAQ section through a company knowledge base. Read on to learn how."
        customClass="text-center w-full text-[20px] midDevice:text-[14px] max-w-[616px]"
      />
      <div className="my-10 max-w-2xl mx-auto space-y-4 lg:space-y-6 flex justify-start items-center flex-col font-poppins">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bg-primary bg-opacity-15 backdrop-blur-xl shadow-md rounded-md p-3 transition-colors duration-300 border border-primary max-w-[448px] mobile:max-w-[300px] font-[500] ${
              selected === index
                ? "bg-primary bg-opacity-50 text-white"
                : "text-light"
            }`}
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="bg-indigo-100 text-primary w-8 h-8 md:w-10 md:h-10 rounded-md flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div className="ml-3 md:ml-4 lg:ml-6 md:text-lg text-dark">
                {item.question}
              </div>
            </div>

            <div
              className={`overflow-hidden transition-max-height duration-500 ${
                selected === index ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                maxHeight: selected === index ? "300px" : "0",
              }}
            >
              <div className="text-light ml-8 md:ml-10 pl-3 md:pl-4 lg:pl-6 py-2">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
