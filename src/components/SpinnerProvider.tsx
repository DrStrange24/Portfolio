import { createContext, useContext, useState, ReactNode } from "react";
import { Spinner } from "react-bootstrap";
import { Variant } from "react-bootstrap/esm/types";

interface SpinnerConfig {
  show: boolean;
  message?: string;
  variant?: Variant;
  size?: "sm";
}

interface SpinnerContextType {
  config: SpinnerConfig;
  showSpinner: (config?: Omit<SpinnerConfig, "show">) => void;
  hideSpinner: () => void;
}

const SpinnerContext = createContext<SpinnerContextType | undefined>(undefined);

export const SpinnerProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<SpinnerConfig>({ show: false });

  const showSpinner = (newConfig?: Omit<SpinnerConfig, "show">) => {
    setConfig({ show: true, ...newConfig });
  };

  const hideSpinner = () => {
    setConfig({ show: false });
  };

  return (
    <SpinnerContext.Provider value={{ config, showSpinner, hideSpinner }}>
      {children}
      {config.show && (
        <div className="spinner-overlay">
          <div className="d-flex flex-column align-items-center">
            <Spinner
              className="spinner"
              animation="border"
              variant={config.variant || "light"}
              size={config.size || undefined}
            />
            <p className="spinner-message mt-2">
              {config.message || "Loading..."}
            </p>
          </div>
        </div>
      )}
    </SpinnerContext.Provider>
  );
};

// Hook to use spinner context
export const useSpinner = () => {
  const context = useContext(SpinnerContext);
  if (!context) {
    throw new Error("useSpinner must be used within a SpinnerProvider");
  }
  return context;
};
