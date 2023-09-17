import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

export default function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  // Helper function to handleClick
  const handleClick = () => {
    setAlertVisible(true);
  };
  return (
    <>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)} color="danger">
          Attention!
        </Alert>
      )}
      <Button handleClick={handleClick} />
    </>
  );
}
