const ExperienceItem = ({ data }) => {
	return (
		<li className="experienceItem">
			<article>
				<h4>
					<strong>{data.company} </strong>
					<span>{data.location}</span>
				</h4>
				<h5>
					<strong>{data.role} </strong>
					<span>{data.date}</span>
				</h5>
				{data.description.map((desc, index) => <p key={index}>{desc}</p>)}
			</article>
		</li>
	)
}

export default ({ experiences }) => {
	// experiences as api response passed from home page through props drilling
	return (
		<ul>
			{experiences.map((exp, index) => (
				// Pass a index as key for render pourposes
				<ExperienceItem key={index} data={exp} />
			))}
		</ul>
	)
}
