import { useEffect } from "react";

export default function DemoApp({ useState }) {
  const [firstName, setFirstName] = useState("First");
  const [lastName, setLastName] = useState("Last");

  useEffect(() => {
    document.title = firstName.length + lastName.length;
  });

  return (
    <div className="container">
      <h3>Simple State and Lifecycle Management</h3>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <hr />
      <input
        type="text"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <hr />
      <h2>
        <i>
          {firstName} {lastName}
        </i>
      </h2>
    </div>
  );
}
