"use client";

import { useEffect, useState } from "react";
import SearchAndIcons from "../../_components/search";
import { CandidateDataTable } from "../../_components/candidate-data-table";

const AllContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${process.env.BASE_URL}/api/candidate`, {
          cache: "no-store",
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const candidates = await response.json();

        if (!candidates) {
          console.error("No candidates found.");
          setData([]);
        } else {
          setData(candidates);
        }
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No candidates found.</div>;
  }

  return (
    <div>
      <SearchAndIcons />
      <div
        className="h-[0px] border border-neutral-700 mt-1 mr-[30px] "
        style={{ opacity: "0.3" }}
      ></div>
      <div className="relative left-[42px] top-[-3px] w-[30px] h-[4px] bg-[#1163A2]"></div>

      <div>
        <CandidateDataTable data={data} />
      </div>
    </div>
  );
};

export default AllContent;
