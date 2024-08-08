import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/contacts`)
      .then((res) => setContacts(res.data))
      .catch((err) => console.error("Error fetching contacts:", err));
  }, []);
  return (
    <div>
      <h1>Contact App</h1>
      <h3>TEST</h3>
    </div>
  );
}

export default App;
