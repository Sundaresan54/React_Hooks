import React, { useContext } from 'react';

/**************************************************** 
 * useContext
 ****************************************************/
const EmpContext = React.createContext();
const CompanyContext = React.createContext();

const App = () => (
	<EmpContext.Provider value={"Rahul"}>
		<CompanyContext.Provider value={"Citibank"}>
			<OuterComponent />
		</CompanyContext.Provider>
	</EmpContext.Provider>
);

const OuterComponent = () => (
	<>
		<InnerComponent1 />
		<InnerComponent2 />
	</>
);

/* Context API Consumption - BEFORE HOOKS */
const InnerComponent1 = () => {
	return (
		<>
		<EmpContext.Consumer>
			{(employee) =>
				<CompanyContext.Consumer>
					{(company) =>
						<h2>Context consumption BEFORE Hooks: {employee} is working in {company}</h2>
					}
				</CompanyContext.Consumer>
			}
		</EmpContext.Consumer>
		</>
	);
}

/* Context API Consumption - AFTER HOOKS  */
const InnerComponent2 = () => {
	const employee = useContext(EmpContext);
	const company = useContext(CompanyContext);
	
	return (
		<h2>Context consumption AFTER Hooks: {employee} is working in {company}</h2>
	);
} 

export default App;
