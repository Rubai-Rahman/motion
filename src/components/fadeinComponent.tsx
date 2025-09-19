import * as motion from 'motion/react-client';

const FadeInComponent = () => {
  return (
    <div className="w-[15rem] h-[20rem] bg-neutral-800 rounded-md flex  flex-col justify-between relative p-2">
      <div className="text-[80px] [font-family:monospace] leading-[0.8] inset-1 text-white absolute  flex-col justify-center items-center break-words ">
        responsive
      </div>
      <p className="text-white mt-auto w-full">
        lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default FadeInComponent;
