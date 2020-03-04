import { useEffect } from 'react'
import SideBar from 'components/SideBar'
import Content from 'components/Content'
import fetch from 'isomorphic-fetch'

const Home = (props) => {
	useEffect(() => {
		// example of client global api use.
		// only available once the component has mounted on client side.
		console.log(window.innerWidth > 720 ? 'showing desktop version' : 'showing mobile version')
	}, [])
	return (
		<div className="container">
			<SideBar />
			<Content experiences={props.experiences} />
		</div>
	)
}

Home.getInitialProps = async () => {
	// data fetch made from server
	const response = await fetch('https://api.myjson.com/bins/1bvtgg')
	const data = await response.json()
	return { experiences: data }
}

export default Home
