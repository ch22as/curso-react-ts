const ToggleDarkMode = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: (value: boolean) => void }) => {

  return (
    <div style={{ backgroundColor: isDarkMode ? "white" : "black" }}>
      <h1 style={{ color: isDarkMode ? "black" : "white" }}>
        Este es el titulo
      </h1>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
    </div>
  );
};

export default ToggleDarkMode;
