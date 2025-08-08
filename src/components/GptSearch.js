import GptSearchbar from "./GptSearchbar";
import GptSuggestions from "./GptSuggestions";
import { BG_URL } from "../utils/constants";
const GPTSearch = () => {
  return (
    <>
      <div>
        <div>
          <img src={BG_URL} alt="Background" className="absolute top-0 left-0 right-0 bottom-0 -z-10" />
        </div>
        <GptSearchbar />
        <GptSuggestions />
      </div>
    </>
  );
};
export default GPTSearch;
