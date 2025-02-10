import React from "react";
import { srpdtProjectsList } from "../../utils/srpdtProjectsList.";

const Srpdt = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {srpdtProjectsList.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <img
            src={item.image}
            alt={`${item.name} thumbnail`}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <h3>{item.name}</h3>
          <p>
            <strong>Problem:</strong> {item.problem}
          </p>
          <p>
            <strong>Solution:</strong> {item.solution}
          </p>
          <p>
            <strong>Functionalities:</strong>
          </p>
          <ul>
            {item.functionalities.map((func, index) => (
              <li key={index}>{func}</li>
            ))}
          </ul>
          <p>
            <strong>User Roles:</strong>
          </p>
          <ul>
            {item.userRoles.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Srpdt;
