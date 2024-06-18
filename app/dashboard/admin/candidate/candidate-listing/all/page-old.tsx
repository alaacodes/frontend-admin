import SearchAndIcons from "../../_components/search";
import { CandidateDataTable } from "../../_components/candidate-data-table";

const AllContent = async () => {
  const fetchCandidates = async () => {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/candidate`, {
        cache: "no-store",
      });
      const candidates = await response.json();

      if (!candidates) {
        console.error("No candidates found.");
      }

      return candidates;
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  const data = await fetchCandidates();
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
