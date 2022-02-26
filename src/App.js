import "./styles.css";

export default function App() {
  let danger = "<p>hello this is text</p>";

  return <div dangerouslySetInnerHTML={{ __html: danger }}></div>;
}
