import React from "react";

const Progressbar = () => {
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setLoading(false);
          return 100;
        } else {
          return prevProgress + 40;
        }
      });
    }, 400);
  }, []);
  return (
    <>
      {isLoading && (
        <div className='progress progress-xxs'>
          <div
            className='progress-bar'
            role='progressbar'
            aria-valuenow='0'
            aria-valuemin='0'
            aria-valuemax='100'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </>
  );
};

export default Progressbar;
