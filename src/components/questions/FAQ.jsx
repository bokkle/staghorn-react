import { useState, useRef, useEffect } from 'react';
import { faq } from '../../constants';
import { FaArrowDown, FaPlus } from 'react-icons/fa';
import Heading from '../../ui/Heading';
import FinalCTA from './FinalCTA';
import { Fade } from 'react-awesome-reveal';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Calculate heights of each FAQ item
    const newHeights = contentRefs.current.map((ref) =>
      ref ? ref.scrollHeight : 0,
    );
    setHeights(newHeights);
  }, [activeIndex]);

  return (
    <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl">
        <Fade fraction={0.1} duration={2000} triggerOnce>
          <Heading heading="questions" subheading="Need more info?" />
          <p className="mt-2 max-w-3xl text-stone-300 lg:text-lg xl:text-2xl">
            If you&apos;ve never hired an arborist before, you will likely have
            some questions regarding your project. We have dozens of years of
            combined experience in the industry and are happy to answer any
            questions you may have. Here are the most frequently asked questions{' '}
            <FaArrowDown className="inline" />
          </p>
          <div className="flex h-full w-full flex-col divide-y divide-emerald-400 py-6 lg:flex-row lg:gap-4 lg:divide-y-0">
            <div className="w-full divide-y divide-emerald-600 lg:w-1/2">
              {faq
                .filter((_, i, arr) => i <= (arr.length - 1) / 2)
                .map((q, i) => (
                  <article
                    key={i}
                    className={`flex cursor-pointer flex-col items-center justify-between ${activeIndex === i && 'bg-stone-800'}`}
                    onClick={() => handleToggle(i)}
                  >
                    <div className="flex w-full flex-col p-2">
                      <div className="flex items-center justify-between">
                        <div className="py-4">
                          <h4
                            className={`text-xl font-semibold tracking-wide ${activeIndex === i ? 'text-emerald-400' : 'text-stone-200'}`}
                          >
                            {q.question}
                          </h4>
                        </div>
                        <div className="ml-2">
                          <FaPlus
                            className={`transform text-xl text-emerald-400 transition-all duration-500 lg:text-2xl ${
                              activeIndex === i ? 'rotate-45' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </div>
                      <div
                        ref={(el) => (contentRefs.current[i] = el)}
                        className={`ease max-w-4xl overflow-hidden transition-all duration-500`}
                        style={{
                          maxHeight: activeIndex === i ? heights[i] : 0,
                        }}
                      >
                        {q.answer.map((answer, i) => (
                          <p
                            key={i}
                            className="max-w-[95%] text-xl text-stone-100"
                          >
                            {answer}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
            </div>
            <div className="w-full divide-y divide-emerald-600 lg:w-1/2">
              {faq
                .filter((_, i, arr) => i >= (arr.length - 1) / 2)
                .map((q, i) => (
                  <article
                    key={i + 7}
                    className={`flex cursor-pointer flex-col items-center justify-between ${activeIndex === i + 7 && 'bg-stone-800'}`}
                    onClick={() => handleToggle(i + 7)}
                  >
                    <div
                      className={`flex w-full flex-col p-2 ${activeIndex === i + 6 ? 'flex-grow' : 'flex-shrink'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="py-4">
                          <h4
                            className={`text-xl font-semibold ${
                              activeIndex === i + 7
                                ? 'text-emerald-400'
                                : 'text-stone-200'
                            }`}
                          >
                            {q.question}
                          </h4>
                        </div>
                        <div className="ml-2">
                          <FaPlus
                            className={`transform text-xl text-emerald-400 transition-all duration-500 lg:text-2xl ${
                              activeIndex === i + 7 ? 'rotate-45' : 'rotate-0'
                            }`}
                          />
                        </div>
                      </div>
                      <div
                        ref={(el) => (contentRefs.current[i + 7] = el)}
                        className={`ease max-w-4xl overflow-hidden transition-all duration-500`}
                        style={{
                          maxHeight: activeIndex === i + 7 ? heights[i + 7] : 0,
                        }}
                      >
                        {q.answer.map((answer, i) => (
                          <p
                            key={i}
                            className="max-w-[95%] text-xl text-stone-100"
                          >
                            {answer}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
          <FinalCTA />
        </Fade>
      </div>
    </section>
  );
};

export default Questions;
