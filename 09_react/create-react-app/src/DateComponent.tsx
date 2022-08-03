import React from "react"

interface DateProps {
	isoDate: string
	message: string
}

export const DateComponent = ({ isoDate, message, ...rest }: DateProps): JSX.Element => {
	const now = new Date()
	const propDate = new Date(isoDate)
	return <div>
		<h1>The date prop is {isoDate}.</h1>
		<h2>This date is in the {now > propDate ? "past" : "future"}. </h2>
		<p>{message}</p>
	</div>
}

interface User {
	id: string
	name: string
}

export const UserComponent = ({ id }: { id: string }) => {
	const [user, setUser] = React.useState<User | null>({} as User)

	// Use as rarely possible!
	React.useEffect(() => {
		setTimeout(() => console.log("Hello from useEffect"), 100)
		setUser({ id, name: "Someone Else" })
	}, [])

	console.log(user)
}

export const DivComponent = (): JSX.Element => {
	const divRef = React.useRef<HTMLDivElement>(null)

	return < div ref={divRef} > Something here</div >
}