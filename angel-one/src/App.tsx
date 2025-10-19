import "./App.css";
import Login from "./Main/Login";
import img22 from "../src/assets/Image/img22.svg";
import img23 from "../src/assets/Image/img23.svg";
import img25 from "../src/assets/Image/img25.svg";

function App() {
  return (
    <>
      <Login images={[img22, img23, img25]} width={400} height={300} />
    </>
  );
}

export default App;
