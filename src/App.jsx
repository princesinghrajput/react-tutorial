import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="multicard">
      <Card title="How to learn javascript" description="jkfjkadhhkfhksahkdfhlhasdfjklhlahdfjkhkahfkhdla" image="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" color="blue" />
      <Card title="Learn MERN Stack in 100 days" description="First, pass some props to Avatar. For example, let’s pass two props: person (an object), and size (a number)" image="https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png" color="green" />
    
    </div>
  );
}

export default App;
