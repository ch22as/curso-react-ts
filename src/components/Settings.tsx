import ToggleDarkMode from "./Common/ToggleDarckModo";

const Settings = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean, setIsDarkMode: (value: boolean) => void }) => {

  return (
    <div>
      <ToggleDarkMode isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </div>
  );
};

export default Settings;
