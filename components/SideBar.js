import React from 'react'
import PersonalIformation from './PersonalIformation'

export default () => {
	return (
		<aside className="sidebar">
			<header>
				<span className="portrait">
					<img alt="Mike" src='https://picsum.photos/200/200' />
				</span>
				<h1>
					Mike Rueda <span>Front end developer</span>
				</h1>
			</header>
			<PersonalIformation />
		</aside>
	)
}
