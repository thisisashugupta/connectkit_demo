import { ConnectKitButton } from "connectkit";

export const ExampleButton = () => {
    // Define your button styling properties
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
    // Add any other styles you need
  };
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button onClick={show} style={buttonStyle}>
            {isConnected ? address : "Custom Connect"}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
