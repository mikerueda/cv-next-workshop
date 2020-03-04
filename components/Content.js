import React from 'react'
import ExperiencesList from './ExperiencesList'

export default ({ experiences }) => {
	return (
		<section className="content">
			<h2>
				14 years of experience in <strong className="green-text">Design</strong> and{' '}
				<strong className="blue-text">Development</strong> of <strong>digital products</strong> for
				international markets.
			</h2>
			<p className="main-description">
				Self-taught programmer, fluent in Javascript and value delivery methodologies for project management and
				work teams.
			</p>
			<h3>Recent work</h3>
			<ExperiencesList experiences={experiences} />
		</section>
	)
}
