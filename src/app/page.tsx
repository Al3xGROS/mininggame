import ConfigurationPanel from "@/components/ConfigurationPanel"
import React from 'react'
import { useParams } from "next/navigation"

const Home = () => {
	return (
		<div className="h-screen bg-red-100 flex flex-col items-center justify-center">
			<ConfigurationPanel />
		</div>
	)
}

export default Home