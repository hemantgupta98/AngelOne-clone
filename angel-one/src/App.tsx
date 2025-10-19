import "./App.css";

/*import img22 from "../src/assets/Image/img22.svg";
import img23 from "../src/assets/Image/img23.svg";
import img25 from "../src/assets/Image/img25.svg";*/
import img28 from "../src/assets/Image/img28.svg";
import img29 from "../src/assets/Image/img29.svg";
import img33 from "../src/assets/Image/img33.svg";
import Register from "./Main/Register";

function App() {
  return (
    <>
      <Register images={[img28, img29, img33]} width={400} height={300} />
    </>
  );
}

export default App;
