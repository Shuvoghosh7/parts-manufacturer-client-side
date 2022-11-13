import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";

const Faq = () => {
  const questions = [
    {
      question: "What are the available types  Hardware?",
      answer:
        "There are various types of PC Hardware such as The hardware of the computer system includes monitor, CPU, keyboard, mouse, printer, sound system, RAM, hard disk and many more",
    },
    {
      question: "About our product   RAM?",
      answer:
        "Representing Random Access Memory, a computer’s RAM is the hardware component in which temporarily stores data. It functions as a computer’s working memory in regards to the information being created by programs.",
    },
    {
      question: "About our product   Hard Disk?",
      answer:
        "The Hard Disk Drive, HDD, is the main data storage device within a computer. It is where the operating system, software, and files are stored. They are non-volatile meaning they can maintain the stored data even when powered off, unlike RAM.",
    },
    {
      question: "About our product  solid-state drive?",
      answer:
        "Meaning solid-state drive, SSDs function as an alternative to traditional HDDs. It uses less power, accesses data faster and is generally more reliable than HDDs. SSDs are flash storage and have no moving parts whatsoever, unlike HDDs that are made up of magnetic disks and utilize mechanical components inside.",
    },
    {
      question: "About our product  monitor?",
      answer:
        "The monitor is the computer hardware device that displays the video and graphics information generated by the computer via the GPU. Monitors are also known as video display units, video display terminals, or just screens.",
    },
    {
      question:
        "About our product  USB flash drives?",
      answer:
        "USB flash drives are portable data storage devices. They contain an integrated USB interface that allows it to connect to the computer via a USB port.",
    },
  ];
  return (
    <div className="w-full  py-20">
      <SectionTitle>FAQ.</SectionTitle>
      <div className="w-full flex justify-center">
        <div className="w-full lg:w-2/5 max-auto px-5 lg:p-0 rounded-lg">
          {questions.map((question, index) => (
            <div
              key={index}
              className="collapse collapse-arrow border rounded-lg"
            >
              <input type="checkbox" className="peer" />
              <div className="collapse-title peer-checked:border-2 border-primary rounded-lg">
                {question.question}
              </div>
              <div className="collapse-content bg-white">
                <p className="p-6">{question?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
