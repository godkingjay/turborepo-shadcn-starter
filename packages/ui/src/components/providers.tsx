import React from "react";

type UIProviderProps = {
	children: React.ReactNode;
};

const UIProvider = ({ children }: UIProviderProps) => {
	return <>{children}</>;
};

export { UIProvider };
