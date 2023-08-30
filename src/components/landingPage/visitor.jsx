import React, { useEffect, useState } from "react";

const VisitorCounter = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Simulate fetching the number of visitors from an API or database
    // You can replace this with your actual implementation
    const fetchVisitors = async () => {
      try {
        const response = await fetch(
          "https://qdbuzzief5.execute-api.ap-south-1.amazonaws.com/prod/marg/visitor"
        );
        const postoptions={
          method:"POST"
        }
        fetch("https://qdbuzzief5.execute-api.ap-south-1.amazonaws.com/prod/marg/visitor",postoptions)
        const data = await response.json();
        setVisitors(data.count);
      } catch (error) {
        console.error("Error fetching visitors:", error);
      }
    };

    // Call the fetchVisitors function
    fetchVisitors();

    // You can also set up an interval to fetch visitors periodically
    // For example, every 1 minute
    const interval = setInterval(fetchVisitors, 60000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p className="font-[600]">VISITORS: {visitors}</p>
    </div>
  );
};

export default VisitorCounter;
